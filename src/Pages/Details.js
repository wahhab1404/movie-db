import React, { Component } from 'react'
class Details extends Component {
    constructor(props){
    super(props)
}
render(){
    let moviesDetails = this.props.topRatedMoviesDetails.overview
    return(
        <div>
               <p>{moviesDetails}</p>
        </div>
    )
}
}

export default Details;