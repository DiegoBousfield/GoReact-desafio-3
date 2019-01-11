import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as userActions } from '../../store/ducks/users';
import { Creators as modalActions } from '../../store/ducks/modal';

import './styles.css';

ReactModal.setAppElement('#root');

class Modal extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      show: PropTypes.bool.isRequired,
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    closeModal: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
  };

  state = {
    userInput: '',
  };

  handleSubmit = (e) => {
    const { addUserRequest } = this.props;
    const { userInput } = this.state;

    e.preventDefault();
    addUserRequest(userInput);

    this.setState({ userInput: '' });
  };

  render() {
    const { modal, closeModal } = this.props;
    const { userInput } = this.state;
    return (
      <ReactModal className="add-user" isOpen={modal.show} onRequestClose={closeModal}>
        <h3>Adionar novo usuário</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Usuário no Github"
            value={userInput}
            onChange={e => this.setState({ userInput: e.target.value })}
          />

          <button type="button" className="cancel" onClick={closeModal}>
            Cancelar
          </button>
          <button type="submit" className="submit">
            Salvar
          </button>
        </form>
      </ReactModal>
    );
  }
}

const mapStateToProps = ({ modal }) => ({
  modal,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...userActions, ...modalActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
