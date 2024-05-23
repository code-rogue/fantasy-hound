import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import { Player } from '@interfaces/models/player';

import React from 'react';

import { UNKNOWN_PLAYER } from '@interfaces/constants/player.constants';

interface PlayerProps {
  player?: Player;
}

const PlayerAvatar: React.FC<PlayerProps> = ({ player }) => {
  return (
    <Card raised={true} sx={{ width: 250, height: 275,margin: 1 }}>
      <CardHeader
        title={player?.full_name ?? UNKNOWN_PLAYER}
        subheader={`${player?.position} - ${player?.team?.name}`}
        sx={{ padding: 1 }}
      />
      <CardContent sx={{ padding: 0 }}>
        <CardMedia
          component="img"
          image={player?.headshot_url ?? ""} 
          alt={player?.full_name ?? UNKNOWN_PLAYER}
        />
      </CardContent>
    </Card>
  );
};

export default PlayerAvatar;