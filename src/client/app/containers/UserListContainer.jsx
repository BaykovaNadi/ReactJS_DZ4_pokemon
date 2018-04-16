import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserList from '../components/UserList';
import { loadUsers } from '../actions/users'

class UserListContainer extends PureComponent {
    static propTypes = {
        users: PropTypes.arrayOf(
            PropTypes.shape({id: Prop.Types.number, name: this.propTypes.string})
        ),
        load: PropTypes.func
    }
    render() {
        const { users, load } = this.props;
        return (
            <div>
                { <UserList onLoadClick={load} users={users}/> }
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        users: state.users,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        load: () => {
            dispatch(loadUsers());
        }
    }
}

export default connect(mapStateToProps, mapStateToProps)(UserListContainer)