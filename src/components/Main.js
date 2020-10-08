/* import React,{Component} from 'react'
import Windowh from '../container/Windowh'
import Right from './Right'
import {Clist} from './Clist'
import ContactList from './ContactsList'
import SearchBox from './SearchBox'



class Main extends Component{


    constructor(){

        super()
        this.state={
            Clist:Clist,
            SearchField:''
        }
    }

    onSearchChange = (event) =>{
        this.setState({
            SearchField:event.target.value
        })


    }

    cardClicked = (event) =>{
        console.log("card clicked")
    }

    render(){

        const filteredContacts = this.state.Clist.filter(Clist =>{
            return Clist.name.toLowerCase().includes(this.state.SearchField.toLowerCase())
        })
        return(
            <div>
                <div className="container">
                    
                    <div className="card mt-4 bg-light ">
                        <Windowh/>
                        <div className="card-body">
                        <div className="container">
                             <div className="row">
                                    <div className="col">
                               <div className="card" style={{height:30 +'rem',}}>
                                   <div className="card-head">
                                   <SearchBox  searchChange={this.onSearchChange}/>
                                   </div>
                                   <div className="card-body" onClick={this.cardClicked} style={{overflowY:"auto"}}>
                                   <ContactList  Clist={filteredContacts}/>
                                   </div>
                                    
                                    
                                    </div>

                                </div>
                               <div className="col">
                               <div className="card" style={{height:30 +'rem',overflowY:'auto'}}>
                                       <Right/> 
                                        </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main */



import React,{Component} from 'react'
import Windowh from '../container/Windowh';
import { logout } from '../helpers/auth';
import Chat from './Right';
import {auth} from "../helpers/firebase"
import {db} from "../helpers/firebase"



class Main extends Component{

    constructor(props){
        super(props)
        this.state={
            user:auth().currentUser,
            content:'',
            readError: null,
            loadingChats:false,
            writeError:null

        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.signOut=this.signOut.bind(this)
    }
   
   
    async signOut(){
        try{
            await logout()
        } catch(error){
            this.setState({error:error.message})
        }
    }

    handleChange(event) {
        this.setState({ content: event.target.value });
      }
      
    async handleSubmit(event){
        event.preventDefault();
          this.setState({writeError:null});
          try{
            await db.ref("chats").push({
              content:this.state.content,
              timestamp:Date.now(),
              uid:this.state.user.uid
              
            });
            this.setState({content:''})
          }catch(error){
            this.setState({writeError:error.message})
          }
        }
      



    render(){

        return(
            <div>
                <button style={{margin:0.4 + '%',float:'right'}} onClick={this.signOut} type="submit" className = "btn btn-lg btn-danger" > Logout</button>
             
        <div className="container">
                
            <div className="card mt-4 bg-light" style={{borderRadius:0}}>
                <Windowh/>
                <div className="card-body">
                <div className="container">
                        <div className="row">
                            <div className="col">
                        <div className="card text-white" style={{height:35 +'rem',backgroundColor:'black',overflowY:'auto',display:'flex'}}>
                        <Chat />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>  <form onSubmit={this.handleSubmit}>
            <input  className="form-control" placeholder="Enter your Text" style={{marginBottom :0 + 'px',marginTop:32 +'rem',marginLeft:10 + 'px',marginRight:20 + "px" , width: 93 +'%',bottom:3,position:'absolute'}}
              onChange={this.handleChange}
              value={this.state.content}
            />
            <button className=" btn btn-md btn-success" style={{marginTop:10 +'px',position:'absolute',right:3,bottom:3}}>Send
            </button>
          </form>
                <strong className="text-center">{this.state.user.email}</strong>
                    
            </div>
        </div>
    </div>
        )
    }
}

export default Main