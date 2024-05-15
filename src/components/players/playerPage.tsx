import Avatar from '@mui/material/Avatar';
import { fetchData } from '@app/api/apiService';
import { Player } from '@interfaces/models/player';
import Container from '@mui/material/Container';
import React, { useEffect, useState } from 'react';

import PlayerAvatar from '@components/players/playerAvatar';
import PlayerProfile from '@components/players/playerProfile';
import PlayerStats from '@components/players/playerStats';

const PlayerPage: React.FC = () => {
  const [player, setPlayer] = useState<Player>();
  const [playerId, setPlayerId] = useState<number>(0);

  const fetchDataAndSetState = async (id: number) => {
    try {
      const responseData = await fetchData(`/players/${id}/seasons`);
      setPlayer(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const path = window.location.pathname;
    const [_lead, _player, id] = path.split('/');
    
    const player_id = parseInt(id);
    setPlayerId(player_id);
    fetchDataAndSetState(player_id);
  }, []);
  
  return (
    <Container
      disableGutters
      sx={{ 
        display: 'block'
      }}
    >
      <Container
        disableGutters
        sx={{ 
          display: 'flex'
        }}
      >
        <PlayerAvatar player={player} />
        <PlayerProfile player={player} />
      </Container>

      <Container
        disableGutters
        sx={{ 
          display: 'flex'
        }}
      >
        <PlayerStats player={player} />
      </Container>
    </Container>
  );
}

export default PlayerPage;