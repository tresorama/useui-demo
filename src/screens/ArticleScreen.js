import React from "react";
import { Box, Text, Stack, Image } from "@useui/react";

const fakeArticle = {
  title: "Building a React Native App With Complex Navigation Using React Navigation",
  author: "Johnny Cannuccia",
  authorImg: "https://miro.medium.com/fit/c/56/56/1*uR9XpoOaH6sonRp622ADIw.jpeg",
  dateCreated: "Sep 28, 2021",
  timeToRead: "10 min",
  content: `
  <p>Nesting drawers with stacks? Check ✔️<br>Automatically rendering the header with the platform specific style? Yup ✔️<br>Dynamically using modal or card transitions on iOS? Uh-huh ✔️<br>Locking the drawer on certain screens in a stack? You got it ✔️<br>Adding a logout button to the burger menu? Easy ✔️</p>
  <p><strong>NOTE: </strong><span id="rmm">I</span>f you want more articles like this, you might want to <a href="https://janhesters.com/newsletter-announcement/" class="dm iq" rel="noopener nofollow">subscribe to my newsletter</a> because you will get more content like this! 💌</p>
  <p>Nesting drawers with stacks? Check ✔️<br>Automatically rendering the header with the platform specific style? Yup ✔️<br>Dynamically using modal or card transitions on iOS? Uh-huh ✔️<br>Locking the drawer on certain screens in a stack? You got it ✔️<br>Adding a logout button to the burger menu? Easy ✔️</p>
  <p>Nesting drawers with stacks? Check ✔️<br>Automatically rendering the header with the platform specific style? Yup ✔️<br>Dynamically using modal or card transitions on iOS? Uh-huh ✔️<br>Locking the drawer on certain screens in a stack? You got it ✔️<br>Adding a logout button to the burger menu? Easy ✔️</p>
  <p>Nesting drawers with stacks? Check ✔️<br>Automatically rendering the header with the platform specific style? Yup ✔️<br>Dynamically using modal or card transitions on iOS? Uh-huh ✔️<br>Locking the drawer on certain screens in a stack? You got it ✔️<br>Adding a logout button to the burger menu? Easy ✔️</p>
  <p>Nesting drawers with stacks? Check ✔️<br>Automatically rendering the header with the platform specific style? Yup ✔️<br>Dynamically using modal or card transitions on iOS? Uh-huh ✔️<br>Locking the drawer on certain screens in a stack? You got it ✔️<br>Adding a logout button to the burger menu? Easy ✔️</p>
  <p>Nesting drawers with stacks? Check ✔️<br>Automatically rendering the header with the platform specific style? Yup ✔️<br>Dynamically using modal or card transitions on iOS? Uh-huh ✔️<br>Locking the drawer on certain screens in a stack? You got it ✔️<br>Adding a logout button to the burger menu? Easy ✔️</p>
  `,
};

const UI = {
  wrapper: {
    // common
    padding: 4,
    maxWidth: ["100%", null, "750px"],
    marginX: "auto",
  },
  headerTitle: {
    // Text API
    typo: "heading1",
    // common
    color: "black",
  },
  metadataWrapper: {
    // Stack API
    direction: "row",
    // common
    height: "2em",
    alignItems: "center",
    marginY: 4,
  },
  authorImage: {
    // Image API
    circle: true,
    //common
    width: "2em",
  },
  authorName: {
    // Text API
    typo: "heading5",
    // common
    color: "primary",
    marginLeft: 2,
  },
  dateCreated: {
    // Text API
    typo: "heading5",
    // common
    marginLeft: 2,
    color: "black=>setAlpha(0.4)",
  },
  timeToRead: {
    // Text API
    typo: "heading5",
    // common
    marginLeft: 1,
    color: "black=>setAlpha(0.4)",
  },
  content: {
    // Text API
    typo: "body",
    // common
    "& p": {
      marginTop: 5,
    },
  },
};
const ArticleScreen = () => {
  return (
    <Box {...UI.wrapper}>
      <Text as="h1" {...UI.headerTitle}>{fakeArticle.title}</Text>
      <Stack {...UI.metadataWrapper}>
        <Image {...UI.authorImage} src={fakeArticle.authorImg}/>
        <Text as="span" {...UI.authorName}>{fakeArticle.author}</Text>
        <Text as="span" {...UI.dateCreated}>{fakeArticle.dateCreated}</Text>
        <Text as="span" {...UI.timeToRead}>{fakeArticle.timeToRead} read</Text>
      </Stack>
      <Text as="div" {...UI.content} dangerouslySetInnerHTML={{__html: fakeArticle.content}}></Text>
    </Box>
  );
};

export default ArticleScreen;
