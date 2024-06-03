import Container from '@mui/material/Container';
import React from 'react';
import { Gauge } from '@mui/x-charts';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export interface PlayerStatData {
    data: StatData
}

export interface StatData {
    boomGames: number,
    bustGames: number
    games: number,
    statAvg: number,
    statMax: number,
    statMin: number,
}

const PlayerStatBoomBust: React.FC<PlayerStatData> = ({ data }) => {
    const [numGames, SetNumGames] = React.useState(data.games);
    const [statAvg, SetStatAvg] = React.useState(data.statAvg.toFixed(2));
    const [boomGames, SetBoomGames] = React.useState(data.boomGames);
    const [bustGames, SetBustGames] = React.useState(data.bustGames);
    
    return (
        <Container disableGutters maxWidth={false} sx={{ display: 'block', width: 170}}>
            <TextField 
                id="boom-pct" 
                label="Boom Games" 
                variant="outlined" 
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <KeyboardDoubleArrowUpIcon fontSize="large" sx={{color:'#00FF3E'}}/>
                            <Gauge width={90} height={90} value={data.boomGames} valueMax={data.games} innerRadius={25} outerRadius={45}/>
                        </InputAdornment>
                    ),
                }}
                multiline
                rows={4}
                sx={{ marginTop: 5, padding: 0, marginBottom: 2 }}
            />
            <TextField 
                id="Stat-avg" 
                label="Avg / Game" 
                multiline
                value={data.statAvg.toFixed(2)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'></InputAdornment>
                    ),
                }}
                sx={{ padding: 0, marginBottom: 2, width: '100%' }}
            />
            <TextField 
                id="bust-pct" 
                label="Bust Games" 
                variant="outlined" 
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <KeyboardDoubleArrowDownIcon fontSize="large" sx={{color:'#FF1C00'}}/>
                            <Gauge width={90} height={90} value={data.bustGames} valueMax={data.games} innerRadius={25} outerRadius={45}/>
                        </InputAdornment>
                    ),
                }}
                multiline
                rows={4}
            />
        </Container>
    );
};

export default PlayerStatBoomBust;