import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import { 
    getPlayerStat, 
    statDefinitionsByType, 
    statTooltipFormatter    
} from '@components/players/utils/playerStatUtils';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { NFL_POSITION_GROUPS } from '@interfaces/enums/position_groups.enums';
import { PlayerProps } from '@interfaces/models/player';
import PlayerStatBoomBust from '@components/players/stats/playerStatBoomBust';
import PlayerStatLineChart from '@components/players/stats/playerStatLineChart';
import { PlayerStats, PlayerStatsTypes } from '@interfaces/enums/player_stat.enums';
import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { StatData } from '@components/players/stats/playerStatBoomBust';
import { StatDefinition } from "@interfaces/player_stat";

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
    
    let statData: StatData = {
        games: 0,
        statAvg: 0,
        statMax: 0,
        statMin: 0,
        boomGames: 0,
        bustGames: 0,
    }

    const handleStatChange = async (event: SelectChangeEvent) => {
        const { value: selectedStat} = event.target
        SetStat(selectedStat === '-1' ? null : parseInt(selectedStat));
        playerStatData = getPlayerStat(player?.stats[0]?.weeks, stat);
    };

    const handleStatTypeChange = async (event: SelectChangeEvent) => {
        const { value: selectedStatType} = event.target
        SetStat(null);
        SetStatType(parseInt(selectedStatType));
        SetStatDefinitions(statDefinitionsByType(parseInt(selectedStatType)));
    };
    
    const updateSeriesMetaData = (data: (number | null)[]) => {
        const valueArr = data.filter(x => x !== null) as number[];
        
        statData.games = valueArr.length;
        statData.statMin = Math.min(...valueArr);
        statData.statMax = Math.max(...valueArr);
        
        let total = 0;
        valueArr.forEach(item => total += item);
        
        let avgValue = total / valueArr.length
        const boom = avgValue + (Math.abs(avgValue) * .05);
        const bust = avgValue - (Math.abs(avgValue) * .05);

        statData.statAvg = avgValue;
        statData.boomGames = 0;
        statData.bustGames = 0;

        playerStatData.forEach(item => {
            avgLine.push(avgValue);
            if(item !== null) {
                if( item >= boom)
                    statData.boomGames++;
                if(item <= bust)
                    statData.bustGames++;
            }
        })
    }

    let count = 1
    const xAxisLabels: string[] = player?.stats[0]?.weeks?.filter(item => item.game_id !== null).map(week => {
        return week?.week ?? count++
    }) ?? []

    let playerStatData = getPlayerStat(player?.stats[0]?.weeks, stat);
    let avgLine: number[] = []
    updateSeriesMetaData(playerStatData);

    const valueSeriesFormatter = (value: number | null) => statTooltipFormatter(stat, value, statData.statAvg);
    const xAxisSeriesFormatter = (value: number | null) => `Week\n${value}`;
    const avgSeriesFormatter = (value: number | null) => `Avg: ${statData.statAvg.toFixed(2)}`;
    
    return (
        <Container disableGutters maxWidth={false} sx={{ margin: 0 }}>
            <Container 
                disableGutters 
                maxWidth={false} 
                sx={{
                    height: 80,
                    display: "flex",
                    justifyContent: 'center',
                    padding: 2
                }}
            >
                <FormControl>
                    <InputLabel id="select-position" sx={{ paddingTop: 1 }}>Type</InputLabel>
                    <Select
                        label='Type'
                        labelId="select-position"
                        id="position-select"
                        value={statType.toString()}
                        onChange={handleStatTypeChange}
                        sx={{ marginTop: 1, marginRight: 1, zIndex: 1 }}
                    >
                        <MenuItem value="0">Passing</MenuItem>
                        <MenuItem value="1">Receiving</MenuItem>
                        <MenuItem value="2">Rushing</MenuItem>
                    </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="select-stat" sx={{ paddingTop: 1 }}>Stat</InputLabel>
                        <Select
                            label='Select a Stat'
                            labelId="select-stat"
                            id="stat-select"
                            value={(stat === null) ? '-1' : stat.toString()}
                            onChange={handleStatChange}
                            sx={{ minWidth: 160, marginTop: 1, zIndex: 1 }}
                        >
                            <MenuItem value="-1">Select a Stat</MenuItem>
                            {statDefinitions.map(stat => {
                                return <MenuItem key={stat.id} value={stat.id}>{stat.label}</MenuItem>
                            })}
                        </Select>
                </FormControl>
            </Container>
            
            <Container disableGutters maxWidth={false} sx={{ display: 'flex', height: 400, marginTop: -3 }}>
                <PlayerStatBoomBust data={statData}/>
                <PlayerStatLineChart data={{
                    xAxisLabels,
                    seriesData: playerStatData,
                    avgerageLineData: avgLine,
                    valueSeriesFormatter,
                    xAxisSeriesFormatter,
                    avgSeriesFormatter,
                    statData: statData,
                }}/>
            </Container>
        </Container>
    );
};

export default PlayerStatLog;
