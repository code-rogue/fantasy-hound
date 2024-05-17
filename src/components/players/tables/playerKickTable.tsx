import { 
    DataGrid, 
    GridColDef
  } from '@mui/x-data-grid';
  import { PlayerProps } from '@interfaces/models/player';
  import React from 'react';
  import { 
    seasonColumn, 
    seasonPlayerIdColumn 
  } from '@components/players/tables/columns/seasonColumns';
  import { 
    seasonKickTotalColumn,
    seasonKickTotalPATColumn,
    seasonKickPATPercentageColumn,
    seasonKickMadePercentageColumn,
    seasonKickLongColumn,
    seasonKickU40Column,
    seasonKick40Column,
    seasonKick50Column,
    seasonKick60Column
  } from '@components/players/tables/columns/seasonKickColumns';
  
  const PlayerKickTable: React.FC<PlayerProps> = ({ player }) => {
      const columns: GridColDef[] = [
        seasonColumn(),
        seasonKickTotalColumn(),
        seasonKickMadePercentageColumn(),
        seasonKickU40Column(),
        seasonKick40Column(),
        seasonKick50Column(),
        seasonKick60Column(),
        seasonKickLongColumn(),
        seasonKickTotalPATColumn(),
        seasonKickPATPercentageColumn(),
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
  
  export default PlayerKickTable;