import React from 'react';
import PropTypes from 'prop-types';

import SpellLink from 'common/SpellLink';

const PainComponent = ({ categories, abilities }) => {
  if (!abilities) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ marginTop: -10, marginBottom: -10 }}>
      <table className="data-table" style={{ marginTop: 10, marginBottom: 10 }}>
        {Object.keys(categories).map(key => (
          <tbody key={key}>
            <tr>
              <th>{categories[key]}</th>
              <th className="text-center">Casts</th>
              <th className="text-center">{key === 'spent' ? <dfn>Spent</dfn> : ''}</th>
              <th className="text-center">{key === 'generated' ? <dfn>Generated</dfn> : ''}</th>
              <th className="text-center"><dfn>Wasted</dfn></th>
            </tr>
            {abilities
              .filter(item => item.ability.category === categories[key])
            .map(({ ability, casts, spent, created, wasted, canBeImproved }) => {
              const name = ability.name;
              return (
                <tr key={name}>
                  <td style={{ width: '35%' }}>
                    <SpellLink id={ability.spellId} style={{ color: '#fff' }}>
                      {name}
                    </SpellLink>
                  </td>
                  <td className="text-center" style={{ minWidth: 80 }}>
                    {casts}
                  </td>
                  <td className="text-center" style={{ minWidth: 80 }}>
                    {spent || ''}
                  </td>
                  <td className="text-center" style={{ minWidth: 80 }}>
                    {created || ''}
                  </td>
                  <td className="text-center" style={{ minWidth: 80 }}>
                    {wasted || '0'}
                  </td>
                  <td style={{ width: '25%', color: 'orange' }}>
                    {canBeImproved && ability.castEfficiency && ability.castEfficiency.suggestion && 'Can be improved.'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        ))}
      </table>
    </div>
  );
};
PainComponent.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.shape({
    ability: PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      spellId: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
  categories: PropTypes.object,
};

export default PainComponent;
