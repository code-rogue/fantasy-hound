import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { PlayerProps } from '@interfaces/models/player';
import React from 'react';
import { 
  seasonColumn, 
  seasonPlayerIdColumn 
} from '@components/players/tables/columns/seasonColumns';
import {
  seasonRecptionsColumn,
  seasonReceptionPercentColumn,
  seasonRecTargetsColumn,
  seasonRecTargetShareColumn,
  seasonRecYardsColumn,
  seasonRecYACColumn,
  seasonRecAirYardsColumn,
  seasonRecAirYardShareColumn,
  seasonRecRACRColumn,
  seasonRecWOPRColumn,
  seasonRecEPAColumn,
  seasonRecTDsColumn,
  seasonRec2PTsColumn,
  seasonRecFirstDownsColumn,
  seasonRecFumblesColumn,
  seasonRecFumblesLostColumn,
} from '@components/players/tables/columns/seasonRecColumns';

const PlayerRecTable: React.FC<PlayerProps> = ({ player }) => {
    const columns: GridColDef[] = [
      seasonColumn(),
      seasonRecTargetsColumn(),
      seasonRecTargetShareColumn(),
      seasonRecptionsColumn(),
      seasonReceptionPercentColumn(),
      seasonRecYardsColumn(),
      seasonRecYACColumn(),
      seasonRecAirYardsColumn(),
      seasonRecAirYardShareColumn(),
      seasonRecRACRColumn(),
      seasonRecWOPRColumn(),
      seasonRecEPAColumn(),
      seasonRecTDsColumn(),
      seasonRec2PTsColumn(),
      seasonRecFirstDownsColumn(),
      seasonRecFumblesColumn(),
      seasonRecFumblesLostColumn(),
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

export default PlayerRecTable;