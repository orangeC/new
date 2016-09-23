import React from 'react';
import BlogCard from '../component/BlogCard';
import { getJson } from '../util/helper'

  
class Blog extends React.Component {
	constructor(){
     super();
     this.state={
       data:[],
       wait:true
      }
    }
    componentDidMount(){
     getJson()
       .then( (recData) => {
         this.setState({
           data:recData.getJson,
           wait:false
         })
       });
    }
	render () {
	return(
		<div style={{width:"100%"}}>
			Blog
			<div style={{width:'100%',marginTop:'20px'}}>
				{ this.state.wait ? "请稍等。。。" : this.state.data.map( (item,i) => <BlogCard {...item} key={i} /> ) }
			</div>
		</div>
		)
	}
}
export default Blog;
