import React from "react";
import styled from "styled-components";
import {
  DARK_MODE,
  DARK_MODE_ICON,
  MAIN_COLOR,
} from "../features/style_consts";
import { useSelector, useDispatch } from "react-redux";
import { switchDark } from "../features/reducers/stylesSlice";

const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.darkMode ? DARK_MODE : MAIN_COLOR)};
  color: ${(props) => (props.darkMode ? "black" : "white")};
  height: 100%;
  padding: 0 100px;
`;

const SubTitle = styled.p`
  font-style: italic;
  font-size: 1.4rem;
`;
export const Header = () => {
  const { darkMode } = useSelector((store) => store.styles);
  const dispatch = useDispatch();
  const modeChangeHandler = () => {
    dispatch(switchDark());
  };

  return (
    <HeaderLayout darkMode={darkMode}>
      <h1>TODO List</h1>
      <SubTitle>Make your day more complex</SubTitle>
      <div onClick={modeChangeHandler} style={{ width: "70px" }}>
        <DARK_MODE_ICON />
      </div>
    </HeaderLayout>
  );
};
