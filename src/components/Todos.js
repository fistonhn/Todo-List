import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component {

    render() {
        return this.props.ttodos.map((todo) => (
        <TodoItem key={todo} todo={todo} markCompleted = {this.props.markCompleted} delTodo={this.props.delTodo}/>
        ));
    }
}

export default Todos;
