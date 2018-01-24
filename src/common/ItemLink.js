import React from 'react';
import PropTypes from 'prop-types';

import ITEMS from './ITEMS';
import getItemQualityLabel from './getItemQualityLabel';
import ItemIcon from './ItemIcon';

const ItemLink = ({ id, children, details, quality, icon }) => {
  const queryString = [
    `item=${id}`,
  ];
  if (details) {
    if (details.gems && details.gems.length > 0) {
      queryString.push(`gems=${details.gems.map(gem => gem.id).join(':')}`);
    }
    if (details.permanentEnchant) {
      queryString.push(`ench=${details.permanentEnchant}`);
    }
    if (details.bonusIDs && details.bonusIDs.length > 0) {
      queryString.push(`bonus=${details.bonusIDs.join(':')}`);
    }
  }

  return (
    <a href={`http://www.wowhead.com/${queryString.join('&')}`} target="_blank" rel="noopener noreferrer" className={getItemQualityLabel(quality || ITEMS[id].quality)}>
      {icon && <ItemIcon id={id} noLink style={{ height: '1.2em', marginTop: '-0.1em' }} />}{' '}
      {children || ITEMS[id].name}
    </a>
  );
};
ItemLink.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.node,
  details: PropTypes.object,
  quality: PropTypes.number,
  icon: PropTypes.bool,
};
ItemLink.defaultProps = {
  icon: false,
};

export default ItemLink;
