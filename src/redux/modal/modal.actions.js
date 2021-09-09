import { ModalActionTypes } from "./modal.types";

export const toggleModalHidden = () => ({
  type: ModalActionTypes.TOGGLE_MODAL_OPEN,
});
export const toggleModalPhone = () => ({
  type: ModalActionTypes.SELECT_MODAL_PHONE,
});
export const toggleModalEmail = () => ({
  type: ModalActionTypes.SELECT_MODAL_EMAIL,
});
export const toggleModalReset = () => ({
  type: ModalActionTypes.SELECT_MODAL_RESET,
});
