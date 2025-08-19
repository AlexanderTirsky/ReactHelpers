import { Button } from "../../components/Button"
import cls from "./AddQuestionPage.module.css"

export const AddQuestionPage = () => {
  return (
    <>
    <h1 className={cls.fromTitle}>Добавить новую карточку</h1>

    <div className={cls.formContainer}>
      <form action="" className={cls.form}>

        <div className={cls.formControl}>
        <label htmlFor="questionField">Вопрос: </label>
          <textarea defaultValue={"defaultValue"} name="question" id="questionField" cols="30" rows="2" required placeholder="Пожалуйста напишите вопрос"></textarea>
        </div>

        <div className={cls.formControl}>
        <label htmlFor="answerField">Короткий ответ: </label>
          <textarea defaultValue={"defaultValue"} name="answer" id="answerField" cols="30" rows="2" required placeholder="Пожалуйста напишите краткий ответ: "></textarea>
        </div>

        <div className={cls.formControl}>
        <label htmlFor="descriptionField">Полный ответ: </label>
          <textarea defaultValue={"defaultValue"} name="description" id="descriptionField" cols="30" rows="4" required placeholder="Пожалуйста напишите полный ответ: "></textarea>
        </div>

        <div className={cls.formControl}>
        <label htmlFor="resourcesField">Ресурсы: </label>
          <textarea defaultValue={"defaultValue"} name="resources" id="resourcesField" cols="30" rows="1" required placeholder="Пожалуйста укажите ссылки через запятую."></textarea>
        </div>
        
        <div className={cls.formControl}>
          <label htmlFor="levelField">Уровень: </label>
          <select name="level" id="levelField" defaultValue={"defaultValue"}>
            <option disabled>Уровень вопроса</option>
            <hr />
            <option value="1">1 - легкий</option>
            <option value="2">2 - средний</option>
            <option value="3">3 - тяжелый</option>
          </select>
        </div>

        <label htmlFor="clearFormField" className={cls.clearFormFieldControl}>
          <input className={cls.checkbox} type="checkbox" name="clearForm" id="clearFormField" defaultValue={true} />
          <span>Отчистить форму после отправки?</span>
        </label>

      <Button>Добавить вопрос.</Button>
      </form>
    </div>
    </>
  )
}
