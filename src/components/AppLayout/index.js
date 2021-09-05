import React, { useContext, useState } from "react";
import { useUI, ThemeModeContext, Box, Stack, Flex, Text, IconButton } from "@useui/react";
//COMPONENTS
import AppLogo from "../AppLogo";
import AppMainNav from "../AppMainNav";
import AppMainNavMobile from "../AppMainNavMobile/index";
import { HamburgerToClose, Moon, Sun } from "../icons";

/* =================================================== 
      UI
=================================================== */
const sheet = {
  customAPI: props => ({
    themeIsDark: props.themeIsDark || false,
    mobileNavIsOpen: props.mobileNavIsOpen || false,
  }),
  runner: _ => {
    const constant = {
      headerH: ["100px", null, "130px"],
      footerH: "200px",
    };
    return {
      // AppLayout,
      AppLayout: {
        header: {
          // common
          height: constant.headerH,
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          padding: [2, null, 4],
        },
        content: {
          // common
          marginTop: constant.headerH,
          minHeight: constant.headerH.map(v => `calc(100vh - ${v} - ${constant.footerH})`),
        },
        footer: {
          // Flex API
          direction: "column",
          // common
          minHeight: constant.footerH,
          backgroundColor: "lightgrey",
        },
      },
      /// AppHeaderBar
      AppHeaderBar: {
        wrapper: {
          // special
          PRESETS: ["boxShadow"],
          // common
          flexBasis: "100%",
          borderRadius: "100px",
          overflow: "auto",
        },
        drawers: {},
        appMainNavMobile: {
          // common
          paddingTop: constant.headerH,
        },
        headerBar: {
          // special
          PRESETS: "boxShadow",
          // common
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: 4,
          paddingY: 2,
          position: "relative",

          backgroundColor: "#fff",
          transitionProperty: "background-color",
          transitionDuration: "SHORT",
          transitionDelay: "SHORT*2",
          transitionTimingFunction: "ONE",
          ...(_.mobileNavIsOpen && {
            backgroundColor: "transparent",
            transitionDelay: 0,
          }),
          "& > *": {
            flexBasis: "100%",
          },
        },
        leftButtons: {
          // Stack API
          direction: "row",
          gutter: 0.5,
          // common
          alignItems: "center",
        },
        hamburgerButton: {
          // IconButton API
          color: "black",
          ...(_.mobileNavIsOpen && {
            color: "white",
          }),
          // common
          display: [null, null, "none"],
        },
        themeModeButton: {
          // IconButton API
          color: "black",
          ...(_.mobileNavIsOpen && {
            color: "white",
          }),
        },
        logoWrapper: {
          // common
          display: "flex",
          justifyContent: "center",
          position: ["absolute", null, "static"],
          maxWidth: "160px",
        },
        logo: {
          // Image API
          negate: _.themeIsDark,
        },
        mainNavWrapper: {
          // common
          display: ["none", null, "flex"],
          justifyContent: "flex-end",
        },
      },
    };
  },
};

/* =================================================== 
      AppHeaderBar
=================================================== */
const AppHeaderBar = ({ UI, mobileNavIsOpen, toggleMobileNav }) => {
  // debugger;

  const _useThemeMode = useContext(ThemeModeContext);

  const closeDrawers = () => {
    mobileNavIsOpen && toggleMobileNav();
  };

  return (
    <>
      <Box {...UI.wrapper}>
        {/* DRAWERS */}
        <Box {...UI.drawers}>
          <AppMainNavMobile
            {...UI.appMainNavMobile}
            isOpen={mobileNavIsOpen}
            onItemClick={closeDrawers}
          />
        </Box>
        {/* HEADER BAR */}
        <Box {...UI.headerBar}>
          {/* HEADER BAR - LEFT BUTTONS*/}
          <Stack {...UI.leftButtons}>
            {/* AppMainNavMobileToggler */}
            <IconButton {...UI.hamburgerButton} onClick={toggleMobileNav}>
              <HamburgerToClose isOpen={mobileNavIsOpen} />
            </IconButton>
            {/* Theme Mode Switcher */}
            <IconButton {...UI.themeModeButton} onClick={_useThemeMode.toggleMode}>
              {_useThemeMode.isDark ? <Moon /> : <Sun />}
            </IconButton>
            {/*  2 */}
            {/* AppMainNavMobileToggler */}
            {/* <Button {...UI.hamburgerButton} onClick={toggleMobileNav}>
              <HamburgerToClose {...UI.hamburgerButtonIconTransition} />
            </Button> */}
            {/* Theme Mode Switcher */}
            {/* <Button {...UI.themeModeButton} onClick={_useThemeMode.toggleMode}>
              {_useThemeMode.isDark && <Moon {...UI.themeModeButtonIconTransition} />}
              {!_useThemeMode.isDark && <Sun {...UI.themeModeButtonIconTransition} />}
            </Button> */}
          </Stack>
          {/* HEADER BAR - LOGO*/}
          <Box {...UI.logoWrapper}>
            <AppLogo {...UI.logo} />
          </Box>
          {/* HEADER BAR - MAIN NAV*/}
          <Box {...UI.mainNavWrapper}>
            <AppMainNav onItemClick={closeDrawers} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

/* =================================================== 
      AppLayout
=================================================== */

const AppLayout = props => {
  // debugger;
  // Get THEME MODE State
  const _useThemeMode = useContext(ThemeModeContext);

  // MOBILE NAV DRAWER OPEN STATE
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const toggleMobileNav = () => setMobileNavIsOpen(!mobileNavIsOpen);

  const [UI] = useUI(sheet, { ...props, themeIsDark: _useThemeMode.isDark, mobileNavIsOpen });

  return (
    <>
      <Box as="header" {...UI.AppLayout.header}>
        <AppHeaderBar
          UI={UI.AppHeaderBar}
          mobileNavIsOpen={mobileNavIsOpen}
          toggleMobileNav={toggleMobileNav}
        />
      </Box>
      <Box as="main" {...UI.AppLayout.content}>
        {props.children}
      </Box>
      <Flex as="footer" {...UI.AppLayout.footer}>
        <Text>Footer</Text>
      </Flex>
    </>
  );
};

export default AppLayout;
