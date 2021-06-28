import React, { useState, useContext } from 'react';
import { TodoContext } from '../../../../contexts/todo.context';

import * as S from './styles';

export default function Todo({ id, description, done }) {
    const todoContext = useContext(TodoContext);
    const [todo, setTodo] = useState({ id: id, description: description, done: done });

    const handleUpdateTodo = () => {
        setTodo({id: id, description: description, done: !done})
        todoContext.dispatch({ type: 'update', payload: todo});
    }

    const handleDeleteTodo = () => {
        setTodo({id: id, description: description, done: done})
        todoContext.dispatch({ type: 'remove', payload: todo});
    }

    return (
        <S.Wrapper value={todo.id}>
            <div >
                <div>{todo.id} - {todo.description}</div>
                <S.ItemDone value={todo.done} >Feito? <span>{todo.done === true ? 'Sim' : 'Não'}</span></S.ItemDone>
            </div>
            <S.OkButton value={todo.done}>
                <button type="button" onClick={handleUpdateTodo}>Ok</button>
                <button type="button" onClick={handleDeleteTodo}>Excluir</button>
            </S.OkButton>
        </S.Wrapper>
    )
}