import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import { Colors } from "@/styles/Colors";
import MenuItems from "@/src/components/navbar/MenuItems";
import LanguageSelector from "@/src/components/LanguageSelector";
import useTranslation from "next-translate/useTranslation";
import MyLink from "@/src/components/common/Link";
import { MenuListItem } from "@/src/types";
import { useState } from "react";

export default function NavBar() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation('common');
  const [state, setState] = useState(false);
  const menuItems: MenuListItem[] = t('navbar', {}, { returnObjects: true }) || [];
  const toggleDrawer = (open: boolean) => {
    setState(open);
  };
  return <Box>
    <AppBar position="static" color={'transparent'} elevation={0}>
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        {isXs ? <IconButton
          onClick={() => toggleDrawer(true)}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}>
          <MenuIcon/>
        </IconButton> : null}

        <Drawer
          anchor={'left'}
          open={state}
          onClose={() => toggleDrawer(false)}
        >
          <MenuItems direction={'column'} menuItems={menuItems}/>
        </Drawer>

        <MyLink href={'/'}>
          <Typography variant="h6">
            <Typography component={'span'} sx={{ fontWeight: 700, color: Colors.black }}>Next</Typography>
            <Typography component={'span'} color={Colors.grey}>blog</Typography>
          </Typography>
        </MyLink>
        {isXs ? null : <MenuItems menuItems={menuItems}/>}
        <LanguageSelector/>
      </Toolbar>
    </AppBar>
  </Box>
}

