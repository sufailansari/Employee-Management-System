
import './App.css'
import EmployeeComponent from './Component/EmployeeComponent'
import Fotter from './Component/Fotter'
import Header from './Component/Header'

import ListEmployee from './Component/ListEmployee'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
         {/*// http://localhost:3001 */} 
          <Route path='/' element ={<ListEmployee/>}></Route>
         {/*// http://localhost:3001/employee */}
          <Route path='/employee' element={<ListEmployee/>}></Route>
         {/*// http://localhost:3001/add-employee */}
          <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
          {/*// http://localhost:3001/edit-employee/1 */}
          <Route path='/edit-employee/:employeeId' element={<EmployeeComponent/>}></Route>
        </Routes>
        <Fotter/>
      </BrowserRouter>
    </>
  )
}

export default App
