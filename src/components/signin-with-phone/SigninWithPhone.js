import React from "react";
import CustomButton from "../custom-button/customButton";
import FormInput from "../form-input/FormInput";

function SigninWithPhone({ onReset }) {
  return (
    <div>
      <FormInput
        label="Numéro de téléphone"
        placeholder="Entrez votre numéros de téléphone"
      />
      <div className="flex w-full justify-between">
        <CustomButton className="transform my-6 scale-100 hover:scale-105 transition duration-500 ease-in-out  bg-blue-400 px-6 py-2 rounded text-white font-bold">
          Se connecter
        </CustomButton>
        <CustomButton
          onClick={onReset}
          className="underline px-6 py-2 font-bold"
        >
          Retour
        </CustomButton>
      </div>
    </div>
  );
}

export default SigninWithPhone;
