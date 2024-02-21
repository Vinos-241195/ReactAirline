import React, { useState } from 'react'
import Header from './common/Header';
import './Ticketbooking.css'

const Ticketbooking=()=> {
  const [newairlineID, setNewairlineID] = useState("");
  const [newairlineName, setNewairlineName] = useState("");
    const [newdeparture, setNewdeparture] = useState("");
    const [newarrival, setNewarrival] = useState("");
    const [newtime, setNewtime] = useState("");
    const [newamount, setNewamount] = useState("");
    const [newinternational, setNewinternational] = useState("");
    const [newdomestic, setNewdomestic] = useState("");
    const [isLoading, setIsLoading] = useState(false);

  const createNewdata = () => {
    const newData = {
      airlineID: newairlineID,
      airlineName: newairlineName,
      departure: newdeparture,
      arrival: newarrival,
      time: newtime,
      amount: newamount,
      international: newinternational,
      domestic: newdomestic
    };
    setIsLoading(true);

    fetch("http://localhost:8080/airlineuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((data) => {
        setNewairlineID();
        setNewairlineName();
        setNewdeparture();
        setNewarrival();
        setNewtime();
        setNewamount();
        setNewinternational();
        setNewdomestic();
      })
      .catch((error) => {
        console.log("error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
   
    <div>
       <Header/>
    <div className='ticket__content'>
    <form>
      
    <input
      type="number"
      value={newairlineID}
      onChange={(e) => setNewairlineID(e.target.value)}
      placeholder="AIRLINEID"
    />
    
    <input
      type="text"
      value={newairlineName}
      onChange={(e) => setNewairlineName(e.target.value)}
      placeholder="AIRLINE NAME"
    />
    
    <input
      type="text"
      value={newdeparture}
      onChange={(e) => setNewdeparture(e.target.value)}
      placeholder="DEPARTURE"
    />
    <input
      type="text"
      value={newarrival}
      onChange={(e) => setNewarrival(e.target.value)}
      placeholder="ARRIVAL"
    />
    <input
        type="number"
        value={newtime}
        onChange={(e) => setNewtime(e.target.value)}
        placeholder="TIME"
    />
    <input
        type="number"
        value={newamount}
        onChange={(e) => setNewamount(e.target.value)}
        placeholder="AMOUNT"
    />
    <input
        type="text"
        value={newinternational}
        onChange={(e) => setNewinternational(e.target.value)}
        placeholder="INTERNATIONAL"
    />

    <input
        type="text"
        value={newdomestic}
        onChange={(e) => setNewdomestic(e.target.value)}
        placeholder="DOMESTIC"
    />
      <button onClick={createNewdata} disabled={isLoading}>
        {isLoading ? "Finished" : "Confirm Booking"}
      </button>
    </form>
  </div>
  </div>
  )
}

  

export default Ticketbooking