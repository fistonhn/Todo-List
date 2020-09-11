import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './app.css';

class App extends React.Component {
  state = {
    todos: []
  }

// Toggle Complete
markCompleted = (id) => {
  this.setState({ todos: this.state.todos.map(todo => {
    if(todo.id === id) {
      todo.completed =!todo.completed
      console.log('hello');
    }
    return todo;
  }) });
}

// Delete Todo
delTodo = (id) => { this.setState({ todos: [...this.state.todos.filter(todo => 
    todo.id !== id)] });

}



//Add Todo
addTodo = (title) => {
  console.log(this.state.todos.length + 1);
  
  const newTodo = {
    id : this.state.todos.length + 1,
    title,
    completed: false
  }

   if(newTodo.title === ""){
     window.alert('Todo is not allowed to be empty.')
   }else{

    this.setState({ todos: [...this.state.todos, newTodo]} )

   }

  
}
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
               <AddTodo addTodo={this.addTodo} />
               <Todos ttodos={this.state.todos} markCompleted=
               {this.markCompleted}  delTodo={this.delTodo}/>
              </React.Fragment>
            )}/>
            <Route path="/about" component={About} />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
