import { SeasonData } from '@interfaces/models/season/season';
import { UNAVAILABLE } from '@interfaces/constants/player.constants';
import { CalculatedData, PlayerData } from '@interfaces/enums/player_data.enums';

export function formatPlayerData(dataPoint: PlayerData, data?: string | number | null): number | string {
    if (data === undefined || data === null)
        return UNAVAILABLE;
    
    switch (dataPoint) {
        case PlayerData.Age:
        case PlayerData.GamesPlayed:
        case PlayerData.GameStatus:
        case PlayerData.GamesStarted:
        case PlayerData.KickLong:
        case PlayerData.PassAirYards:
        case PlayerData.PassSack:
        case PlayerData.PassSackYards:
        case PlayerData.PassYards:
        case PlayerData.RecAirYards:
        case PlayerData.RecAirYardsShare:
        case PlayerData.Receptions:
        case PlayerData.RecTargets:
        case PlayerData.RecYAC:
        case PlayerData.RecYards:
        {
            return data;
        }
        case PlayerData.DraftedBy:
        {
            if(typeof data === 'string') {
                if(data === "")
                    return UNAVAILABLE;
            }

            return data;
        }
        case PlayerData.Dakota: 
        {
            let dakota = data
            if(typeof dakota === 'string')
                dakota = parseFloat(dakota);

            return (data as number).toFixed(2);
        }
        case PlayerData.DraftNumber: 
        {
            let drafted = data;
            if(typeof drafted === 'string') {
                if(drafted === "")
                    return UNAVAILABLE;

                drafted = parseInt(drafted);
            }

            const round = Math.ceil(drafted / 32);
            const pick = drafted % 32;
            return `${round}:${pick} - ${drafted} Overall`;
        }
        case PlayerData.Height: 
        {
            let inches = data;
            if(typeof inches === 'string')
                inches = parseFloat(inches);

            const feet = Math.floor(inches / 12);
            inches %= 12;
            return `${feet}' ${inches}"`;
        }
        
        case PlayerData.PassEPA: 
        case PlayerData.Points:
        case PlayerData.PPRPoints:
        case PlayerData.RecEPA: 
        {
            if(typeof data === 'string')
                return parseFloat(data).toFixed(2);
            
            return data.toFixed(2);
        }
        case PlayerData.Carries:
        case PlayerData.KickAttemps:
        case PlayerData.KickBlocked:
        case PlayerData.KickMade:
        case PlayerData.KickMissed:
        case PlayerData.Pass2PT:
        case PlayerData.PassAttempts:
        case PlayerData.PassCompletions:
        case PlayerData.PassInt:
        case PlayerData.PassSackFumbles:
        case PlayerData.PassSackFumblesLost:
        case PlayerData.PassTD:
        case PlayerData.Rec2PT:
        case PlayerData.RecFD:
        case PlayerData.RecFumbles:
        case PlayerData.RecFumblesLost:
        case PlayerData.RecTD:
        case PlayerData.ReturnTD:
        case PlayerData.RookieYear:
        case PlayerData.Rush2PT:
        case PlayerData.RushCarries:
        case PlayerData.RushFD:
        case PlayerData.RushFumbles:
        case PlayerData.RushFumblesLost:
        case PlayerData.RushTD:
        case PlayerData.RushYards:
        case PlayerData.Season:
        {
            if(typeof data === 'string')
                return parseInt(data);

            return data;
        }
        case PlayerData.RecRACR:
        case PlayerData.RecTargetShare:
        case PlayerData.RecWOPR:
        {
            let rawData = data
            if(typeof rawData === 'string')
                rawData = parseFloat(rawData);

            return (rawData * 100).toFixed(1);
        }
        case PlayerData.Weight: 
        {
            let weight = data;
            if(typeof weight === 'string')
                weight = parseFloat(weight);

            return `${weight} lbs`;
        }
        default:
            return data;
    }
}

export function formatKickTotals(made?: string | null , missed?: string | null): string {
    if (made === undefined || made === null|| missed === undefined || missed === null)
        return UNAVAILABLE;
    
    const total = parseInt(made) + parseInt(missed);
    return `${made}/${total}`;
}

