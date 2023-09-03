import React, { useContext } from 'react'
import { SurveyContext, ThemeContext } from '../../utils/context'
import { useFetch } from '../../utils/hooks'
import colors from '../../utils/style/colors'
import { styled } from 'styled-components'
import { Loader, StyledLink } from '../../utils/style/Atoms'


const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({theme})=>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`
const ResultTitle = styled.h2`
  color: ${({theme}) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`
const DescriptionWrapper = styled.div`
  padding: 60px;
`
const JobTitle = styled.span`
  color: ${({theme}) => (theme === 'light' ? colors.primary : colors.backgroundLight)};
  test-transform: capitalize;
`
const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({theme}) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function formatQueryparams(answers){
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce( (previousParams, answerNumber, index) =>{
    const isFirstAnswer = index === 0;
    const separator = isFirstAnswer ? '' : '&';
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '');
}

function Results() {
  const {theme} = useContext(ThemeContext);
  
  const {answers, saveAnswers} = useContext(SurveyContext);
  const queryParams = formatQueryparams(answers);

  const {data, isDataLoading, error} = useFetch(`http://localhost:8000/results?${queryParams}`);

  if(error){
    return <span>Un problème est survenu pendant la generation du résultat</span>
  }

  const resultsData = data?.resultsData

  return isDataLoading 
    ? <LoaderWrapper> <Loader /> </LoaderWrapper>
    : <ResultsContainer theme={theme}>
      <ResultTitle theme={theme}>
        Les Compétences dont vous avez besoin:
        {resultsData &&
          resultsData.map( (result, index) => (
            <JobTitle
              key={`result-title-${index}-${result.title}`}
              theme={theme}
            > 
              {result.title}
              {index === resultsData.length -1? '' : ','}
            </JobTitle>

          ))
        }
      </ResultTitle>
      <StyledLink $isFullLink to="/freelances"> Découvrez nos profils </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map( (result, index) => (
            <JobDescription 
              key={`result-detail-${index}-${result.title}`}
              theme={theme}
            >
              <JobTitle theme={theme}>{result.title}</JobTitle>
              <p>{result.description}</p>
            </JobDescription>
          ))
        }
      </DescriptionWrapper>
    </ResultsContainer>
}

export default Results