import { GridColDef } from '@mui/x-data-grid-premium';
import { NFL_TEAMS, NFL_TEAM_NAMES } from '@interfaces/enums/team.enums';
import { NFL_POSITION_GROUPS } from '@interfaces/enums/position_groups.enums';
import { Player } from '@interfaces/models/player';
import { UNAVAILABLE } from '@interfaces/constants/player.constants';

export function playerIdColumn(): GridColDef {
    return { 
        field: 'id', 
        headerName: 'Player Id', 
        description: 'Player Identifier', 
        filterable: false,
    };
}

export function playerTeamColumn(): GridColDef {
    return { 
        description: 'Team Name', 
        field: 'team.full_name', 
        getOptionValue: (value: any) => value.code,
        getOptionLabel: (value: any) => value.name,
        headerName: 'Team', 
        type: 'singleSelect', 
        valueOptions: [
          {id: 1, code: NFL_TEAMS.ARI, name: NFL_TEAM_NAMES.ARI },
          {id: 2, code: NFL_TEAMS.ATL, name: NFL_TEAM_NAMES.ATL },
          {id: 3, code: NFL_TEAMS.BAL, name: NFL_TEAM_NAMES.BAL },
          {id: 4, code: NFL_TEAMS.BUF, name: NFL_TEAM_NAMES.BUF },
          {id: 5, code: NFL_TEAMS.CAR, name: NFL_TEAM_NAMES.CAR },
          {id: 6, code: NFL_TEAMS.CHI, name: NFL_TEAM_NAMES.CHI },
          {id: 7, code: NFL_TEAMS.CIN, name: NFL_TEAM_NAMES.CIN },
          {id: 8, code: NFL_TEAMS.CLE, name: NFL_TEAM_NAMES.CLE },
          {id: 9, code: NFL_TEAMS.DAL, name: NFL_TEAM_NAMES.DAL },
          {id: 10, code: NFL_TEAMS.DEN, name: NFL_TEAM_NAMES.DEN },
          {id: 11, code: NFL_TEAMS.DET, name: NFL_TEAM_NAMES.DET },
          {id: 12, code: NFL_TEAMS.GB, name: NFL_TEAM_NAMES.GB },
          {id: 13, code: NFL_TEAMS.HOU, name: NFL_TEAM_NAMES.HOU },
          {id: 14, code: NFL_TEAMS.IND, name: NFL_TEAM_NAMES.IND },
          {id: 15, code: NFL_TEAMS.JAX, name: NFL_TEAM_NAMES.JAX },
          {id: 16, code: NFL_TEAMS.KC, name: NFL_TEAM_NAMES.KC },
          {id: 17, code: NFL_TEAMS.LA, name: NFL_TEAM_NAMES.LA },
          {id: 18, code: NFL_TEAMS.LAC, name: NFL_TEAM_NAMES.LAC },
          {id: 19, code: NFL_TEAMS.LV, name: NFL_TEAM_NAMES.LV },
          {id: 20, code: NFL_TEAMS.MIA, name: NFL_TEAM_NAMES.MIA },
          {id: 21, code: NFL_TEAMS.MIN, name: NFL_TEAM_NAMES.MIN },
          {id: 22, code: NFL_TEAMS.NE, name: NFL_TEAM_NAMES.NE },
          {id: 23, code: NFL_TEAMS.NO, name: NFL_TEAM_NAMES.NO },
          {id: 24, code: NFL_TEAMS.NYG, name: NFL_TEAM_NAMES.NYG },
          {id: 25, code: NFL_TEAMS.NYJ, name: NFL_TEAM_NAMES.NYJ },
          {id: 26, code: NFL_TEAMS.PHI, name: NFL_TEAM_NAMES.PHI },
          {id: 27, code: NFL_TEAMS.PIT, name: NFL_TEAM_NAMES.PIT },
          {id: 28, code: NFL_TEAMS.SEA, name: NFL_TEAM_NAMES.SEA },
          {id: 29, code: NFL_TEAMS.SF, name: NFL_TEAM_NAMES.SF },
          {id: 30, code: NFL_TEAMS.TB, name: NFL_TEAM_NAMES.TB },
          {id: 31, code: NFL_TEAMS.TEN, name: NFL_TEAM_NAMES.TEN },
          {id: 32, code: NFL_TEAMS.WAS, name: NFL_TEAM_NAMES.WAS },
        ],
        valueFormatter : (_value, row: Player) => row.team?.full_name ?? UNAVAILABLE,
        width: 300,
    }
}

export function playerPositionGroupColumn(): GridColDef {
    return { 
        description: 'Player Position', 
        field: 'position_group', 
        headerName: 'Position', 
        type: 'singleSelect',
        valueOptions: [
          NFL_POSITION_GROUPS.QB,
          NFL_POSITION_GROUPS.RB,
          NFL_POSITION_GROUPS.TE,
          NFL_POSITION_GROUPS.WR,
          NFL_POSITION_GROUPS.DB,
          NFL_POSITION_GROUPS.DL,
          NFL_POSITION_GROUPS.LB,
          NFL_POSITION_GROUPS.OL,
          NFL_POSITION_GROUPS.SPEC,
        ],
        width: 200,
        valueGetter: (_value, row: Player) => {
            if (row.position_group === NFL_POSITION_GROUPS.SPEC)
                return row.position;

            return row.position_group;
        }
    }
}