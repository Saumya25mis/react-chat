import React,{Component}  from'react'
import {auth} from "../helpers/firebase"
import {db} from "../helpers/firebase"


 /*class chat extends Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>Messages</h3>
          <TodoList items={this.state.items} style={{display:'right' }}/>
          <form onSubmit={this.handleSubmit}>
            <input  className="form-control" placeholder="Enter your Text" style={{marginBottom :0 + 'px',marginTop:32 +'rem',marginLeft:10 + 'px',marginRight:20 + "px" , width: 83 +'%',bottom:3,position:'absolute'}}
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button className=" btn btn-success" style={{marginTop:10 +'px',position:'absolute',right:3,bottom:3}}>
              Send
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(event) {
      this.setState({ text: event.target.value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
          <p>{this.props.items.map(item => (
            <p className="text-right" style={{marginRight:8 +'px'}} key={item.id}>{item.text}</p>
          ))}
          </p>
      );
    }
  } 


  */
  
 class Chat extends Component {

  constructor(props){
    super(props);
    this.state={
      user:auth().currentUser,
      chats:[],
      content:'',
      readError: null,
      loadingChats:false,
      writeError:null
    };

  }




async componentDidMount(){
  this.setState({readError:null})
  try{
    db.ref("chats").on("value",snapshot =>{
      let chats=[];
      snapshot.forEach((snap)=>{
        chats.push(snap.val());
      })
      this.setState({chats})
    })
  }catch(error){
    this.setState({readError:error.message})
  }
  this.scrollToBottom();
}

scrollToBottom = () => {
  this.messagesEnd.scrollIntoView({ behavior: "smooth" });
}


componentDidUpdate() {
  this.scrollToBottom();
}



/* return <p  className="text-white" style={{border:1+'px'}} key={chat.timestamp}>: {chat.content}</p> */

render() {
  return (
    
    <div>
        {this.state.chats.map(chat => (<div key={chat.timestamp}>
        {this.state.user.uid === chat.uid  ?(
       <li className=" self" style={{listStyleType:"none",overflow:'hidden',marginLeft: 2 +'px',
            backgroundColor:"whitesmoke",margin:20 + "px",padding:13+'px',width:'max-content',borderBottomLeftRadius:11+'px',float:'right',clear:'both',
            borderBottomRightRadius:11+'px',borderTopLeftRadius:11+'px'}}>

                <div className="message text-dark" >{chat.content} </div>
        </li>
            
          ):(
                <li className="other" style={{listStyleType:"none",overflow:'hidden',marginLeft: 2 +'px',float:'left',clear:'both',
            backgroundColor:"blanchedalmond",margin:20 + "px",padding:13+'px',width:'max-content',borderBottomLeftRadius:11+'px',
            borderBottomRightRadius:11+'px',borderTopRightRadius:11+'px'}}>
          
                 <div className="message text-dark" >{chat.content}</div>
            
            </li>
            
          )}
        </div>
        ))}
        
        <p style={{ float:"left", clear: "both",position:'sticky',bottom:0 }} ref={(el) => { this.messagesEnd = el; }}>
        </p>

        </div>
     
        
  )
}
}
export default Chat;


