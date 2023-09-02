import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { styled } from 'styled-components';
import colors from '../utils/style/colors';
import { Loader } from '../utils/style/Atoms';
import { SurveyContext } from '../utils/context';
import { useFetch } from '../utils/hooks';


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
  box-shadow: ${(props)=>props.selected ? `0 0 0 2px ${colors.primary} inset` : 'none'};
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
  const questionNumberInt = parseInt(questionNumber);

  const previous = questionNumberInt > 1 ? questionNumberInt-1 : 1;
  const next = questionNumberInt+1;
  
  const {answers, saveAnswers} = useContext(SurveyContext);
  function saveReply(answer){
    saveAnswers({[questionNumber]: answer});
  }
  
  const {isDataLoading, data, error} = useFetch(`http://localhost:8000/survey`);
  
  const questions = data?.surveyData;

  if (error) {
    return <span>Il ya un problème</span>
  }

  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {isDataLoading
        ? <Loader />
        : <QuestionContent>
          {questions && questions[questionNumber]}
          </QuestionContent>
      }
      <ReplyWrapper>
        <ReplyBox 
          onClick={()=>saveReply(true)}
          selected={answers[questionNumber] === true}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={()=>saveReply(false)}
          selected={answers[questionNumber] === false}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper>
        <Link to={`/survey/${previous}`}>Précédent</Link>
        {questions && questions[next]
          ? <Link to={`/survey/${next}`}>Suivant</Link>
          : <Link to="/results">Résultats</Link>
        }
      </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey