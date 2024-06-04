import { DataGrid } from '@mui/x-data-grid';
import { gameLogPositionColumns } from '@components/players/tables/columns/gameLogPositionColumns';
import { PlayerProps } from '@interfaces/models/player';
import React from 'react';

const GameLogTable: React.FC<PlayerProps> = ({ player }) => {
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
        />
      );
};

export default GameLogTable;