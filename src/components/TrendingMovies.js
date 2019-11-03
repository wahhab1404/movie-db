import React, { Component }  from 'react'
import HomePage from '../Pages/HomePage'

class TrMovies extends Component {
    constructor(props){
        super(props)
    }
    details=(e)=>{
        
        console.log('Click Works',e)
        
    }
    render(){
        let TopM;
        if(this.props.topMovies){
        if (this.props.topMovies.length > 0 ) {

             TopM = this.props.topMovies.map((movie)=>{
               return  <div key = {movie.id}><img onClick={()=>this.details(movie)} src ={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/></div>
            })
        }else{
           TopM = <h1>Loading...</h1>
        }}
        return( 
            <div>
                <h1>Trending Movies This Week</h1>
               <div   className= "flexCont">
                    {TopM}
                </div>  
                
            </div>
        )
    }
}

export default TrMovies