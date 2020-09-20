import React from 'react';
import { useQuery, gql } from '@apollo/client';
import PageTitle from '../../components/PageTitle';
import TeamCard from '../../components/TeamCard';
import { TeamsContainer } from './styled';

const getTeamsQuery = gql`
  query GetTeams {
    getTeams{
      id
      name
      logo
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(getTeamsQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const teams = data.getTeams;
  return <>
    <PageTitle>Teams</PageTitle>
    <TeamsContainer>
      {teams.map((team, i) => (
        <TeamCard team={team} key={i} />
      ))
      }
    </TeamsContainer>
  </>
};


export default Home;
