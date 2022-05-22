import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const {name, lastName, department, salary, onDelete, onToggleProp, increase, rise} = props;

    let classNames = 'list-group-item d-flex justify-content-between';
    if(increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span className='list-group-item-label'
             onClick = {onToggleProp}
             data-toggle='rise'
             style={{fontSize: 20}}>{name}</span>
             <span className='list-group-item-label'
             onClick = {onToggleProp}
             data-toggle='rise'
             style={{fontSize: 20}}>{lastName}</span>
             <span className='list-group-item-label'
             onClick = {onToggleProp}
             data-toggle='rise'
             style={{fontSize: 20}}>{department}</span>
             <span className='list-group-item-label-salary'
             onClick = {onToggleProp}
             data-toggle='rise'
             style={{fontSize: 20}}>{salary} USD</span>
            <div className='d-flex justify-content-center align-items-center'>
                <button type='button'
                     className='btn-cookie btn-sm ' 
                     onClick = {onToggleProp}
                     data-toggle='increase' >
                    <i className='fas fa-cookie'></i>
                </button>

                <button type='button'
                        className='btn-trash btn-sm'
                        onClick={onDelete}>
                    <i className='fas fa-trash'></i>
                </button>
                <i className='fas fa-star'></i>
            </div>
        </li>
        )   
}

export default EmployeesListItem;