import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';
import { Creators as ModalActions } from '../ducks/modal';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));

    if (isDuplicated) {
      yield put(UserActions.addUserFailure('Usuário ja existe!'));
      toast.error('Usuário já adicionado');
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        coordinates: action.payload.coordinates,
      };
      yield put(UserActions.addUserSuccess(userData));
      toast.success('Usuário Adicionado');
    }
  } catch (error) {
    yield put(UserActions.addUserFailure('Erro ao adicionar o usuário'));
    toast.error('Usuário não encontrado');
  } finally {
    yield put(ModalActions.closeModal());
  }
}
export function removeUser() {
  toast.warn('Usuário Removido');
}
