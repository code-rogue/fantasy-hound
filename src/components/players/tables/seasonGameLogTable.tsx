import { DataGrid,  GridColDef } from '@mui/x-data-grid';
import { PlayerProps } from '@interfaces/models/player';
import React from 'react';
import { 
    weekColumn,
    weekFanastyPointsColumn,
    weekIdColumn,
    weekOpponentColumn
  } from '@components/players/tables/columns/gameLogColumns';
import { 
    passAttemptsAndCompletionsColumn,
    passCompletionPercentColumn,
    passInterceptionsColumn,
    passTouchDownsColumn,
    passTwoPointConversionsColumn,
    passYardsColumn
 } from '@components/players/tables/columns/passColumns';
 import { 
    rushCarriesColumn,
    rushTouchdownsColumn,
    rushYardsColumn 
  } from '@components/players/tables/columns/rushColumns';

 import { fumblesLostColumn } from '@components/players/tables/columns/playerColumns';
const SeasonGameLogTable: React.FC<PlayerProps> = ({ player }) => {
    const columns: GridColDef[] = [
        weekColumn(),
        weekOpponentColumn(),
        passAttemptsAndCompletionsColumn(),
        passCompletionPercentColumn(),
        passYardsColumn(),
        passTouchDownsColumn(),
        passTwoPointConversionsColumn(),
        passInterceptionsColumn(),
        fumblesLostColumn(),
        rushCarriesColumn(),
        rushTouchdownsColumn(),
        rushYardsColumn(),
        weekFanastyPointsColumn(),     
        weekIdColumn()
    ];
    
    const weeks = player?.stats[0]?.weeks?.filter(week => week.week !== null && week.week !== 0) ?? [];
    return (
        <DataGrid
            initialState={{
                columns: {
                    columnVisibilityModel: {
                        id: false,
                    },
                },
            }}
            //autosizeOnMount={true}
            columns={columns}
            density="compact"
            disableColumnMenu={true}
            disableColumnSorting            
            pageSizeOptions={[]}
            rows={weeks}
        />
      );
};

export default SeasonGameLogTable;