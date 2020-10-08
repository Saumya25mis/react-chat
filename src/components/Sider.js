import React,{Component} from 'react'

class Sider extends Component{


    render(){
        return(
            <div>
                 <ul style={{listStyleType:'none',gap:20 +'px',display:"grid",marginRight:10+'px',float:'right'}}>
                <li><a href="https://www.linkedin.com/in/nikhil-mishra-172a481a5" className="fa fa-linkedin" style={{textDecoration:'none', borderRadius:50+'%', background:'#007bb5',color: 'white',width:76 +'px',fontSize:30 +'px',textAlign:"center",padding:20+'px'}}></a></li> 
                <li><a href="nikhilmishra2608@gmail.com" className="fa fa-google" style={{textDecoration:'none',  borderRadius:50+'%',background:'#dd4b39',color: 'white',width:76 +'px',fontSize:30 +'px',textAlign:"center",padding:20+'px'}}></a></li>
                <li> <a href="https://twitter.com/nikhilmishraall" className="fa fa-twitter" style={{ textDecoration:'none',borderRadius:50+'%', background:'#55ACEE',color: 'white',width:76 +'px',fontSize:30 +'px',textAlign:"center",padding:20+'px'}}></a></li>
                <li> <a href="https://github.com/codewizard26" className="fa fa-github" style={{textDecoration:'none', borderRadius:50+'%',background:'black',color: 'white',width:76 +'px',fontSize:30 +'px',textAlign:"center",padding:20+'px'}}></a></li>
                 </ul>
            
            </div>
        )
    }
}

export default Sider