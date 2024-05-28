import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { PlayerProps } from '@interfaces/models/player';
import React from 'react';
import { 
  seasonColumn, 
  seasonPlayerIdColumn 
} from '@components/players/tables/columns/seasonColumns';
import {
  seasonRecRACRColumn,
  seasonRecWOPRColumn,
  seasonRecEPAColumn,
} from '@components/players/tables/columns/seasonRecColumns';
import {
  recAirYardsColumn,
  recAirYardShareColumn,  
  receptionsColumn,
  receptionPercentColumn,
  recFirstDownsColumn,
  recFumblesColumn,
  recFumblesLostColumn,
  recTargetsColumn,
  recTargetShareColumn,
  recTouchdownsColumn,
  recTwoPointConversionsColumn,
  recYardsColumn,
  recYACColumn,
} from '@components/players/tables/columns/recColumns';
const PlayerRecTable: React.FC<PlayerProps> = ({ player }) => {
    const columns: GridColDef[] = [
      seasonColumn(),
      receptionsColumn(),
      receptionPercentColumn(),
      recTargetsColumn(),
      recTargetShareColumn(),
      recYardsColumn(),
      recTouchdownsColumn(),
      recTwoPointConversionsColumn(),
      recYACColumn(),
      recAirYardsColumn(),
      recAirYardShareColumn(),
      recFirstDownsColumn(),
      recFumblesColumn(),
      recFumblesLostColumn(),
      seasonRecRACRColumn(),
      seasonRecWOPRColumn(),
      seasonRecEPAColumn(),
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
                  groupId: 'airYards',
                  headerName: 'Air Yards',
                  headerAlign: 'center',
                  children: [
                      { field: 'stats.rec.rec_air_yards' }, 
                      { field: 'stats.rec.rec_air_yards_share' },
                  ],
              },
              {
                groupId: 'targets',
                headerName: 'Targets',
                headerAlign: 'center',
                children: [
                    { field: 'stats.rec.targets' }, 
                    { field: 'stats.rec.target_share' },
                ],
              },
              {
                groupId: 'receptions',
                headerName: 'Receptions',
                headerAlign: 'center',
                children: [
                    { field: 'stats.rec.receptions' }, 
                    { field: 'stats.rec' },
                ],
              },
              {
                groupId: 'metrics',
                headerName: 'Metrics',
                headerAlign: 'center',
                children: [
                    { field: 'stats.rec.rec_air_conversion_ratio' }, 
                    { field: 'stats.rec.weighted_opportunity_rating' },
                    { field: 'stats.rec.rec_epa' },
                ],
              },
          ]}
        />
      );
};

export default PlayerRecTable;