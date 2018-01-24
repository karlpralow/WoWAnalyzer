import React from 'react';

import Wrapper from 'common/Wrapper';
import Analyzer from 'Parser/Core/Analyzer';
import Enemies from 'Parser/Core/Modules/Enemies';
import Combatants from 'Parser/Core/Modules/Combatants';

import SPELLS from 'common/SPELLS';
import SpellIcon from 'common/SpellIcon';
import SpellLink from 'common/SpellLink';
import { formatPercentage, formatNumber } from 'common/format';
import StatisticBox, { STATISTIC_ORDER } from 'Main/StatisticBox';

class Judgment extends Analyzer {
	static dependencies = {
		enemies: Enemies,
		combatants: Combatants,
	};
	_hasES = false;
	totalSpender = 0;
	spenderOutsideJudgment = 0;

	on_initialized(){
		this._hasES = this.combatants.selected.hasTalent(SPELLS.EXECUTION_SENTENCE_TALENT.id);
	}

	on_byPlayer_cast(event){
		const enemy = this.enemies.getEntity(event);
		const spellId = event.ability.guid;

		if(!enemy) {
			return;
		}
		if(spellId === SPELLS.TEMPLARS_VERDICT.id || 
			  spellId === SPELLS.DIVINE_STORM.id ||
				spellId === SPELLS.JUSTICARS_VENGEANCE_TALENT.id){
			if(!enemy.hasBuff(SPELLS.JUDGMENT_DEBUFF.id)){
				this.spenderOutsideJudgment++;
			}
			this.totalSpender++;
		}
	}

	on_byPlayer_damage(event){
		const spellId = event.ability.guid;
		const enemy = this.enemies.getEntity(event);

		if(!this._hasES){
			return;
		}
		if(!enemy){
			return;
		}
		if(spellId !== SPELLS.EXECUTION_SENTENCE_TALENT.id){
			return;
		}
		if(!enemy.hasBuff(SPELLS.JUDGMENT_DEBUFF.id)){
			this.spenderOutsideJudgment++;
		}
		this.totalSpender++;
	}

	get suggestionThresholds() {
		const unbuffedJudgmentPercentage = this.spenderOutsideJudgment / this.totalSpender;
		return {
			actual: unbuffedJudgmentPercentage,
			isGreaterThan: {
				minor: 0.05,
				average: 0.1,
				major: 0.15,
			},
			style: 'percentage',
		};
	}

	suggestions(when) {
		when(this.suggestionThresholds).addSuggestion((suggest,actual,recommended) => {
			return suggest(<Wrapper>You're spending Holy Power outisde of the <SpellLink id={SPELLS.JUDGMENT_CAST.id} icon/> debuff. It is optimal to only spend Holy Power while the enemy is debuffed with <SpellLink id={SPELLS.JUDGMENT_CAST.id} icon/>.</Wrapper>)
				.icon(SPELLS.JUDGMENT_DEBUFF.icon)
				.actual(`${formatNumber(this.spenderOutsideJudgment)} Holy Power spenders used outside of Judgment (${formatPercentage(actual)}%).`)
				.recommended(`<${formatPercentage(recommended)}% is recommended`);
		});
	}

	statistic() {
		const buffedJudgmentPercent = 1 - (this.spenderOutsideJudgment / this.totalSpender);
		const spendersInsideJudgment = this.totalSpender - this.spenderOutsideJudgment;
		return (
			<StatisticBox
				icon={<SpellIcon id={SPELLS.JUDGMENT_DEBUFF.id} />}
				value={`${formatPercentage(buffedJudgmentPercent)}%`}
				label="Spenders inside Judgment"
				tooltip={`${spendersInsideJudgment} spenders`}
			/>
		);
	}
	statisticOrder = STATISTIC_ORDER.CORE(2);
}

export default Judgment;
