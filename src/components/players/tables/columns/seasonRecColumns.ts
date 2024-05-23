import { PlayerData } from '@interfaces/enums/player_data.enums';
import { formatPlayerData } from '@components/players/utils/playerDataUtils';
import { GridColDef } from '@mui/x-data-grid';
import { SeasonData } from '@interfaces/models/season/season';
            
export function seasonRecRACRColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Receiver Air Conversion Ratio', 
        field: 'stats.rec.rec_air_conversion_ratio', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'RACR', 
        valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.RecRACR, row.stats?.rec?.rec_air_conversion_ratio);
        },
        width: 70,
    }
}

export function seasonRecWOPRColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Weighted Opportunity Rating', 
        field: 'stats.rec.weighted_opportunity_rating', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'WOPR', 
        valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.RecWOPR, row.stats?.rec?.weighted_opportunity_rating);
        },
        width: 70,
    }
}

export function seasonRecEPAColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Total Expected Points Added when receiver was targeted', 
        field: 'stats.rec.rec_epa', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'EPA', 
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.RecEPA, row.stats?.rec?.rec_epa);
        },
        width: 60,
    }
}