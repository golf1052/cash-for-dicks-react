import { useState, useEffect } from 'react';
import Credits from './Credits';
import './styles/InfoBar.css';

let didInit = false;

function InfoBar() {
  interface Location {
    name: string,
    address: string,
    latitude: number,
    longitude: number
  };

  const [locationsDisplay, setLocationsDisplay] = useState<Array<Location>>([]);
  const [haveGeo, setHaveGeo] = useState(false);
  const locations: Location[] = [
    {
      name: 'Broadway',
      address: '115 Broadway E, Seattle, WA 98102',
      latitude: 47.619403,
      longitude: -122.32127
    },
    {
      name: 'Queen Anne',
      address: '500 Queen Anne Ave N, Seattle, WA 98109',
      latitude: 47.623426,
      longitude: -122.356509
    },
    {
      name: 'Wallingford',
      address: '111 NE 45th St, Seattle, WA 98105',
      latitude: 47.661057,
      longitude: -122.327759
    },
    {
      name: 'Lake City',
      address: '12325 30th Ave NE, Seattle, WA 98125',
      latitude: 47.718209,
      longitude: -122.296933
    },
    {
      name: 'Holman Road',
      address: '9208 Holman Road NW, Seattle, WA 98117',
      latitude: 47.696375,
      longitude: -122.371657
    },
    {
      name: 'Edmonds',
      address: '21910 HWY 99, Edmonds, WA 98026',
      latitude: 47.801108,
      longitude: -122.331713
    },
    {
      name: 'Kent',
      address: '24220 Pacific Highway S, Kent, WA 98032',
      latitude: 47.384324,
      longitude: -122.29632
    },
    {
      name: 'Crossroads',
      address: '15600 NE 8th St, Suite O-1, Bellevue, WA 98008',
      latitude: 47.62051,
      longitude: -122.12978
    },
    {
      name: 'Federal Way',
      address: '32048 Pacific Hwy S, Federal Way, WA 98003',
      latitude: 47.31378,
      longitude: -122.31292
    }
  ];

  function toRadians(degrees: number) {
    return degrees * Math.PI / 180;
  }
  
  // Calculates the distance between two points in kilometers.
  function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    // Earth's radius in kilometers
    const R = 6371;
  
    // Difference of latitudes and longitudes
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
  
    // Apply the haversine formula
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
  
    // Return the distance
    return d;
  }

  function getDistanceSelect(): void {
    if (navigator.geolocation) {
      const onSuccess = (position: GeolocationPosition) => {
        const locationsCopy = locations.slice();
        locationsCopy.sort((a, b) => {
          const distanceA = haversineDistance(position.coords.latitude, position.coords.longitude, a.latitude, a.longitude);
          const distanceB = haversineDistance(position.coords.latitude, position.coords.longitude, b.latitude, b.longitude);
          return distanceA - distanceB;
        });
        setLocationsDisplay(locationsCopy);
        setHaveGeo(true);
      };

      const onError = (error: GeolocationPositionError) => {
        setLocationsDisplay(locations);
      };

      new Promise((resolve: (position: GeolocationPosition) => any, reject) => {
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
          resolve(position);
        }, (error) => {
          reject(error);
        })
      })
      .then((position: GeolocationPosition) => {
        return onSuccess(position);
      })
      .catch((error: GeolocationPositionError) => {
        return onError(error);
      });
    } else {
      setLocationsDisplay(locations);
    }
  }

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      getDistanceSelect();
    }
  });

  return (
    <div className='info-bar'>
      <img className="logo" src="cash-for-dicks-logo.png" alt="Cash for Dick's logo" />
      <div className="info-text-div">
        <div>Need to know if you have enough cash for 2 Hamburgers, 1 Deluxe, fries and a shake? We're here to help. Use the calculator to tally your total to ensure you have enough money. Or if you're stoned and can't get your shit together.</div>
      </div>
      {haveGeo && (<div className='closest-location-div'>Closest Dick's: {locationsDisplay[0].name} - {locationsDisplay[0].address}</div>)}
      <select className='locations-select'>
        {locationsDisplay.map((location) => {
          return <option key={location.name} value={location.name}>{location.name} - {location.address}</option>
        })}
      </select>
      <div className='info-bar-credits-div'>
        <Credits />
      </div>
    </div>
  );
}

export default InfoBar;
