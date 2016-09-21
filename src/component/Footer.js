import React from 'react';
import { Link } from "react-router"


class Footer extends React.Component {
  render () {
    return(
      <div className="nav-footer">
	      <Link to="/" activeStyle={{color:"#fff"}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home"><br/>Home</span></Link>
	      <Link to="/work" activeStyle={{color:"#fff"}}><span className="glyphicon glyphicon-cloud"><br/>Work</span></Link>
	      <Link to="/about" activeStyle={{color:"#fff"}}><span className="glyphicon glyphicon-comment"><br/>About</span></Link>
	      <Link to="/blog" activeStyle={{color:"#fff"}}><span className="glyphicon glyphicon-tree-deciduous"><br/>Blog</span></Link>
      </div>
    )
  }
}

export default Footer;