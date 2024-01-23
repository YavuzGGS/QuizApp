import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import Navbar from './Navbar';
import Footer from './Footer';


const WeatherMarker = ({ position }) => {
    const [weather, setWeather] = useState(null);

    // Function to fetch weather data
    const fetchWeather = async (lat, lon) => {
        try {
            const apiKey = '52b240bf4561d209a4ad72ce41e4f452'; // Replace with your API key
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
            const response = await axios.get(url);
            setWeather(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeather(null);
        }
    };

    // Fetch weather data when the marker is placed
    React.useEffect(() => {
        if (position) {
            fetchWeather(position.lat, position.lng);
        }
    }, [position]);

    return (
        <Marker position={position}>
            <Popup>
                {weather ? (
                    <div>
                        <h3>{weather.name}</h3>
                        <p>Temperature: {weather.main.temp}°C</p>
                        <p>Weather: {weather.weather[0].description}</p>
                    </div>
                ) : (
                    <span>Loading weather data...</span>
                )}
            </Popup>
        </Marker>
    );
};

const MapApplication = () => {
    const [position, setPosition] = useState(null);

    const MapEvents = () => {
        useMapEvents({
            click(e) {
                setPosition(e.latlng);
            },
        });
        return null;
    };

    return (
        <div>
            <div className="nav"> <Navbar /></div>
        <div>
            <MapContainer center={[40.97, 28.874323]} zoom={13} style={{ height: '70vh', width: '70vw' }}>

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {position && <WeatherMarker position={position} />}
            <MapEvents />
        </MapContainer>
        </div>
        <Footer/>
        </div>
    );
};

export default MapApplication;
