import { 
  CalculatedData,
  formatPlayerData, 
  formatCalulatedStats,
  PlayerData
} from '@components/players/utils/playerDataUtils';
import { 
  DataGridPremium, 
  GridColDef
} from '@mui/x-data-grid-premium';
import { PlayerProps } from '@interfaces/models/player';
import React from 'react';
import { SeasonData } from '@interfaces/models/season/season';

const PlayerPassTable: React.FC<PlayerProps> = ({ player }) => {
    const columns: GridColDef[] = [
        { 
          description: 'Season', 
          field: 'season', 
          filterable: false,
          headerName: 'Season', 
          hideable: false,
          width: 80,
        },{ 
          description: 'Pass Attempts', 
          field: 'stats.pass.attempts', 
          filterable: false,
          headerName: 'ATT', 
          valueGetter: (_v, row: SeasonData) => {
              return formatPlayerData(PlayerData.PassAttempts, row.stats?.pass?.attempts);
          },
          width: 60,
        },{ 
          description: 'Pass Completions',
          field: 'stats.pass.completions', 
          filterable: false,
          headerName: 'CMP',
          valueGetter: (_v, row: SeasonData) => {
              return formatPlayerData(PlayerData.PassCompletions, row.stats?.pass?.completions);
          },
          width: 60,
        },{ 
          description: 'Pass Completion %',
          field: 'stats.pass', 
          filterable: false,
          headerName: '%', 
          valueGetter: (_v, row: SeasonData) => { 
            return formatCalulatedStats(CalculatedData.PassCompletionPercentage, row) 
          },
          width: 60,
        },{ 
          description: 'Pass Yards', 
          field: 'stats.pass.pass_yards', 
          filterable: false,
          headerName: 'YDS', 
          valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.PassYards, row.stats?.pass?.pass_yards);
          },
          width: 60,
        },{ 
          description: 'Air Yards', 
          field: 'stats.pass.pass_air_yards', 
          filterable: false,
          headerName: 'AY', 
          valueGetter: (_v, row: SeasonData) => {
              return formatPlayerData(PlayerData.PassAirYards, row.stats?.pass?.pass_air_yards);
          },
          width: 60,
        },{ 
          description: 'Total Expected Points', 
          field: 'stats.pass.pass_epa', 
          filterable: false,
          headerName: 'EPA', 
          valueGetter: (_v, row: SeasonData) => {
              return formatPlayerData(PlayerData.PassEPA, row.stats?.pass?.pass_epa);
          },
          width: 75,
        },{ 
          description: 'Total Expected Points per Play', 
          field: 'stats.pass.dakota', 
          filterable: false,
          headerName: 'EPA/play', 
          valueGetter: (_v, row: SeasonData) => {
              return formatPlayerData(PlayerData.Dakota, row.stats?.pass?.dakota);
          },
          width: 95,
        },{ 
          description: 'Touchdowns', 
          field: 'stats.pass.pass_tds', 
          filterable: false,
          headerName: 'TD', 
          valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.PassTD, row.stats?.pass?.pass_tds);
          },
          width: 60,
        },{ 
          description: '2pt Conversions',
          field: 'stats.pass.pass_two_pt_conversions', 
          filterable: false,
          headerName: '2PT',
          valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.Pass2PT, row.stats?.pass?.pass_two_pt_conversions);
          },
          width: 60,
        },{ 
          description: 'Inteceptions', 
          field: 'stats.pass.interceptions', 
          filterable: false,
          headerName: 'INT', 
          valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.PassInt, row.stats?.pass?.interceptions);
          },
          width: 60,
        },{ 
          description: 'Sack Fumbles', 
          field: 'stats.pass.sack_fumbles',
          filterable: false,
          headerName: 'FUM', 
          valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.PassSackFumbles, row.stats?.pass?.sack_fumbles);
          },
          width: 60,
        },{ 
          description: 'Sack Fumbles Lost', 
          field: 'stats.pass.sack_fumbles_lost',
          filterable: false,
          headerName: 'LST', 
          valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.PassSackFumblesLost, row.stats?.pass?.sack_fumbles_lost);
          },
          width: 60,
        },{ 
          description: 'Sacks', 
          field: 'stats.pass.sacks',
          filterable: false,
          headerName: 'SCK', 
          valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.PassSack, row.stats?.pass?.sacks);
          },
          width: 60,
        },{ 
          description: 'Sack Yards', 
          field: 'stats.pass.sack_yards', 
          filterable: false,
          headerName: 'SCK YDS', 
          valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.PassSackYards, row.stats?.pass?.sack_yards);
          },
          width: 90,
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
            pagination={false}
            rows={player?.stats ?? []}
        />
      );
};

export default PlayerPassTable;