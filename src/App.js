import * as React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path='/Home'>
            <MainWrapper>
              <Header />
            </MainWrapper>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

const MainWrapper = styled.div`
  height: 100%;
  overflow: visible;
  position: relative;
`;

export default hot(App);
