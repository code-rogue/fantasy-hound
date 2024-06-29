import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { formatPlayerData } from '@components/players/utils/playerDataUtils';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { Player } from '@interfaces/models/player';
import { PlayerData } from '@interfaces/enums/player_data.enums';
import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';

interface PlayerProps {
  player?: Player;
}

const PlayerProfile: React.FC<PlayerProps> = ({ player }) => {
  return (
    <Card raised={true} sx={{ height: 275, width: '100%', margin: 1, padding: 0 }}>
        <CardContent sx={{ padding: 1 }}>
          <Container
            disableGutters
            maxWidth={false}
            sx={{ 
              display: 'flex',
            }}
          >
            <List sx={{ maxWidth: 200, bgcolor: 'background.paper' }}>
              <ListItem>
                <ListItemText primary={formatPlayerData(PlayerData.GameStatus, player?.game_status)} secondary="Status" />
                <ListItemAvatar>
                  <Avatar sx={{ color: 'green' }}>
                    <VerifiedIcon />
                  </Avatar>
                </ListItemAvatar>
              </ListItem>
              <ListItem>
                <ListItemText primary={`# ${formatPlayerData(PlayerData.JerseyNumber, player?.jersey_number)}`} secondary="Jersey Number" />
              </ListItem>
              <ListItem>
                <ListItemText primary={formatPlayerData(PlayerData.YearsExp, player?.years_of_experience)} secondary="Years of experience" />
              </ListItem>
            </List>
            
            <List sx={{ maxWidth: 150, bgcolor: 'background.paper' }}>
              <ListItem>
                <ListItemText primary={formatPlayerData(PlayerData.BirthDate, player?.birth_date)} secondary="Birth Date" />
              </ListItem>
              <ListItem>
                <ListItemText primary={formatPlayerData(PlayerData.Height, player?.height)} secondary="Height" />
              </ListItem>
              <ListItem>
                <ListItemText primary={formatPlayerData(PlayerData.Weight, player?.weight)} secondary="Weight" />
              </ListItem>
            </List>

            <List sx={{ maxWidth: 200, bgcolor: 'background.paper' }}>
              <ListItem>
                <ListItemText primary={formatPlayerData(PlayerData.RookieYear, player?.rookie_year)} secondary="Rookie Year" />
              </ListItem>
              <ListItem>
                <ListItemText primary={formatPlayerData(PlayerData.DraftNumber, player?.draft_number)} secondary="Drafted" />
              </ListItem>
              <ListItem>
                <ListItemText primary={formatPlayerData(PlayerData.DraftedBy, player?.draft_team?.full_name)} secondary="Drafted By" />
              </ListItem>
            </List>
            
          </Container>
        </CardContent>
    </Card>
  );
};

export default PlayerProfile;