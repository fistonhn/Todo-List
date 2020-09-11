import React from 'react';

class TodoItem extends React.Component {


    render() {
        const { id, title } = this.props.todo;
        return (
            <div style= {itemStyle}>
                <p>
                    <input type="checkbox"  onChange={this.props.markCompleted.bind(this, id)} /> {' '} { title }
                   
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    color:'#fff',
    background:'#ff0000',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}
const itemStyle = {
    backgroundColor: '#f4f4f4',
    borderBottom: '1px #ccc dotted',
    padding: '10px'
}

export default TodoItem;
