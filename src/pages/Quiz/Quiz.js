import { Fragment, useEffect, useState } from "react";
import { Navbar, QuestionAndOptions } from "../../components";
import axios from "axios";
import { useQuiz } from "../../context";

export const Quiz = () => {
  const [quiz, setQuiz] = useState([]);
  const { quizCategory } = useQuiz();
  console.log(quizCategory);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get("http://localhost:8080/quiz", {
          headers: { authorization: localStorage.getItem("token") },
        });
        const filteredData = data.filter(
          ({ category }) => category === quizCategory
        );
        setQuiz(filteredData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [quizCategory]);
  return (
    <Fragment>
      <Navbar />
      {quiz && quiz.length > 0 && <QuestionAndOptions quizData={quiz} />}
    </Fragment>
  );
};
