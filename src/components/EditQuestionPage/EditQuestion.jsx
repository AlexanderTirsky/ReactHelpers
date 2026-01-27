import { useActionState } from "react";
import cls from "./EditQuestionPage.module.css";
import { Loader } from "../Loader";
import { QuestionForm } from "../../components/QuestionForm";
import { delayFn } from "../../helpers/delayFn";
import { API_URL } from "../../constants";
import { toast } from "react-toastify";
import { dataFormat } from "../../helpers/dataFormat";

const editCardAction = async (_prevState, formData) => {
  try {
    await delayFn();

    const newQuestion = Object.fromEntries(formData);
    const resources = newQuestion.resources.trim();
    const isClearForm = newQuestion.clearForm;
    const questionId = newQuestion.questionId;

    const response = await fetch(`${API_URL}/react/${questionId}`, {
      method: "PATCH",
      body: JSON.stringify({
        question: newQuestion.question,
        answer: newQuestion.answer,
        description: newQuestion.description,
        resources: resources.length ? resources.split(",") : [],
        level: Number(newQuestion.level),
        completed: false,
        editDate: dataFormat(new Date()),
      }),
    });

    if (response.status === 404) {
      throw new Error(response.statusText);
    }

    const question = response.json();
    toast.success("Вопрос успешно отредактирован!");

    return isClearForm ? {} : question;
  } catch (error) {
    toast.error(error.message);
    return {};
  }
};

export const EditQuestion = ({ initialState = {} }) => {
  const [formState, formAction, isPending] = useActionState(editCardAction, {
    ...initialState,
    clearForm: false,
  });

  return (
    <>
      {isPending && <Loader />}

      <h1 className={cls.fromTitle}>Редактировать карточку</h1>

      <div className={cls.formContainer}>
        <QuestionForm
          formAction={formAction}
          state={formState}
          isPending={isPending}
          submitBtnText="Редактировать вопрос"
        />
      </div>
    </>
  );
};
