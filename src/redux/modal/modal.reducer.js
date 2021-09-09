import { ModalActionTypes } from "./modal.types";

const INITIAL_STATE = {
  modalOpen: false,
  modalChoice: "",
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionTypes.TOGGLE_MODAL_OPEN:
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    case ModalActionTypes.SELECT_MODAL_PHONE:
      return {
        ...state,
        modalChoice: "phone",
      };
    case ModalActionTypes.SELECT_MODAL_EMAIL:
      return {
        ...state,
        modalChoice: "email",
      };
    case ModalActionTypes.SELECT_MODAL_RESET:
      return {
        ...state,
        modalChoice: "",
      };

    default:
      return state;
  }
};

export default modalReducer;
