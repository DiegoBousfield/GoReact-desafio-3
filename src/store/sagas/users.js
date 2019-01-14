import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const userData = {
      id: data.id,
      name: data.name,
      avatar: data.avatar_url,
      coordinates: action.payload.coordinates,
    };

    yield put(UserActions.addUserSuccess(userData));
  } catch (error) {
    yield put(UserActions.addUserFailure('Erro ao adicionar o usuário'));
  }
}
