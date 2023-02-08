import {Badge, Box, Breadcrumbs, IconButton} from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/Icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";


const TopBar = ( { count }:number) => {

    function notificationsLabel(count: number) {
        if (count === 0) {
            return 'no notifications';
        }
        if (count > 99) {
            return 'more than 99 notifications';
        }
        return `${count} notifications`;
    }


    return (
        <Box display="flex" justifyContent="flex-end" p={2}>

            {/* ICONS */}
            <Box display="flex">
                <IconButton aria-label={notificationsLabel(100)}>
                    <Badge  badgeContent={count} max={99}>
                    <NotificationsOutlinedIcon />
                    </Badge >
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default TopBar;
