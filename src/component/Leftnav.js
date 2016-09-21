import React from 'react';
import { Link } from "react-router"


class Leftnav extends React.Component {
  render () {
  	let styles={
  		root:{
  			width:"35%",
  			fontSize:"25px",
  			marginLeft:"25px",
  			lineHeight:"50px"
  		}
  	}
    return(
      <div className="left-nav" style={styles.root}>
       <h2 >欢迎进入</h2>
	      <Link to="/" activeStyle={{color:"#fff"}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home">&nbsp;Home</span></Link>
	      <Link to="/work" activeStyle={{color:"#fff"}}><span className="glyphicon glyphicon-cloud">&nbsp;Work</span></Link>
	      <Link to="/about" activeStyle={{color:"#fff"}}><span className="glyphicon glyphicon-comment">&nbsp;About</span></Link>
	      <Link to="/blog" activeStyle={{color:"#fff"}}><span className="glyphicon glyphicon-tree-deciduous">&nbsp;Blog</span></Link>
      </div>
    )
  }
}

export default Leftnav;