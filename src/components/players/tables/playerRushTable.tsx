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
  seasonRushCarriesColumn,
  seasonRushYPCColumn,
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
      seasonRushCarriesColumn(),
      seasonRushYPCColumn(),
      seasonRushYardsColumn(),
      seasonRushTDsColumn(),
      seasonRush2PTsColumn(),
      seasonRushFirstDownsColumn(),      
      seasonRushFumblesColumn(),
      seasonRushFumblesLostColumn(),
      seasonReturnTDsColumn(),      
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
                groupId: 'carries',
                headerName: 'Carries',
                headerAlign: 'center',
                children: [
                    { field: 'stats.rush.carries' }, 
                    { field: 'stats.rush.yards_per_carry' },
                    { field: 'stats.rush.rush_yards' },
                ],
            },            
        ]}
      />
    );
};

export default PlayerRushTable;