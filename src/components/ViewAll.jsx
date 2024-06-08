import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData]=useState([])
    const fetchData=() => {}
    axios.get("https://jsonplaceholder.typicode.com/albums").then((response) =>{
        changeData(response.data)}).catch().finally()
    useEffect(() => {fetchData()},[])
        return (
    <div>
        <Navbar/><br></br>
        <h5 align="center"><u>ALBUM DETAILS</u></h5><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">User ID</th>
                                <th scope="col">Album ID</th>
                                <th scope="col">Album Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value,index)=>{
                                        return <tr>
                                        <td scope="row">{value.userId}</td>
                                        <td>{value.id}</td>
                                        <td>{value.title}</td>
                                        </tr>
                                    }
                                )
                                }
                                
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll