import { PlayerStatDefinition, StatDefinition } from "@interfaces/player_stat";
import { 
    PlayerStatLabels, 
    PlayerStats, 
    PlayerStatsTypes, 
    StatTypeLabel as Type,
    StatCategoryLabel as Cat,
    StatLabel as Stat
} from "@interfaces/enums/player_stat.enums";
import { WeekData } from "@interfaces/models/week/week";

export const PassingStats: StatDefinition[] = [
    {
        id: PlayerStats.Attempts,
        label: PlayerStatLabels.Attempts,
    },
    {
        id: PlayerStats.PassAggressive,
        label: PlayerStatLabels.PassAggressive,
    },
    {
        id: PlayerStats.PassAirConvRatio,
        label: PlayerStatLabels.PassAirConvRatio,
    },
    {
        id: PlayerStats.PassAirYards,
        label: PlayerStatLabels.PassAirYards,
    },
    {
        id: PlayerStats.PassAvgAirYards,
        label: PlayerStatLabels.PassAvgAirYards,
    },
    {
        id: PlayerStats.PassAvgAirYardsCompleted,
        label: PlayerStatLabels.PassAvgAirYardsCompleted,
    },
    {
        id: PlayerStats.PassAvgAirYardsIntended,
        label: PlayerStatLabels.PassAvgAirYardsIntended,
    },
    {
        id: PlayerStats.PassAvgAirYardsToSticks,
        label: PlayerStatLabels.PassAvgAirYardsToSticks,
    },    
    {
        id: PlayerStats.PassCompletionPct,
        label: PlayerStatLabels.PassCompletionPct,
    },
    {
        id: PlayerStats.Completions,
        label: PlayerStatLabels.Completions,
    },
    {
        id: PlayerStats.PassCompletionsAboveExpected,
        label: PlayerStatLabels.PassCompletionsAboveExpected,
    },
    {
        id: PlayerStats.PassCompletionsExpectedPct,
        label: PlayerStatLabels.PassCompletionsExpectedPct,
    },
    {
        id: PlayerStats.PassDakota,
        label: PlayerStatLabels.PassDakota,
    },
    {
        id: PlayerStats.PassMaxAirYardsCompleted,
        label: PlayerStatLabels.PassMaxAirYardsCompleted,
    },
    {
        id: PlayerStats.PassMaxAirYardsIntended,
        label: PlayerStatLabels.PassMaxAirYardsIntended,
    },
    {
        id: PlayerStats.PassDropPct,
        label: PlayerStatLabels.PassDropPct,
    },
    {
        id: PlayerStats.PassDrops,
        label: PlayerStatLabels.PassDrops,
    },
    {
        id: PlayerStats.PassEPA,
        label: PlayerStatLabels.PassEPA,
    },
    {
        id: PlayerStats.PassInterceptions,
        label: PlayerStatLabels.PassInterceptions,
    },
    {
        id: PlayerStats.PassPressured,
        label: PlayerStatLabels.PassPressured,
    },
    {
        id: PlayerStats.PassQBR,
        label: PlayerStatLabels.PassQBR,
    },
    {
        id: PlayerStats.PassBlitzed,
        label: PlayerStatLabels.PassBlitzed,
    },
    {
        id: PlayerStats.PassHit,
        label: PlayerStatLabels.PassHit,
    },
    {
        id: PlayerStats.PassHurried,
        label: PlayerStatLabels.PassHurried,
    },
    {
        id: PlayerStats.PassPressured,
        label: PlayerStatLabels.PassPressured,
    },
    {
        id: PlayerStats.PassTDs,
        label: PlayerStatLabels.PassTDs,
    },
    {
        id: PlayerStats.PassYards,
        label: PlayerStatLabels.PassYards,
    },
    {
        id: PlayerStats.PassYAC,
        label: PlayerStatLabels.PassYAC,
    },    
    {
        id: PlayerStats.Sacks,
        label: PlayerStatLabels.Sacks,
    },
]

