import Container from '@mui/material/Container';
import { fetchData } from '@app/api/apiService';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Player } from '@interfaces/models/player';
import PlayerLogTab from '@components/players/playerLogTab';
import { PlayerProps } from '@interfaces/models/player';
import React, { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const PlayerLog: React.FC<PlayerProps> = ({ player }) => {
    const [logData, setLogData] = useState<Player>();
    let [season, SetSeason] = React.useState("0");
    let [playerId, SetPlayerId] = React.useState(player?.id ?? 0);
    let [years, setYears] = React.useState<string[]>([]);
    
    const handleSeasonChange = async (event: SelectChangeEvent) => {
        SetPlayerId(player?.id ?? 0);
        SetSeason(event.target.value);
        await fetchLogData(player?.id ?? 0, event.target.value);
    };

    const fetchLogData = async (id: number, year: string) => {
        try {
            const responseData = await fetchData(`/players/${id}/seasons/${year}`);
            setLogData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    years = player?.stats.map(item => item.season) ?? [];
    return (
        <Container disableGutters maxWidth={false}>
            <FormControl sx={{ display:'-webkit-box' }}>
                <InputLabel id="select-season" sx={{ paddingTop: 1 }}>Season</InputLabel>
                <Select
                    labelId="select-season"
                    id="season-select"
                    value={season}
                    label='Season'
                    onChange={handleSeasonChange}
                    sx={{ marginTop: 1, paddingTop: 1 }}
                >
                    <MenuItem value="0">Select a Season</MenuItem>
                    {years.map(year => {
                        return <MenuItem key={year} value={year}>{year}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <PlayerLogTab player={logData} />
        </Container>
    );
};

export default PlayerLog;