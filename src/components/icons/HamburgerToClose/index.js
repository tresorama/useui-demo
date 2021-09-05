import React from "react";
import { Box, useUI } from "@useui/react";

// const sheet = {
//   customAPI: props => ({
//     color: props.color || "currentColor",
//   }),
//   runner: _ => ({
//     wrapper: {
//       // special
//       PRESETS: "transition_Buttons",
//       // common
//       background: "transparent",
//       border: "none",
//       width: "1em",
//       height: "1em",
//       //
//       transitionProperty: "color",
//       color: _.color,

//       "& > div": {
//         width: "inherit",
//         height: "inherit",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "relative",
//         //
//         transform: "rotate(0deg)",
//         transitionProperty: "transform",
//       },

//       "& > div > span": {
//         position: "absolute",
//         display: "block",
//         width: "100%",
//         height: "2px",
//         backgroundColor: "currentColor",
//         //
//         transform: "translateY(0)",
//         transitionProperty: "transform",
//         "&:nth-child(1)": {
//           transform: "translateY(-0.35em)",
//         },
//         "&:nth-child(3)": {
//           transform: "translateY(0.35em)",
//         },
//       },

//       "&.isOpen": {
//         "& > div": {
//           transform: "rotate(45deg)",
//         },
//         "& > div > span": {
//           "&:nth-child(1)": {
//             transform: "rotate(90deg) translateY(0px)",
//           },
//           "&:nth-child(3)": {
//             display: "none",
//           },
//         },
//       },
//     },
//   }),
// };
const sheet = {
  customAPI: props => ({
    color: props.color || "currentColor",
    isOpen: props.isOpen || false,
  }),
  runner: _ => ({
    wrapper: {
      // special
      PRESETS: "transition_Buttons",
      // common
      background: "transparent",
      border: "none",
      width: "1em",
      height: "1em",
      //
      color: _.color,
      transitionProperty: "color",

      "& > div": {
        width: "inherit",
        height: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        //
        transform: "rotate(0deg)",
        transition: "inherit",
        transitionProperty: "transform",
        ...(_.isOpen && {
          transform: "rotate(45deg)",
        }),
      },

      "& > div > span": {
        position: "absolute",
        display: "block",
        width: "100%",
        height: "1px",
        backgroundColor: "currentColor",
        //
        transform: "translateY(0)",
        transition: "inherit",
        transitionProperty: "transform, opacity",
        "&:nth-of-type(1)": {
          transform: "translateY(-0.35em)",
          ...(_.isOpen && {
            transform: "rotate(90deg) translateY(0px)",
          }),
        },
        "&:nth-of-type(3)": {
          transform: "translateY(0.35em)",
          opacity: "1",
          ...(_.isOpen && {
            opacity: "0",
          }),
        },
      },
    },
  }),
};

const HamburgerToClose = props => {
  const [UI, propsCleaned] = useUI(sheet, props, []);

  return (
    <Box {...UI.wrapper} {...propsCleaned}>
      <Box as="div">
        <Box as="span" />
        <Box as="span" />
        <Box as="span" />
      </Box>
    </Box>
  );
};

export default HamburgerToClose;
