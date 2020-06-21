import React from 'react';
import './App.css';
import EmployeeDirectory from './components/EmployeeDirectory';
import Table from './components/Table';
import Header from './components/Header';
import API from "./util/API";


class App extends React.Component {
   state = {
      employees:[],
      search: ""
  };

    searchEmployees = () => {
        API.search()
        .then(res => this.setState({employees: res.data}))
        .catch(err => console.log(err));
    }

    componentDidMount(){
       this.searchEmployees();
    }
   
    

   render() {
      return (
         <div className="text-center">
           <Header/> 
         <Table> 
         <EmployeeDirectory employees={this.state.employees} />
         </Table>

         </div>

      )
   }
}

export default App;
