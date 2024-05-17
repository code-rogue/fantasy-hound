import { DataGrid,  GridColDef } from '@mui/x-data-grid';
import { PlayerProps } from '@interfaces/models/player';
import React from 'react';
import { 
    seasonAgeColumn,
    seasonColumn,
    seasonGamesPlayedColumn,
    seasonNonPPRPointsColumn,
    seasonPPRPointsColumn,
    seasonPlayerIdColumn 
  } from '@components/players/tables/columns/seasonColumns';

const PlayerCareerTable: React.FC<PlayerProps> = ({ player }) => {
    const columns: GridColDef[] = [
        seasonColumn(),
        seasonAgeColumn(),
        seasonGamesPlayedColumn(),
        seasonPPRPointsColumn(),
        seasonNonPPRPointsColumn(),
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
        />
      );
};

export default PlayerCareerTable;