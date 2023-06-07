// components/MyLink.tsx
import { Link as MuiLink, LinkProps } from "@mui/material";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { forwardRef } from "react";
// Defining the CustomNextLink
export type CustomNextLinkProps = Omit<NextLinkProps, "href"> & {
  _href: NextLinkProps["href"];
};
export const CustomNextLink = forwardRef(({ _href, ...props }: CustomNextLinkProps, ref) => {
  return <NextLink passHref href={_href} {...props} />;
});
CustomNextLink.displayName = 'CustomNextLink'
// combine MUI LinkProps with NextLinkProps
type CombinedLinkProps = LinkProps<typeof NextLink>;
// remove both href properties
// and define a new href property using NextLinkProps
type MyLinkProps = Omit<CombinedLinkProps, "href"> & {
  href: NextLinkProps["href"];
};
const MyLink = ({ href, ...props }: MyLinkProps) => {
  // use _href props of CustomNextLink to set the href
  return <MuiLink sx={{ textDecoration: 'none', color: 'inherit' }} {...props} component={CustomNextLink}
                  _href={href}/>;
};
export default MyLink;