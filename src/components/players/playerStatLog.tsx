import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { PlayerProps } from '@interfaces/models/player';
import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { StatDefinition } from "@interfaces/player_stat";
import { PlayerStats, PlayerStatsTypes } from '@interfaces/enums/player_stat.enums';
import { 
    getPlayerStat, 
    statDefinitionsByType, 
    statTooltipFormatter    
} from '@components/players/utils/playerStatUtils';
import { LineChart } from '@mui/x-charts/LineChart';
import { NFL_POSITION_GROUPS } from '@interfaces/enums/position_groups.enums';

const PlayerStatLog: React.FC<PlayerProps> = ({ player }) => {    
    let [stat, SetStat] = React.useState<PlayerStats | null>(null);
    let [statType, SetStatType] = React.useState<PlayerStatsTypes>(() => {
        if (player?.position_group === NFL_POSITION_GROUPS.QB)
            return PlayerStatsTypes.Passing;
        
        if (player?.position_group === NFL_POSITION_GROUPS.RB)
            return PlayerStatsTypes.Rushing;

        return PlayerStatsTypes.Receiving;
    });
    let [statDefinitions, SetStatDefinitions] = React.useState<StatDefinition[]>(statDefinitionsByType(statType));

    const handleStatChange = async (event: SelectChangeEvent) => {
        const { value: selectedStat} = event.target
        SetStat(selectedStat === '-1' ? null : parseInt(selectedStat));

        // Process data
        statData = getPlayerStat(player?.stats[0]?.weeks, stat);
    };

    const handleStatTypeChange = async (event: SelectChangeEvent) => {
        const { value: selectedStatType} = event.target
        SetStat(null);
        SetStatType(parseInt(selectedStatType));
        SetStatDefinitions(statDefinitionsByType(parseInt(selectedStatType)));
    };
    
    const updateSeriesMetaData = (data: (number | null)[]) => {
        const valueArr = data.filter(x => x !== null) as number[];
        
        total = 0;
        minValue = Math.min(...valueArr);
        maxValue = Math.max(...valueArr);
        
        valueArr.forEach(item => total += item);
        avgValue = total / valueArr.length
    
        statData.forEach(_item => {
            avgLine.push(avgValue);
        })
    }

    let count = 1
    const xAxisLabels: string[] = player?.stats[0]?.weeks?.filter(item => item.game_id !== null).map(week => {
        return week?.week ?? count++
    }) ?? []

    let statData = getPlayerStat(player?.stats[0]?.weeks, stat);
    let avgLine: number[] = []
    let avgValue = 0;
    let minValue = 0;
    let maxValue = 1;
    let total = 0;
    updateSeriesMetaData(statData);

    const valueSeriesFormatter = (value: number | null) => statTooltipFormatter(stat, value, avgValue);
    const xAxisSeriesFormatter = (value: number | null) => `Week\n${value}`;
    const avgSeriesFormatter = (value: number | null) => `Avg: ${avgValue.toFixed(2)}`;

    return (
        <Container disableGutters maxWidth={false} sx={{ margin: 0 }}>
            <Container 
                disableGutters 
                maxWidth={false} 
                sx={{
                    height: 80,
                    display: "contents",
                    padding: 2
                }}
            >
                <Select
                    labelId="select-position"
                    id="position-select"
                    value={statType.toString()}
                    label='Type'
                    onChange={handleStatTypeChange}
                    sx={{ marginTop: 1, marginRight: 1, zIndex: 1 }}
                >
                    <MenuItem value="0">Passing</MenuItem>
                    <MenuItem value="1">Receiving</MenuItem>
                    <MenuItem value="2">Rushing</MenuItem>
                </Select>
                <Select
                    labelId="select-stat"
                    id="stat-select"
                    value={(stat === null) ? '-1' : stat.toString()}
                    label="Stats"
                    onChange={handleStatChange}
                    sx={{ marginTop: 1, zIndex: 1 }}
                >
                    <MenuItem value="-1">Select a Stat</MenuItem>
                    {statDefinitions.map(stat => {
                        return <MenuItem key={stat.id} value={stat.id}>{stat.label}</MenuItem>
                    })}
                </Select>
            </Container>
            <Container disableGutters maxWidth={false} sx={{ height: 400, marginTop: -3 }}>
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
                        {
                            color: '#026119',
                            data: avgLine,
                            disableHighlight: true,
                            showMark: false,
                            valueFormatter: avgSeriesFormatter
                        }
                    ]}
                    yAxis={[
                        {
                            min: (minValue < 0) ? minValue : 0,
                            max: maxValue
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