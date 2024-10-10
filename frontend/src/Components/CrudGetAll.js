import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CrudData() {
    let [data, setData] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:7100/phone/")
            .then((res) => res.json())
            .then((res) => setData(res))
    })

    return (
        <>
            <h3>
                <marquee behavior="alternate" scrollamount='13'>
                    <b style={{color:"red"}}>
                        Welcome to my Website!
                    </b>
                </marquee>

                <marquee direction='right' behavior="alternate" scrollamount='10'>
                    <b style={{color:"blue"}}>
                        Buy any phone with best discount
                    </b>
                </marquee>
            </h3>
            
            <div className='container'>
                <div className='row'>
                    {data.map(e => {
                        return (
                            <>                 
                                <div className='col-3 mb-2'>
                                    <div class="card" style={{ width: "310px" }}>

                                        <div className='divImage'>
                                            <img src={e.Image} class="card-img-top  mainImg" alt="..." />
                                        </div>

                                        <div class="card-body">
                                            <h5 class="card-title" style={{ textAlign: "center" }}>{e.Name}</h5>
                                            <p style={{ textAlign: "center" }}>
                                                <b>
                                                    {e.Price}
                                                </b>
                                            </p>
                                        </div>


                                        <div className='row p-2'>
                                            <Link type="button" class="btn btn-outline-dark col-5 ms-3" to={'/phone/'+e.id}>View More</Link>
                                            <Link type="button" class="btn btn-outline-warning col-5 ms-4" to={'/phone/update/'+e.id} >Edit</Link>
                                        </div>
                                    </div>
                                </div>                               
                            </>
                        )
                    }
                    )
                    }
                </div>
            </div>
        </>
    )
}

export default CrudData