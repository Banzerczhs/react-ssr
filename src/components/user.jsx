import React from "react";

import './user.less';

function User(){
    return (
        <div>
            <h1>User page</h1>
            <img src={require('../logo1.svg')} className="avatar" alt="avatar"/>
        </div>
    )
}

export default User;