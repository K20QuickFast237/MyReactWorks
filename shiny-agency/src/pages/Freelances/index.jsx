import React, { useEffect, useState } from 'react'
import DefaultPicture from '../../assets/profile.png';
import Card from '../../components/Card';
import { styled } from 'styled-components';
import colors from '../../utils/style/colors';
import { ErrorDisplayer, Loader } from '../../utils/style/Atoms';
import { useFetch } from '../../utils/hooks';

const freelanceProfilesOld = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Developpeuse Fullstack',
        picture: DefaultPicture,
    },
];

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`



function Freelances() {
  /* amélioré en uyilisant le useFetch
  const [freelanceProfiles, setFreelanceProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect( ()=>{
    async function fetchFreelanceProfiles() {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:8000/freelances');
        const {freelancersList} = await response.json();
        setFreelanceProfiles(freelancersList);
      } catch (error) {
        setFreelanceProfiles([]);
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    }
    fetchFreelanceProfiles()
    },[]);
  */

  const {data, isDataLoading, error} = useFetch('http://localhost:8000/freelances');
  const freelanceProfiles = data?.freelancersList;
  const isLoading = isDataLoading;

  if (error) {
    return <span>Un problème est survenu pendant la récuperation des profils</span>
  }

  return (
    <div>
        <PageTitle>Trouvez votre prestataire</PageTitle>
        <PageSubtitle>
          Chez Shiny nous réunissons les meilleurs profils pour vous.
        </PageSubtitle>
        {isLoading
          ? <Loader />
          :freelanceProfiles.length === 0
            ? <ErrorDisplayer> Erreur de chargement des profils </ErrorDisplayer> 
            : <CardsContainer>
              {freelanceProfiles.map((profile) => (
                <Card
                  key={profile.id}
                  label={profile.job}
                  picture={profile.picture}
                  title={profile.name}
                />
              ))}
              </CardsContainer>
        }
    </div>
  )
}

export default Freelances