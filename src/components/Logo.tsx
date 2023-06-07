import Typography from "@mui/material/Typography";
import { Colors } from "@/styles/Colors";
import { Variant } from "@mui/material/styles/createTypography";

const Logo = ({ variant, fontSize = 'inherit' }: { variant: Variant, fontSize?: string | number }) => {
  return <>
    <Typography variant={variant} component={'span'}>
      <Typography component={'span'} sx={{ fontSize, fontWeight: 700, color: Colors.black }}>Next</Typography>
      <Typography component={'span'} sx={{ fontSize }} color={Colors.grey}>blog</Typography>
    </Typography>
  </>
};

export default Logo;
