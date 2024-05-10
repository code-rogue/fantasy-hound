import { SeasonAdvDef } from '@interfaces/models/seasonAdvDef';
import { SeasonAdvPass } from '@interfaces/models/seasonAdvPass';
import { SeasonAdvRec } from '@interfaces/models/seasonAdvRec';
import { SeasonAdvPass } from '@interfaces/models/seasonAdvPass';

export interface SeasonData {
    id?: number,
    player_id?: number,
    season: string,
    age?: number,
    games_played?: number,
    games_started?: number,
    fantasy_points?: number,
    fantasy_points_ppr?: number,
    advanced?: {
        def?: SeasonAdvDef,
        pass?: SeasonAdvPass,
        rec?: SeasonAdvRec,
        rush?: SeasonAdvRush,
    }
  }