export const ReceivingStats: StatDefinition[] = [
    {
        id: PlayerStats.RecACR,
        label: PlayerStatLabels.RecACR,
    },
    {
        id: PlayerStats.RecAirYards,
        label: PlayerStatLabels.RecAirYards,
    },
    {
        id: PlayerStats.RecAvgCushion,
        label: PlayerStatLabels.RecAvgCushion,
    },
    {
        id: PlayerStats.RecAvgExpectedYAC,
        label: PlayerStatLabels.RecAvgExpectedYAC,
    },
    {
        id: PlayerStats.RecAvgSeperation,
        label: PlayerStatLabels.RecAvgSeperation,
    },
    {
        id: PlayerStats.RecCatchPercentage,
        label: PlayerStatLabels.RecCatchPercentage,
    },
    {
        id: PlayerStats.RecDrops,
        label: PlayerStatLabels.RecDrops,
    },
    {
        id: PlayerStats.RecEPA,
        label: PlayerStatLabels.RecEPA,
    },
    {
        id: PlayerStats.RecIntendedAirYards,
        label: PlayerStatLabels.RecIntendedAirYards,
    },
    {
        id: PlayerStats.RecQBR,
        label: PlayerStatLabels.RecQBR,
    },
    {
        id: PlayerStats.RecTDs,
        label: PlayerStatLabels.RecTDs,
    },
    {
        id: PlayerStats.Receptions,
        label: PlayerStatLabels.Receptions,
    },
    {
        id: PlayerStats.RecIntendedAirYardsShare,
        label: PlayerStatLabels.RecIntendedAirYardsShare,
    },
    {
        id: PlayerStats.Targets,
        label: PlayerStatLabels.Targets,
    },
    {
        id: PlayerStats.TargetShare,
        label: PlayerStatLabels.TargetShare,
    },
    {
        id: PlayerStats.RecYards,
        label: PlayerStatLabels.RecYards,
    },
    {
        id: PlayerStats.RecYAC,
        label: PlayerStatLabels.RecYAC,
    },
]

export const RushingStats: StatDefinition[] = [
    {
        id: PlayerStats.Rush8Box,
        label: PlayerStatLabels.Rush8Box,
    },
    {
        id: PlayerStats.RushAvgYAC,
        label: PlayerStatLabels.RushAvgYAC,
    },
    {
        id: PlayerStats.RushAvgYBC,
        label: PlayerStatLabels.RushAvgYBC,
    },
    {
        id: PlayerStats.Carries,
        label: PlayerStatLabels.Carries,
    },
    {
        id: PlayerStats.RushEfficiency,
        label: PlayerStatLabels.RushEfficiency,
    },
    {
        id: PlayerStats.RushEPA,
        label: PlayerStatLabels.RushEPA,
    },
    {
        id: PlayerStats.RushTDs,
        label: PlayerStatLabels.RushTDs,
    },
    {
        id: PlayerStats.RushLoS,
        label: PlayerStatLabels.RushLoS,
    },
    {
        id: PlayerStats.RushYards,
        label: PlayerStatLabels.RushYards,
    },
    {
        id: PlayerStats.RushYAC,
        label: PlayerStatLabels.RushYAC,
    },
    {
        id: PlayerStats.RushYBC,
        label: PlayerStatLabels.RushYBC,
    },
    {
        id: PlayerStats.RushYPC,
        label: PlayerStatLabels.RushYPC,
    },
]

export function statDefinitionsByType(statType: PlayerStatsTypes): StatDefinition[] {
    switch(statType) {
        case PlayerStatsTypes.Passing:
            return PassingStats;
        case PlayerStatsTypes.Receiving:
                return ReceivingStats;
        case PlayerStatsTypes.Rushing:
            return RushingStats;
        default: 
            return ReceivingStats;
    }
}

