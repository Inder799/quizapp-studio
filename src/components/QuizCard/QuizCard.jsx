import { useAuth, useQuiz } from "../../context";
import { useNavigate } from "react-router-dom";

import "./QuizCard.css";

export const QuizCard = ({ quizCategory }) => {
  const { image, title, description, category } = quizCategory;
  const { token } = useAuth();
  const { quizDispatch } = useQuiz();
  const navigate = useNavigate();

  const handlePlayNowClick = () => {
    if (token) {
      quizDispatch({
        type: "CATEGORY",
        payload: category,
      });
      localStorage.setItem("category", category);
      navigate("/quiz");
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <div className="container d-flex direction-column">
      <div className="img-box">
        <img className="img" src={image} alt="quizcard" />
      </div>
      <div className="details">
        <h3 className="title">{title}</h3>
        <span>{description}</span>
      </div>
      <button
        className="button play-now-btn btn-primary cursor"
        onClick={handlePlayNowClick}
      >
        Play Now
      </button>
    </div>
  );
};
