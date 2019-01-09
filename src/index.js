import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

///////////////////////////////////
import move from "./img/move.png";
import grid from "./img/grid.png";
import pencil from "./img/penciljawn.png";
import redo from "./img/redo.png";
import undo from "./img/undo.png";
import zoomin from "./img/zoomin.png";
import zoomout from "./img/zoomout.png";

let SideBar = styled.div`
  grid-area: s;
  //padding: 30px;
  //border: solid 2px teal;
  width: 30px;
  grid-area: 3/14/7/15;
`;
///////////////////////////////////

let GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`;

let Header = styled.div`
  grid-area: h;
  border: solid 1px blue;
  grid-area: 1/1/1/18;
  padding: 15px;
  text-align: right;
`;

let Footer = styled.div`
  grid-area: f;
  border: solid 2px green;
  padding: 15px;
  grid-area: 12/2/13/7;
`;

let Content = styled.div`
  grid-area: 2/1/15/16;
  border: solid 2px indigo;
`;

let Main = styled.main`
  display: grid;
  //grid-gap: 7px;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(12, 1fr);
  border: solid 2px red;
  //min-height: 100vh;
`;

const imgWidth = 30;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Main>
        <Header>Header</Header>
        <Content>Content</Content>
        <SideBar>
          <img width={imgWidth} src={move} alt={"move-image"} />
          <img width={imgWidth} src={pencil} alt={"pencil-image"} />
          <img width={imgWidth} src={grid} alt={"grid-image"} />
          <img width={imgWidth} src={zoomin} alt={"zoom-in-image"} />
          <img width={imgWidth} src={zoomout} alt={"zoom-out-image"} />
        </SideBar>
        <Footer>Co-ordinates</Footer>
      </Main>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
