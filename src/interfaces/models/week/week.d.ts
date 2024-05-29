import { WeekAdvDef } from '@interfaces/models/week/advanced/weekAdvDef';
import { WeekAdvPass } from '@interfaces/models/week/advanced/weekAdvPass';
import { WeekAdvRec } from '@interfaces/models/week/advanced/weekAdvRec';
import { WeekAdvPass } from '@interfaces/models/week/advanced/weekAdvPass';
import { WeekDef } from '@interfaces/models/week/weekDef';
import { WeekKick } from '@interfaces/models/week/weekKick';
import { WeekPass } from '@interfaces/models/week/weekPass';
import { WeekRec } from '@interfaces/models/week/weekRec';
import { WeekRush } from '@interfaces/models/week/weekRush';
import { WeekNextGenPass } from '@interfaces/models/week/nextGen/weekNextGenPass';
import { WeekNextGenRec } from '@interfaces/models/week/nextGen/weekNextGenRec';
import { WeekNextGenRush } from '@interfaces/models/week/nextGen/weekNextGenRush';

export interface WeekData {
    id: number;
    game_id: number;
    player_id: number;
    season: string;
    week: number;
    game_type: string;
    opponent: string;
    fantasy_points: number;
    fantasy_points_ppr: number;
    advanced: {
        def?: WeekAdvDef,
        pass?: WeekAdvPass,
        rec?: WeekAdvRec,
        rush?: WeekAdvRush,
    }
    nextgen: {
        pass?: WeekNextGenPass,
        rec?: WeekNextGenRec,
        rush?: WeekNextGenRush,
    };
    stats: {
        def?: WeekDef,
        kick?: WeekKick,
        pass?: WeekPass,
        rec?: WeekRec,
        rush?: WeekRush,
    }
}