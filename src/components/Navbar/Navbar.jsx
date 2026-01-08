import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="heading d-flex grow-shrink-basis align-center">
      <div className="heading-title-icon d-flex grow-shrink-basis align-center">
        <img className="icon mr-1" src="/assets/image.png" alt="logo" />
        <h1 className="heading-title">
          <Link className="link" href="/">
            Quizify
          </Link>
        </h1>
      </div>
      <nav className="navigation">
        <ul className="list-non-bullet">
          <li className="list-item-inline">
            <Link href="#" className="link cursor">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
