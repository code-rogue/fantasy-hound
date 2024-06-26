import { GridColDef } from '@mui/x-data-grid';
import { SeasonData } from '@interfaces/models/season/season';

export function seasonDefTacklesColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Tackles', 
        field: 'stats.def.tackles', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'Total', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.tackles; 
        },
    };
}

export function seasonDefSoloTacklesColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Solo Tackles', 
        field: 'stats.def.tackles_solo', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'Solo', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.tackles_solo; 
        },
    };
}

export function seasonDefAssistedTacklesColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Assisted Tackles', 
        field: 'stats.def.tackle_with_assists', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'Ast', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.tackle_with_assists; 
        },
    };
}

export function seasonDefTacklesForLostColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Tackles for Lost', 
        field: 'stats.def.tackles_for_loss', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'Total', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.tackles_for_loss; 
        },
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
    };
}

export function seasonDefSacksColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Sacks', 
        field: 'stats.def.sacks', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'Total', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.sacks; 
        },
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
    };
}

export function seasonDefQBHitsColumn(): GridColDef {
    return {
        align: 'center',
        description: 'Quarterback Hits', 
        field: 'stats.def.qb_hits', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'QB Hits', 
        valueGetter: (_v, row: SeasonData) => { 
            return row.stats?.def?.qb_hits; 
        },
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
    };
}