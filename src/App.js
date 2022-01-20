import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list-component';
import {SearchBox} from './components/Searchbox/search-box.component'

class App extends Component {
 
  constructor(){
    super()
    this.state = {
      monstors:[],
      searchField:''
      
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monstors:users}));
  }
  render(){
    const {monstors, searchField} = this.state;
    const filteredMonstors = monstors.filter(monstor =>
      monstor.address.city.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
       <h1>Hustlers</h1>
        <SearchBox 
        placeholder= 'Search hustlers Location'
        handelchange = {e =>this.setState({searchField: e.target.value})}
         />
         <CardList monstors={filteredMonstors}/>

      </div>
    )
  }
}

export default App;