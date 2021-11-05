import React from 'react'
import classes from './TodoItem.module.css';

const TodoItem: React.FC <{test: string; onRemoveTodo: () => void}> = (props) => {
    return (
        <li className={classes.item} onClick={props.onRemoveTodo}>
            {props.test}
        </li>
    )
}

export default TodoItem
