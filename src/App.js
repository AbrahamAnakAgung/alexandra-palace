import * as React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Header } from "./components/Header/Header";
import { SectionContents } from "./components/SectionContents/SectionContents";
import { COLORS } from "./constants";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <MainWrapper>
              <Header />
              <SectionContents />
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
  background: ${COLORS.whitePrimary};
`;

export default hot(App);
