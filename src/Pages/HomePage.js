import React, { Component } from 'react'
import axios from 'axios'
import TrMovies from '../components/TrendingMovies'
import TopRated from '../components/TopRated'
import Details from './Details'

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = { result : []}

        // this.state = { }
        const movies= [
            {id: 0, title: "Titanic"},
            {id: 1, title: "Sing"}
        ];
        
    }
    componentDidMount(){
        // Trending Movies 
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=901c934e463e9e9fa41c6d7dfac1af2b')
        .then(res=>{
            // console.log('here is axios',res.data)
            this.setState  ({result : res.data.results})
            console.log(this.state.result);
            
        })

        .catch(error=>{
            console.log(error);
            
        })
        // Top Rated Movies
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=901c934e463e9e9fa41c6d7dfac1af2b')
        .then(res=>{
            console.log('top rated',res.data)
            this.setState  ({resultTop : res.data.results})
            console.log(this.state.result);
            
        })

        .catch(error=>{
            console.log(error);
            
        })

    }
    

    render(){
        return (
            <div>
            <TrMovies topMovies ={this.state.result}/>
            <TopRated resultTop ={this.state.resultTop} />
            <Details topRatedMoviesDetails = {this.state.result} trendingMoviesDetails ={this.state.resultTop} />
            

                
            
            
            </div>
    
        )
    }
    
}
export default HomePage;