import './app-info.css';

const AppInfo = ({increased, employees, rised, totalSalary}) => {
    return (
        <div className='app-info'>
            <h1>Employee accounting at Netto</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>Employees receiving bonuses: {increased}</h2>
            <h2>Get a raise: {rised}</h2>
            <h2>Salary amount: {totalSalary} USD</h2>
        </div>
    )
}

export default AppInfo;