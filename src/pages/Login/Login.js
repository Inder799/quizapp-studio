import { Fragment } from "react/jsx-runtime";
import { AuthLogin } from "../../components";
import { Navbar } from "../../components";

export const Login = () => {
  return (
    <Fragment>
      <Navbar route="login" />
      <AuthLogin />
    </Fragment>
  );
};
