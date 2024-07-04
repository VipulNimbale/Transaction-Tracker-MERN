import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Demo = () =>{
    const [combineData,setCombinedData]= useState('')
    const fetchCombinedData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/callme`);
      setCombinedData(response.data);
    } catch (error) {
      console.error("Error fetching data ", error);
    }
  };
  fetchCombinedData();
    return(
    <>
    <p>{combineData}</p>
    </>
)
}
export default Demo;