export function statTooltipFormatter(
    stat: PlayerStats | null, 
    value: number | null, 
    avgValue: number | null
): string {
    if(value === null)
        return '';

    if(stat === null)
        return value.toString();

    const avg = valueWithAvgFormatter(value, avgValue);
    switch(stat) {
        case PlayerStats.Attempts:
        case PlayerStats.Carries:
        case PlayerStats.Completions:
        case PlayerStats.PassBadThrows:
        case PlayerStats.PassBlitzed:
        case PlayerStats.PassDrops:
        case PlayerStats.PassHit:
        case PlayerStats.PassHurried:
        case PlayerStats.PassInterceptions:
        case PlayerStats.PassPressured:
        case PlayerStats.PassYAC:
        case PlayerStats.PassYards:
        case PlayerStats.RecDrops:
        case PlayerStats.Receptions:
        case PlayerStats.Sacks:
        case PlayerStats.Targets:
            return `${value}\n${avg}`;
        case PlayerStats.PassAggressive:
        case PlayerStats.PassAirConvRatio:
        case PlayerStats.PassDakota:        
        case PlayerStats.RecACR:        
        case PlayerStats.RushEfficiency:
        case PlayerStats.RecCatchPercentage:
        case PlayerStats.RecQBR:
        case PlayerStats.Rush8Box:
            return `${value.toFixed(1)}\n${avg}`;
        case PlayerStats.PassAvgAirYards:
        case PlayerStats.PassAvgAirYardsCompleted:
        case PlayerStats.PassAvgAirYardsIntended:
        case PlayerStats.PassAvgAirYardsToSticks:
        case PlayerStats.PassMaxAirYardsCompleted:
        case PlayerStats.PassMaxAirYardsIntended:
        case PlayerStats.RecAirYards:
        case PlayerStats.RecAvgCushion:
        case PlayerStats.RecAvgSeperation:
        case PlayerStats.RecAvgExpectedYAC:
        case PlayerStats.RecIntendedAirYards:
        case PlayerStats.RushYPC:
            return `${value.toFixed(1)} Yards\n${avg}`;
        case PlayerStats.PassAvgTimeToThrow:
        case PlayerStats.RushLoS:
            return `${value.toFixed(1)} sec\n${avg}`;
        case PlayerStats.PassBadThrowPct:
        case PlayerStats.PassCompletionsExpectedPct:
        case PlayerStats.PassDropPct:
        case PlayerStats.PassPressuredPct:
        case PlayerStats.RecIntendedAirYardsShare:
        case PlayerStats.TargetShare:
            return `${(value * 100).toFixed(1)}%\n${avg}`;
        case PlayerStats.PassCompletionsAboveExpected:
        case PlayerStats.PassCompletionPct:
            return `${value.toFixed(1)}%\n${avg}`;
        case PlayerStats.PassEPA:
        case PlayerStats.RushEPA:
        case PlayerStats.RecEPA:
            return `${value.toFixed(2)}\n${avg}`;
        case PlayerStats.PassTDs:
        case PlayerStats.RushTDs:
        case PlayerStats.RecTDs:
            return `${value} TDs\n${avg}`;
        case PlayerStats.PassAirYards:
        case PlayerStats.RecYAC:
        case PlayerStats.RecYards:
        case PlayerStats.RushAvgYAC:
        case PlayerStats.RushAvgYBC:
        case PlayerStats.RushYAC:
        case PlayerStats.RushYBC:
        case PlayerStats.RushYards:
            return `${value} Yards\n${avg}`;
        default: 
            return value.toString();
    }
}

export function valueWithAvgFormatter(value: number | null, avg: number | null): string {
    if(value === null )
        return '';

    if(avg === null || avg === 0)
        return value.toString();

    const diff = (value - avg);
    const sign = (diff > 0) ? '+' : ' ';
    return `[ ${sign}${diff.toFixed(2)} (${((diff/avg) * 100).toFixed(1)}%) ]`;
}

