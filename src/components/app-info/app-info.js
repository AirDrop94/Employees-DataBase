import './app-info.css';

const AppInfo = ({increased, employees, rised}) => {
    return (
        <div className='app-info'>
            <h1>Учет сотрудников в компании NetTo</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
            <h2>Повышение получат: {rised}</h2>
        </div>
    )
}

export default AppInfo;