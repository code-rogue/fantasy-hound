import { SeasonData } from '@interfaces/models/season/season';
import { TeamData } from '@interfaces/models/team';

export interface Player {
    id: number,
    career_status: string,
    game_status_abbr: string,
    game_status: string,
    esb_id: string,
    gsis_id: string,
    gsis_it_id: string,
    smart_id: string,
    full_name: string,
    first_name: string,
    last_name: string,
    short_name: string,
    suffix: string,
    birth_date: string | null,
    college: string,
    college_conference: string,
    height: string | null,
    weight: string | null,
    headshot_url: string,
    position_group: string,
    position: string,
    jersey_number: string | null,
    years_of_experience: string | null,
    team?: TeamData,
    rookie_year: string,
    draft_team: TeamData,
    draft_number: string,
    draft_round: string,
    season: string,
    stats: SeasonData[],
}

export interface PlayerProps {
  player?: Player;
}

export interface PlayerLogProps extends PlayerProps {
  display: string
}


export interface PlayerSearchProps {
    status: boolean;
    statusCallback: function;
    position: string;
    positionCallback: function;
  }