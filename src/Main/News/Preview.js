import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import makeUrl from './makeUrl';

class Preview extends React.PureComponent {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
  };

  render() {
    const { title, children, image } = this.props;

    return (
      <div className="panel flex">
        <div
          className="flex-sub"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center center', width: '25%' }}
        />
        <div className="flex-main">
          <div className="panel-heading">
            <h2>{title}</h2>
          </div>
          <div className="panel-body" style={{ padding: '15px 22px' }}>
            {children} <Link to={makeUrl(title)}>Read more</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
