import React from 'react';

const MakeAdmin = () => {
    return (
        <div style={{width:'95%', height:'40%', margin:'0 auto', backgroundColor:'white', borderRadius:'10px'}}>
            <div className="px-4 py-4">
            <form className="form-inline">
                <div className="form-group mx-sm-4 mb-2">
                    <label for="email" className="sr-only">Email</label>
                    <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <button type="submit" className="btn btn-success mb-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default MakeAdmin;
