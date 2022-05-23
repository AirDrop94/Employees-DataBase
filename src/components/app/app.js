import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [{name: 'John', lastName: 'Deer', department:'MANAGER', salary: 2500, increase: false, rise: true, id: 1},
        {name: 'Juan', lastName: 'Carlos', department:'QA', salary: 800, increase: false, rise: false, id: 2},
        {name: 'Markus', lastName: 'Bennet', department:'QA', salary: 500, increase: true, rise: false, id: 3},
        {name: 'Beata', lastName: 'Kowalska', department:'DEV', salary: 2200, increase: false, rise: false, id: 4},
        {name: 'Karina', lastName: 'Lipninska', department:'QA', salary: 700, increase: false, rise: false, id: 5},
        {name: 'Bartek', lastName: 'Urban', department:'MANAGER', salary: 2500, increase: false, rise: false, id: 6},
        {name: 'Artsiom', lastName: 'Luskha', department:'DEV', salary: 1200, increase: false, rise: false, id: 7}
      ],
      term: '',
      filter: 'all'
    }

    this.maxId = 10;

  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, lastName, department, salary) => {
    const newItem = {
      name,
      lastName,
      department,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.lastName.indexOf(term) > -1;
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
      case 'lessThan1000':
        return items.filter(item => item.salary < 1000);
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }
    
  render() {
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const rised = this.state.data.filter(item => item.rise).length;
    const totalSalary = this.state.data.reduce((acc, curr) => {return acc + curr.salary}, 0);
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
    <div className='app'>
      <AppInfo 
        employees={employees} 
        increased={increased}
        rised={rised}
        totalSalary={totalSalary}
        />

      <div className='search-panel'>
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>
        
      <EmployeesList 
        data={visibleData}
        onDelete={this.deleteItem}
        onToggleProp={this.onToggleProp}/>
      <EmployeesAddForm onAdd={this.addItem}/>    
    </div>
  );
  }
  
}

export default App;