export function formatCalulatedStats(stat: CalculatedData, data?: SeasonData | null): number | string {
    if (data === undefined || data === null || !data.stats)
        return UNAVAILABLE;
    
    switch (stat) {
        case CalculatedData.KickPct: {
            if (!data.stats.kick) 
                return UNAVAILABLE;

            const { fg_att, fg_made } = data.stats.kick;
            if (fg_att == null || fg_made === null)
                return 0;

            return ((parseInt(fg_made) / parseInt(fg_att)) * 100).toFixed(1);
        }
        case CalculatedData.KickPATPct: {
            if (!data.stats.kick) 
                return UNAVAILABLE;

            const { pat_att, pat_made } = data.stats.kick;
            if (pat_att == null || pat_made === null)
                return 0;

            return ((parseInt(pat_made) / parseInt(pat_att)) * 100).toFixed(1);
        }
        case CalculatedData.KickU40: {
            if (!data.stats.kick) 
                return UNAVAILABLE;

            const { kick } = data.stats;
            const made = parseInt(kick?.fg_made_0_19 ?? '0') + parseInt(kick?.fg_made_20_29 ?? '0') + parseInt(kick?.fg_made_30_39 ?? '0');
            const missed = parseInt(kick?.fg_missed_0_19 ?? '0') + parseInt(kick?.fg_missed_20_29 ?? '0') + parseInt(kick?.fg_missed_30_39 ?? '0');
            return formatKickTotals(made.toString(), missed.toString());
        }
        case CalculatedData.Kick40: {
            return formatKickTotals(data.stats.kick?.fg_made_40_49, data.stats.kick?.fg_missed_40_49);
        }
        case CalculatedData.Kick50: {
            return formatKickTotals(data.stats.kick?.fg_made_50_59, data.stats.kick?.fg_missed_50_59);
        }
        case CalculatedData.Kick60: {
            return formatKickTotals(data.stats.kick?.fg_made_60_, data.stats.kick?.fg_missed_60_);
        }
        case CalculatedData.KickTotal: {
            if (!data.stats.kick) 
                return UNAVAILABLE;
            
            const { fg_made: made, fg_missed: missed, } = data.stats.kick;
            return formatKickTotals(made, missed);
        }
        case CalculatedData.KickTotalPAT: {
            if (!data.stats.kick) 
                return UNAVAILABLE;
            
            const { pat_made: made, pat_missed: missed, } = data.stats.kick;
            return formatKickTotals(made, missed);
        }
        case CalculatedData.PassCompletionPercentage: {
            if (!data.stats.pass)
                return UNAVAILABLE;

            let { attempts, completions } = data.stats.pass
            if (!attempts || !completions || attempts === "0") 
              return 0;
            
            return ((parseInt(completions) / parseInt(attempts)) * 100).toFixed(1);
        }
        case CalculatedData.PointsPerGame: {
            let points = data?.fantasy_points ?? 0;
            let games = data?.games_played ?? 16;
            games = (games !== 0) ? games : 16;
            
            return (points / games).toFixed(1);
        }
        case CalculatedData.PPRPointsPerGame: {
            let games = data?.games_played ?? 16;
            let points = data?.fantasy_points_ppr ?? 0;
            if (games === 0)
                games = 16;

            return (points / games).toFixed(1);
        }
        case CalculatedData.RecptionPercentage: {
            if (!data.stats.rec)
                return UNAVAILABLE;

            let { receptions, targets } = data.stats.rec
            if (!receptions || !targets || targets === "0") 
              return 0;
            
            return ((parseInt(receptions) / (parseInt(targets)) * 100)).toFixed(1);
        }
        case CalculatedData.RushYardsPerCarry: {
            if (!data.stats.rush)
                return UNAVAILABLE;

            let { carries, rush_yards } = data.stats.rush
            if (!carries || !rush_yards || carries === "0") 
              return 0;
            
            return (rush_yards / parseInt(carries)).toFixed(1);
        }
        default:
            return UNAVAILABLE;
    }
}
