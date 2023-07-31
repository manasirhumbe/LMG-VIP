import React from 'react';
import './App.css';
import Cards from './components/Cards';

import {Header} from "./components/Header";


function App() {
  // here we use state hook for load data
  const [nowDateLoaded, setnowDateLoaded] = React.useState(false);
  const [lgmuserData, setlgmUserData] = React.useState([]);
  const [nowButtonClick, setnowButtonClick] = React.useState(false);
  const btnClick = () => {
    setnowButtonClick(true);
    // now fetch data from api  https://reqres.in/api/users?page=1
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((res) => {
       
        setlgmUserData(res.data);
        setInterval(() => {
          setnowDateLoaded(true);
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
  
    
      {/*Nav bar Section*/}
      
      <nav className='navbar navbar-expand-lg navbar-dark  bg-dark'>
          <div className='container-fluid '>
            <span className='name' id='name'>Personetics</span>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul class='navbar-nav ms-auto  me-5'>
                <button className='btn  btn-light btn-lg' onClick={btnClick}>
                  Get Users
                </button>
              </ul>
            </div>
          </div>
        </nav>

        {/* loading data after click on button function start  */}

        <div className='container'>
          <div className='row justify-content-center '>
            {nowButtonClick ? (
              nowDateLoaded ? (
                <Cards userData={lgmuserData} />
              ) : (
                <div className='col-2 mt-5 justify-content-center'>
                  
                  <div className='loader'></div>
                  <h2>Loading..</h2>
                </div>
              )
            ) : (
              <div className='col-6  col-sm-6 notes'>
               <h1>Click on Get Users</h1>
              </div>
            )}
          </div>
        </div>
        {/* Footer section */}
          <Header/>
         
    
    </>
  );
}

export default App;