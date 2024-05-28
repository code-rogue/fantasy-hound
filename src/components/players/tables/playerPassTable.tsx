import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { PlayerProps } from '@interfaces/models/player';
import React from 'react';

import { 
  seasonColumn, 
  seasonPlayerIdColumn 
} from '@components/players/tables/columns/seasonColumns';

import {
  seasonPassAirYardsColumn,
  seasonPassEPAColumn,
  seasonPassDakotaColumn,
  seasonPassSackFumblesColumn,
  seasonPassSackFumblesLostColumn,
  seasonPassSacksColumn,
  seasonPassSackYardsColumn
} from '@components/players/tables/columns/seasonPassColumns';

import { 
  passAttemptsAndCompletionsColumn,
  passCompletionPercentColumn,
  passInterceptionsColumn,
  passTouchDownsColumn,
  passTwoPointConversionsColumn,
  passYardsColumn
} from '@components/players/tables/columns/passColumns';

const PlayerPassTable: React.FC<PlayerProps> = ({ player }) => {
    const columns: GridColDef[] = [
      seasonColumn(),
      passAttemptsAndCompletionsColumn(),
      passCompletionPercentColumn(),
      passYardsColumn(),
      seasonPassAirYardsColumn(),
      passTouchDownsColumn(),
      passTwoPointConversionsColumn(),
      passInterceptionsColumn(),
      seasonPassSacksColumn(),
      seasonPassSackYardsColumn(),
      seasonPassSackFumblesColumn(),
      seasonPassSackFumblesLostColumn(),
      seasonPassEPAColumn(),
      seasonPassDakotaColumn(),
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
            columnGroupingModel={[
              {
                groupId: 'sack',
                headerName: 'Sack',
                headerAlign: 'center',
                children: [
                  { field: 'stats.pass.sack_fumbles' }, 
                  { field: 'stats.pass.sack_fumbles_lost' },
                  { field: 'stats.pass.sacks' },
                  { field: 'stats.pass.sack_yards' }
                ],
              },
              {
                groupId: 'metrics',
                headerName: 'Metrics',
                headerAlign: 'center',
                children: [
                  { field: 'stats.pass.dakota' }, 
                  { field: 'stats.pass.pass_epa' },
                ],
              },
          ]}
        />
      );
};

export default PlayerPassTable;