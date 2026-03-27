import { Button } from "../Button";
import cls from "./QuestionForm.module.css";

export const QuestionForm = ({
  formAction,
  state,
  isPending,
  submitBtnText,
}) => {
  return (
    <form action={formAction} className={cls.form}>
      <input type="text" name="questionId" defaultValue={state.id} hidden />

      <div className={cls.formControl}>
        <label htmlFor="questionField">Вопрос: </label>
        <textarea
          defaultValue={state.question}
          name="question"
          id="questionField"
          cols="30"
          rows="2"
          required
          placeholder="Пожалуйста напишите вопрос"
        ></textarea>
      </div>

      <div className={cls.formControl}>
        <label htmlFor="answerField">Короткий ответ: </label>
        <textarea
          defaultValue={state.answer}
          name="answer"
          id="answerField"
          cols="30"
          rows="2"
          required
          placeholder="Пожалуйста напишите краткий ответ: "
        ></textarea>
      </div>

      <div className={cls.formControl}>
        <label htmlFor="descriptionField">Полный ответ: </label>
        <textarea
          defaultValue={state.description}
          name="description"
          id="descriptionField"
          cols="30"
          rows="4"
          required
          placeholder="Пожалуйста напишите полный ответ: "
        ></textarea>
      </div>

      <div className={cls.formControl}>
        <label htmlFor="resourcesField">Ресурсы: </label>
        <textarea
          defaultValue={state.resources}
          name="resources"
          id="resourcesField"
          cols="30"
          rows="1"
          placeholder="Пожалуйста укажите ссылки через запятую."
        ></textarea>
      </div>

      <div className={cls.formControl}>
        <label htmlFor="levelField">Уровень: </label>
        <select name="level" id="levelField" defaultValue={state.level}>
          <option disabled>Уровень вопроса</option>
          <hr />
          <option value="1">1 - легкий</option>
          <option value="2">2 - средний</option>
          <option value="3">3 - тяжелый</option>
        </select>
      </div>

      <label htmlFor="clearFormField" className={cls.clearFormFieldControl}>
        <input
          className={cls.checkbox}
          type="checkbox"
          name="clearForm"
          id="clearFormField"
          defaultChecked={state.clearForm}
        />
        <span>Отчистить форму после отправки?</span>
      </label>

      <Button isDisabled={isPending}>{submitBtnText}</Button>
    </form>
  );
};
