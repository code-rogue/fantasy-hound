import { SeasonData } from '@interfaces/models/season/season';
import { UNAVAILABLE } from '@interfaces/constants/player.constants';

export enum PlayerData {
    Age,
    BirthDate,
    Carries,
    Dakota,
    DraftNumber,
    DraftedBy,
    GamesPlayed,
    GameStatus,
    GamesStarted,
    Height,
    JerseyNumber,
    Pass2PT,
    PassAirYards,
    PassAttempts,
    PassCompletions,
    PassEPA,
    PassInt,
    PassSack,
    PassSackFumbles,
    PassSackFumblesLost,
    PassSackYards,
    PassTD,
    PassYards,    
    Points,
    PPRPoints,
    Rec2PT,
    RecAirYards,
    RecAirYardsShare,
    RecEPA,
    Receptions,
    RecFD,
    RecFumbles,
    RecFumblesLost,
    RecRACR,
    RecTargets,
    RecTargetShare,
    RecTD,
    RecWOPR,
    RecYAC,
    RecYards,
    ReturnTD,
    RookieYear,
    Rush2PT,
    RushFD,
    RushFumbles,
    RushFumblesLost,
    RushTD,
    RushYards,
    Season,
    Weight,
    YearsExp
}

export enum CalculatedData {
    PassCompletionPercentage,
    RecptionPercentage,
}

export function formatPlayerData(dataPoint: PlayerData, data?: string | number | null): number | string {
    if (data === undefined || data === null)
        return UNAVAILABLE;
    
    switch (dataPoint) {
        case PlayerData.Age:
        
        case PlayerData.GamesPlayed:
        case PlayerData.GamesStarted:
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

export function formatCalulatedStats(stat: CalculatedData, data?: SeasonData | null): number | string {
    if (data === undefined || data === null || !data.stats)
        return UNAVAILABLE;
    
    switch (stat) {
        case CalculatedData.PassCompletionPercentage: {
            if (!data.stats.pass)
                return UNAVAILABLE;

            let { attempts, completions } = data.stats.pass
            if (!attempts || !completions || attempts === "0") 
              return 0;
            
            return ((parseInt(completions) / parseInt(attempts)) * 100).toFixed(1);
        }
        case CalculatedData.RecptionPercentage: {
            if (!data.stats.rec)
                return UNAVAILABLE;

            let { receptions, targets } = data.stats.rec
            if (!receptions || !targets || targets === "0") 
              return 0;
            
            return (parseInt(receptions) / (parseInt(targets) * 100)).toFixed(1);
        }
        default:
            return UNAVAILABLE;
    }
}
