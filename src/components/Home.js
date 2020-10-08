import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../container/Header';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <section>
        <div className="card" style={{width:28 + "rem",margin:8 + "%",opacity:1, backgroundColor: "rgba(255,255,255, 0)",border:0}}>
          <div className="card-head">
           <h1 style={{fontFamily:'sans',fontSize:7.4 + "rem",color:"wheat"}}>Welcome</h1><h2 style={{fontFamily:'sans',fontSize:3 + "rem",color:"wheat",marginTop:-37 +"px",marginLeft:31 + "px"}}>People</h2>
          </div>
          <div className="card-body text-white text-center">
          <p style={{fontSize:30 + "px"}}> "Wizard Chat", A great place to share your thoughts with your friends in a public chat room </p>
            <br></br>
            <Link className="btn btn-primary mr-3" to="/signup">Create New Account</Link>
            <Link className="btn btn-primary "  to="/signin">Login to Your Account</Link>
          </div>
        </div>
        </section>
        </div>
    )
  }
}


/*            <div className="jumbotron jumbotron-fluid py-5">
            <div className="container text-center py-5">
              <h1 className="display-4 bold" style={{fontFamily:'sans'}}>Welcome People</h1>
              <p className="lead">A great place to share your thoughts with friends</p>
              <div className="mt-4">
                <Link className="btn btn-primary px-5 mr-3" to="/signup">Create New Account</Link>
                <Link className="btn px-5 btn-primary"  to="/signin">Login to Your Account</Link>
              </div>
            </div>
          </div> */