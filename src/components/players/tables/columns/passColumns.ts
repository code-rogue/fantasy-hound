import { CalculatedData, PlayerData } from '@interfaces/enums/player_data.enums';
import { formatCalulatedStats, formatPlayerData } from '@components/players/utils/playerDataUtils';
import { GridColDef } from '@mui/x-data-grid';

export function passAttemptsAndCompletionsColumn(): GridColDef {
    return {
        align: 'center', 
        field: 'c_a', 
        headerAlign: 'center',
        headerName: 'C / A', 
        description: 'Completions / Attempts', 
        filterable: false,
        valueGetter: (_v, row) => {
            return formatCalulatedStats(CalculatedData.PassAttemptAndCompletions, row);
        },
        width: 75,
    }
}

export function passCompletionPercentColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Pass Completion %',
        field: 'passCompletions', 
        filterable: false,
        headerAlign: 'center',
        headerName: '%', 
        valueGetter: (_v, row) => { 
          return formatCalulatedStats(CalculatedData.PassCompletionPercentage, row) 
        },
        width: 55,
    }
}

export function passYardsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Pass Yards', 
        field: 'stats.pass.pass_yards', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'YDS', 
        valueGetter: (_v, row) => {
          return formatPlayerData(PlayerData.PassYards, row.stats?.pass?.pass_yards);
        },
        width: 55,
    }
}

export function passTouchDownsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Touchdowns', 
        field: 'stats.pass.pass_tds', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'TD', 
        valueGetter: (_v, row) => {
          return formatPlayerData(PlayerData.PassTD, row.stats?.pass?.pass_tds);
        },
        width: 30,
    }
}

export function passTwoPointConversionsColumn(): GridColDef {
    return {
        align: 'center',
        description: '2pt Conversions',
        field: 'stats.pass.pass_two_pt_conversions', 
        filterable: false,
        headerAlign: 'center',
        headerName: '2PT',
        valueGetter: (_v, row) => {
          return formatPlayerData(PlayerData.Pass2PT, row.stats?.pass?.pass_two_pt_conversions);
        },
        width: 55,
    }
}
 
export function passInterceptionsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Inteceptions', 
        field: 'stats.pass.interceptions', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'INT', 
        valueGetter: (_v, row) => {
          return formatPlayerData(PlayerData.PassInt, row.stats?.pass?.interceptions);
        },
        width: 55,
    }
}