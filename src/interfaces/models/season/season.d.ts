import { SeasonAdvDef } from '@interfaces/models/season/advanced/seasonAdvDef';
import { SeasonAdvPass } from '@interfaces/models/season/advanced/seasonAdvPass';
import { SeasonAdvRec } from '@interfaces/models/season/advanced/seasonAdvRec';
import { SeasonAdvPass } from '@interfaces/models/season/advanced/seasonAdvPass';
import { SeasonDef } from '@interfaces/models/season/seasonDef';
import { SeasonKick } from '@interfaces/models/season/seasonKick';
import { SeasonPass } from '@interfaces/models/season/seasonPass';
import { SeasonRec } from '@interfaces/models/season/seasonRec';
import { SeasonRush } from '@interfaces/models/season/seasonRush';
import { weekData } from '@interfaces/models/week/week';
import { TeamData } from '@interfaces/models/team';

export interface SeasonData {
    id?: number,
    player_id?: number,
    season: string,
    age?: number,
    games_played?: number,
    games_started?: number,
    team?; TeamData,
    fantasy_points?: number,
    fantasy_points_ppr?: number,
    advanced?: {
        def?: SeasonAdvDef,
        pass?: SeasonAdvPass,
        rec?: SeasonAdvRec,
        rush?: SeasonAdvRush,
    }
    stats?: {
        def?: SeasonDef,
        kick?: SeasonKick,
        pass?: SeasonPass,
        rec?: SeasonRec,
        rush?: SeasonRush,
    }
    weeks?: weekData[],
  }