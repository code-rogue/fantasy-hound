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
    seasonDefTacklesColumn,
    seasonDefSoloTacklesColumn,
    seasonDefAssistedTacklesColumn,
    seasonDefTacklesForLostColumn,
    seasonDefTackleYardsLostColumn,
    seasonDefFumblesForcedColumn,
    seasonDefFumblesRecoveredColumn,
    seasonDefSackYardsColumn,
    seasonDefQBHitsColumn,
    seasonDefSacksColumn,
    seasonDefIntsColumn,
    seasonDefPassDefendedColumn,
    seasonDefTDsColumn,
    seasonDefSafteyColumn,
    seasonDefPenaltyColumn,
    seasonDefPenaltyYardsColumn,
    seasonDefIntYardsColumn
  } from '@components/players/tables/columns/seasonDefColumns';
  
  const PlayerDefTable: React.FC<PlayerProps> = ({ player }) => {
      const columns: GridColDef[] = [
        seasonColumn(),
        seasonDefTacklesColumn(),
        seasonDefSoloTacklesColumn(),
        seasonDefAssistedTacklesColumn(),
        seasonDefTacklesForLostColumn(),
        seasonDefTackleYardsLostColumn(),
        seasonDefSacksColumn(),
        seasonDefSackYardsColumn(),
        seasonDefQBHitsColumn(),    
        seasonDefFumblesForcedColumn(),
        seasonDefFumblesRecoveredColumn(),
        seasonDefPassDefendedColumn(),
        seasonDefIntsColumn(),
        seasonDefIntYardsColumn(),
        seasonDefTDsColumn(),
        seasonDefSafteyColumn(),
        seasonDefPenaltyColumn(),
        seasonDefPenaltyYardsColumn(),
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
                groupId: 'tackles',
                headerName: 'Tackles',
                headerAlign: 'center',
                children: [
                  { field: 'stats.def.tackles' }, 
                  { field: 'stats.def.tackles_solo' }, 
                  { field: 'stats.def.tackle_with_assists' },
                ],
              },
              {
                groupId: 'tfl',
                headerName: 'TFL',
                headerAlign: 'center',
                children: [
                  { field: 'stats.def.tackles_for_loss' },
                  { field: 'stats.def.tackles_for_loss_yards' }
                ],
              },
              {
                groupId: 'ints',
                headerName: 'Pass Coverage',
                headerAlign: 'center',
                children: [{ field: 'stats.def.interceptions' }, { field: 'stats.def.interception_yards' }, { field: 'stats.def.pass_defended'}],
              },
              {
                groupId: 'penalty',
                headerName: 'Penalties',
                headerAlign: 'center',
                children: [{ field: 'stats.def.penalty' }, { field: 'stats.def.penalty_yards' }],
              },
              {
                groupId: 'sack',
                headerName: 'Sacks',
                headerAlign: 'center',
                children: [{ field: 'stats.def.sacks' }, { field: 'stats.def.sack_yards' }, { field: 'stats.def.qb_hits'}],
              },
              {
                groupId: 'fumbles',
                headerName: 'Fumbles',
                headerAlign: 'center',
                children: [{ field: 'stats.def.fumbles_forced' }, { field: 'stats.def.fumble_recovery_opp' }],
              },
          ]}
        />
      );
  };
  
  export default PlayerDefTable;