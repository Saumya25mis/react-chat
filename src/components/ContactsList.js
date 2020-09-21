import React from 'react'
import Contacts from './Contacts'



const ContactList = ({Clist}) =>{

    const contactComponent = Clist.map((user,i) => {
     
       return  (<Contacts key ={i} id = {Clist[i].id} name = {Clist[i].name} />)
    })
    return(
        <div>
             {contactComponent}
        </div>
    )
}

export default ContactList