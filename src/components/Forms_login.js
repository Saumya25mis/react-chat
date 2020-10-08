import React,{Component} from 'react';
import {signin,signInWithGithub,signInWithGoogle} from "../helpers/auth";
import {Link} from "react-router-dom";
import Header from '../container/Header';
import Sider from './Sider';
import 'firebase/firestore';




class Signin extends Component{

    constructor(props){
        super(props);
        this.state = {  
            name:"",        
            error:null,
            email:'',
            password:'',
           
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.googleSignIn = this.googleSignIn.bind(this);
        this.githubSignIn = this.githubSignIn.bind(this);
    }

 handleChange (event) {
     this.setState({
         [event.target.name]:event.target.value
     })
 }


async handleSubmit(event){
     event.preventDefault();
     this.setState({error:''})
     try{
         await signin(this.state.email,this.state.password)
     }catch(error){
        this.setState({error:error.message});
     }
 }

 async googleSignIn(){
      try{
          await signInWithGoogle()
      } catch(error){
          this.setState({error:error.message})
      }
  }

  async githubSignIn(){
    try{
        await signInWithGithub()
    } catch(error){
        this.setState({error:error.message})
    }
}


    render(){
        return(
            <div className="grid" >
            <Header />
            <div className="row">
                <div className="col">
                <div className="card text-center" style={{margin:8 +'%',fontFamily:'cursive',width:30 + 'rem',backgroundColor: "rgba(144, 171, 171, 0.6 )"}}>
               <div className="card-head  justify-content-center mt-2 ">
                   <h1 style={{marginTop:24 + "px",color:"white"}}>Login</h1>
                   </div> 
                <div className="card-body">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>name</label><input className="form-control" placeholder="Name"  name="name" type="text" value={this.state.name ||""} onChange={this.handleChange} required></input>
            <label>email</label><input className="form-control" placeholder="Email" type="email" name="email"  value={this.state.email || ""} onChange={this.handleChange} required></input>
            <label>password</label><input className="form-control" placeholder="Password" type="password" name ="password" value ={this.state.password ||""} onChange ={this.handleChange} required></input><br></br>
            
            <div className="form-group">
            {this.state.error ? (
              <p className="text-danger">{this.state.error}</p>
            ) : null}
            <button className="btn btn-primary px-5" type="submit">Login</button>
          </div>
          <p>You can also log in with any of these services</p>
          <button className="btn btn-danger mr-2" type="button" onClick={this.googleSignIn}>
            Sign in with Google
          </button>
          <button className="btn btn-dark" type="button" onClick={this.githubSignIn}>
            Sign in with GitHub
          </button> 
          <hr></hr>
          <p>Dont have an account?<Link to="/signup" style={{color:'blue'}}> Sign up</Link> </p>
            
            </form>
                </div>
            </div>
                </div>
                <div className="col" style={{margin:10 +'%'}}>
                <Sider ></Sider>
                </div>
            </div>

            
            </div>
        )
    }
}

export default Signin