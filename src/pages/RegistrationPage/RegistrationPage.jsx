import css from "./RegistrationPage.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div className={css.container}>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;