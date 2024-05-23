import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Player } from '@interfaces/models/player';
import { PlayerProps } from '@interfaces/models/player';
import React, { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SeasonGameLogTable from '@components/players/tables/seasonGameLogTable';
import { 
    isOffensivePlayer,
    isDefensivePlayer,
    isSpecialTeamsPlayer
} from '@components/players/utils/playerUtils';
import { CardHeader } from '@mui/material';
import { fetchData } from '@app/api/apiService';

const PlayerGameLog: React.FC<PlayerProps> = ({ player }) => {
    const [gameLog, setGameLog] = useState<Player>();
    let [season, SetSeason] = React.useState("0");
    let [playerId, SetPlayerId] = React.useState(player?.id ?? 0);
    const [years] = React.useState<string[]>(() => {
        let seasons: string[] =[];
        const limit = (season === "0") ? new Date().getFullYear() : parseInt(season);
        for (let x = 1999; x <= limit; x++) {
            seasons.push(x.toString());
        };
        return seasons;
    });

    const handleSeasonChange = async (event: SelectChangeEvent) => {
        SetPlayerId(player?.id ?? 0);
        SetSeason(event.target.value);
        await fetchGameLog(player?.id ?? 0, event.target.value);
    };

    const offense = isOffensivePlayer(player);
    const def = isDefensivePlayer(player);
    const specialTeams = isSpecialTeamsPlayer(player);

    const fetchGameLog = async (id: number, year: string) => {
        try {
            const responseData = await fetchData(`/players/${id}/seasons/${year}`);
            setGameLog(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <Card 
            raised={true}
            sx={{ textAlign: 'left', width: '99%', minWidth: 400, margin: 1, padding: 0 }}
        >
            <CardHeader 
                title="Game Log" 
                sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2}}
                action={
                    <FormControl fullWidth>
                        <InputLabel id="select-season">Season</InputLabel>
                        <Select
                            labelId="select-season"
                            id="season-select"
                            value={season}
                            label="Season"
                            onChange={handleSeasonChange}
                        >
                            <MenuItem value="0">Select a Season</MenuItem>
                            {years.map(year => {
                                return <MenuItem key={year} value={year}>{year}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                }>
            </CardHeader>
            <CardContent sx={{ padding: 1 }}>
                <Box sx={{ width: '100%', typography: 'body1', padding: 0 }}>
                    <SeasonGameLogTable player={gameLog} />                 
                </Box>
            </CardContent>
        </Card>
    );
};

export default PlayerGameLog;