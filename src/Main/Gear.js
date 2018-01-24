import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'common/Icon';

class Gear extends React.PureComponent {
  static propTypes = {
    selectedCombatant: PropTypes.object.isRequired,
  };
  render() {
    const toolTipBaseUrl='http://www.wowhead.com/item=';
    const gear = Object.values(this.props.selectedCombatant._gearItemsBySlotId);

    const artifact = gear.find(item => item.quality === 6);
    const relics = artifact ? artifact.gems : [];
    return(
      <div>
        <div style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', width: '90%'}}>
          {[...gear, ...relics]
            .filter(item => item.id !== 0)
            .map(item => {
            return (
              <div key={item.id} style={{display: 'inline-block', textAlign: 'center' }}>
                {item.itemLevel}
                <a
                  href={`${toolTipBaseUrl}${item.id}`}
                  style={{ margin: '5px', display: 'block', fontSize: '46px' }}
                  rel={
                    item.bonusIDs ?
                    `bonus=${item.bonusIDs.join(':')}`
                    :
                    null
                  }
                >
                  <Icon icon={item.icon} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Gear;
