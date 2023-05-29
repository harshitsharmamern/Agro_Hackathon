import React, { useState, useEffect } from "react";
import Navbar from './Helper/Navbar'
import Front from "./boxes/Front";

const Home = () => {

  const [stu_details,set_stu_details] = useState([])
  useEffect(()=>{
    const server = 'http://localhost:5000'
    const geeting_data=async()=>{

      const response = await fetch(`${server}/api/home_data`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const result = await response.json();
      set_stu_details(result);

            console.log(result);
      }

    geeting_data()
  },[])

// console.log(stu_details.details[0]);

  return (
    <div>
       <Navbar/>

       <div className='container'>
           <div>welcome</div>
<div style={{backgroundColor:'red'}}>

{
            stu_details.details && stu_details.details.map((val) => (
              <>
                <div>{val.name}</div>
                <div>{val.phone}</div>
              </>
            ))
          }

</div>

<Front/>
           
       </div>

        </div>
  )
}

export default Home