import { DataGrid } from '@mui/x-data-grid';
import { PlayerProps } from '@interfaces/models/player';
import React from 'react';
import { gameLogPositionColumns } from '@components/players/tables/columns/gameLogPositionColumns';

const SeasonGameLogTable: React.FC<PlayerProps> = ({ player }) => {
    const columns = gameLogPositionColumns(player);
    
    const weeks = player?.stats[0]?.weeks?.filter(week => week.week > 0 && week.week < 23) ?? [];
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
            rows={weeks}
            sx={{ minHeight: 125}}
        />
      );
};

export default SeasonGameLogTable;