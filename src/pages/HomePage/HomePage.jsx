import cls from "./HomePage.module.css"
import { API_URL } from "../../constants"
import { useState, useEffect, useMemo } from "react";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
import { SearchInput } from "../../components/SearchInput";
import { Button } from "../../components/Button";

const DEFAULT_PER_PAGE = 10;


export const HomePage = () => {
  const [searchParams, setSearchParams] = useState(`?_page=1&_per_page=${DEFAULT_PER_PAGE}`);
  const [questions, setQuestions] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [sortSelectValue, setSortSelectValue ] = useState("");


  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();

    setQuestions(questions);
    return questions;
  });

  const cards = useMemo(() => {
    if (questions?.data) {
      if (searchValue.trim()) {
        questions.data.filter((d) => d.question.toLowerCase().includes(searchValue.trim().toLowerCase()));
      } else {
      return questions.data
      }
    } 
    return [];
  }, [questions, searchValue]);


  const pagination = useMemo(() => {
    const totalCardsCount = questions?.pages || 0;

    return Array(totalCardsCount).fill(0).map((_, i) => i + 1)
  }, [questions]);

//   const _getQuestions = async () => {
//   try {
//     setIsLoading(true);
//     await delayFn()
//     const response = await fetch(`${API_URL}/react`);
//     const questions = await response.json();

//     setQuestions(questions)

//     console.log("questions", questions);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     setIsLoading(false)
//   }
// };
  useEffect(() => {
    getQuestions(`react${searchParams}`);
  }, [searchParams]);

  const onSearchChangeHandler = (e) => {
    setSearchValue(e.target.value)
  }

  const onSortSelectChangeHandler = (e) => {
    setSortSelectValue(e.target.value)

    setSearchParams(`?_page=1&_per_page=${DEFAULT_PER_PAGE}&${e.target.value}`)
  }

  return ( 
  <>
  <div className={cls.controlsContainer}>
    <SearchInput value={searchValue} onChange={onSearchChangeHandler} />

    <select value={sortSelectValue} onChange={onSortSelectChangeHandler} className={cls.select}>
      <option value="">Фильтр</option>
      <hr />
      <option value="_sort=level">level ASK</option>
      <option value="_sort=-level">level DESC</option>
      <option value="_sort=completed">completed ASK</option>
      <option value="_sort=-completed">completed DESK</option>
    </select>
  </div>
  

  {isLoading && <Loader />}
  {error && <p>{error}</p>}

  <QuestionCardList cards={cards} />

  {cards.length === 0 ? <p className={cls.noCardsInfo}>Нет такой карточки</p> : 
      <div className={cls.paginationContainer}>
        {
          pagination.map((value) => {
            return <Button key={value}>{value}</Button>
          })
        }
      </div>}
  </>
  );
}
