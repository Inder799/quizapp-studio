import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth, useQuiz } from "../../context";
import { Fragment } from "react/jsx-runtime";

export const Navbar = ({ route }) => {
  const { token, authDispatch } = useAuth();
  const { quizDispatch } = useQuiz();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (token) {
      localStorage.clear();
      authDispatch({
        type: "LOGOUT",
        payload: token,
      });
      quizDispatch({
        type: "QUIT",
      });
      localStorage.clear();
    }
    navigate("/");
  };

  const handleEndGameClick = () => {
    quizDispatch({
      type: "QUIT",
    });
    localStorage.clear();
  };

  return (
    <header className="heading d-flex grow-shrink-basis align-center">
      <div className="heading-title-icon d-flex grow-shrink-basis align-center">
        <img className="icon mr-1" src="/assets/image.png" alt="logo" />
        <h1 className="heading-title">
          {route === "home" || route === "login" ? (
            <Link className="link" to="/">
              Quizify
            </Link>
          ) : (
            "Quizify"
          )}
        </h1>
      </div>
      <nav className="navigation">
        <ul className="list-non-bullet">
          {route === "home" && (
            <li className="list-item-inline">
              <Link
                to="/auth/login"
                className="link cursor"
                onClick={handleAuthClick}
              >
                {token ? "Logout" : "Login"}
              </Link>
            </li>
          )}
          {route === "result" && (
            <Fragment>
              <li className="list-item-inline">
                <Link
                  to="/"
                  className="link cursor"
                  onClick={handleEndGameClick}
                >
                  Home
                </Link>
              </li>
              <li className="list-item-inline">
                <span className="link cursor" onClick={handleAuthClick}>
                  Logout
                </span>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};
