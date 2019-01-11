/**
 *  Types
 */
export const Types = {
  OPEN_MODAL: 'modal/OPEN_MODAL',
  CLOSE_MODAL: 'modal/CLOSE_MODAL',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  show: false,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MODAL:
      return { ...state, show: true };
    case Types.CLOSE_MODAL:
      return { ...state, show: false };
    default:
      return state;
  }
}

/**
 * Action
 */
export const Creators = {
  openModal: _show => ({
    type: Types.OPEN_MODAL,
  }),
  closeModal: _show => ({
    type: Types.CLOSE_MODAL,
  }),
};
