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
    kickTotalColumn,
    kickTotalPATColumn,
    kickPATPercentageColumn,
    kickMadePercentageColumn,
    kickLongColumn,
    kickU40Column,
    kick40Column,
    kick50Column,
    kick60Column
  } from '@components/players/tables/columns/kickColumns';
  
  const PlayerKickTable: React.FC<PlayerProps> = ({ player }) => {
      const columns: GridColDef[] = [
        seasonColumn(),
        kickTotalColumn(),
        kickMadePercentageColumn(),
        kickU40Column(),
        kick40Column(),
        kick50Column(),
        kick60Column(),
        kickLongColumn(),
        kickTotalPATColumn(),
        kickPATPercentageColumn(),
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
            autoHeight={true}
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