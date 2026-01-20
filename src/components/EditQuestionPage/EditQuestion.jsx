import { useActionState } from "react";
import cls from "./EditQuestionPage.module.css";
import { Loader } from "../Loader";
import { QuestionForm } from "../../components/QuestionForm";

export const EditQuestion = ({ initialState = {} }) => {
  const [formState, formAction, isPending] = useActionState(() => {}, {
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
