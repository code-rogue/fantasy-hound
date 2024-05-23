import { Player } from '@interfaces/models/player';
import { NFL_POSITIONS, NFL_POSITION_GROUPS } from '@interfaces/enums/position_groups.enums';

export function isQuaterBack(player?: Player): boolean {
    return (player?.position_group === NFL_POSITION_GROUPS.QB) ? true : false;
}

export function isRunningBack(player?: Player): boolean {
    return (player?.position_group === NFL_POSITION_GROUPS.RB) ? true : false;
}

export function isWideReceiver(player?: Player): boolean {
    return (player?.position_group === NFL_POSITION_GROUPS.WR) ? true : false;
}

export function isTightEnd(player?: Player): boolean {
    return (player?.position_group === NFL_POSITION_GROUPS.TE) ? true : false;
}

export function isKicker(player?: Player): boolean {
    return (player?.position_group === NFL_POSITIONS.K) ? true : false;
}

export function isOffensivePlayer(player?: Player): boolean {
    switch (player?.position_group) {
        case NFL_POSITION_GROUPS.QB:
        case NFL_POSITION_GROUPS.OL:
        case NFL_POSITION_GROUPS.RB:
        case NFL_POSITION_GROUPS.TE:
        case NFL_POSITION_GROUPS.WR:
            return true;
        default:
            return false;
    }
}

export function isDefensivePlayer(player?: Player): boolean {
    switch (player?.position_group) {
        case NFL_POSITION_GROUPS.DB:
        case NFL_POSITION_GROUPS.DL:
        case NFL_POSITION_GROUPS.LB:
            return true;
        default:
            return false;
    }
}

export function isSpecialTeamsPlayer(player?: Player): boolean {
    switch (player?.position_group) {
        case NFL_POSITION_GROUPS.SPEC:
            return true;
        default:
            return false;
    }
}