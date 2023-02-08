import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import * as React from "react";
import {SvgIconTypeMap} from "@mui/material/SvgIcon/SvgIcon";
import Link from "next/link";
import * as url from "url";

interface SibeBarListType {
    icon: SvgIconTypeMap,
    open: boolean,
    link: string,
    text: string
}

const SideBarList = ({icon, text, open, link}: SibeBarListType) => {
    return (
        <Link href={link}>
            <List>
                <ListItem disablePadding sx={{display: 'block'}}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            color: '#D6AD60'

                        }}
                    >
                        <ListItemIcon
                            sx={{
                                color: '#B68D40',
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{opacity: open ? 1 : 0}}/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Link>
    )
}

export default SideBarList;