import React,{Component} from 'react';
import CardList from'./CardList';
import {robots} from './robots';
import SearchBar from './SearchBar';

class App extends Component {
    constructor()
    {
        super()
        this.state=
        {
            robots : robots,
            searchfield : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value});
        //console.log(filteredRobot);
    }
         
    render(){
        const filteredRobot = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBar searchChange={ this.onSearchChange }/>
                <CardList robots={filteredRobot} />
            </div>
        ); 
    }

}
export default App;