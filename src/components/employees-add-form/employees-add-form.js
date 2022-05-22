import {Component} from 'react';


import './employees-add-form.css';

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName:'',
            department:'',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.lastName]: e.target.value,
            [e.target.department]: e.target.value

        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 
            || this.state.name.length >= 14 
            || this.state.lastName.length < 3
            || this.state.lastName.length >= 14
            || this.state.department.length < 2
            || this.state.department.length >= 8
            || this.state.salary < 500 || this.state.salary > 20000) return;
        this.props.onAdd(
            this.state.name, 
            this.state.lastName, 
            this.state.department, 
            this.state.salary);
        this.setState({
            name:'',
            lastName:'',
            department:'',
            salary:''
        })
    }

    render() {
        const {name, lastName, department, salary} = this.state;

        return (
            <div className='app-add-form'>
                <h3>Add new employee</h3>
                <form className='add-form d-flex'
                    onSubmit = {this.onSubmit}>
                    <input type='text'
                        className='form-control new-post-label'
                        placeholder='What`s his name?'
                        name='name'
                        value={name} 
                        onChange={this.onValueChange}/>
                        <input type='text'
                        className='form-control new-post-label'
                        placeholder='What`s his last name?'
                        name='lastName'
                        value={lastName} 
                        onChange={this.onValueChange}/>
                        <input type='text'
                        className='form-control new-post-label'
                        placeholder='QA/DEV/MANAGER'
                        name='department'
                        value={department} 
                        onChange={this.onValueChange}/>
                        <input type='number'
                        className='form-control new-post-label'
                        placeholder='Salary in USD?'
                        name='salary'
                        value={salary} 
                        onChange={this.onValueChange}/>
                    <button type='submit'
                            className='btn btn-outline-light'>Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;