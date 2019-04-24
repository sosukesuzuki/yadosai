import React from "react";
import { mount, route } from "navi";
import { Router, View } from "react-navi";
import Header from "./Header";
import Home from "./pages/Home";

const routes = mount({
  "/": route({
    view: <Home />
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
