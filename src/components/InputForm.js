import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/reducers/todoSlice";
import { nanoid } from "nanoid";
import styled from "styled-components";

const InputBlock = styled.div`
    display:flex;
    gap:10px;
`

const Input = styled.input`
    padding:20px 10px;
    flex:1 1 60%;
    border-radius:10px;
    font-size:1.9rem;
    outline:none;
    border:none;
`
const Button = styled.button`
    padding:10px;
    flex:1;
    border-radius:10px;
    font-size:1.9rem;
    border:none;
`

export const InputForm = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const id = nanoid();

  const addHandler = useCallback(() => {
    if(todoText.trim().length === 0) {
        setTodoText('')
        return
    }

    const newTodo = {
      id: id,
      text: todoText,
    };
    dispatch(addTodo(newTodo));
    setTodoText("");
  }, [dispatch, todoText, id]);

  return (
    <InputBlock>
      <Input
        placeholder="Input ToDo..."
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <Button onClick={addHandler}>ADD</Button>
    </InputBlock>
  );
};
