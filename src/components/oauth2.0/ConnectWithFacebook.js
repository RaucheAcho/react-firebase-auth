import React from "react";
//import { signInWithFaceBook } from "../../firebase/firebase.utils";

const ConnectWithFacebook = () => {
  return (
    <button
      //onClick={signInWithFaceBook}
      className="flex border h-10 items-center w-full rounded-md bg-blue-400 text-white mb-3"
    >
      <svg
        className="w-6 fill-current ml-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        {/* Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
      </svg>
      <span className="mx-auto font-bold" href="#">
        Se connecter avec Facebook
      </span>
    </button>
  );
};

export default ConnectWithFacebook;
