import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { DataGridPremium,  GridColDef } from '@mui/x-data-grid-premium';
import { formatPlayerData, PlayerData } from '@components/players/utils/playerDataUtils';
import { Player } from '@interfaces/models/player';
import React from 'react';

interface PlayerProps {
  player?: Player;
}

const PlayerCareerTable: React.FC<PlayerProps> = ({ player }) => {
    const columns: GridColDef[] = [
        { 
          field: 'season', 
          headerName: 'Season', 
          description: 'Season', 
          hideable: false, 
          filterable: false,
          valueGetter: (_v, row) => {
            return formatPlayerData(PlayerData.Season, row.season);
        }
        },
        { 
            field: 'age', 
            headerName: 'Age', 
            description: 'Player Age', 
            filterable: false,
            valueGetter: (_v, row) => {
              return formatPlayerData(PlayerData.Age, row.age);
          }
        },
        { 
            field: 'games_played', 
            headerName: '# Games', 
            description: 'Games Played', 
            filterable: false,
            valueGetter: (_v, row) => {
              return formatPlayerData(PlayerData.GamesPlayed, row.games_played);
          }
        },
        { 
            field: 'fantasy_points', 
            headerName: 'Non-PPR', 
            description: 'Non-PPR Fantasy Points', 
            filterable: false,
            valueGetter: (_v, row) => {
                return formatPlayerData(PlayerData.Points, row.fantasy_points);
            }
        },
        { 
            field: 'fantasy_points_ppr', 
            headerName: 'PPR', 
            description: 'PPR Fantasy Points', 
            filterable: false,
            valueGetter: (_v, row) => {
              return formatPlayerData(PlayerData.PPRPoints, row.fantasy_points_ppr);
          }
        },
        
    ];
    const passingColumns: GridColDef[] = [
        { 
            field: 'season', 
            headerName: 'Season', 
            description: 'Season', 
            hideable: false, 
            filterable: false,
        },
        { 
            field: 'stats.pass.pass_yards', 
            valueGetter: (value, row) => {
                return row.stats.pass.pass_yards;
            },
            headerName: 'Pass Yards', 
            description: 'Pass Yards', 
            filterable: false,
        },
        { 
            field: 'stats.pass.pass_tds', 
            valueGetter: (value, row) => {
                return row.stats.pass.pass_tds;
            },
            headerName: 'TDs', 
            description: 'Touchdowns', 
            filterable: false,
        },
        { 
            field: 'stats.pass.interceptions', 
            valueGetter: (value, row) => {
                return row.stats.pass.interceptions;
            },
            headerName: 'Ints', 
            description: 'Inteceptions', 
            filterable: false,
        },
        { 
          field: 'id', 
          headerName: 'Season Id', 
          description: 'Player Season Identifier', 
          filterable: false,
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

export default PlayerCareerTable;