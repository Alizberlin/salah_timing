import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { StateContext } from './stateManager';

export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const {state, dispatch} = React.useContext(StateContext)
  const method = (m) => {
      dispatch({type: 'method', payLoad: m})
      handleClick();
  }
  return (
    <List
      sx={{ width: '100%', maxWidth: 380, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {/* Title goes here */}
        </ListSubheader>
      }
    >
      {/* <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton> */}
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <EmojiObjectsIcon />
        </ListItemIcon>
        <ListItemText primary="Method / School of thought" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding >
          <ListItemButton  onClick={()=> method(0)} >
            <ListItemIcon>
              <CheckBoxIcon color={state.method === 0 ? 'success' : ''}/>
            </ListItemIcon>
            <ListItemText primary="Shia Ithna-Ashari / Leva Institute" />
          </ListItemButton>
          <ListItemButton  onClick={()=> method(1)}>
            <ListItemIcon>
              <CheckBoxIcon color={state.method === 1 ? 'success' : ''}/>
            </ListItemIcon>
            <ListItemText primary="University of Islamic Sciences, Karachi" />
          </ListItemButton>
          <ListItemButton  onClick={()=> method(2)}>
            <ListItemIcon>
              <CheckBoxIcon color={state.method === 2 ? 'success' : ''}/>
            </ListItemIcon>
            <ListItemText primary="Islamic Society of North America (ISNA)" />
          </ListItemButton>
          <ListItemButton  onClick={()=> method(3)}>
            <ListItemIcon>
              <CheckBoxIcon color={state.method === 3 ? 'success' : ''}/>
            </ListItemIcon>
            <ListItemText primary="Muslim World League" />
          </ListItemButton>
          <ListItemButton  onClick={()=> method(4)}>
            <ListItemIcon>
              <CheckBoxIcon color={state.method === 4 ? 'success' : ''}/>
            </ListItemIcon>
            <ListItemText primary="Umm Al-Qura University, Makkah" />
          </ListItemButton>
          <ListItemButton  onClick={()=> method(5)}>
            <ListItemIcon>
              <CheckBoxIcon color={state.method === 5 ? 'success' : ''}/>
            </ListItemIcon>
            <ListItemText primary="Egyptian General Authority of Survey" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
