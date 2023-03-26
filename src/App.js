
import EmployeeList from './components/EmployeeList';
import EmployeesGrid from './components/EmployeeGrid';
import EmployeeContextProvider from './contexts/EmployeeContext';

function App() {
  return (
    <div className="App">
      <div className='container pt-4'>
        <EmployeeContextProvider>
          <EmployeeList />
          <EmployeesGrid/>
        </EmployeeContextProvider>
      </div>
    </div>
  );
}

export default App;
