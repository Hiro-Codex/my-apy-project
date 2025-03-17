# My APY Project API

## Description
This is an API to get weather data. It provides current weather information for a specific location.

## Database Configuration
Ensure you have a MongoDB database set up and provide the correct credentials in the configuration file.

### Configuration of `config/default.json`
Create a `default.json` file in the `config` directory with the following content:

```json
{
  "mongoURI": "mongodb+srv://<username>:<password>@<cluster-url>/mydatabase?retryWrites=true&w=majority",
  "weatherAPI": {
    "url": "http://api.weatherapi.com/v1/current.json",
    "key": "<your-weather-api-key>"
  }
}
```

Replace `<username>`, `<password>`, `<cluster-url>`, and `<your-weather-api-key>` with your actual credentials.

## Endpoints

### Get Weather

- **URL:** `/api/weather/:location`
- **Method:** `GET`
- **Description:** Gets the weather data for a specific location.
- **Path Parameters:**
  - `location` - The location for which you want to get the weather.
- **Request Example:**
  ```bash
  curl http://localhost:5001/api/weather/London
  ```
- **Response Example:**
  ```json
  {
    "location": {
      "name": "London",
      "region": "City of London, Greater London",
      "country": "United Kingdom",
      "lat": 51.5171,
      "lon": -0.1062,
      "tz_id": "Europe/London",
      "localtime_epoch": 1742205838,
      "localtime": "2025-03-17 10:03"
    },
    "current": {
      "last_updated_epoch": 1742205600,
      "last_updated": "2025-03-17 10:00",
      "temp_c": 6.2,
      "temp_f": 43.2,
      "is_day": 1,
      "condition": {
        "text": "Partly cloudy",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
        "code": 1003
      },
      "wind_mph": 9.4,
      "wind_kph": 15.1,
      "wind_degree": 58,
      "wind_dir": "ENE",
      "pressure_mb": 1029,
      "pressure_in": 30.39,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 70,
      "cloud": 50,
      "feelslike_c": 3.2,
      "feelslike_f": 37.8,
      "windchill_c": 3.7,
      "windchill_f": 38.6,
      "heatindex_c": 6.6,
      "heatindex_f": 43.8,
      "dewpoint_c": -0.5,
      "dewpoint_f": 31.1,
      "vis_km": 10,
      "vis_miles": 6,
      "uv": 2.3,
      "gust_mph": 10.8,
      "gust_kph": 17.4
    }
  }
  ```

## Configuration
Make sure to set the necessary environment variables for the API, such as the weather service API key.

## Installation and Execution
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   PORT=5001 npm start
   ```