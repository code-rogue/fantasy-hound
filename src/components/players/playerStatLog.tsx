import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { PlayerProps } from '@interfaces/models/player';
import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { StatDefinition } from "@interfaces/player_stat";
import { PlayerStats } from '@interfaces/enums/player_stat.enums';
import { 
    getPlayerStat, 
    statDefinitions, 
    statTooltipFormatter 
} from '@components/players/utils/playerStatUtils';
import { LineChart } from '@mui/x-charts/LineChart';
   
const PlayerStatLog: React.FC<PlayerProps> = ({ player }) => {    
    let [stat, SetStat] = React.useState<PlayerStats | null>(null);
    const [stats] = React.useState<StatDefinition[]>(statDefinitions);

    const handleStatChange = async (event: SelectChangeEvent) => {
        const { value: selectedStat} = event.target
        SetStat(selectedStat === '-1' ? null : parseInt(selectedStat));

        // Process data
        statData = getPlayerStat(player?.stats[0]?.weeks, stat);
    };
    
    let count = 1
    const xAxisLabels: string[] = player?.stats[0]?.weeks?.filter(item => item.game_id !== null).map(week => {
        return week?.week ?? count++
    }) ?? []

    const valueSeriesFormatter = (value: number | null) => statTooltipFormatter(stat, value);
    const xAxisSeriesFormatter = (value: number | null) => `Week\n${value}`;
    let statData = getPlayerStat(player?.stats[0]?.weeks, stat);

    return (
        <Container disableGutters maxWidth={false} sx={{ margin: 0 }}>
            <Container disableGutters maxWidth={false} sx={{height: 80}}>
                <FormControl sx={{ marginBottom: -30, display:'webkit-inline-box' }}>
                    <InputLabel id="select-stat" sx={{ marginTop: 1 }}>Stat</InputLabel>
                    <Select
                        labelId="select-stat"
                        id="stat-select"
                        value={(stat === null) ? '-1' : stat.toString()}
                        label="Stats"
                        onChange={handleStatChange}
                        sx={{ marginTop: 1, zIndex: 1 }}
                    >
                        <MenuItem value="-1">Select a Stat</MenuItem>
                        {stats.map(stat => {
                            return <MenuItem key={stat.id} value={stat.id}>{stat.label}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Container>
            <Container disableGutters maxWidth={false} sx={{ height: 400, marginTop: -5 }}>
                <LineChart
                    xAxis={[
                        { 
                            data: xAxisLabels,
                            scaleType: 'band',
                            dataKey: 'week',
                            valueFormatter: xAxisSeriesFormatter
                        }
                    ]}
                    series={[
                        {
                            color: '#2ECC71',
                            curve: 'natural',
                            data: statData,
                            valueFormatter: valueSeriesFormatter,
                        },
                    ]}
                    yAxis={[
                        {
                            min: 0
                        }
                    ]}
                    grid={{ vertical: false, horizontal: true }}
                    slotProps={{
                        // Custom loading message
                        loadingOverlay: { message: 'Loading data...' },
                    }}
                />
            </Container>
        </Container>
    );
};

export default PlayerStatLog;