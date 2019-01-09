/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
};

/**
 * Reducers
 */
const INTIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function users(state = INTIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      console.tron.log('1');
      return state;
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  addUserRequest: user => ({
    type: Types.ADD_REQUEST,
    payload: { user },
  }),

  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
