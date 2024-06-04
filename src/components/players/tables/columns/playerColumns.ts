import { CalculatedData } from '@interfaces/enums/player_data.enums';
import { formatCalulatedStats } from '@components/players/utils/playerDataUtils';
import { GridColDef } from '@mui/x-data-grid';

export function fumblesLostColumn(): GridColDef {
    return {
        align: 'center', 
        field: 'fumbles_loat', 
        headerAlign: 'center',
        headerName: 'FUML', 
        description: 'Fumbles Lost', 
        filterable: false,
        valueGetter: (_v, row) => {
            return formatCalulatedStats(CalculatedData.FumblesLost, row);
        },
        width: 65,
    }
}