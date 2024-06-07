import React from 'react'
import Navbar from './Navbar'

const Delete = () => {
  return (
    <div>
        <Navbar/><br></br>
        <h5 align="center"><u>Delete Album</u></h5>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <center><label htmlFor="" className="form-label">Album ID</label></center>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                        <center><button className="btn btn-danger">Delete</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete