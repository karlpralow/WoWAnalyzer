import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from 'common/Wrapper';
import connectParser from 'common/connectParser';

class ItemHealingDone extends React.PureComponent {
  static propTypes = {
    amount: PropTypes.number.isRequired,
    approximate: PropTypes.bool,
  };
  static contextTypes = {
    parser: PropTypes.object.isRequired,
  };

  render() {
    const { amount, approximate } = this.props;
    const { parser } = this.context;

    return (
      <Wrapper>
        <img
          src="/img/healing.png"
          alt="Healing"
          className="icon"
        />{' '}
        {approximate && '≈'}{parser.formatItemHealingDone(amount)}
      </Wrapper>
    );
  }
}

const mapParserToProps = parser => ({
  // Ensure the component is re-rendered when the Parser-context changes
  eventCount: parser.eventCount,
});
export default connectParser(mapParserToProps)(ItemHealingDone);
