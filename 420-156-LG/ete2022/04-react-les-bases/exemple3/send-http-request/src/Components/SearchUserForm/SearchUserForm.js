import React, { Component } from 'react';
import './SearchUserForm.css';

export default class SearchUserForm extends Component {
    state = {
        userName: "",
        error: null,
        isLoading: false
    }

    onChangeInputHandler = (input) => {
        this.setState({ userName: input.target.value })
    }

    onSearchUserHandler = (event) => {
        event.preventDefault();
        const userName = this.state.userName.trim();

        if(userName.length) {
            this.setState({ isLoading: true });
            fetch(`https://api.github.com/search/users?q=${userName}`)
            .then(res => res.json())
            .then(result => {
                this.setState({ isLoading: false, error: null });
                
                if(!result.items) {
                    throw new Error("No results!");
                } else {
                    this.props.onFindUsers(result.items);
                }
            },
            (error) => {
                this.setState({ isLoading: false, error });
            })
            .catch(error => {
                this.setState({ isLoading: false, error });
            })
        } else {
            alert('You must enter the user name');
        }
    }

    render() {
        const { isLoading, error, userName } = this.state;
        return (
            <>
                {isLoading && <div className="search-loading">Loading...</div>}
                <form className="search-user-form" onSubmit={this.onSearchUserHandler}>
                    <input type="text" placeholder="Search User" value={userName} onChange={this.onChangeInputHandler}/>
                    <button type="submit" disabled={isLoading}>Find user</button>
                </form>
                {error && <div className="search-error">Error: {error.message}</div>}
            </>
        );
    }
 }