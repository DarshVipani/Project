import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function CrudUpdate() {
    const [data,setData] = useState({})
    const {id}= useParams()
    const navigate = useNavigate();

    
    
    useEffect(()=>{
        fetch( "http://localhost:7100/phone/"+id)
        .then(res=>res.json())    
        .then(res=>setData(res))
    },[id])  

// return (
//     <> 
//         <div className='bg-black p-2' style={{height:"633px"}}>
//             <h2 style={{color:"yellow",marginLeft:"700px",marginBottom:"20px"}}>Edit Data</h2> 
//             <div  class="form-group row mt-2">
//             <h3 className='col'  style={{marginLeft:"25%",color:"white"}}>Name:</h3> 
//                 <div class="col-8">
//                     <input placeholder="Enter Name" type="text" value={data.Name} style={{width:"700px"}} onChange={(e)=>{
//                         setData({...data,Name:e.target.value})
//                     }}/>
//                 </div>
//             </div>

            

//             <div class="form-group row mt-2">
//                 <h3 class="col" style={{marginLeft:"25%",color:"white"}}>Price:</h3> 
//                 <div class="col-8">
//                     <input placeholder="Enter Salary" type="text" style={{width:"700px"}} value={data.Price} onChange={(e)=>{
//                         setData({...data,Price:e.target.value})
//                     }}/>
//                 </div>
//             </div>

//             <div class="form-group row mt-2">
//                 <h3 class="col" style={{marginLeft:"24%",color:"white"}}>Features:</h3> 
//                 <div class="col-8">
//                     <textarea placeholder="Enter Features" type="text" style={{width:"700px"}} value={data.Features} onChange={(e)=>{
//                         setData({...data,Features:e.target.value})
//                     }}></textarea> 
//                 </div>
//             </div>


//             <div class="form-group row mt-2">
//             <h3 class="col" style={{marginLeft:"25%",color:"white"}}>Image:</h3> 
//                 <div class="col-8">
//                     <input style={{width:"700px"}} placeholder="Enter Name" type="text" value={data.Image} onChange={(e)=>{
//                         setData({...data,Image:e.target.value})
//                     }}/>
//                 </div>
//             </div>

//             <div class="row m-2">
//                 <div class="offset-4 col-8">
                
//                 <button style={{width:"500px"}} onClick={()=>{
//                     fetch("http://localhost:7100/phone/update/"+id,{
//                         method:"PATCH",
//                         body:JSON.stringify(data),
//                             headers:{
//                                 "Content-Type":"application/json"
//                             }
//                     })
//                     .then((res)=>res.json())
//                     .then(()=>{navigate('/phone')})
//                 }} className='btn btn-outline-primary'>Save</button>
            
                // <button type="button" class="btn btn-outline-danger m-2" style={{width:"auto"}} onClick={()=>{
                // fetch("http://localhost:7100/phone/delete/"+id,{method:"DELETE"})
                // .then(res=>res.json())
                // .then(()=>navigate('/phone')) 
                // }}>
                //     Delete
                // </button>    
                
//                 </div>
//                 </div>
//             </div>
//     </>
//   )

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
            
            <h4>
              <b style={{justifyContent:"center",display:"flex"}}> 
                Edit Details
              </b>  
            </h4>

            <div class="form-group">
                <b for="id">ID:</b>
                <input type="text" value={data.id} onChange={(e)=>{
                  setData({...data,id:e.target.value})
                }}/>
            </div>

            <div class="form-group">
                <b for="name">Name:</b>
                <input type="text" value={data.Name} onChange={(e)=>{
                  setData({...data,Name:e.target.value})
                }}/>
            </div>
            
            <div class="form-group">
                <b>Features:</b>
                <textarea style={{minHeight:"120px"}} value={data.Features}  onChange={(e)=>{
                  setData({...data,Features:e.target.value})
                }}>
                </textarea>
            </div>
           
            <div class="form-group">
                <b for="price">Price:</b>
                <input type="text" value={data.Price} onChange={(e)=>{
                  setData({...data,Price:e.target.value})
                }} />
            </div>

            <div class="form-group">
                <b >Image:</b>
                <input type="text" value={data.Image} onChange={(e)=>{
                  setData({...data,Image:e.target.value})
                }}/>
            </div>
                
            <div class="row">              
              <button style={{marginLeft:"40px"}} onClick={()=>{
                    fetch("http://localhost:7100/phone/update/"+id,{
                        method:"PATCH",
                        body:JSON.stringify(data),
                            headers:{
                                "Content-Type":"application/json"
                            }
                    })
                    .then((res)=>res.json())
                    .then(()=>{navigate('/phone')})
                }} className='btn btn-primary col-4 mt-2'>Save</button>

                <button type="button" class="btn btn-danger col-4 mt-2" style={{marginLeft:"40px"}} onClick={()=>{
                fetch("http://localhost:7100/phone/delete/"+id,{method:"DELETE"})
                .then(res=>res.json())
                .then(()=>navigate('/phone')) 
                }}>
                    Delete
                </button>

            </div>
      </div>
    </div>
  </div>
    
    </>
)


}
    
export default CrudUpdate
