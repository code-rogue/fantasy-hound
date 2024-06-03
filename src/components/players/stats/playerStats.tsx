import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import { 
    isOffensivePlayer,
    isDefensivePlayer,
    isSpecialTeamsPlayer
} from '@components/players/utils/playerUtils';
import PlayerCareerTable from '@components/players/tables/playerCareerTable';
import PlayerDefTable from '@components/players/tables/playerDefTable';
import PlayerKickTable from '@components/players/tables/playerKickTable';
import PlayerLog from '@components/players/playerLog';
import PlayerPassTable from '@components/players/tables/playerPassTable';
import PlayerRecTable from '@components/players/tables/playerRecTable';
import PlayerRushTable from '@components/players/tables/playerRushTable';
import { PlayerProps } from '@interfaces/models/player';
import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const PlayerStats: React.FC<PlayerProps> = ({ player }) => {
    const [value, setValue] = React.useState('career');
    
    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    
    const offense = isOffensivePlayer(player);
    const def = isDefensivePlayer(player);
    const specialTeams = isSpecialTeamsPlayer(player);

    let defTab;
    let kickTab;
    let passTab;
    let recTab;
    let rushTab;
    if (offense || specialTeams) {
        passTab = <Tab label="Passing" value="pass" />;
        if(!specialTeams)
            recTab = <Tab label="Receiving" value="rec" />;
        rushTab = <Tab label="Rushing" value="rush" />;
    }
    if (def)
        defTab = <Tab label="Defense" value="def" />;
    
    if (specialTeams)
        kickTab = <Tab label="Kicking" value="kick" />;

    return (
        <Container disableGutters maxWidth={false}>
            <Card raised={true} sx={{ margin: 1, padding: 0 }}>
                <CardContent sx={{ padding: 1 }}>
                    <Container disableGutters maxWidth={false}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleTabChange} aria-label="Season Stat Tabs">
                                    <Tab label="Overview" value="career" />
                                    {defTab}
                                    {kickTab}
                                    {passTab}
                                    {recTab}
                                    {rushTab}
                                </TabList>
                            </Box>
                            <TabPanel value="career" sx={{ padding: 0}}>
                                <PlayerCareerTable player={player} />
                            </TabPanel>
                            <TabPanel value="def" sx={{ padding: 0}}>
                                <PlayerDefTable player={player} />
                            </TabPanel>
                            <TabPanel value="kick" sx={{ padding: 0}}>
                                <PlayerKickTable player={player} />
                            </TabPanel>
                            <TabPanel value="pass" sx={{ padding: 0}}>
                                <PlayerPassTable player={player} />
                            </TabPanel>
                            <TabPanel value="rec" sx={{ padding: 0}}>
                                <PlayerRecTable player={player} />
                            </TabPanel>
                            <TabPanel value="rush" sx={{ padding: 0}}>
                                <PlayerRushTable player={player} />
                            </TabPanel>
                        </TabContext>
                    </Container>
                </CardContent>
            </Card>
            <Card raised={true} sx={{ margin: 1, padding: 0 }}>
                <CardContent sx={{ padding: 1 }}>
                    <PlayerLog player={player} />
                </CardContent>
            </Card>
        </Container>
    );
};

export default PlayerStats;