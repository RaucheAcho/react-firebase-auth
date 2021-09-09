import React from "react";
import { connect } from "react-redux";

import Menu from "../authMenu/Menu";
import SigninWithPhone from "../signin-with-phone/SigninWithPhone";
import SiginAndSignup from "../signin-and-signup/SiginAndSignup";
import CustomButton from "../custom-button/customButton";

import Modal from "../partials/Modal";
import {
  toggleModalHidden,
  toggleModalReset,
} from "../../redux/modal/modal.actions";
import {
  selectmodalChoice,
  selectModalOpen,
} from "../../redux/modal/modal.selectors";
import { createStructuredSelector } from "reselect";

const Container = ({
  toggleModalHidden,
  modalOpen,
  modalChoice,
  toggleModalReset,
}) => {
  const clickHandler = (e) => {
    toggleModalHidden();
    setTimeout(() => {
      toggleModalReset();
    }, 500);
  };

  const renderChoice = (param) => {
    switch (param) {
      case "phone":
        return <SigninWithPhone onReset={toggleModalReset} />;
      case "email":
        return <SiginAndSignup onReset={toggleModalReset} />;
      default:
        return <Menu />;
    }
  };

  return (
    <>
      <Modal
        title="Connectez-vous!"
        subtitle="en deux clics, c'est gratuit, simple et rapide!"
        closeModal={clickHandler}
        isOpen={modalOpen}
      >
        {renderChoice(modalChoice)}
        <p className="text-center text-xs text-gray-400">
          En créant votre compte, vous acceptez nos{" "}
          <span className="font-bold">conditions générales d'utilisation</span>{" "}
          et indiquez que vous avez lu nos{" "}
          <span className="font-bold">règles de diffusion</span>
        </p>
      </Modal>
      <div className="px-4 md:px-0 max-w-screen-md mx-auto flex flex-col border h-96 bg-gray-100 mt-48 items-center justify-center rounded-lg">
        <div className="py-10">
          <h2 className="text-2xl text-gray-400">Vous n'êtes pas connecté</h2>
        </div>
        <CustomButton
          onClick={clickHandler}
          className="transform scale-100 hover:scale-105 transition duration-500 ease-in-out  bg-blue-400 px-6 py-2 rounded text-white font-bold"
        >
          Se connecter
        </CustomButton>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleModalHidden: () => dispatch(toggleModalHidden()),
  toggleModalReset: () => dispatch(toggleModalReset()),
});

const mapStateToProps = createStructuredSelector({
  //currentUser: selectCurrentUser,
  modalOpen: selectModalOpen,
  modalChoice: selectmodalChoice,
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
