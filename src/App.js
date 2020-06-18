import React, { Component } from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddToDo from "./components/AddToDo";
import { v4 as uuidv4 } from 'uuid';
import About from './components/pages/About';


class App extends Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Learn React",
                completed: false,
            },
            {
                id: uuidv4(),
                title: "Learn Firebase",
                completed: false,
            },
            {
                id: uuidv4(),
                title: "Learn Bootstrap",
                completed: false,
            },
        ],
    };

    markComplete = (id) => {
        console.log(id);
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
        });
    };

    delTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        });
    };

    addToDo = (title) =>{
        const newToDo = {
            id:uuidv4(),
            title,
            completed:false
        }

        this.setState({todos:[...this.state.todos,newToDo]})
    }

 

    render() {
        return (
            <Router>
                <div style={appStyle} className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                 <AddToDo addToDo={this.addToDo}/>
                            <Todos
                                todos={this.state.todos}
                                markComplete={this.markComplete}
                                delTodo={this.delTodo}
                            />
                            </React.Fragment>
                        )}/>

                            <Route path="/about" component={About}/>
                           
                    </div>
                </div>
            </Router>
        );
    }
}

const appStyle = {
    padding: "0 2rem",
    backgroundColor: "whitesmoke",
};

export default App;
