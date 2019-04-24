import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { mount, route } from "navi";
import { Router, View } from "react-navi";
import Header from "./Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Sale from "./pages/Sale";
import { blue } from "@material-ui/core/colors";

const routes = mount({
  "/": route({
    view: <Home />
  }),
  "/register": route({
    title: "お名前登録",
    view: <Register />
  }),
  "/sale": route({
    title: "メロンパンアイスを売るぞ",
    view: <Sale />
  })
});

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: blue
  }
});

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router routes={routes}>
        <Header />
        <div
          style={{
            marginTop: "85px"
          }}
        >
          <View />
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
