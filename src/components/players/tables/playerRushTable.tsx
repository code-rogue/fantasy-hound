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
  seasonRush2PTsColumn,
  seasonRushFirstDownsColumn,
  seasonRushFumblesColumn,
  seasonRushFumblesLostColumn,
  seasonReturnTDsColumn,
  seasonRushTDsColumn,
  seasonRushYardsColumn 
} from '@components/players/tables/columns/seasonRushColumns';

const PlayerRushTable: React.FC<PlayerProps> = ({ player }) => {
    const columns: GridColDef[] = [
      seasonColumn(),
      seasonRushYardsColumn(),
      seasonRushFirstDownsColumn(),
      seasonRush2PTsColumn(),
      seasonRushTDsColumn(),
      seasonReturnTDsColumn(),
      seasonRushFumblesColumn(),
      seasonRushFumblesLostColumn(),
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

export default PlayerRushTable;