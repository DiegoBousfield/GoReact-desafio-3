import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as userActions } from '../../store/ducks/users';

ReactModal.setAppElement('#root');

class Modal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
  };

  state = {
    customStyles: {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    },
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
    const { isOpen, close } = this.props;
    const { customStyles, userInput } = this.state;
    return (
      <ReactModal isOpen={isOpen} onRequestClose={close} style={customStyles}>
        <h3>Adionar novo usuário</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Usuário no Github"
            value={userInput}
            onChange={e => this.setState({ userInput: e.target.value })}
          />

          <button type="button" onClick={close}>
            Cancelar
          </button>
          <button type="submit">Salvar</button>
        </form>
      </ReactModal>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchtToProps = dispatch => bindActionCreators(userActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchtToProps,
)(Modal);
