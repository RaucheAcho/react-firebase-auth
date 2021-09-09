import React from "react";
import { useState } from "react";

import * as HeroIcons from "react-icons/hi";
import { IconContext } from "react-icons/lib";

import CustomButton from "../custom-button/customButton";
import ConnectWithFacebook from "../oauth2.0/ConnectWithFacebook";
import ConnectWithGoogle from "../oauth2.0/ConnectWithGoogle";
import Modal from "../partials/Modal";

const AuthMenu = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  //const [value, setValue] = useState("");
  const clickHandler = (e) => {
    e.preventDefault();
    //setValue("");
    openModal();
  };
  return (
    <>
      <Modal
        title="Connectez-vous!"
        subtitle="en deux clics, c'est gratuit, simple et rapide!"
        closeModal={closeModal}
        isOpen={isOpen}
      >
        <ConnectWithFacebook />
        <ConnectWithGoogle />
        <CustomButton
          onClick={clickHandler}
          className=" flex bg-gray-800 px-4 mb-4 justify-center items-center py-2 rounded text-white font-bold w-full"
        >
          <IconContext.Provider value={{ className: "w-6 h-6" }}>
            <HeroIcons.HiPhone />
          </IconContext.Provider>
          <span className="mx-auto">Via votre numéro de téléphone</span>
        </CustomButton>
        <CustomButton
          onClick={clickHandler}
          className=" flex bg-gray-400 px-4 mb-4 justify-center items-center py-2 rounded text-white font-bold w-full"
        >
          <IconContext.Provider value={{ className: "w-6 h-6" }}>
            <HeroIcons.HiMail />
          </IconContext.Provider>
          <span className="mx-auto">Via votre adresse mail</span>
        </CustomButton>
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

export default AuthMenu;
