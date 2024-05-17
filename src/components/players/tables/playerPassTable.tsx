import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { PlayerProps } from '@interfaces/models/player';
import React from 'react';

import { 
  seasonColumn, 
  seasonPlayerIdColumn 
} from '@components/players/tables/columns/seasonColumns';

import {
  seasonPassAttemptsColumn,
  seasonPassCompletionsColumn,
  seasonPassCompletionPercentColumn,
  seasonPassYardsColumn,
  seasonPassAirYardsColumn,
  seasonPassEPAColumn,
  seasonPassDakotaColumn,
  seasonPassTDsColumn,
  seasonPass2PTsColumn,
  seasonPassINTsColumn,
  seasonPassSackFumblesColumn,
  seasonPassSackFumblesLostColumn,
  seasonPassSacksColumn,
  seasonPassSackYardsColumn
} from '@components/players/tables/columns/seasonPassColumns';

const PlayerPassTable: React.FC<PlayerProps> = ({ player }) => {
    const columns: GridColDef[] = [
      seasonColumn(),
      seasonPassAttemptsColumn(),
      seasonPassCompletionsColumn(),
      seasonPassCompletionPercentColumn(),
      seasonPassYardsColumn(),
      seasonPassAirYardsColumn(),
      seasonPassEPAColumn(),
      seasonPassDakotaColumn(),
      seasonPassTDsColumn(),
      seasonPass2PTsColumn(),
      seasonPassINTsColumn(),
      seasonPassSackFumblesColumn(),
      seasonPassSackFumblesLostColumn(),
      seasonPassSacksColumn(),
      seasonPassSackYardsColumn(),
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

export default PlayerPassTable;