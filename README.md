# My APY Project API

## Descripción
Esta es una API para obtener datos del clima. Proporciona información sobre el clima actual para una ubicación específica.

## Configuración de la Base de Datos
Asegúrate de tener una base de datos MongoDB configurada y de proporcionar las credenciales correctas en el archivo de configuración.

### Configuración del Archivo `config/default.json`
Crea un archivo `default.json` en el directorio `config` con el siguiente contenido:

```json
{
  "mongoURI": "mongodb+srv://<username>:<password>@<cluster-url>/mydatabase?retryWrites=true&w=majority",
  "weatherAPI": {
    "url": "http://api.weatherapi.com/v1/current.json",
    "key": "<your-weather-api-key>"
  }
}
```

Reemplaza `<username>`, `<password>`, `<cluster-url>`, y `<your-weather-api-key>` con tus credenciales reales.

## Endpoints

### Obtener Clima

- **URL:** `/api/weather/:location`
- **Método:** `GET`
- **Descripción:** Obtiene los datos del clima para una ubicación específica.
- **Parámetros de Ruta:**
  - `location` - La ubicación para la cual deseas obtener el clima.
- **Ejemplo de Solicitud:**
  ```bash
  curl http://localhost:5001/api/weather/London
  ```
- **Ejemplo de Respuesta:**
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

## Configuración
Asegúrate de configurar las variables de entorno necesarias para la API, como la clave de la API del servicio de clima.

## Instalación y Ejecución
1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor:
   ```bash
   PORT=5001 npm start
   ```
