import React from 'react';
import './App.css';
import EmployeeDirectory from './components/EmployeeDirectory';
import Table from './components/Table';
import Header from './components/Header';
import API from "./util/API";

// main app class
class App extends React.Component {
   // states
   state = {
      employees:[],
      search: "",
      sortID: false,
      sortName: false,
      sortEmail: false,
      sortPhone: false
  };

//   calls axios search function
    searchEmployees = () => {
        API.search()
        .then(res => this.setState({employees: res.data}))
        .catch(err => console.log(err));
    }

   //  performs search for all employees on load
    componentDidMount(){
       this.searchEmployees();
    }
   
   //  sort by id function, reversing then resorting on alternating clicks
    handleSortID = () => {
       const idSort = this.state.employees;
      if (!this.state.sortID){
         idSort.sort((a,b) => a.id > b.id ? 1: -1)
         this.setState({
            employees:idSort,
            sortID: true
         })
      }
      else{
         idSort.reverse((a,b) => a.id < b.id ? -1: 1);
         this.setState({
            employees:idSort,
            sortID: false
         })
      }
    }

       //  sort by name function, reversing then resorting on alternating clicks
    handleSortName = () => {
      const nameSort = this.state.employees;
     if (!this.state.sortName){
        nameSort.sort((a,b) => a.name > b.name ? 1: -1)
        this.setState({
           employees:nameSort,
           sortName: true
        })
     }
     else{
        nameSort.reverse((a,b) => a.name < b.name ? -1: 1);
        this.setState({
           employees:nameSort,
           sortName: false
        })
     }
   }

      //  sort by email function, reversing then resorting on alternating clicks
   handleSortEmail = () => {
      const emailSort = this.state.employees;
     if (!this.state.sortEmail){
        emailSort.sort((a,b) => a.email > b.email ? 1: -1)
        this.setState({
           employees:emailSort,
           sortEmail: true
        })
     }
     else{
        emailSort.reverse((a,b) => a.email < b.email ? -1: 1);
        this.setState({
           employees:emailSort,
           sortEmail: false
        })
     }
   }

      //  sort by phone function, reversing then resorting on alternating clicks
   handleSortPhone = () => {
      const phoneSort = this.state.employees;
     if (!this.state.sortPhone){
        phoneSort.sort((a,b) => a.phone > b.phone ? 1: -1)
        this.setState({
           employees:phoneSort,
           sortPhone: true
        })
     }
     else{
        phoneSort.reverse((a,b) => a.phone < b.phone ? -1: 1);
        this.setState({
           employees:phoneSort,
           sortPhone: false
        })
     }
   }
   
      //  update the state.search value instantly as input is entered in form
   handleSearch = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      this.setState({
         [name]: value
      })
      
   };

   // onClick take the contents of the input and use it to filter employees returned
   handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.search === ""){
         this.searchEmployees();
      }
      else{
      this.setState({employees: [...this.state.employees.filter(employee => employee.name.includes(this.state.search))]})
   }
   }

  
// render class
   render() {
      return (
         // create the header component that also contains the search function
         <div className="text-center">
           <Header 
           value={this.state.search}
           handleSearch={this.handleSearch}
           handleSubmit={this.handleSubmit}
           
           /> 

           {/*table component that displays all employees  */}
         <Table handleSortID={this.handleSortID} handleSortPhone={this.handleSortPhone} handleSortEmail={this.handleSortEmail} handleSortName={this.handleSortName}> 
         {/* bring in the employee list inside table */}
         <EmployeeDirectory employees={this.state.employees} />
         </Table>

         </div>

      )
   }
}

export default App;
