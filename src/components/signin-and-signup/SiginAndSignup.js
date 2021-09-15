import React from "react";
import { connect } from "react-redux";
import { auth, createUserProfile } from "../../firebase/firebase";
import { toggleModalHidden } from "../../redux/modal/modal.actions";
import CustomButton from "../custom-button/customButton";
import FormInput from "../form-input/FormInput";

class SiginAndSignup extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    menu: "connexion",
  };

  handleSubmitSignup = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("les mots de passe ne sont pas identique");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      this.setState({ menu: "connexion" });
    } catch (error) {
      console.error(error);
    }
  };

  handleSubmitSignin = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
      this.props.toggleModalHidden();
      this.props.onReset();
    } catch (error) {}
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    console.log(this.state);
    this.setState({ [name]: value });
  };

  subMenu = () => {
    switch (this.state.menu) {
      case "connexion":
        return (
          <div>
            <FormInput
              value={this.state.email}
              onChange={this.handleChange}
              label="Adresse mail"
              type="email"
              name="email"
              placeholder="Entrez votre adresse mail"
            />
            <FormInput
              value={this.state.password}
              onChange={this.handleChange}
              label="Mot de passe"
              type="password"
              name="password"
              placeholder="Entrez votre mot de passe"
            />
            <CustomButton
              onClick={() => this.setState({ menu: "pass" })}
              className="underline py-2 font-medium text-sm"
            >
              Vous avez oublié votre mot de passe?
            </CustomButton>
            <div className="flex w-full justify-between">
              <div>
                <CustomButton
                  onClick={this.handleSubmitSignin}
                  className="transform my-6 scale-100 hover:scale-105 transition duration-500 ease-in-out  bg-blue-400 px-6 py-2 rounded text-white font-bold"
                >
                  Se connecter
                </CustomButton>
                <span className="mx-2">ou</span>
                <CustomButton
                  desabled={this.state.loading}
                  onClick={() => this.setState({ menu: "inscrire" })}
                  className="underline py-2 font-bold"
                >
                  S'inscrire
                </CustomButton>
              </div>
              <CustomButton
                onClick={this.props.onReset}
                className="underline px-6 py-2 font-bold"
              >
                Retour
              </CustomButton>
            </div>
          </div>
        );
      case "inscrire":
        return (
          <div>
            <FormInput
              value={this.state.displayName}
              onChange={this.handleChange}
              type="text"
              name="displayName"
              label="Nom"
              placeholder="Exemple koffi Alain"
            />
            <FormInput
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              label="Adresse mail"
              placeholder="Entrez votre adresse mail"
            />
            <FormInput
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              label="Mot de passe"
              placeholder="Entrez votre mot de passe"
            />
            <FormInput
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              label="Confimer mot de passe"
              type="password"
              name="confirmPassword"
              placeholder="Confimez votre mot de passe"
            />
            <div className="flex w-full justify-between">
              <div>
                <CustomButton
                  onClick={this.handleSubmitSignup}
                  className="transform my-6 scale-100 hover:scale-105 transition duration-500 ease-in-out  bg-blue-400 px-6 py-2 rounded text-white font-bold"
                >
                  S'inscrire
                </CustomButton>
                <span className="mx-2">ou</span>
                <CustomButton
                  onClick={() => this.setState({ menu: "connexion" })}
                  className="underline py-2 font-bold"
                >
                  Se connecter
                </CustomButton>
              </div>
              <CustomButton
                onClick={this.props.onReset}
                className="underline px-6 py-2 font-bold"
              >
                Retour
              </CustomButton>
            </div>
          </div>
        );
      case "pass":
        return (
          <div>
            <FormInput
              value={this.state.name}
              onChange={this.handleChange}
              label="Adresse mail"
              type="email"
              name="email"
              placeholder="Entrez votre adresse mail"
            />
            <div className="flex w-full justify-between">
              <CustomButton className="transform my-6 scale-100 hover:scale-105 transition duration-500 ease-in-out  bg-blue-400 px-6 py-2 rounded text-white font-bold">
                validez
              </CustomButton>
              <CustomButton
                onClick={() => this.setState({ menu: "connexion" })}
                className="underline px-6 py-2 font-bold"
              >
                Retour
              </CustomButton>
            </div>
          </div>
        );
      default:
        break;
    }
  };

  render() {
    return <>{this.subMenu(this.state.menu)}</>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleModalHidden: () => dispatch(toggleModalHidden()),
});

export default connect(null, mapDispatchToProps)(SiginAndSignup);
