import { CalculatedData, PlayerData } from '@interfaces/enums/player_data.enums';
import { formatCalulatedStats, formatPlayerData } from '@components/players/utils/playerDataUtils';
import { GridColDef } from '@mui/x-data-grid';
import { SeasonData } from '@interfaces/models/season/season';

export function kickTotalColumn(): GridColDef {
    return {
        align: 'center', 
        description: 'Total Field Goal', 
        field: 'stats.kick.fg_att', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'TOT', 
        valueGetter: (_v, row: SeasonData) => {
          return formatCalulatedStats(CalculatedData.KickTotal, row);
        },
        width: 75,
    };
}

export function kickMadePercentageColumn(): GridColDef {
    return {
        align: 'center', 
        description: 'Field Goal Percentage', 
        field: 'stats.kick.fg_pct', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'FG %', 
        valueGetter: (_v, row: SeasonData) => {
          return formatCalulatedStats(CalculatedData.KickPct, row);
        },
        width: 60,
    };
}

export function kickTotalPATColumn(): GridColDef {
    return {
        align: 'center', 
        description: 'Total PATs', 
        field: 'stats.kick.pat_att', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'XP', 
        valueGetter: (_v, row: SeasonData) => {
          return formatCalulatedStats(CalculatedData.KickTotalPAT, row);
        },
        width: 75,
    };
}

export function kickPATPercentageColumn(): GridColDef {
    return {
        align: 'center', 
        description: 'PAT Percentage', 
        field: 'stats.kick.pat_pct', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'XP %', 
        valueGetter: (_v, row: SeasonData) => {
          return formatCalulatedStats(CalculatedData.KickPATPct, row);
        },
        width: 75,
    };
}

export function kickLongColumn(): GridColDef {
    return {
        align: 'center', 
        description: 'Longest Field Goal', 
        field: 'stats.kick.fg_long', 
        filterable: false,
        headerAlign: 'center',
        headerName: 'LONG', 
        valueGetter: (_v, row: SeasonData) => {
          return formatPlayerData(PlayerData.KickLong, row.stats?.kick?.fg_long);
        },
        width: 75,
    };
}

export function kickU40Column(): GridColDef {
    return {
        align: 'center', 
        description: '1-39 Yards', 
        field: 'stats.kick.fg_made_0_19', 
        filterable: false,
        headerAlign: 'center',
        headerName: '1-39', 
        valueGetter: (_v, row: SeasonData) => {
          return formatCalulatedStats(CalculatedData.KickU40, row);
        },
        width: 75,
    };
}

export function kick40Column(): GridColDef {
    return {
        align: 'center', 
        description: '40-49 Yard Field Goals',
        field: 'stats.kick.fg_made_40_49', 
        filterable: false,
        headerAlign: 'center',
        headerName: '40-49', 
        valueGetter: (_v, row: SeasonData) => {
          return formatCalulatedStats(CalculatedData.Kick40, row);
        },
        width: 75,
    };
}

export function kick50Column(): GridColDef {
    return {
        align: 'center', 
        description: '50-59 Yard Field Goals',
        field: 'stats.kick.fg_made_50_59', 
        filterable: false,
        headerAlign: 'center',
        headerName: '50-59', 
        valueGetter: (_v, row: SeasonData) => {
          return formatCalulatedStats(CalculatedData.Kick50, row);
        },
        width: 75,
    };
}

export function kick60Column(): GridColDef {
    return {
        align: 'center', 
        description: '60+ Yard Field Goals',
        field: 'stats.kick.fg_made_60_', 
        filterable: false,
        headerAlign: 'center',
        headerName: '60+', 
        valueGetter: (_v, row: SeasonData) => {
          return formatCalulatedStats(CalculatedData.Kick60, row);
        },
        width: 75,
    };
}