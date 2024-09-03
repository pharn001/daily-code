import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
function Day2() {
    const [data, setData] =useState([])

    // useEffect(() =>{
    //     axios.get('https://raw.githubusercontent.com/pharn001/rest-api/main/example.json')
    //     .then((res) =>{
    //         setData(res.data);
    //     })
    // },[])

    return (
        
        <div className="flex flex-col bg-white w-80 items-center space-y-4 m-8">
            <div className="overflow-hidden mt-10">
                <div className="w-44 h-44 rounded-full overflow-hidden">
                    <img src="/pharnx.png" alt="" />
                </div>
                <h1 className='text-2xl font-bold'>pharn</h1>
                <p>Rank: D</p>
            </div>
            <div className="flex flex-col space-y-4">
                <div className="bg-slate-400 py-2 px-12 rounded-lg">
                    <p>XP:</p>
                    <p>10,000/20,000</p>
                </div>
                <div className="bg-slate-400 py-2 px-12 rounded-lg">
                    <p>Skill:</p>
                    <p>36/64</p>
                </div>
                <div className="bg-slate-400 py-2 px-12 rounded-lg">
                    <p>Project:</p>
                    <p>2</p>
                </div>
                <div className="bg-slate-400 py-2 px-12 rounded-lg">
                    <p>Years:</p>
                    <p>1.5</p>
                </div>
            </div>
            <button className='border-2 p-2 w-full'>+ Add page</button>
        </div>
    )
}

export default Day2
