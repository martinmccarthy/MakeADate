import './App.css';
import { useState } from 'react';
import axios from 'axios';
import buildPath from './BuildPath';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

function App() {
  const [restaurant, setRestaurant] = useState({name: '', location:{address1: ''}, image_url:''});
  const [activity, setActivity] = useState({name: '', location:{address1: ''}, image_url:''});
  const [dessert, setDessert] = useState({name: '', location:{address1: ''}, image_url:''});
  async function handleAPICalls() {
    await getRestaurant();
    await getActivity();
    await getDessert();
  }
  
  async function getRestaurant() {
    axios({
      method: 'get',
      url: buildPath(''),
      params: {term:'restaurant'}
    }).then((res) => {
      console.log(res);
      let businesses = res.data.businesses;
      let randomInt = Math.floor(Math.random() * 20);
      setRestaurant(businesses[randomInt]);
    })
  }

  async function getActivity() {
    axios({
      method: 'get',
      url: buildPath(''),
      params: {term: 'activity'}
    }).then((res) => {
      console.log(res);
      let businesses = res.data.businesses;
      let randomInt = Math.floor(Math.random() * 20);
      setActivity(businesses[randomInt]);
    })
  }

  async function getDessert() {
    axios({
      method: 'get',
      url: buildPath(''),
      params: {term: 'dessert'}
    }).then((res) => {
      console.log(res);
      let businesses = res.data.businesses;
      let randomInt = Math.floor(Math.random() * 20);
      setDessert(businesses[randomInt]);
    })
  }

  return (
    <div className="App">
      <div className="container">
          <div className="Logo">
            <div className="appInformation">
              <h1 className="headline-text">Make-A-Date</h1>
              <p className="subtext">Generate a fully planned out date with the click of a button!</p>
              <button class="button-56" onClick={handleAPICalls}>Click to get started!</button>
            </div>
          </div>
          <div className="results">
          {/* The reason that this conditional is here is because we want to make sure all of them have loaded before we load it */}
          {(restaurant.name !== '' && activity.name !== '' && dessert.name !== '') && 
            <div className="cardContainer">
              <div className="card">
                <div className="data">
                  <h2 className="headline-text-card">{restaurant.name}</h2>
                  <div className="imgContainer">
                    <img src={restaurant.image_url} className='picture' alt='restaurant_image'/>
                  </div>
                  <p className="subtext-card">{restaurant.location.address1}</p>
                </div>
              </div>
              <div className="card">
                <div className="data">
                  <h2 className="headline-text-card">{activity.name}</h2>
                  <div className="imgContainer">
                    <img src={activity.image_url} className='picture' alt='activity_image'/>
                  </div>
                  <p className="subtext-card"> {activity.location.address1}</p>
                </div>
              </div>
              <div className="card">
                <div className="data">
                  <h2 className="headline-text-card">{dessert.name}</h2>
                  <div className="imgContainer">
                    <img src={dessert.image_url} className='picture' alt='dessert_image'/>
                  </div>
                  <p className="subtext-card">{dessert.location.address1}</p>
                </div>
              </div>
            </div>
          }
          </div>
      </div>
    </div>
  );
}

export default App;
