import { 
  DataGridPremium, 
  GridColDef
} from '@mui/x-data-grid-premium';
import { 
  formatPlayerData, 
  PlayerData
} from '@components/players/utils/playerDataUtils';
import { PlayerProps } from '@interfaces/models/player';
import React from 'react';
import { SeasonData } from '@interfaces/models/season/season';

const PlayerRushTable: React.FC<PlayerProps> = ({ player }) => {
    const columns: GridColDef[] = [
        { 
          description: 'Season', 
          field: 'season', 
          filterable: false,
          headerName: 'Season', 
          hideable: false,
          width: 80,
        },{ 
          description: 'Carries', 
          field: 'stats.rush.carries', 
          filterable: false,
          headerName: 'ATT', 
          valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.Carries, row.stats?.rush?.carries);
          },
          width: 60,
        },{ 
          description: 'Rush Yards', 
          field: 'stats.rush.rush_yards', 
          filterable: false,
          headerName: 'YDS', 
          valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.RushYards, row.stats?.rush?.rush_yards);
          },
          width: 60,
        },{ 
          description: 'Receptions which result in a First Down', 
          field: 'stats.rush.rush_first_downs', 
          filterable: false,
          headerName: 'FD', 
          valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.RushFD, row.stats?.rush?.rush_first_downs);
          },
          width: 60,
        },{ 
          description: 'Touchdowns', 
          field: 'stats.rush.rush_tds', 
          filterable: false,
          headerName: 'TD', 
          valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.RushTD, row.stats?.rush?.rush_tds);
          },
          width: 60,
        },{ 
          description: '2pt Conversions',
          field: 'stats.rush.rush_two_pt_conversions', 
          filterable: false,
          headerName: '2PT',
          valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.Rush2PT, row.stats?.rush?.rush_two_pt_conversions);
          },
          width: 60,
        },{ 
          description: 'Special Teams Touchdowns', 
          field: 'stats.rush.special_teams_tds',
          filterable: false,
          headerName: 'Return TD', 
          valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.ReturnTD, row.stats?.rush?.special_teams_tds);
          },
          width: 100,
        },{ 
          description: 'Fumbles', 
          field: 'stats.rush.rush_fumbles',
          filterable: false,
          headerName: 'FUM', 
          valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.RushFumbles, row.stats?.rush?.rush_fumbles);
          },
          width: 60,
        },{ 
          description: 'Fumbles Lost', 
          field: 'stats.rush.rush_fumbles_lost',
          filterable: false,
          headerName: 'LST', 
          valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.RushFumblesLost, row.stats?.rush?.rush_fumbles_lost);
          },
          width: 60,
        },{ 
          description: 'Player Season Identifier', 
          field: 'id', 
          filterable: false,
          headerName: 'Season Id', 
        },
      ];
      
      return (
        <DataGridPremium 
            initialState={{
                columns: {
                columnVisibilityModel: {
                    id: false,
                },
                },
            }}
            autosizeOnMount={true}
            columns={columns}
            density="compact"
            disableColumnMenu={true}
            disableColumnSorting            
            pageSizeOptions={[10, 25, 50]}
            pagination={false}
            rows={player?.stats ?? []}
        />
      );
};

export default PlayerRushTable;