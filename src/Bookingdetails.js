import React, { useEffect, useState } from 'react';
import Header from './common/Header';
import ReactPaginate from 'react-paginate';
import './helper/Page.css';
import './Bookingdetails.css'

const BookingDetails = () => {
  const itemsPerPage = 5; // You can adjust this based on your preference
  const [airline, setAirline] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/getuser");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setAirline(data);
      } catch (error) {
        console.error("Error Occurred:", error.message);
      }
    };

    fetchData();
  }, []);

  const pageCount = Math.ceil(airline.length / itemsPerPage);

  const displayData = airline.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div>
      <Header />
      <div className='Fetch'>
        <h1>BOOKING DETAILS</h1>
        <table>
          <thead>
            <div className='head'>
              <tr>
                <th>AirlineID</th>
                <th>AirlineName</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Time in hrs</th>
                <th>Amount</th>
                <th>International</th>
                <th>Domestic</th>
              </tr>
            </div>
          </thead>
          <div className='body'>
            <tbody>
              {displayData.map((item, index) => (
                <tr key={index}>
                  <td>{item.airlineID}</td>
                  <td>{item.airlineName}</td>
                  <td>{item.departure}</td>
                  <td>{item.arrival}</td>
                  <td>{item.time}</td>
                  <td>{item.amount}</td>
                  <td>{item.international}</td>
                  <td>{item.domestic}</td>
                </tr>
              ))}
            </tbody>
          </div>
        </table>

        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

export default BookingDetails;