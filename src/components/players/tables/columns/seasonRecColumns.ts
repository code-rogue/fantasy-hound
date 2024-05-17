import { 
    CalculatedData, 
    formatCalulatedStats,
    formatPlayerData, 
    PlayerData
} from '@components/players/utils/playerDataUtils';
import { GridColDef } from '@mui/x-data-grid';
import { SeasonData } from '@interfaces/models/season/season';

export function seasonRecTargetsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Targets', 
        field: 'stats.rec.targets', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'TGT', 
        valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.RecTargets, row.stats?.rec?.targets);
        },
        width: 65,
    }
}

export function seasonRecTargetShareColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Target Share', 
        field: 'stats.rec.target_share', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'TGT %', 
        valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.RecTargetShare, row.stats?.rec?.target_share);
        },
        width: 70,
    }
}

export function seasonRecptionsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Receptions',
        field: 'stats.rec.receptions', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'REC',
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.Receptions, row.stats?.rec?.receptions);
        },
        width: 60,
    }
}

export function seasonReceptionPercentColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Reception %',
        field: 'stats.rec', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'REC %', 
        valueGetter: (_v, row: SeasonData) => {
        return formatCalulatedStats(CalculatedData.RecptionPercentage, row);
        },
        width: 70,
    }
} 

export function seasonRecYardsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Receiving Yards', 
        field: 'stats.rec.rec_yards', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'YDS', 
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.RecYards, row.stats?.rec?.rec_yards);
        },
        width: 60,
    }
}

export function seasonRecYACColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Yards After the Catch', 
        field: 'stats.rec.rec_yards_after_catch', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'YAC', 
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.RecYAC, row.stats?.rec?.rec_yards_after_catch);
        },
        width: 60,
    }
}

export function seasonRecAirYardsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Air Yards', 
        field: 'stats.rec.rec_air_yards', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'AY', 
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.RecAirYards, row.stats?.rec?.rec_air_yards);
    },
    width: 60,
    }
}
          
export function seasonRecAirYardShareColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Air Yards Share', 
        field: 'stats.rec.rec_air_yards_share', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'AYS', 
        valueGetter: (_v, row: SeasonData) => {
        return formatPlayerData(PlayerData.RecAirYardsShare, row.stats?.rec?.rec_air_yards_share);
        },
        width: 60,
    }
}
            
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
        width: 65,
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

export function seasonRecTDsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Touchdowns', 
        field: 'stats.rec.rec_tds', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'TD', 
        valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.RecTD, row.stats?.rec?.rec_tds);
        },
        width: 60,
    }
}
            
export function seasonRec2PTsColumn(): GridColDef {
    return {
        align: 'center',
        description: '2pt Conversions',
        field: 'stats.rec.rec_two_pt_conversions', 
        filterable: false,
        headerName: '2PT',
        headerAlign: 'center',
        valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.Rec2PT, row.stats?.rec?.rec_two_pt_conversions);
        },
        width: 60,
    }
}

export function seasonRecFirstDownsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Receptions which result in a First Down', 
        field: 'stats.rec.rec_first_downs', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'FD', 
        valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.RecFD, row.stats?.rec?.rec_first_downs);
        },
        width: 60,
    }
}
            
export function seasonRecFumblesColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Fumbles', 
        field: 'stats.rec.rec_fumbles',
        filterable: false,
        headerAlign: 'center',
        headerName: 'FUM', 
        valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.RecFumbles, row.stats?.rec?.rec_fumbles);
        },
        width: 60,
    }
}

export function seasonRecFumblesLostColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Fumbles Lost', 
        field: 'stats.rec.rec_fumbles_lost',
        filterable: false,
        headerAlign: 'center',
        headerName: 'LST', 
        valueGetter: (_v, row: SeasonData) => {
            return formatPlayerData(PlayerData.RecFumblesLost, row.stats?.rec?.rec_fumbles_lost);
        },
        width: 60,
    }
}