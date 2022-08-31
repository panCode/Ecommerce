import React from 'react';
import './styles.css';

const Banner = props => {
  return <div className={'bannerContainer'}>
    <div className="topBackground"></div>
    <img style={{ marginLeft: '15%', marginRight: '15%', marginTop: '-50px', height: 200 }} src="https://img.freepik.com/free-vector/hand-drawn-bakery-shop-twitch-banner_23-2149081272.jpg?w=1060&t=st=1661959560~exp=1661960160~hmac=646b75fa9b3bdf0068298b116cbddcb33db8235b3302c8670e5c2dc1fdc6a21f"></img>
  </div>
}

export default Banner;
