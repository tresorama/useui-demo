import React from "react";
import { Stack, Box, Text, Flex } from "@useui/react";

const UI = {
  wrapper: {
    // Stack API
    direction: "column",
    gutter: 10,
    // special
    PRESETS: ["rounded", "boxShadow"],
    // common
    backgroundColor: "white",
    padding: 4,
    margin: 4,
  },
  inner: {
    // Flex API
    direction: "row",
    // special
    PRESETS: ["rounded"],
    // common
    width: "100%",
    height: "70vh",
    backgroundColor: "white=>darken(5)",
    padding: 4,
  },
  leftBox: {
    //common
    position: "relative",
    width: "50%",
    backgroundColor: "primary=>lighten(5)",
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
  },
  leftBoxInner: {
    //common
    position: "absolute",
    top: "50%",
    right: "5%",
  },
  leftBoxText: {
    // Text API
    typo: "heading1",
    // special
    PRESETS: ["textBorderWhite"],
    //common
    color: "primary=>spin(180)+darken(30)",
  },
  leftBoxLine: {
    //common
    position: "absolute",
    right: "100%",
    width: "20%",
    paddingBottom: "2%",
    backgroundColor: "primary=>lighten(5)+darken(5)",
  },
  rightBox: {
    //common
    position: "relative",
    width: "50%",
    backgroundColor: "primary=>lighten(5)+darken(5)",
    borderTopRightRadius: "80vh",
    borderBottomRightRadius: "8px",
  },
  rightBoxInner: {
    //common
    position: "absolute",
    top: "50%",
    left: "5%",
  },
  rightBoxText: {
    // Text API
    typo: "heading1",
    // special
    PRESETS: ["textBorderWhite"],
    // common
    color: "primary=>spin(180)+darken(30)",
  },
  rightBoxLine: {
    // common
    position: "absolute",
    left: "100%",
    width: "20%",
    paddingBottom: "2%",
    backgroundColor: "primary=>lighten(2)",
  },
};

const HeroScreen = () => (
  <>
    <Stack {...UI.wrapper}>
      <Flex {...UI.inner}>
        <Box {...UI.leftBox}>
          <Box {...UI.leftBoxInner}>
            <Text {...UI.leftBoxText}>LIGHT</Text>
            <Box {...UI.leftBoxLine} />
          </Box>
        </Box>
        <Box {...UI.rightBox}>
          <Box {...UI.rightBoxInner}>
            <Text {...UI.rightBoxText}>DARK</Text>
            <Box {...UI.rightBoxLine} />
          </Box>
        </Box>
      </Flex>
    </Stack>
  </>
);

export default HeroScreen;
