import { GridColDef } from '@mui/x-data-grid';
import { SeasonData } from '@interfaces/models/season/season';

export function seasonDefTacklesColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Tackles', 
        field: 'stats.def.tackles', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'TOT', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.tackles; 
        },
        width: 60,
    };
}

export function seasonDefSoloTacklesColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Solo Tackles', 
        field: 'stats.def.tackles_solo', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'SOLO', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.tackles_solo; 
        },
        width: 65,
    };
}

export function seasonDefAssistedTacklesColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Assisted Tackles', 
        field: 'stats.def.tackle_with_assists', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'AST', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.tackle_with_assists; 
        },
        width: 60,
    };
}

export function seasonDefTacklesForLostColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Tackles for Lost', 
        field: 'stats.def.tackles_for_loss', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'TFL', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.tackles_for_loss; 
        },
        width: 60,
    };
}

export function seasonDefTackleYardsLostColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Tackles for Lost Yards', 
        field: 'stats.def.tackles_for_loss_yards', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'YDS', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.tackles_for_loss_yards; 
        },
        width: 60,
    };
}

export function seasonDefFumblesForcedColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Fumbles Forced', 
        field: 'stats.def.fumbles_forced', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'FF', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.fumbles_forced; 
        },
        width: 50,
    };
}

export function seasonDefFumblesRecoveredColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Fumbles Recovered', 
        field: 'stats.def.fumble_recovery_opp', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'REC', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.fumble_recovery_opp; 
        },
        width: 60,
    };
}

export function seasonDefSacksColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Sacks', 
        field: 'stats.def.sacks', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'SCK', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.sacks; 
        },
        width: 60,
    };
}

export function seasonDefSackYardsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Sack Yards', 
        field: 'stats.def.sack_yards', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'YDS', 
        valueGetter: (_v, row: SeasonData) => { 
            return `${row.stats?.def?.sack_yards}`; 
        },
        width: 80,
    };
}

export function seasonDefQBHitsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'QB Hits', 
        field: 'stats.def.qb_hits', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'QBHits', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.qb_hits; 
        },
        width: 75,
    };
}

export function seasonDefIntsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Interceptions', 
        field: 'stats.def.interceptions', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'INT', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.interceptions; 
        },
        width: 65,
    };
}

export function seasonDefIntYardsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Interception Return Yards', 
        field: 'stats.def.interception_yards', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'YDS', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.interception_yards; 
        },
        width: 65,
    };
}

export function seasonDefPassDefendedColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Passes Defended', 
        field: 'stats.def.pass_defended', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'PD', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.pass_defended; 
        },
        width: 60,
    };
}

export function seasonDefTDsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Touchdowns', 
        field: 'stats.def.tds', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'TD', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.tds; 
        },
        width: 50,
    };
}

export function seasonDefSafteyColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Saftey', 
        field: 'stats.def.safety', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'SAF', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.safety; 
        },
        width: 60,
    };
}

export function seasonDefPenaltyColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Penalties', 
        field: 'stats.def.penalty', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'PEN', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.penalty; 
        },
        width: 60,
    };
}

export function seasonDefPenaltyYardsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Penalty Yards', 
        field: 'stats.def.penalty_yards', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'YDS', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.penalty_yards; 
        },
        width: 60,
    };
}