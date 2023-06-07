import { MenuListItem } from "@/src/types";
import { Fragment, MouseEvent, useState } from "react";
import { Menu, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Colors } from "@/styles/Colors";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuList from "@/src/components/common/MenuList";
import MyLink from "@/src/components/common/Link";
import { ResponsiveStyleValue } from "@mui/system";

const MenuItems = ({ menuItems, direction = 'row' }: {
  menuItems: MenuListItem[],
  direction?: ResponsiveStyleValue<'row' | 'row-reverse' | 'column' | 'column-reverse'>
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (!Array.isArray(menuItems)) return null;
  return <Stack sx={{ p: direction === 'column' ? 3 : 0 }} direction={direction} gap={3}
                alignItems={direction === 'column' ? 'flex-start' : 'center'}>
    {menuItems?.map(({ title, path, children }: MenuListItem) => <Fragment key={title}>
      {children ? <Stack sx={{ cursor: direction === 'column' && !children ? 'pointer' : 'inherit' }} direction={'row'}
                         alignItems={'center'} onClick={handleClick}>
        <Typography color={Colors.grey}>
          {title}
        </Typography>
        {direction !== 'column' ? open ? <ExpandLess sx={{ color: Colors.grey }} fontSize={'small'}/> :
          <ExpandMore sx={{ color: Colors.grey }} fontSize={'small'}/> : null}
      </Stack> : <MyLink sx={{ color: Colors.grey, textDecoration: 'none' }} href={path}>
        {title}
      </MyLink>}
      {direction === 'column' ? <MenuList list={children}/> : null}
      {direction !== 'column' && children && open ? <Menu
        id="navbar-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'navbar-menu-button' }}>
        <MenuList list={children}/>
      </Menu> : null}
    </Fragment>)}
  </Stack>
};

export default MenuItems;
