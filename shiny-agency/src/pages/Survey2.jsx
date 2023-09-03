import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { styled } from 'styled-components';
import colors from '../utils/style/colors';
import { Loader } from '../utils/style/Atoms';
import { SurveyContext } from '../utils/context';


const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`
const QuestionContent = styled.div`
  margin: 30px;
`
const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`
const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props)=>props.isSelected ? `0 0 0 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`
const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

function Survey() {

  const { questionNumber } = useParams();

  const [questions, setQuestions] = useState({});
  const [isdataLoading, setDataLoading] = useState(false);

  // Old version But steal available
  // useEffect(()=>{
  //   setDataLoading(true);
  //   fetch('http://localhost:8000/survey')
  //     .then((response)=>
  //       response.json().then( ({surveyData})=>{
  //         setQuestions(surveyData);
  //         setDataLoading(false);
  //       })
  //     )
  //     .catch( (error)=>console.log(error) 
  //   )
  // }, []);

  useEffect( ()=>{
    async function fetchQuestions(){
      setDataLoading(true);
      try {
        const response = await fetch('http://localhost:8000/survey');
        const {surveyData} = await response.json()
        setQuestions(surveyData)
      } catch (error) {
        console.log(error);
      } finally {
        setDataLoading(false);
      }
    }
    fetchQuestions()
  }, []);

  const questionNumberInt = parseInt(questionNumber);
  const previous = questionNumberInt > 1 ? questionNumberInt-1 : 1;
  const next = questionNumberInt+1;

  const {answers, saveAnswers} = useContext(SurveyContext);
  const [error, setError] = useState(false);

  function saveReply(answer){
    saveAnswers({[questionNumber]: answer});
  }

  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {isdataLoading
        ? <> <Loader /> <Loader height="20px" width="20px" /> </>
        : <QuestionContent>{questions[questionNumber]}</QuestionContent>
      }
      <ReplyWrapper>
        <ReplyBox 
          onClick={()=>saveReply(true)}
          isSelected={answers[questionNumber] === true}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={()=>saveReply(false)}
          isSelected={answers[questionNumber] === false}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper>
        <Link to={`/survey/${previous}`}>Précédent</Link>
        {questions[next]
          ? <Link to={`/survey/${next}`}>Suivant</Link>
          : <Link to="/results">Résultats</Link>
        }
      </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey