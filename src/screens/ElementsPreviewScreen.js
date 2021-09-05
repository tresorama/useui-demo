import React from "react";
import { Box, Stack, Flex, Button, Text } from "@useui/react";
import AppComponentsPreview from "../components/AppComponentsPreview";

// Preview instances ...
const PreviewText = props => (
  <AppComponentsPreview {...props}>
    <AppComponentsPreview.Header title="Text" />
    <AppComponentsPreview.Content>
      <Stack direction="column" gutter={2}>
        <Text typo="heading1">Heading1</Text>
        <Text typo="heading2">Heading2</Text>
        <Text typo="heading3">Heading3</Text>
        <Text typo="heading4">Heading4</Text>
        <Text typo="heading5">Heading5</Text>
        <Text typo="body">body</Text>
      </Stack>
    </AppComponentsPreview.Content>
  </AppComponentsPreview>
);
const PreviewButtons = props => (
  <AppComponentsPreview {...props}>
    <AppComponentsPreview.Header title="Button" />
    <AppComponentsPreview.Content>
      <Stack direction="column" gutter={2}>
        <Flex gutter={1}>
          <Button>Default</Button>
        </Flex>
        <Stack gutter={1}>
          <Button shape="text">Text</Button>
          <Button shape="text" color="primary">
            Text Primary
          </Button>
          <Button shape="text" color="secondary">
            Text Secondary
          </Button>
        </Stack>
        <Stack gutter={1}>
          <Button shape="contained">Contained</Button>
          <Button shape="contained" color="primary">
            Contained Primary
          </Button>
          <Button shape="contained" color="secondary">
            Contained Secondary
          </Button>
        </Stack>
        <Stack gutter={1}>
          <Button shape="outline">Outline</Button>
          <Button shape="outline" color="primary">
            Outline Primary
          </Button>
          <Button shape="outline" color="secondary">
            Outline Secondary
          </Button>
        </Stack>
      </Stack>
    </AppComponentsPreview.Content>
  </AppComponentsPreview>
);
const PreviewBoxes = props => (
  <AppComponentsPreview {...props}>
    <AppComponentsPreview.Header title="AppBoxes" />
    <AppComponentsPreview.Content>
      {/* PRIMO */}
      <Flex height="200px" direction="row" autocenter>
        <Box
          width="20%"
          paddingBottom="20%"
          backgroundColor="yellow"
          border="1px solid"
          borderColor="yellow=>darken()+setAlpha(0.5)"
        />
        <Box
          width="20%"
          paddingBottom="20%"
          backgroundColor="orange"
          border="1px solid"
          borderColor="orange=>darken()+setAlpha(0.5)"
        />
        <Box
          width="20%"
          paddingBottom="20%"
          backgroundColor="salmon"
          border="1px solid"
          borderColor="salmon=>darken()+setAlpha(0.5)"
        />
        <Box
          width="20%"
          paddingBottom="20%"
          backgroundColor="red"
          border="1px solid"
          borderColor="red=>darken()+setAlpha(0.5)"
        />
      </Flex>

      {/* SECONDO */}
      <Flex
        height="200px"
        gutter={[2, 4, 6]}
        padding={[2, 4, 6]}
        border="1px solid"
        borderColor="green">
        <Box flex="1" backgroundColor="black" />
        <Box flex="1" backgroundColor="red" />
        <Box flex="1" backgroundColor="orange" />
      </Flex>

      {/* TERZO */}
      <Flex height="200px" direction="row" autocenter>
        <Box
          width="20%"
          paddingBottom="20%"
          backgroundColor="orange"
          border="1px solid"
          borderColor="orange=>darken()+setAlpha(0.5)"
        />
        <Box
          width="20%"
          paddingBottom="20%"
          backgroundColor="salmon"
          border="1px solid"
          borderColor="salmon=>darken()+setAlpha(0.5)"
        />
        <Box
          width="20%"
          paddingBottom="20%"
          backgroundColor="red"
          border="1px solid"
          borderColor="red=>darken()+setAlpha(0.5)"
        />
      </Flex>

      {/* QUARTO */}
      <Flex height="200px" autocenter wrap backgroundColor="white">
        <Box width="18%">
          <Box width="100%" paddingBottom="100%" backgroundColor="black=>setAlpha(0.9)" />
        </Box>
        <Box width="18%">
          <Box width="100%" paddingBottom="100%" backgroundColor="black=>setAlpha(0.9)" />
        </Box>
        <Box width="18%">
          <Box width="100%" paddingBottom="100%" backgroundColor="black=>setAlpha(0.9)" />
        </Box>
      </Flex>
    </AppComponentsPreview.Content>
  </AppComponentsPreview>
);

const ElementsPreviewScreen = () => {
  return (
    <>
      <Stack direction="column" gutter={4} padding={4}>
        <PreviewText />
        <PreviewButtons />
        <PreviewBoxes />
      </Stack>
    </>
  );
};

export default ElementsPreviewScreen;
