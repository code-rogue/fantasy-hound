import { GridColDef } from '@mui/x-data-grid';
import { fumblesLostColumn } from '@components/players/tables/columns/playerColumns';
import { 
    isQuaterBack,
    isRunningBack,
    isWideReceiver,
    isTightEnd,
    isKicker,
 } from '@components/players/utils/playerUtils';
import { 
    passAttemptsAndCompletionsColumn,
    passCompletionPercentColumn,
    passInterceptionsColumn,
    passTouchDownsColumn,
    passTwoPointConversionsColumn,
    passYardsColumn
} from '@components/players/tables/columns/passColumns';
import { Player } from '@interfaces/models/player';
import { 
    rushCarriesColumn,
    returnTouchdownsColumn,
    rushTouchdownsColumn,
    rushYardsColumn ,
    rushYardsPerCarryColumn
} from '@components/players/tables/columns/rushColumns';
import { 
    weekColumn,
    weekFanastyPointsColumn,
    weekIdColumn,
    weekOpponentColumn,
} from '@components/players/tables/columns/gameLogColumns';  
import {
    receptionsColumn,
    recTargetsColumn,
    recTargetShareColumn,
    recTouchdownsColumn,
    recYardsColumn
  } from '@components/players/tables/columns/recColumns';
  import { 
    kickU40Column,
    kick40Column,
    kick50Column,
    kick60Column,
    kickTotalColumn,
    kickTotalPATColumn
  } from '@components/players/tables/columns/kickColumns';
export function gameLogPositionColumns(player?: Player): GridColDef[] {
    if(isQuaterBack(player)) {
        return [
            weekColumn(),
            weekOpponentColumn(),
            passAttemptsAndCompletionsColumn(),
            passCompletionPercentColumn(),
            passYardsColumn(),
            passTouchDownsColumn(),
            passTwoPointConversionsColumn(),
            passInterceptionsColumn(),
            fumblesLostColumn(),
            rushCarriesColumn(),
            rushTouchdownsColumn(),
            rushYardsColumn(),
            weekFanastyPointsColumn(),     
            weekIdColumn()
        ];
    }
    if(isWideReceiver(player) || isTightEnd(player)) {
        return [
            weekColumn(),
            weekOpponentColumn(),
            recTargetsColumn(),
            recTargetShareColumn(),
            receptionsColumn(),
            recYardsColumn(),
            recTouchdownsColumn(),
            rushCarriesColumn(),
            rushYardsColumn(),
            rushTouchdownsColumn(),
            fumblesLostColumn(),
            returnTouchdownsColumn(),
            weekFanastyPointsColumn(),   
            weekIdColumn()
        ];
    }

    if(isRunningBack(player)) {
        return [
            weekColumn(),
            weekOpponentColumn(),
            rushCarriesColumn(),
            rushYardsColumn(),
            rushYardsPerCarryColumn(),
            rushTouchdownsColumn(),
            recTargetsColumn(),
            recTargetShareColumn(),
            receptionsColumn(),
            recYardsColumn(),
            recTouchdownsColumn(),
            fumblesLostColumn(),
            returnTouchdownsColumn(),
            weekFanastyPointsColumn(),     
            weekIdColumn()
        ];
    }

    if(isKicker(player)) {
        return [
            weekColumn(),
            weekOpponentColumn(),
            kickU40Column(),
            kick40Column(),
            kick50Column(),
            kick60Column(),
            kickTotalColumn(),
            kickTotalPATColumn(),
            weekFanastyPointsColumn(),     
            weekIdColumn()
        ]; 
    }

    return [];
}