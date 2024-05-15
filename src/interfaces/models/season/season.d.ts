import { SeasonAdvDef } from '@interfaces/models/season/advanced/seasonAdvDef';
import { SeasonAdvPass } from '@interfaces/models/season/advanced/seasonAdvPass';
import { SeasonAdvRec } from '@interfaces/models/season/advanced/seasonAdvRec';
import { SeasonAdvPass } from '@interfaces/models/season/advanced/seasonAdvPass';
import { SeasonDef } from '@interfaces/models/season/seasonDef';
import { SeasonKick } from '@interfaces/models/season/seasonKick';
import { SeasonPass } from '@interfaces/models/season/seasonPass';
import { SeasonRec } from '@interfaces/models/season/seasonRec';
import { SeasonRush } from '@interfaces/models/season/seasonRush';
export interface SeasonData {
    id?: number,
    player_id?: number,
    season: string,
    age?: number,
    games_played?: number,
    games_started?: number,
    fantasy_points?: number,
    fantasy_points_ppr?: number,
    stats?: {
        def?: SeasonDef,
        kick?: SeasonKick,
        pass?: SeasonPass,
        rec?: SeasonRec,
        rush?: SeasonRush,
    }
    advanced?: {
        def?: SeasonAdvDef,
        pass?: SeasonAdvPass,
        rec?: SeasonAdvRec,
        rush?: SeasonAdvRush,
    }
  }