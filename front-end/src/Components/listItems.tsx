import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <Groups2RoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Teams"/>
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <AssignmentRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Projects"/>
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <PeopleAltRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Students"/>
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <SupervisedUserCircleRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Clients"/>
        </ListItemButton>
    </React.Fragment>
);

// export const secondaryListItems = (
//     <React.Fragment>
//         <ListSubheader component="div" inset>
//             Saved reports
//         </ListSubheader>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon/>
//             </ListItemIcon>
//             <ListItemText primary="Current month"/>
//         </ListItemButton>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon/>
//             </ListItemIcon>
//             <ListItemText primary="Last quarter"/>
//         </ListItemButton>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon/>
//             </ListItemIcon>
//             <ListItemText primary="Year-end sale"/>
//         </ListItemButton>
//     </React.Fragment>
// );
