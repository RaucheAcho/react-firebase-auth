import React from "react";
import * as HeroIcons from "react-icons/hi";
import { IconContext } from "react-icons/lib";

import CustomButton from "../custom-button/customButton";
import ConnectWithFacebook from "../oauth2.0/ConnectWithFacebook";
import ConnectWithGoogle from "../oauth2.0/ConnectWithGoogle";
import {
  toggleModalEmail,
  toggleModalPhone,
} from "../../redux/modal/modal.actions";
import { connect } from "react-redux";

function Menu({ toggleModalEmail, toggleModalPhone }) {
  return (
    <>
      <ConnectWithFacebook />
      <ConnectWithGoogle />
      <CustomButton
        onClick={() => toggleModalPhone()}
        className=" flex bg-gray-800 px-4 mb-4 justify-center items-center py-2 rounded text-white font-bold w-full"
      >
        <IconContext.Provider value={{ className: "w-6 h-6" }}>
          <HeroIcons.HiPhone />
        </IconContext.Provider>
        <span className="mx-auto">Via votre numéro de téléphone</span>
      </CustomButton>
      <CustomButton
        onClick={() => toggleModalEmail()}
        className=" flex bg-gray-400 px-4 mb-4 justify-center items-center py-2 rounded text-white font-bold w-full"
      >
        <IconContext.Provider value={{ className: "w-6 h-6" }}>
          <HeroIcons.HiMail />
        </IconContext.Provider>
        <span className="mx-auto">Via votre adresse mail</span>
      </CustomButton>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleModalEmail: () => dispatch(toggleModalEmail()),
  toggleModalPhone: () => dispatch(toggleModalPhone()),
  //toggleModalReset: () => dispatch(toggleModalReset()),
});
export default connect(null, mapDispatchToProps)(Menu);
