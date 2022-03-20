import React, { useState, useEffect } from "react";
import Navbar from '../Components/Navbar';

export default function Events() {
    const uniqueKey = "DM12M4VycikCDlRcRX07RcLqgVePSZbdcephhNc8"
    const limit = "100"
    const days = "14"
    const url =`https://eonet.gsfc.nasa.gov/api/v2.1/events?api_key=${uniqueKey}&limit=${limit}&days=${days}`

    const axios = require('axios').default;
    const [eventsData, setEventsData] = useState({});

    const getGiHubUserWithAxios = async () => {
        const response = await axios.get(url);
        console.log(response.data)
        setEventsData(response.data);
        //console.log(setUserData())
    };

    useEffect(() => {
        console.log("useEffect on Events Page")
        getGiHubUserWithAxios();
    },[])
    return (
        <div className="App h-screen flex flex-col ">
            
            <div className="flex-none"></div>
            <Navbar/>
            <div className="container md:flex mx-auto md:w-4/5 ">Events</div>
            {
                eventsData.events?.map((event, indexKey) => {
                    return (
                        
                        <div className="items-start justify-center mx-auto md:w-4/5 align-middle flex-grow md:h-full mt-6 " key={indexKey}>
                            <div class="grid grid-cols-4 gap-4">
                                <div>
                                    <p className="text-xs text-slate-500">{event.id} - {event.sources[0].id}</p>
                                    <h2 className="text-xl">{event.title}</h2>
                                    <p>{event.categories[0].title}</p> 
                                    <a className="text-rose-600 text-xs" href={event.link}>Check Object Data</a>
                                    <p>
                                    <div>{event.sources?.map((sourceItems, sIndex) => {
                                        return <div key={sIndex}>
                                            <a  href={sourceItems.url} download>
                                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center">
                                                <svg class="fill-current w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                                <span className="text-xs">Download .CSV</span>
                                            </button>
                                            </a>
                                            </div>
                                    })}</div>
                                    </p>
                                </div>
                                <div className="col-span-3">
                                    <div>Coordinates:</div>
                                        <div className="flex flex-row flex-nowrap overflow-x-auto">{event.geometries?.map((geoItems, gIndex) => {
                                            return (
                                                <div className="py-2 w-100 mx-6" key={gIndex}>
                                                    <span className="">{geoItems.date}</span>
                                                    <div>{geoItems.coordinates[0]}</div>
                                                    <div>{geoItems.coordinates[1]}</div>
                                                </div>
                                                )
                                        })}</div>
                                </div>
                            </div>
                            
                            
                            
                        </div>
                    )
                })
            }
            <div className="flex-none"></div>
        </div>
    );
}
// Events