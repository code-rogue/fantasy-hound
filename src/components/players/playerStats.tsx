import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PlayerCareerTable from '@components/players/tables/playerCareerTable';
import PlayerPassTable from '@components/players/tables/playerPassTable';
import PlayerRecTable from '@components/players/tables/playerRecTable';
import PlayerRushTable from '@components/players/tables/playerRushTable';
import { PlayerProps } from '@interfaces/models/player';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react';

const PlayerStats: React.FC<PlayerProps> = ({ player }) => {
    const [value, setValue] = React.useState('career');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Card sx={{ height: 800, width: '100%', margin: 1, padding: 0 }}>
            <CardContent sx={{ padding: 1 }}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="Season Stat Tabs">
                            <Tab label="Overview" value="career" />
                            <Tab label="Passing" value="pass" />
                            <Tab label="Receiving" value="rec" />
                            <Tab label="Rushing" value="rush" />
                        </TabList>
                        </Box>
                        <TabPanel value="career">
                            <PlayerCareerTable player={player} />
                        </TabPanel>
                        <TabPanel value="pass">
                            <PlayerPassTable player={player} />
                        </TabPanel>
                        <TabPanel value="rec">
                            <PlayerRecTable player={player} />
                        </TabPanel>
                        <TabPanel value="rush">
                            <PlayerRushTable player={player} />
                        </TabPanel>
                    </TabContext>
                </Box>
            </CardContent>
        </Card>
    );
};

export default PlayerStats;