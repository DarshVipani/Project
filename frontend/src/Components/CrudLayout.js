import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import img from './2.jpg'

function CrudLayout() {
  return (
    <>
      
      
    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-2 " style={{position:"sticky",top:0,zIndex:1000}}>
        <div class="container-fluid">
           
                       
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li class="nav-item">
                <Link class="nav-link active mt-2" to='/home'>
                <h3>
                    Home
                </h3>
                </Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link active mt-2" to='/phone'>
                <h3>
                Data
                </h3>
                </Link>
                </li>

                <li class="nav-item">
                    <Link class="nav-link active mt-2" to='/phone/add'>
                    <h3>
                    Add
                    </h3>
                    </Link>
                </li>

            </ul>

            
             <div>
            <img style={{width:"120px",height:"70px",borderRadius:"5px"}} src={img} alt="Logo" className='me-3'/>
           </div>
            </div>
        </div>
    </nav>

        <div>
            <Outlet/>
        </div>
</>    
  )
}

export default CrudLayout
