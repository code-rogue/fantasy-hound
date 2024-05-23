import { PlayerData } from '@interfaces/enums/player_data.enums';
import { formatPlayerData } from '@components/players/utils/playerDataUtils';
import { GridColDef } from '@mui/x-data-grid';
import { SeasonData } from '@interfaces/models/season/season';

export function seasonPassAirYardsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Air Yards', 
        field: 'stats.pass.pass_air_yards', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'AY', 
        valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.PassAirYards, row.stats?.pass?.pass_air_yards);
        },
        width: 60,
    }
}

export function seasonPassEPAColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Total Expected Points', 
        field: 'stats.pass.pass_epa', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'EPA', 
        valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.PassEPA, row.stats?.pass?.pass_epa);
        },
        width: 75,
    }
}

export function seasonPassDakotaColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Total Expected Points per Play', 
        field: 'stats.pass.dakota', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'EPA/play', 
        valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.Dakota, row.stats?.pass?.dakota);
        },
        width: 95,
    }
}

export function seasonPassSackFumblesColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Sack Fumbles', 
        field: 'stats.pass.sack_fumbles',
        filterable: false,
        headerAlign: 'center',
        headerName: 'FUM',
        valueGetter: (_v, row: SeasonData) => {
          return formatPlayerData(PlayerData.PassSackFumbles, row.stats?.pass?.sack_fumbles);
        },
        width: 60,
    }
}

export function seasonPassSackFumblesLostColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Sack Fumbles Lost', 
        field: 'stats.pass.sack_fumbles_lost',
        filterable: false,
        headerAlign: 'center',
        headerName: 'LST', 
        valueGetter: (_v, row: SeasonData) => {
          return formatPlayerData(PlayerData.PassSackFumblesLost, row.stats?.pass?.sack_fumbles_lost);
        },
        width: 60,
    }
}

export function seasonPassSacksColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Sacks', 
        field: 'stats.pass.sacks',
        filterable: false,
        headerAlign: 'center',
        headerName: 'Total', 
        valueGetter: (_v, row: SeasonData) => {
          return formatPlayerData(PlayerData.PassSack, row.stats?.pass?.sacks);
        },
        width: 60,
    }
}

export function seasonPassSackYardsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Sack Yards', 
        field: 'stats.pass.sack_yards', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'YDS', 
        valueGetter: (_v, row: SeasonData) => {
          return formatPlayerData(PlayerData.PassSackYards, row.stats?.pass?.sack_yards);
        },
        width: 60,
    }
}