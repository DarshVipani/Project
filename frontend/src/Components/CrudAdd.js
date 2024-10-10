import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Add.css'

function CrudAdd() {
  const [data,setData] = useState({})
  const navigate = useNavigate()

return(
<>
  <div className='color p-2'>
    <div className='row'>
    <Link to='/phone' style={{height:"2px",textDecoration:"none",color:"white"}}>
    <h1 className='m-2'>
        ←
    </h1>
    </Link>
      <div class="form-container col-6" style={{width:"600px",height:"630px",marginLeft:"550px"}}>
      
            <h2>
              <b> 
                Enter Details
              </b>  
            </h2>

            <div class="form-group">
                <label for="id">
                  <b>
                  ID:
                  </b>
                  </label>
                <input type="text" id="id" name="id" onFocus={()=>{}} onChange={(e)=>{
                  setData({...data,id:e.target.value})
                }}/>
            </div>

            <div class="form-group">
                <label for="name">
                  <b>
                  Name:
                  </b>

                  </label>
                <input type="text" onChange={(e)=>{
                  setData({...data,Name:e.target.value})
                }}/>
            </div>
            
            <div class="form-group">
                <label>
                <b>
                Features:
                </b>
                  </label>
                <textarea cols={3} rows={1} onChange={(e)=>{
                  setData({...data,Features:e.target.value})
                }}>
                </textarea>
            </div>
           
            <div class="form-group">
                <label for="price">
                  <b>
                  Price:
                  </b>
                  </label>
                <input type="text" onChange={(e)=>{
                  setData({...data,Price:e.target.value})
                }} />
            </div>

            <div class="form-group">
                <label>
                  <b>
                  Image:
                  </b>
                  </label>
                <input type="text"  onChange={(e)=>{
                  setData({...data,Image:e.target.value})
                }}/>
            </div>
                
            <div class="form-group row">
              <div class="offset-4 col-8">
                  <button class="btn btn-primary" style={{width:"100px"}} onClick={()=>{
                    fetch( "http://localhost:7100/phone/add",{
                      method:"POST",
                      body:JSON.stringify(data),
                      headers:{
                        "Content-Type":"application/json"
                      }
                    })
                    .then(()=>navigate('/phone'))
                  }}>
                    <b>
                    Submit
                    </b>
                    
                  </button>
              </div>
            </div>

      </div>
    </div>
  </div>
</>
)
}
export default CrudAdd