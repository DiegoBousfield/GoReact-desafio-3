import React from 'react';

import { connect } from 'react-redux';

import './styles.css';

const SideList = props => (
  <div className="list-wrapper">
    {props.users.data.map(user => (
      <p key={user.id}> {user.name} </p>
    ))}
  </div>
);

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(SideList);
