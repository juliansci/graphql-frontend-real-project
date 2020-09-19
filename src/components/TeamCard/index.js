import React from 'react';
import { TeamCardContainer, TeamCardName } from './styled';

const TeamCard = ({ team }) => (
  <TeamCardContainer>
    <img src={team.logo} alt="team logo" />
    <TeamCardName>{team.name}</TeamCardName>
  </TeamCardContainer>
);


export default TeamCard;
