import React from 'react'
import '../component/Record.css';
const Record = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center  voicemodal">
     <div className="col-md-4 bg-light  voice-search">
        <div className="border-bottom w-100 d-flex align-item-center justify-content-between py-2 ">
            <h3>Voice search</h3>
            <i class="fa fa-times" aria-hidden="true" ></i> 
        </div>
        <div className=" w-100 h-50 d-flex align-items-center justify-content-center  py-2">
            <div className="col-md-2 micIcon text-white">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
        </div>
     </div>
       
       
    </div>
  );
};

export default Record;
