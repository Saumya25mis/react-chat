import React,{Component} from 'react'


class Signup extends Component{

    constructor(props){

        super(props)
        this.state = {
            error:null,
            email:'',
            password:''
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

 async handleSubmit (event){
      event.preventDefault();
      this.setState({error:''})
      try{
          await signup(this.state.email,this.state.password);
      } catch(error){
          this.setState({error:error.message})
      }
  }
 
 async googleSignIn(){
      try{
          await this.sighInWithGoogle()
      } catch(error){
          this.setState({error:error.message})
      }
  }

  async githubSignIn(){
    try{
        await this.sighInWithGithub()
    } catch(error){
        this.setState({error:error.message})
    }
}


    render(){
        return(
            <div className="container mt-3 ">
            <div className="card row col-12 d-flex">
               <div className="card-head  justify-content-center text-white bg-primary">
                   <h1>Signup</h1>
                   </div> 
                <div className="card-body">
                <form onSubmit={this.handleSubmit}>
            <label>name</label><input className="form-control"  name="name" type="text" value={this.state.name} onChange={this.handleChange} required></input>
            <label>email</label><input className="form-control" type="email" name="email"  value={this.state.email} onChange={this.handleChange} required></input>
            <label>password</label><input className="form-control" type="password" name ="password" value ={this.state.password} onChange ={this.handleChange} required></input>
            <button value="submit" onClick={this.handleSubmit}> Submit</button>
            
          <hr></hr>
          <p>Already have an account? </p>
            
            </form>
                </div>
            </div>
            </div>
        )
    }
}

export default Signup