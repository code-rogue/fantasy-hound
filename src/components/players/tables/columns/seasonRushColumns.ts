import { 
    formatPlayerData, 
    PlayerData
} from '@components/players/utils/playerDataUtils';
import { GridColDef } from '@mui/x-data-grid';
import { SeasonData } from '@interfaces/models/season/season';

export function seasonRushYardsColumn(): GridColDef {
    return { 
        description: 'Rush Yards', 
        field: 'stats.rush.rush_yards', 
        filterable: false,
        headerName: 'YDS', 
        valueGetter: (_v, row: SeasonData) => {
          return formatPlayerData(PlayerData.RushYards, row.stats?.rush?.rush_yards);
        },
        width: 60,
    };
}

export function seasonRushFirstDownsColumn(): GridColDef {
    return { 
        description: 'Receptions which result in a First Down', 
        field: 'stats.rush.rush_first_downs', 
        filterable: false,
        headerName: 'FD', 
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.RushFD, row.stats?.rush?.rush_first_downs);
        },
        width: 60,
    };
}

export function seasonRushTDsColumn(): GridColDef {
    return { 
        description: 'Touchdowns', 
        field: 'stats.rush.rush_tds', 
        filterable: false,
        headerName: 'TD', 
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.RushTD, row.stats?.rush?.rush_tds);
        },
        width: 60,
    };
}

export function seasonRush2PTsColumn(): GridColDef {
    return { 
        description: '2pt Conversions',
        field: 'stats.rush.rush_two_pt_conversions', 
        filterable: false,
        headerName: '2PT',
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.Rush2PT, row.stats?.rush?.rush_two_pt_conversions);
        },
        width: 60,
    };
}

export function seasonReturnTDsColumn(): GridColDef {
    return { 
        description: 'Special Teams Touchdowns', 
        field: 'stats.rush.special_teams_tds',
        filterable: false,
        headerName: 'Return TD', 
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.ReturnTD, row.stats?.rush?.special_teams_tds);
        },
        width: 100,
    };
}

export function seasonRushFumblesColumn(): GridColDef {
    return { 
        description: 'Fumbles', 
        field: 'stats.rush.rush_fumbles',
        filterable: false,
        headerName: 'FUM', 
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.RushFumbles, row.stats?.rush?.rush_fumbles);
        },
        width: 60,
    };
} 

export function seasonRushFumblesLostColumn(): GridColDef {
    return { 
        description: 'Fumbles Lost', 
        field: 'stats.rush.rush_fumbles_lost',
        filterable: false,
        headerName: 'LST', 
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.RushFumblesLost, row.stats?.rush?.rush_fumbles_lost);
        },
        width: 60,
    };
}