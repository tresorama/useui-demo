import React from "react";
import { Box, Stack, Text, Badge, usePassingPropsToChildren } from "@useui/react";

const UI = {
  preview: {
    // special
    PRESETS: "rounded",
    // common
    width: "100%",
    maxWidth: "700px",
    marginX: "auto",
    border: "1px solid",
    borderColor: "white",
  },
  header: {
    // Stack API
    gutter: 2,
    // common
    alignItems: "center",
    padding: 2,
  },
  title: {
    //Text API
    typo: "heading2",
    // common
    fontWeight: "800",
  },
  content: {
    // common
    border: "inherit",
    borderWidth: "0px",
    borderTopWidth: "1px",
    paddingX: 4,
    paddingY: 6,
  },
};
const AppComponentsPreview = props => {
  const childrenWithUI = usePassingPropsToChildren(props.children, { UI }, [
    "AppComponentsPreview_Header",
    "AppComponentsPreview_Content",
  ]);
  return <Box {...UI.preview}>{childrenWithUI}</Box>;
};
const AppComponentsPreview_Header = ({ UI, title, children, ...props }) => (
  <Stack {...UI.header} {...props}>
    <Badge>PREVIEW</Badge>
    {title && /* prettier-ignore */ <Text as="h2" {...UI.title}>{title}</Text>}
    {children}
  </Stack>
);
const AppComponentsPreview_Content = ({ UI, ...rest }) => <Box {...UI.content} {...rest} />;

AppComponentsPreview.Header = AppComponentsPreview_Header;
AppComponentsPreview.Content = AppComponentsPreview_Content;
export default AppComponentsPreview;
