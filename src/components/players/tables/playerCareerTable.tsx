import { DataGrid,  GridColDef } from '@mui/x-data-grid';
import { PlayerProps } from '@interfaces/models/player';
import React from 'react';
import { 
    seasonAgeColumn,
    seasonColumn,
    seasonGamesPlayedColumn,
    seasonNonPPRPointsColumn,
    seasonNonPPRPointsPerGameColumn,
    seasonPPRPointsColumn,
    seasonPPRPointsPerGameColumn,
    seasonPlayerIdColumn 
  } from '@components/players/tables/columns/seasonColumns';

const PlayerCareerTable: React.FC<PlayerProps> = ({ player }) => {
    const columns: GridColDef[] = [
        seasonColumn(),
        seasonAgeColumn(),
        seasonGamesPlayedColumn(),
        seasonPPRPointsColumn(),
        seasonPPRPointsPerGameColumn(),
        seasonNonPPRPointsColumn(),
        seasonNonPPRPointsPerGameColumn(),        
        seasonPlayerIdColumn()
    ];
    
    return (
        <DataGrid
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
            pageSizeOptions={[]}
            rows={player?.stats ?? []}
            columnGroupingModel={[
                {
                    groupId: 'non-ppr',
                    headerName: 'Non-PPR',
                    headerAlign: 'center',
                    children: [
                        { field: 'fantasy_points' }, 
                        { field: 'fantasy_points_per_game' },
                    ],
                },
                {
                    groupId: 'ppr',
                    headerName: 'PPR',
                    headerAlign: 'center',
                    children: [
                        { field: 'fantasy_points_ppr' },
                        { field: 'fantasy_points_ppr_per_game' }
                    ],
                },
            ]}
        />
      );
};

export default PlayerCareerTable;