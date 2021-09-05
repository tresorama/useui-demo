import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Text, Stack, useUI } from "@useui/react";
import { menuItems } from "../../config";

const sheet = {
  customAPI: props => ({
    isOpen: props.isOpen || false,
  }),
  runner: _ => ({
    nav: {
      position: "fixed",
      top: "0",
      left: "0",
      bottom: "0",
      right: "0",
      backgroundColor: "black",
      color: "white",
      padding: 4,
      // !isOpen...
      transform: "translateX(-100%)",
      transitionProperty: "transform",
      transitionDuration: "SHORT",
      transitionDelay: "SHORT",
      transitionTimingFunction: "ONE",
      ...(_.isOpen && {
        transform: "translateX(0%)",
        transitionDelay: 0,
      }),
      "& > *": {
        // !isOpen ...
        opacity: "0",
        transitionProperty: "opacity",
        transitionDuration: "SHORT",
        transitionTimingFunction: "ONE",
        transitionDelay: 0,
        ...(_.isOpen && {
          opacity: "1",
          transitionDelay: "SHORT",
        }),
      },
    },
    list: {
      //Stack API
      direction: "column",
      gutter: 2,
      // common
      flex: "1",
      // display: "flex",
      // flexDirection: "column",
      // justifyContent: "flex-start",
      // alignItems: "stretch",
      listStyleType: "none",
      paddingY: 4,
      paddingX: 4,
      // paddingBottom: 4,
      backgroundColor: "yellow=>setAlpha(0.9)",
    },
    listItem: {
      cursor: "pointer",
    },
    listItemText: {
      // Text API
      typo: "mainNavMobileItem",
      //common
      color: "purple",
      position: "relative",
      textDecoration: "none",
      "&:before": {
        content: '""',
        position: "absolute",
        bottom: "0",
        width: "1em",
        height: "0.15em",
        backgroundColor: "currentColor",

        transitionProperty: "width",
        transitionDuration: "SHORT*0.5",
        transitionTimingFunction: "ONE",
      },
      "&:hover:before": {
        // transform: "scaleX(1)",
        width: "100%",
      },
    },
  }),
};

const AppMainNavMobile = ({ onItemClick, ...props }) => {
  const [UI] = useUI(sheet, props);

  return (
    <Box as="nav" {...UI.nav} {...props}>
      <Stack as="ul" {...UI.list}>
        {menuItems.map(item => (
          <Box as="li" key={item.key} {...UI.listItem}>
            <RouterLink to={item.path} onClick={() => onItemClick(item)}>
              <Text as="span" {...UI.listItemText}>
                {item.label}
              </Text>
            </RouterLink>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

AppMainNavMobile.defaultProps = {
  onItemClick: () => {},
};

export default AppMainNavMobile;
