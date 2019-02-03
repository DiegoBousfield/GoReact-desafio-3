import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/users';

import './styles.css';

const SideList = ({ users, removeUser }) => (
  <div className="side-list">
    {!users.data.length && <p> Nenhum usuário adicionado</p>}
    <ul>
      {users.data.map(user => (
        <li key={user.id}>
          <div>
            <img src={user.avatar} alt={`${user.name} avatar`} />
            <div className="user-info">
              <h2 key={user.id}> {user.name} </h2>
              <h3>{user.login}</h3>
            </div>
            <button type="button" onClick={() => removeUser(user.id)}>
              <i className="fa fa-fw fa-times-circle remove" />
            </button>
            <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-fw fa-angle-right go-to-page" />
            </a>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

SideList.propTypes = {
  users: PropTypes.shape({}).isRequired,
  removeUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideList);
