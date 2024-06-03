import Box from '@mui/material/Box';
import { Player } from '@interfaces/models/player';
import { PlayerProps } from '@interfaces/models/player';
import React, { useState } from 'react';
import SeasonGameLogTable from '@components/players/tables/gameLogTable';
import PlayerStatLog from '@components/players/stats/playerStatLog';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const PlayerLogTab: React.FC<PlayerProps> = ({ player }) => {
    const [logValue, setLogValue] = React.useState('gameLog');
    const handleGameLogTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setLogValue(newValue);
    };

    return (
        <TabContext value={logValue}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleGameLogTabChange} aria-label="Log Tabs">
                    <Tab label="Game Log" value="gameLog" />
                    <Tab label="Stat Log" value="statLog" />
                </TabList>
            </Box>
            <TabPanel value="gameLog" sx={{ padding: 0}}>
                <SeasonGameLogTable player={player} />
            </TabPanel>
            <TabPanel value="statLog" sx={{ padding: 0}}>
                <PlayerStatLog player={player} />
            </TabPanel>
        </TabContext>
    );
};

export default PlayerLogTab;
