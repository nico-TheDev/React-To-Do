import React, { Component } from "react";

export class AddToDo extends Component {
    state = {
        title : ''
    }

    onChange = e => {this.setState({[e.target.name] : e.target.value})}

    onSubmit = e => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({title:''})
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit}>
                <input type="text" name="title" placeholder="Add to do..." onChange={this.onChange}/>
                <input type="submit" value="Submit" className="btn"/>
            </form>
        );
    }
}

export default AddToDo;
