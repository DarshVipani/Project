import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function CrudGetById() {
  
    const [data,setData] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        const URL = "http://localhost:7100/phone/"+id
        fetch(URL)
        .then(res=>res.json())
        .then(data=>setData(data))
    })

    return (
    <>
    <Link to='/phone' style={{width:"500px",height:"200px",textDecoration:"none",color:"black"}}>
    <h1 className='m-2'>
        ←
    </h1>
    </Link>

        <div className='container'>
            <div className='row' style={{alignItems:"center"}}>
            <div className='col m-2' >
                <div class="card" style={{ width: "350px" ,alignItems:"center",marginLeft:"490px"}}>

                    <div className='divImage'>
                        <img src={data.Image} class="card-img-top  mainImg" alt="..." />
                    </div>

                    <div class="card-body">
                        <h4>
                            {data.Features}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CrudGetById