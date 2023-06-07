import { MenuItem } from "@mui/material";
import { MenuListItem } from "@/src/types";

const MenuList = ({ list }: { list: MenuListItem[] | undefined }) => {
  return list?.map(({ title }: MenuListItem) => <MenuItem key={title}>
    {title}
  </MenuItem>)
};

export default MenuList;
