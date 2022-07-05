import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/reducers/todoSlice";
import { updateLocalStorage } from "../features/localStorage";
import { DELETE_BUTTON } from "../features/style_consts";

const Item = styled.li`
  padding: 10px;
  border-bottom: 1px solid;
  font-size: 1.7rem;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Checkbox = styled.input`
  padding: 10px;
  font-size: 1rem;
  width: 30px;
  height: 30px;
`;

const LabelDisabled = styled.label`
  text-decoration: line-through;
  color: grey;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 0 0 auto;
  width: 50px;
`;

export const Todo = ({ id, text, checked: isChecked }) => {
  const [checked, setChecked] = useState(isChecked);
  const dispatch = useDispatch();

  const handleChange = () => {
    updateLocalStorage(id, !checked);
    setChecked((prev) => !prev);
  };

  return (
    <Item>
      <Checkbox
        type="checkbox"
        value={checked}
        checked={checked}
        onChange={handleChange}
        name={id}
        id={id}
      />
      {checked ? (
        <LabelDisabled htmlFor={id}>{text}</LabelDisabled>
      ) : (
        <label htmlFor={id}>{text}</label>
      )}
      <Button onClick={() => dispatch(deleteTodo(id))}>
        <DELETE_BUTTON />
      </Button>
    </Item>
  );
};
