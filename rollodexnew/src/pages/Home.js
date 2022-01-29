import React from 'react'
import CardList from '../components/CardList/CardList.Components';
import Search from '../components/Search/Search.Components';
import './Home.Styles.css'

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            monsters : [],
            searchField : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json)
        .then(users => this.setState({monsters:users}));
    }

     handleSearch = (event) =>{
         this.setState({searchField:event.target.value})
     }

    render(){
        const {monsters,searchField} = this.state
        
        const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return(
            <>
            <div className = "Project"> 
                <h1>MONSTER'S ROLLODEX</h1>
                <Search handleSearch = {this.handleSearch}/>
                <CardList monsters = {filteredMonsters} /> 

            </div>
            </>
        )
    }

}

export default Home