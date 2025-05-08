import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../utils/axiosInstance';

const TeamDataContext = createContext();

export const useTeamData = () => useContext(TeamDataContext);

function TeamDataProvider({ children }) {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get('/team');
        setTeamData(response.data);
      } catch (error) {
        console.error('Failed to fetch team data:', error);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <TeamDataContext.Provider value={{ teamData }}>
      {children}
    </TeamDataContext.Provider>
  );
}

export default TeamDataProvider;
