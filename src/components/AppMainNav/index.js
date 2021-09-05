import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Text } from "@useui/react";
import { menuItems } from "../../config";

const UI = {
  list: {
    display: "flex",
    listStyleType: "none",
  },
  listItem: {
    minWidth: "10px",
    marginLeft: 2,
    color: "primary",
  },
  listItemText: {
    // Text API
    typo: "mainNavItem",
    // common
    color: "primary",
    "&:hover": {
      color: "primary=>darken()",
    },
  },
};

const AppMainNav = ({ onItemClick, ...props }) => {
  return (
    <Box as="ul" {...UI.list} {...props}>
      {menuItems.map(item => (
        <Box as="li" key={item.key} {...UI.listItem}>
          <RouterLink to={item.path} onClick={() => onItemClick(item)}>
            <Text {...UI.listItemText}>{item.label}</Text>
          </RouterLink>
        </Box>
      ))}
    </Box>
  );
};

AppMainNav.defaultProps = {
  onItemClick: () => {},
};
export default AppMainNav;
