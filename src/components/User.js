import React, { Component } from 'react'

class User extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         id: '46315000',
    //         name: 'Serhat Çubukçuoğlu',
    //         login: 'Sirhot',
    //         avatar_url: 'https://avatars.githubusercontent.com/u/46315000?v=4',
    //         html_url: 'https://github.com/Sirhot',
    //         followers: '1',

    //     }
    // }

    // render() {
    //     const { id, name, login, avatar_url, html_url, followers } = this.state;
    //     return (
    //         <div className="card m-2">
    //             <div className="row">
    //                 <div className="col-md-3">
    //                     <img src={avatar_url} alt="" className="card-img" />
    //                 </div>
    //                 <div className="col-md-9">
    //                     <div className="card-body">
    //                         <h5 className="card-title">{name}</h5>
    //                         <p className="card-text">{followers}</p>
    //                         <p className="card-text">html_url</p>
    //                         <a href={html_url} className="btn btn-primary btn-sm">Go Profile</a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    render() {
        const { login, avatar_url, html_url } = this.props.user;
        return (
            <div className="col-md-4 col-sm-6 col-lg-3">
                <div className="card mt-2">
                    <img src={avatar_url} alt="" className="img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title">{login}</h5>
                        <a href={html_url} className="btn btn-primary btn-sm">Go Profile</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default User