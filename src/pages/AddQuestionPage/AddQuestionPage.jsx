import { useActionState } from "react"
import { Button } from "../../components/Button"
import { Loader } from "../../components/Loader"
import cls from "./AddQuestionPage.module.css"
import { delayFn } from "../../helpers/delayFn"
import { toast } from "react-toastify"
import { API_URL } from "../../constants"

const createCardAction = async (_prevState, formData) => {
  try {
    await delayFn();

    const newQuestion = Object.fromEntries(formData);
    const resources = newQuestion.resources.trim();
    const isClearForm = newQuestion.clearForm;
    
    const response = await fetch(`${API_URL}/react`, {
      method: "POST",
      body: JSON.stringify({
        question: newQuestion.question,
        answer: newQuestion.answer,
        description: newQuestion.description,
        resources: resources.length ? resources.split(",") : [],
        level: Number(newQuestion.level),
        completed: false,
        editDate: undefined,
      }),
    });

    if (response.status === 404) {
      throw new Error(response.statusText)
    }

    const question = response.json();
    toast.success("New question is successfuly created!");
    
    return isClearForm ? {} : question;
  } catch (error) {
    toast.error(error.message);
    return {};
  }
}

const AddQuestionPage = () => {
  const [formState, formAction, isPending] = useActionState(createCardAction, { clearForm: true });

  return (
    <>
    {isPending && <Loader />}

    <h1 className={cls.fromTitle}>Добавить новую карточку</h1>

    <div className={cls.formContainer}>
      <form action={formAction} className={cls.form}>

        <div className={cls.formControl}>
        <label htmlFor="questionField">Вопрос: </label>
          <textarea defaultValue={formState.question} name="question" id="questionField" cols="30" rows="2" required placeholder="Пожалуйста напишите вопрос"></textarea>
        </div>

        <div className={cls.formControl}>
        <label htmlFor="answerField">Короткий ответ: </label>
          <textarea defaultValue={formState.answer} name="answer" id="answerField" cols="30" rows="2" required placeholder="Пожалуйста напишите краткий ответ: "></textarea>
        </div>

        <div className={cls.formControl}>
        <label htmlFor="descriptionField">Полный ответ: </label>
          <textarea defaultValue={formState.description} name="description" id="descriptionField" cols="30" rows="4" required placeholder="Пожалуйста напишите полный ответ: "></textarea>
        </div>

        <div className={cls.formControl}>
        <label htmlFor="resourcesField">Ресурсы: </label>
          <textarea defaultValue={formState.resources} name="resources" id="resourcesField" cols="30" rows="1" placeholder="Пожалуйста укажите ссылки через запятую."></textarea>
        </div>
        
        <div className={cls.formControl}>
          <label htmlFor="levelField">Уровень: </label>
          <select name="level" id="levelField" defaultValue={formState.level}>
            <option disabled>Уровень вопроса</option>
            <hr />
            <option value="1">1 - легкий</option>
            <option value="2">2 - средний</option>
            <option value="3">3 - тяжелый</option>
          </select>
        </div>

        <label htmlFor="clearFormField" className={cls.clearFormFieldControl}>
          <input className={cls.checkbox} type="checkbox" name="clearForm" id="clearFormField" defaultChecked={formState.clearForm} />
          <span>Отчистить форму после отправки?</span>
        </label>

      <Button isDisabled={isPending}>Добавить вопрос.</Button>
      </form>
    </div>
    </>
  )
};

export default AddQuestionPage;
