import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import User from './User';

import styles from './UserList.css';


export default class UserList extends PureComponent {
  static propTypes = {
    users: PropTypes.arrayOf({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      })
  };

  static defaultProps = {
    users: [],
  };

  render() {
    const { users, onLoadClick } = this.props;
    return (
        <div>
            <button onClick={onLoadClick}>Load Users</button>
            <ul>
                {users.map(user => <li>{user.name}</li>)}
            </ul>
        </div>
    );
  }
}