import React from "react";
import { mount, route } from "navi";
import { Router, View } from "react-navi";
import Header from "./Header";
import Home from "./pages/Home";
import Register from "./pages/Register";

const routes = mount({
  "/": route({
    view: <Home />
  }),
  "/register": route({
    title: "お名前登録",
    view: <Register />
  })
});

const App: React.FC = () => {
  return (
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
  );
};

export default App;
