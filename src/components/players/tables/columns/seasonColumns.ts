import {  formatPlayerData, PlayerData } from '@components/players/utils/playerDataUtils';
import { GridColDef } from '@mui/x-data-grid';

export function seasonColumn(): GridColDef {
    return { 
        description: 'Season', 
        field: 'season', 
        filterable: false,
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
        field: 'age', 
        headerName: 'Age', 
        description: 'Player Age', 
        filterable: false,
        valueGetter: (_v, row) => {
          return formatPlayerData(PlayerData.Age, row.age);
      }
    }
}
export function seasonGamesPlayedColumn(): GridColDef {
    return { 
        field: 'games_played', 
        headerName: '# Games', 
        description: 'Games Played', 
        filterable: false,
        valueGetter: (_v, row) => {
          return formatPlayerData(PlayerData.GamesPlayed, row.games_played);
      }
    }
}

export function seasonNonPPRPointsColumn(): GridColDef {
    return { 
        field: 'fantasy_points', 
        headerName: 'Non-PPR', 
        description: 'Non-PPR Fantasy Points', 
        filterable: false,
        valueGetter: (_v, row) => {
            return formatPlayerData(PlayerData.Points, row.fantasy_points);
        }
    }
}

export function seasonPPRPointsColumn(): GridColDef {
    return { 
        field: 'fantasy_points_ppr', 
        headerName: 'PPR', 
        description: 'PPR Fantasy Points', 
        filterable: false,
        valueGetter: (_v, row) => {
          return formatPlayerData(PlayerData.PPRPoints, row.fantasy_points_ppr);
      }
    }
}