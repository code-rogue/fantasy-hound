import { 
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarColumnsButton,
} from '@mui/x-data-grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import { NFL_POSITION_GROUPS } from '@interfaces/enums/position_groups.enums';
import { PlayerSearchProps } from '@interfaces/models/player';
import React from 'react';
import Switch from '@mui/material/Switch';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const PlayerSearchToolbar: React.FC<PlayerSearchProps> = ({ 
    status, 
    statusCallback, 
    position, 
    positionCallback 
}) => {
    let [positionGroup, setPositionGroup] = React.useState(position);
    let [careerStatus, setCareerStatus] = React.useState(status);
  
    const handleStatusChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setCareerStatus(event.target.checked);
        statusCallback(event);
    };

    const handlePositionChange = async (
        event: React.MouseEvent<HTMLElement>,
        newPositionGroup: string,
    ) => {
        setPositionGroup(newPositionGroup);
        positionCallback(event, newPositionGroup);
    };

    return (
      <GridToolbarContainer>
        <GridToolbarQuickFilter 
          debounceMs={1000} 
          sx={{
            paddingLeft:2,
            paddingTop:2,
            paddingRight:3,
          }}
        />
        <ToggleButtonGroup
          value={positionGroup}
          exclusive
          onChange={handlePositionChange}
          aria-label="Position Group"
          sx={{
            paddingRight:3,
          }}
        >
          <ToggleButton value="QB">{NFL_POSITION_GROUPS.QB}</ToggleButton>
          <ToggleButton value="RB">{NFL_POSITION_GROUPS.RB}</ToggleButton>
          <ToggleButton value="WR">{NFL_POSITION_GROUPS.WR}</ToggleButton>
          <ToggleButton value="TE">{NFL_POSITION_GROUPS.TE}</ToggleButton>
          <ToggleButton value="SPEC">K</ToggleButton>
          <ToggleButton value="DL">{NFL_POSITION_GROUPS.DL}</ToggleButton>
          <ToggleButton value="LB">{NFL_POSITION_GROUPS.LB}</ToggleButton>
          <ToggleButton value="DB">{NFL_POSITION_GROUPS.DB}</ToggleButton>
        </ToggleButtonGroup>
        <FormControlLabel control={
          <Switch 
            aria-label="Career Status" 
            checked={careerStatus}
            defaultChecked 
            name="active"
            onChange={handleStatusChange}
            size="small" 
          />
          } label="Active Only"/>
        <GridToolbarColumnsButton />
      </GridToolbarContainer>
    );
}

export default PlayerSearchToolbar;