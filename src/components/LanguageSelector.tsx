import LanguageIcon from '@mui/icons-material/Language';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { MouseEvent, useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { Colors } from "@/styles/Colors";
import MyLink from "@/src/components/common/Link";

const languages = [{ name: 'English', locale: 'en' }, { name: 'French', locale: 'fr' }]
const LanguageSelector = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <Box>
    <IconButton onClick={handleClick}>
      <LanguageIcon/>
    </IconButton>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{ 'aria-labelledby': 'basic-button' }}>
      {languages.map((language) => {
        return <MenuItem key={language.locale}>
          <MyLink sx={{ textDecoration: 'none', color: Colors.black }}
                  href={{
                    pathname: router.pathname,
                    query: router.query
                  }}
                  locale={language.locale}>
            {language.name}
          </MyLink>
        </MenuItem>
      })}
    </Menu>
  </Box>
};

export default LanguageSelector;
