import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme, ThemeModeContextProvider } from "@useui/react";
import { routerRoutes } from "./config";
//Components
import AppLayout from "./components/AppLayout";
import ElementsPreviewScreen from "./screens/ElementsPreviewScreen";
import HeroScreen from "./screens/HeroScreen";
import ArticleScreen from "./screens/ArticleScreen";
import TestScreen from "./screens/TestScreen";

const App = () => {
  return (
    <div className="App">
      <ThemeModeContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <AppLayout>
              <Switch>
                <Route path={routerRoutes.test.path} component={TestScreen} />
                <Route path={routerRoutes.elementsPreview.path} component={ElementsPreviewScreen} />
                <Route path={routerRoutes.hero.path} component={HeroScreen} />
                <Route path={routerRoutes.article.path} component={ArticleScreen} />
                <Redirect from="/home" to={routerRoutes.hero.path} />
                <Redirect from="/" to={routerRoutes.hero.path} />
              </Switch>
            </AppLayout>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeModeContextProvider>
    </div>
  );
};

export default App;
