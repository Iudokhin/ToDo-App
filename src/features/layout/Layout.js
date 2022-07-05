import React from "react";
import styled from "styled-components";
import { DARK_MODE, MAIN_COLOR } from "../style_consts";
import { useSelector } from "react-redux";

const SplitLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  gap: 10px;
  width: 50%;
  background-color: ${MAIN_COLOR};
  color: white;
  border-radius: 10px;
  border: 1px solid black;
  background-color: ${(props) => (props.darkMode ? DARK_MODE : MAIN_COLOR)};
`;

const Header = styled.div`
  height: 100px;
`;

const Block = styled.div`
  padding: 10px;
`;

const Background = styled.div`
  background-color: ${(props) => props.darkMode && "black"};
  height: 100vh;
`;

export const Layout = ({ children }) => {
  const { darkMode } = useSelector((store) => store.styles);
  return (
    <Background darkMode={darkMode}>
      <Header>{children[0]}</Header>
      <SplitLayout darkMode={darkMode}>
        <Block>{children[1]}</Block>
        <Block>{children[2]}</Block>
      </SplitLayout>
    </Background>
  );
};
