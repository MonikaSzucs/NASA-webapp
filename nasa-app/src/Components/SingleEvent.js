import React, { useState, useEffect } from 'react';

export default function SingleEvent() {
    const uniqueKey = "QXZVV5YLQXbyG4vAq7eDNPtyUWAMc1KO6JceCFUi"
    const url =`https://api.nasa.gov/planetary/apod?api_key=${uniqueKey}`

    const axios = require('axios').default;
    const [userData, setUserData] = useState({});

    const getGiHubUserWithAxios = async () => {
        const response = await axios.get(url);
        setUserData(response.data);
        //console.log(setUserData())
    };

    useEffect(() => {
        console.log("useEffect on Home Page")
        getGiHubUserWithAxios();
    },[])

    const handleClick = () => {
        window.open(`${userData.hdurl}`);
      };

    return (
        <div className="container md:flex items-center justify-center mx-auto w-4/5 align-middle flex-grow md:h-full ">
            <div className="flex-none"></div>
            <div className="md:col-span-2 md:flex-1 p-3">
                {userData.title ? <img src={userData.url}/> : null}
            </div>
            <div className="md:flex-1 text-sm p-5">
                {userData.title ? <p className="text-3xl text-right	text-slate-100">{userData.title}</p> : null}
                {userData.explanation ? <p className="text-s pt-3 text-justify text-slate-300">{userData.explanation}</p> : null}
                <div className="flex-row">
                {userData.date ? <div className="text-xs pt-3 text-slate-500" >{userData.date}</div> : null}
                <button className="text-xs text-slate-500" onClick={handleClick}>Image Reference Click Here</button>
                {/* {userData.url ? <div className="">{userData.url}</div> : null} */}
                </div>
            </div>
            <div className="flex-none"></div>
    </div>
    );
}
// SingleEvent