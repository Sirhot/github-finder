import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import Users from './Users'
//we got the infos using axios via http request
//npm i axios
import axios from 'axios'
import Search from './Search'

export class App extends Component {
    constructor(props) {
        super(props);
        this.searchUsers = this.searchUsers.bind(this);
        this.clearUsers = this.clearUsers.bind(this);
        this.state = {
            loading: false,
            users: []
        }
    }

    //https://medium.com/software-development-turkey/react-lifecycle-ya%C5%9Fam-d%C3%B6ng%C3%BCs%C3%BC-d650ab78ab4f#:~:text=ComponentDidMount,Yani%20render%20i%C5%9Fleminden%20sonra%20%C3%A7al%C4%B1%C5%9F%C4%B1r.&text=Not%20*%3D*%20ComponentDidMount'ta%20setState%20i%C5%9Flemi%20yap%C4%B1l%C4%B1rsa%20tekrardan%20Render%20i%C5%9Flemi%20yap%C4%B1l%C4%B1r.
    // componentDidMount() {
    //     this.setState({ loading: true });
    //     setTimeout(() => {
    //         axios.get("https://api.github.com/users").then(res => this.setState({ users: res.data, loading: false }))

    //     }, 1000);
    // }

    searchUsers(keyword) {
        this.setState({ loading: true });
        setTimeout(() => {
            //https://api.github.com/search/users?q=Sirhot
            axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res => this.setState({ users: res.data.items, loading: false }))

        }, 1000);
    }

    clearUsers() {
        this.setState({ users: [] })
    }

    render() {
        return (
            <>
                <Navbar />
                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClearButton={this.state.users.length > 0 ? true : false} />
                <Users users={this.state.users} loading={this.state.loading} />
            </>
        )
    }
}

export default App