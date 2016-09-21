import React from 'react';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Leftnav from "./component/Leftnav";
import "./main.css"

class App extends React.Component {
	constructor(){
		super();
		this.state={
			showNav:false
		}
	}
	setNavBarState(){
		this.setState({showNav:window.innerWidth > 760 ? true :false})
	}
	componentDidMount(){
		this.setNavBarState();
		window.onresize = this.setNavBarState.bind(this)
	}
  render () {
    return(
      <div className="content-wrap">
	      { this.state.showNav ? <Leftnav /> : <Header />}
	      <div className="content-m">{this.props.children}</div>
	      { this.state.showNav ? null : <Footer />}
      </div>
    )
  }
}

export default App;
