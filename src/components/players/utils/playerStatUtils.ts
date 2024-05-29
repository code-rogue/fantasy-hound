import { PlayerStatLabels, PlayerStats } from "@interfaces/enums/player_stat.enums";
import { PlayerStatDefinition, StatDefinition } from "@interfaces/player_stat";
import { WeekData } from "@interfaces/models/week/week";

export const statDefinitions: StatDefinition[] = [
    {
        id: PlayerStats.ReceivingYards,
        label: PlayerStatLabels.ReceivingYards,
    },
    {
        id: PlayerStats.Targets,
        label: PlayerStatLabels.Targets,
    },
    {
        id: PlayerStats.TargetShare,
        label: PlayerStatLabels.TargetShare,
    },
]

export function statTooltipFormatter(stat: PlayerStats | null, value: number | null): string {
    if(value === null)
        return '';

    if(stat === null)
        return value.toString();

    switch(stat) {
        case PlayerStats.ReceivingYards:
            return `${value} Yards`;
        case PlayerStats.Targets:
            return `${value} Targets`;
        case PlayerStats.TargetShare:
            return `${(value * 100).toFixed(1)}%`;
        default: 
            return value.toString();
    }
}

export function getPlayerStatDefinition(stat: PlayerStats): PlayerStatDefinition  {
    switch(stat) {
        case PlayerStats.ReceivingYards:
            return { statType: 'rec', statName: 'rec_yards' }
        case PlayerStats.Targets:
            return { statType: 'rec', statName: 'targets' }
        case PlayerStats.TargetShare:
            return { statType: 'rec', statName: 'target_share' }

        default: 
            return { statType: '', statName: '' }
    }
    
}

export function getPlayerStat(weeks: WeekData[] | undefined, stat: PlayerStats | null): (number | null)[] {    
    if( weeks === undefined || stat === null )
        return []
    
    const { statType, statName } = getPlayerStatDefinition(stat);
    return weeks.filter(item => item.game_id !== null).map(week => { 
        //@ts-ignore
        const { [statType]: statData } = week.stats
        if ( !statData ) {
            return null;
        }

        return statData[statName] ?? null
    }) ?? []
}