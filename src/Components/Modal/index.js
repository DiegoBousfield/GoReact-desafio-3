import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import 'font-awesome/css/font-awesome.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as userActions } from '../../store/ducks/users';
import { Creators as modalActions } from '../../store/ducks/modal';

import './styles.css';

ReactModal.setAppElement(document.getElementById('root'));

class Modal extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      show: PropTypes.bool.isRequired,
    }).isRequired,
    users: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    closeModal: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
  };

  state = {
    userInput: '',
  };

  handleInput = e => this.setState({ userInput: e.target.value });

  handleSubmit = (e) => {
    const {
      addUserRequest,
      modal: { coordinates },
    } = this.props;
    const { userInput } = this.state;

    e.preventDefault();

    if (!userInput) return;

    addUserRequest(userInput, coordinates);

    this.setState({ userInput: '' });
  };

  handleClose = () => {
    const { closeModal } = this.props;

    this.setState({ userInput: '' });
    closeModal();
  };

  render() {
    const { modal, users } = this.props;
    const { userInput } = this.state;

    return (
      <ReactModal
        className="add-user"
        overlayClassName="overlay"
        isOpen={modal.show}
        onRequestClose={this.handleClose}
      >
        <h3>Adionar novo usuário</h3>

        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Usuário no Github"
            value={userInput}
            onChange={this.handleInput}
          />
          <div className="buttons-wrapper">
            <button type="button" onClick={this.handleClose}>
              Cancelar
            </button>

            <button type="submit">
              {users.loading ? <i className="fa fa-spinner fa-pulse" /> : 'Salvar'}
            </button>
          </div>
        </form>
      </ReactModal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...userActions, ...modalActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
