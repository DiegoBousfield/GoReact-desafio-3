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
  show: false,
  coordinates: null,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MODAL:
      return { show: true, coordinates: action.payload.coordinates };
    case Types.CLOSE_MODAL:
      return { show: false, coordinates: null };
    default:
      return state;
  }
}

/**
 * Action
 */
export const Creators = {
  openModal: coordinates => ({
    type: Types.OPEN_MODAL,
    payload: { coordinates },
  }),
  closeModal: () => ({
    type: Types.CLOSE_MODAL,
  }),
};
