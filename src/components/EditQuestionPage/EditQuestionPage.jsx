import cls from "./EditQuestionPage.module.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../constants";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader";

export const EditQuestionPage = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  const [fetchQuestion, isQuestionLoading] = useFetch(async () => {
    const response = await fetch(`${API_URL}/react/${id}`);
    const data = response.json();

    setQuestion(data);
  });

  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <>
      {isQuestionLoading && <Loader />}
      {question && <p>EditQuestionPage</p>}
    </>
  );
};
