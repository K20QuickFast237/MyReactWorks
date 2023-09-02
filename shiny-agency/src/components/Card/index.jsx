import React from 'react'
import { PropTypes } from "prop-types";
import DefaultPicture from '../../assets/profile.png';
import { styled } from 'styled-components';
import colors from '../../utils/style/colors';


const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`
const CardTitle = styled.span`
  color: black;
  align-self: center;
  border-radius: 50%;
`
const CardImage = styled.img`
  height : 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt='freelance' />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}


Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    title: 'Mon titre par défaut',
    label: 'Default Label',
    picture: DefaultPicture,
}

export default Card