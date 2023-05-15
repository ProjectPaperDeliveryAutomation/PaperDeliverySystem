import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import GitHubIcon from '@mui/icons-material/GitHub'; 
import { useNavigate } from 'react-router-dom';
import routes from '../Router/index3';

const menuLinkClick = (event:React.MouseEvent)=>{
    // const navigateTo = useNavigate(event.currentTarget.);
}

// export default function SelectedListItem(){
//     const [SelectedIndex, setSelectedIndex] = React.useState(1);

//     const handleListItemClick = (
//         event: React.MouseEvent<HTMLDivElement, MouseEvent>,
//         index: number
//     )=>{
//         setSelectedIndex(index);
//     };
  
//     return (
        
//     );
// }


export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
        </ListItemButton>

        <ListItemButton 
      
        >            <ListItemIcon>
                <Groups2RoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Teams"/>
        </ListItemButton>

        <ListItemButton 
        
        >            <ListItemIcon>
                <AssignmentRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Projects"/>
        </ListItemButton>

        <ListItemButton 
         
        >            <ListItemIcon>
                <PeopleAltRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Students"/>
        </ListItemButton>

        <ListItemButton 
            
        >            <ListItemIcon>
                <SupervisedUserCircleRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Clients"/>
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Developement Team
        </ListSubheader>
        <ListItemButton data-action={"TeamInfor"}>
            <ListItemIcon>
                <EngineeringRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Team Infor"/>
        </ListItemButton>
        <ListItemButton data-action={"Trello"}>
            <ListItemIcon>
                <GitHubIcon/>
            </ListItemIcon>
            <ListItemText primary="GitHub"/>
        </ListItemButton>
        <ListItemButton data-action={"Trello"}>
            <ListItemIcon>
                <InsertLinkRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Trello"/>
        </ListItemButton>
    </React.Fragment>
);
