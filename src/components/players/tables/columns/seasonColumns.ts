import { CalculatedData, PlayerData } from '@interfaces/enums/player_data.enums';
import { formatCalulatedStats, formatPlayerData } from '@components/players/utils/playerDataUtils';
import { GridColDef } from '@mui/x-data-grid';

export function seasonColumn(): GridColDef {
    return {
        align: 'center',  
        description: 'Season', 
        field: 'season', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'Season', 
        hideable: false,
        width: 80,
      };
}

export function seasonPlayerIdColumn(): GridColDef {
    return { 
        description: 'Player Season Identifier', 
        field: 'id', 
        filterable: false,
        headerName: 'Season Id', 
    };
}

export function seasonAgeColumn(): GridColDef {
    return {
        align: 'center', 
        field: 'age', 
        headerAlign: 'center',
        headerName: 'Age', 
        description: 'Player Age', 
        filterable: false,
        valueGetter: (_v, row) => {
          return formatPlayerData(PlayerData.Age, row.age);
        },
        width: 60,
    }
}
export function seasonGamesPlayedColumn(): GridColDef {
    return { 
        align: 'center',
        field: 'games_played', 
        headerAlign: 'center',
        headerName: '# Games',         
        description: 'Games Played', 
        filterable: false,
        valueGetter: (_v, row) => {
          return formatPlayerData(PlayerData.GamesPlayed, row.games_played);
        },
        width: 90,
    }
}

export function seasonNonPPRPointsColumn(): GridColDef {
    return { 
        align: 'center',
        field: 'fantasy_points', 
        headerAlign: 'center',
        headerName: 'Total', 
        description: 'Non-PPR Fantasy Points',
        filterable: false,
        valueGetter: (_v, row) => {
            return formatPlayerData(PlayerData.PPRPoints, row.fantasy_points);
        },
        width: 80,
    }
}

export function seasonNonPPRPointsPerGameColumn(): GridColDef {
    return { 
        align: 'center',
        field: 'fantasy_points_per_game', 
        headerAlign: 'center',
        headerName: 'Avg', 
        description: 'Non-PPR Fantasy Points per Game', 
        filterable: false,
        valueGetter: (_v, row) => {
            return formatCalulatedStats(CalculatedData.PointsPerGame, row);
        },
        width: 60,
    }
}

export function seasonPPRPointsColumn(): GridColDef {
    return { 
        align: 'center',
        field: 'fantasy_points_ppr', 
        headerAlign: 'center',
        headerName: 'Total', 
        description: 'PPR Fantasy Points', 
        filterable: false,
        valueGetter: (_v, row) => {
          return formatPlayerData(PlayerData.PPRPoints, row.fantasy_points_ppr);
        },
        width: 80,
    }
}

export function seasonPPRPointsPerGameColumn(): GridColDef {
    return { 
        align: 'center',
        field: 'fantasy_points_ppr_per_game', 
        headerAlign: 'center',
        headerName: 'Avg',
        description: 'PPR Fantasy Points per Game', 
        filterable: false,
        valueGetter: (_v, row) => {
            return formatCalulatedStats(CalculatedData.PPRPointsPerGame, row);
        },
        width: 60,
    }
}