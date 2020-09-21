import React,{Component} from 'react'
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
                                   <div className="card-body" style={{overflowY:"auto"}}>
                                   <ContactList Clist={filteredContacts}/>
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

export default Main