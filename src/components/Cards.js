import React from 'react';
import './Cards.css';
export default function Cards(props) {
  return (
    <>
      {props.userData.map((user, index) => {
        return (
          <div className='col-lg-4 col-md-6 mt-4 col-sm-8 col-xs-10 mx-auto'>
            <div className='lgmuserCard'>
              <img src={user.avatar} alt='' className='lgmuserimg' />
              <div className='lgmuserCard-box'>
                <h3>
                  {user.first_name} {user.last_name}
                </h3>
                <p>{user.email}</p>
                <h6>Contact Us</h6>
                <button className='btndetail'>Click for More</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}