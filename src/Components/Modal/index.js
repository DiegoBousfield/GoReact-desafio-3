import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as userActions } from '../../store/ducks/users';

ReactModal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Modal = ({ isOpen, close, addUserRequest }) => (
  <ReactModal isOpen={isOpen} onRequestClose={close} style={customStyles}>
    <h3>Adionar novo usuário</h3>
    <form onSubmit={addUserRequest}>
      <input type="text" placeholder="Usuário no Github" />
      <button type="button" onClick={close}>
        Cancelar
      </button>
    </form>
    <button type="button" onClick={addUserRequest}>
      Salvar
    </button>
  </ReactModal>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  addUserRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchtToProps = dispatch => bindActionCreators(userActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchtToProps,
)(Modal);
