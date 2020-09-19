import React from 'react';
import PageTitle from '../../components/PageTitle';
import TeamCard from '../../components/TeamCard';
import { TeamsContainer } from './styled';

const teams = [
  {
    name: 'Boca',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_2012.svg/275px-Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_2012.svg.png'
  },
  {
    name: 'River',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Escudo_del_Club_Atl%C3%A9tico_River_Plate.png/256px-Escudo_del_Club_Atl%C3%A9tico_River_Plate.png'
  },
  {
    name: 'Boca',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_2012.svg/275px-Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_2012.svg.png'
  },
  {
    name: 'River',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Escudo_del_Club_Atl%C3%A9tico_River_Plate.png/256px-Escudo_del_Club_Atl%C3%A9tico_River_Plate.png'
  },
  {
    name: 'Boca',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_2012.svg/275px-Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_2012.svg.png'
  },
  {
    name: 'River',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Escudo_del_Club_Atl%C3%A9tico_River_Plate.png/256px-Escudo_del_Club_Atl%C3%A9tico_River_Plate.png'
  },
  {
    name: 'Boca',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_2012.svg/275px-Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_2012.svg.png'
  },
  {
    name: 'River',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Escudo_del_Club_Atl%C3%A9tico_River_Plate.png/256px-Escudo_del_Club_Atl%C3%A9tico_River_Plate.png'
  },
  {
    name: 'Boca',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_2012.svg/275px-Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_2012.svg.png'
  },
  {
    name: 'River',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Escudo_del_Club_Atl%C3%A9tico_River_Plate.png/256px-Escudo_del_Club_Atl%C3%A9tico_River_Plate.png'
  },
  {
    name: 'Boca',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_2012.svg/275px-Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_2012.svg.png'
  },
  {
    name: 'River',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Escudo_del_Club_Atl%C3%A9tico_River_Plate.png/256px-Escudo_del_Club_Atl%C3%A9tico_River_Plate.png'
  },
  {
    name: 'Boca',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_2012.svg/275px-Escudo_del_Club_Atl%C3%A9tico_Boca_Juniors_2012.svg.png'
  },
  {
    name: 'River',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Escudo_del_Club_Atl%C3%A9tico_River_Plate.png/256px-Escudo_del_Club_Atl%C3%A9tico_River_Plate.png'
  }
];
const Home = () => (
  <>
    <PageTitle>Teams</PageTitle>
    <TeamsContainer>
      {teams.map(team => (
        <TeamCard team={team} />
      ))
      }
    </TeamsContainer>
  </>
);


export default Home;
