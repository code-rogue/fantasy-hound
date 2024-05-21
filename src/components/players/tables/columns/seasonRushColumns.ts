import { CalculatedData, PlayerData } from '@interfaces/enums/player_data.enums';
import { formatCalulatedStats, formatPlayerData } from '@components/players/utils/playerDataUtils';
import { GridColDef } from '@mui/x-data-grid';
import { SeasonData } from '@interfaces/models/season/season';

export function seasonRushCarriesColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Carries', 
        field: 'stats.rush.carries', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'Total', 
        valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.RushCarries, row.stats?.rush?.carries);
        },
        width: 60,
    };
}

export function seasonRushYPCColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Yards per Carry', 
        field: 'stats.rush.yards_per_carry', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'YPC', 
        valueGetter: (_v, row: SeasonData) => {
            return formatCalulatedStats(CalculatedData.RushYardsPerCarry, row);
        },
        width: 60,
    };
}

export function seasonRushYardsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Rush Yards', 
        field: 'stats.rush.rush_yards', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'YDS', 
        valueGetter: (_v, row: SeasonData) => {
          return formatPlayerData(PlayerData.RushYards, row.stats?.rush?.rush_yards);
        },
        width: 60,
    };
}

export function seasonRushFirstDownsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Receptions which result in a First Down', 
        field: 'stats.rush.rush_first_downs', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'FD', 
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.RushFD, row.stats?.rush?.rush_first_downs);
        },
        width: 60,
    };
}

export function seasonRushTDsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Touchdowns', 
        field: 'stats.rush.rush_tds', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'TD', 
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.RushTD, row.stats?.rush?.rush_tds);
        },
        width: 60,
    };
}

export function seasonRush2PTsColumn(): GridColDef {
    return {
        align: 'center',
        description: '2pt Conversions',
        field: 'stats.rush.rush_two_pt_conversions', 
        filterable: false,
        headerAlign: 'center',
        headerName: '2PT',
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.Rush2PT, row.stats?.rush?.rush_two_pt_conversions);
        },
        width: 60,
    };
}

export function seasonReturnTDsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Special Teams Touchdowns', 
        field: 'stats.rush.special_teams_tds',
        filterable: false,
        headerAlign: 'center',
        headerName: 'Return TD', 
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.ReturnTD, row.stats?.rush?.special_teams_tds);
        },
        width: 100,
    };
}

export function seasonRushFumblesColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Fumbles', 
        field: 'stats.rush.rush_fumbles',
        filterable: false,
        headerAlign: 'center',
        headerName: 'FUM', 
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.RushFumbles, row.stats?.rush?.rush_fumbles);
        },
        width: 60,
    };
} 

export function seasonRushFumblesLostColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Fumbles Lost', 
        field: 'stats.rush.rush_fumbles_lost',
        filterable: false,
        headerAlign: 'center',
        headerName: 'LST', 
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.RushFumblesLost, row.stats?.rush?.rush_fumbles_lost);
        },
        width: 60,
    };
}