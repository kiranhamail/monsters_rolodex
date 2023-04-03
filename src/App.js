import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [title, setTitle]=useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  console.log('rendered');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  return (
    <div className='App'>
       <h1 className='app-title'>Monster Rolodex</h1>
       <h1 className='app-title'>{title}</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <br/>
      <SearchBox
        className='title-search-box'
        onChangeHandler={onTitleChange}
        placeholder='set title'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
  // _searchMonster(event) {
  //   const value = event.target.value
  //   console.log(value)
  //   console.log(this.setState)
  //   const monsterFilter = this.state.monsters.filter(m => m.name.includes(value))
  //   console.log(monsterFilter)
  //   this.setState({ monsters: monsterFilter })
 
 
  