export function getPlayerStatDefinition(stat: PlayerStats): PlayerStatDefinition  {
    switch(stat) {
        case PlayerStats.Attempts:
            return { category: Cat.Stats, type: Type.Pass, name: Stat.Attempts }
        case PlayerStats.Carries:
            return { category: Cat.Stats, type: Type.Rush, name: Stat.Carries }
        case PlayerStats.Completions:
            return { category: Cat.Stats, type: Type.Pass, name: Stat.Completions }
        case PlayerStats.PassAggressive:
            return { category: Cat.NextGen, type: Type.Pass, name: Stat.PassAggressive }
        case PlayerStats.PassAirConvRatio:
            return { category: Cat.Stats, type: Type.Pass, name: Stat.PassAirConvRatio }
        case PlayerStats.PassAirYards:
            return { category: Cat.Stats, type: Type.Pass, name: Stat.PassAirYards }
        case PlayerStats.PassAvgAirYards:
            return { category: Cat.NextGen, type: Type.Pass, name: Stat.PassAvgAirYards }
        case PlayerStats.PassAvgAirYardsCompleted:
            return { category: Cat.NextGen, type: Type.Pass, name: Stat.PassAvgAirYardsCompleted }
        case PlayerStats.PassAvgAirYardsIntended:
            return { category: Cat.NextGen, type: Type.Pass, name: Stat.PassAvgAirYardsIntended }
        case PlayerStats.PassAvgAirYardsToSticks:
            return { category: Cat.NextGen, type: Type.Pass, name: Stat.PassAvgAirYardsToSticks }
        case PlayerStats.PassAvgTimeToThrow:
            return { category: Cat.NextGen, type: Type.Pass, name: Stat.PassAvgTimeToThrow }
        case PlayerStats.PassBadThrowPct:
            return { category: Cat.Advanced, type: Type.Pass, name: Stat.PassBadThrowPct }
        case PlayerStats.PassBadThrows:
            return { category: Cat.Advanced, type: Type.Pass, name: Stat.PassBadThrows }
        case PlayerStats.PassBlitzed:
            return { category: Cat.Advanced, type: Type.Pass, name: Stat.PassBlitzed }
        case PlayerStats.PassCompletionPct:
            return { category: Cat.NextGen, type: Type.Pass, name: Stat.PassCompletionPct }
        case PlayerStats.PassCompletionsAboveExpected:
            return { category: Cat.NextGen, type: Type.Pass, name: Stat.PassCompletionsAboveExpected }
        case PlayerStats.PassCompletionsExpectedPct:
            return { category: Cat.NextGen, type: Type.Pass, name: Stat.PassCompletionsExpectedPct }
        case PlayerStats.PassDakota:
            return { category: Cat.Stats, type: Type.Pass, name: Stat.PassDakota }
        case PlayerStats.PassDropPct:
            return { category: Cat.Advanced, type: Type.Pass, name: Stat.PassDropPct }
        case PlayerStats.PassDrops:
            return { category: Cat.Advanced, type: Type.Pass, name: Stat.PassDrops }
        case PlayerStats.PassEPA:
            return { category: Cat.Stats, type: Type.Pass, name: Stat.PassEPA }
        case PlayerStats.PassHit:
            return { category: Cat.Advanced, type: Type.Pass, name: Stat.PassHit }
        case PlayerStats.PassHurried:
            return { category: Cat.Advanced, type: Type.Pass, name: Stat.PassHurried }
        case PlayerStats.PassInterceptions:
            return { category: Cat.Stats, type: Type.Pass, name: Stat.PassInterceptions }
        case PlayerStats.PassMaxAirYardsCompleted:
            return { category: Cat.NextGen, type: Type.Pass, name: Stat.PassMaxAirYardsCompleted }
        case PlayerStats.PassMaxAirYardsIntended:
            return { category: Cat.NextGen, type: Type.Pass, name: Stat.PassMaxAirYardsIntended }
        case PlayerStats.PassQBR:
            return { category: Cat.NextGen, type: Type.Pass, name: Stat.PassQBR }
        case PlayerStats.PassPressured:
            return { category: Cat.Advanced, type: Type.Pass, name: Stat.PassPressured }
        case PlayerStats.PassPressuredPct:
            return { category: Cat.Advanced, type: Type.Pass, name: Stat.PassPressuredPct }
        case PlayerStats.Sacks:
            return { category: Cat.Stats, type: Type.Pass, name: Stat.Sacks }
        case PlayerStats.PassTDs:
            return { category: Cat.Stats, type: Type.Pass, name: Stat.PassTDs }
        case PlayerStats.PassYAC:
            return { category: Cat.Stats, type: Type.Pass, name: Stat.PassYAC }
        case PlayerStats.PassYards:
            return { category: Cat.Stats, type: Type.Pass, name: Stat.PassYards }
        case PlayerStats.RecACR:
            return { category: Cat.Stats, type: Type.Rec, name: Stat.RecAirConvRatio }
        case PlayerStats.RecAvgCushion:
            return { category: Cat.NextGen, type: Type.Rec, name: Stat.RecAvgCushion }
        case PlayerStats.RecAvgExpectedYAC:
            return { category: Cat.NextGen, type: Type.Rec, name: Stat.RecAvgIntendedAirYards }
        case PlayerStats.RecAvgSeperation:
            return { category: Cat.NextGen, type: Type.Rec, name: Stat.RecAvgSeparation }
        case PlayerStats.RecAirYards:
            return { category: Cat.Stats, type: Type.Rec, name: Stat.RecAirYards }
        case PlayerStats.RecCatchPercentage:
            return { category: Cat.NextGen, type: Type.Rec, name: Stat.RecCatchPct }
        case PlayerStats.RecIntendedAirYards:
            return { category: Cat.NextGen, type: Type.Rec, name: Stat.RecAvgIntendedAirYards }
        case PlayerStats.RecIntendedAirYardsShare:
            return { category: Cat.NextGen, type: Type.Rec, name: Stat.RecIntendedAirYardsShare }
        case PlayerStats.RecDrops:
            return { category: Cat.Advanced, type: Type.Rec, name: Stat.RecDrops }
        case PlayerStats.RecEPA:
            return { category: Cat.Stats, type: Type.Rec, name: Stat.RecEPA }
        case PlayerStats.RecQBR:
            return { category: Cat.Advanced, type: Type.Rec, name: Stat.RecQBR }
        case PlayerStats.RecTDs:
            return { category: Cat.Stats, type: Type.Rec, name: Stat.RecTDs }        
        case PlayerStats.RecYards:
            return { category: Cat.Stats, type: Type.Rec, name: Stat.RecYards }
        case PlayerStats.RecYAC:
            return { category: Cat.Stats, type: Type.Rec, name: Stat.RecYAC }
        case PlayerStats.Receptions:
            return { category: Cat.Stats, type: Type.Rec, name: Stat.Receptions }
        case PlayerStats.Rush8Box:
            return { category: Cat.NextGen, type: Type.Rush, name: Stat.Rush8Box }
        case PlayerStats.RushAvgYAC:
            return { category: Cat.Advanced, type: Type.Rush, name: Stat.RushAvgYAC }
        case PlayerStats.RushAvgYBC:
            return { category: Cat.Advanced, type: Type.Rush, name: Stat.RushAvgYBC }
        case PlayerStats.RushEfficiency:
            return { category: Cat.NextGen, type: Type.Rush, name: Stat.RushEfficiency }
        case PlayerStats.RushEPA:
            return { category: Cat.Stats, type: Type.Rush, name: Stat.RushEPA }
        case PlayerStats.RushLoS:
            return { category: Cat.NextGen, type: Type.Rush, name: Stat.RushLoS }
        case PlayerStats.RushTDs:
            return { category: Cat.Stats, type: Type.Rush, name: Stat.RushTDs }                    
        case PlayerStats.RushYAC:
            return { category: Cat.Advanced, type: Type.Rush, name: Stat.RushYAC }
        case PlayerStats.RushYBC:
            return { category: Cat.Advanced, type: Type.Rush, name: Stat.RushYBC }
        case PlayerStats.RushYards:
            return { category: Cat.Stats, type: Type.Rush, name: Stat.RushYards }
        case PlayerStats.RushYPC:
            return { category: Cat.NextGen, type: Type.Rush, name: Stat.RushYPC }
        case PlayerStats.Targets:
            return { category: Cat.Stats, type: Type.Rec, name: Stat.RecTargets }
        case PlayerStats.TargetShare:
            return { category: Cat.Stats, type: Type.Rec, name: Stat.RecTargetShare }
        default: 
            return {category: '',  type: '', name: '' }
    }    
}

export function getPlayerStat(weeks: WeekData[] | undefined, stat: PlayerStats | null): (number | null)[] {    
    if( weeks === undefined || stat === null )
        return []
    
    const { category, type, name } = getPlayerStatDefinition(stat);
    return weeks.filter(item => item.game_id !== null).map(week => { 
        //@ts-ignore
        const { [category]: cat } = week
        if ( !cat ) {
            return null;
        }

        //@ts-ignore
        const { [type]: statData } = cat
        if ( !statData ) {
            return null;
        }

        return statData[name] ?? null
    }) ?? []
}