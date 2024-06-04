import { CalculatedData, PlayerData } from '@interfaces/enums/player_data.enums';
import { 
    formatCalulatedWeekStats, 
    formatPlayerData 
} from '@components/players/utils/playerDataUtils';
import { GridColDef } from '@mui/x-data-grid';
import { WeekData } from '@interfaces/models/week/week';

export function weekColumn(): GridColDef {
    return {
        align: 'center',  
        description: 'Week', 
        field: 'week', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'Week', 
        hideable: false,
        width: 65,
      };
}

export function weekIdColumn(): GridColDef {
    return { 
        description: 'Player Week Identifier', 
        field: 'id', 
        filterable: false,
        headerName: 'Week Id', 
    };
}

export function weekOpponentColumn(): GridColDef {
    return {
        align: 'left', 
        field: 'opponent', 
        headerAlign: 'left',
        headerName: 'Opp', 
        description: 'Opponent Team', 
        filterable: false,
        valueGetter: (_v, row: WeekData) => {
          return formatCalulatedWeekStats(CalculatedData.WeekGameOppType, row);
        },
        width: 110,
    }
}

export function weekFanastyPointsColumn(ppr = true): GridColDef {
    return {
        align: 'center', 
        field: 'fantasy_points', 
        headerAlign: 'center',
        headerName: 'Points', 
        description: 'Fanasty Points', 
        filterable: false,
        valueGetter: (_v, row: WeekData) => {
          if(ppr)
            return formatPlayerData(PlayerData.PPRPoints, row.fantasy_points_ppr);

          return formatPlayerData(PlayerData.Points, row.fantasy_points);
        },
        width: 80,
    }
}

