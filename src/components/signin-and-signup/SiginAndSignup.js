import React, { useState } from "react";
import CustomButton from "../custom-button/customButton";
import FormInput from "../form-input/FormInput";

function SiginAndSignup({ onReset }) {
  const [menu, setMenu] = useState("connexion");
  return (
    <>
      <FormInput label="Adresse mail" placeholder="Entrez votre adresse mail" />
      <FormInput
        label="Mot de passe"
        type="password"
        placeholder="Entrez votre mot de passe"
      />
      <div className="flex w-full justify-between">
        <div>
          <CustomButton className="transform my-6 scale-100 hover:scale-105 transition duration-500 ease-in-out  bg-blue-400 px-6 py-2 rounded text-white font-bold">
            Se connecter
          </CustomButton>
          <span className="mx-2">ou</span>
          <CustomButton onClick={onReset} className="underline py-2 font-bold">
            S'inscrire
          </CustomButton>
        </div>
        <CustomButton
          onClick={onReset}
          className="underline px-6 py-2 font-bold"
        >
          Retour
        </CustomButton>
      </div>
    </>
  );
}

export default SiginAndSignup;
