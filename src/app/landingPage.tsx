import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function LandingPage() {
  return (
    <Container disableGutters sx={{height: 300}}>
      <Box sx={{ height: "25%"}}></Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
        <Avatar src='/logo.svg' sx={{ marginRight: 1}}/>
        <Typography variant="h6" noWrap component="div">Future Fantasy Dasboard</Typography>
      </Box>
    </Container>
  );
}

export default LandingPage;
