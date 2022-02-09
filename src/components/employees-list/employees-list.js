import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className='app-list list-group'>
            <EmployeesListItem name='John C.' salary={1000}/>
            <EmployeesListItem name='Juan G.' salary={900}/>
            <EmployeesListItem name='Ury L.' salary={1500}/>
            <EmployeesListItem name='Max F.' salary={2200}/>
        </ul>
    )
}

export default EmployeesList;