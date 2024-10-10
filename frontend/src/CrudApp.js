import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import CrudLayout from './Components/CrudLayout'
import CrudHome from './Components/CrudHome'
import CrudData from './Components/CrudGetAll'
import CrudGetById from './Components/CrudGetById'
import CrudUpdate from './Components/CrudUpdate'
import CrudAdd from './Components/CrudAdd'


function A()
{
  return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<CrudLayout/>}>
                <Route path='/home' element={<CrudHome/>}/>
                <Route path='/phone' element={<CrudData/>}/>
                <Route path='/phone/:id' element={<CrudGetById/>} />
                <Route path='/phone/update/:id' element={<CrudUpdate/>}/>
                <Route path='/phone/add' element={<CrudAdd/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
  )
}
function App() {
  return (
    <div>
        <A/>
    </div>
  )
}

export default App
