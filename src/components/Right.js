import React,{Component}  from'react'

class Right extends React.Component {
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
  

export default Right