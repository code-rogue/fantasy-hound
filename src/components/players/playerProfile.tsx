import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { Player } from '@interfaces/models/player';

import React from 'react';

import { UNAVAILABLE } from '@interfaces/constants/player.constants';
import VerifiedIcon from '@mui/icons-material/Verified';

interface PlayerProps {
  player?: Player;
}

const PlayerProfile: React.FC<PlayerProps> = ({ player }) => {
  return (
    <Card sx={{ height: 275, width: '100%', margin: 1, padding: 0 }}>
        <CardContent sx={{ padding: 1 }}>
          <Container
            disableGutters
            sx={{ 
              display: 'flex',
            }}
          >
            <List sx={{ maxWidth: 200, bgcolor: 'background.paper' }}>
              <ListItem>
                <ListItemText primary={player?.game_status ?? UNAVAILABLE} secondary="Status" />
                <ListItemAvatar>
                  <Avatar sx={{ color: 'green' }}>
                    <VerifiedIcon />
                  </Avatar>
                </ListItemAvatar>
              </ListItem>
              <ListItem>
                <ListItemText primary={`# ${player?.jersey_number ?? UNAVAILABLE}`} secondary="Jersey Number" />
              </ListItem>
              <ListItem>
                <ListItemText primary={player?.years_of_experience ?? UNAVAILABLE} secondary="Years of experience" />
              </ListItem>
            </List>
            
            <List sx={{ maxWidth: 150, bgcolor: 'background.paper' }}>
              <ListItem>
                <ListItemText primary={player?.birth_date ?? UNAVAILABLE} secondary="Birth Date" />
              </ListItem>
              <ListItem>
                <ListItemText primary={player?.height ?? UNAVAILABLE} secondary="Height" />
              </ListItem>
              <ListItem>
                <ListItemText primary={player?.weight ?? UNAVAILABLE} secondary="Weight" />
              </ListItem>
            </List>

            <List sx={{ maxWidth: 175, bgcolor: 'background.paper' }}>
              <ListItem>
                <ListItemText primary={player?.rookie_year ?? UNAVAILABLE} secondary="Rookie Year" />
              </ListItem>
              <ListItem>
                <ListItemText primary={player?.draft_number ?? UNAVAILABLE} secondary="Drafted (Overall)" />
              </ListItem>
              <ListItem>
                <ListItemText primary={player?.draft_team ?? UNAVAILABLE} secondary="Drafted By" />
              </ListItem>
            </List>
            
          </Container>
        </CardContent>
    </Card>
  );
};

export default PlayerProfile;