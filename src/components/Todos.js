import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Todo } from "./Todo";

const Warning = styled.div`
    text-align:center;
    font-size:4rem;
`

const List = styled.ul`
    list-style:none;
    padding:0;
`

export const Todos = () => {
  const {todos} = useSelector((store) => store.todo);

  if (todos.length === 0) return <Warning>No tasks</Warning>;

  return (
    <List>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo}/>
      ))}
    </List>
  );
};
