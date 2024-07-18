# Weather App for Public Transport Displays

This Weather App is designed to display weather information on screens in public transport stations and vehicles for various medium-sized cities in France. It uses the Open-Meteo API to fetch weather data and presents it in a user-friendly interface.

![Weather App Screenshot](/public/screenshot.webp)

## Features

1. Displays current weather information for a pre-configured city
2. Shows local time and date
3. Provides temperature, humidity, and other relevant weather metrics
4. Automatically refreshes weather data every hour
5. Supports both metric and imperial unit systems

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/timlapov/weather-app-simplon.git
   ```

2. Navigate to the project directory:
   ```
   cd weather-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Customise a `cityConfiguration.json` file in the `public` directory with the following structure:
   ```json
   {
     "city": "Villeurbanne",
     "country": "France",
     "latitude": "45.766",
     "longitude": "4.8795"
   }
   ```
   Replace the values with the appropriate information for your target city. Ensure this file is placed in the `public` folder of your project.

5. Start the development server:
   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

The app automatically loads the weather information for the configured city on startup. It will refresh the data every hour to ensure up-to-date information is displayed.

## Configuration

To change the target city or location, update the `cityConfiguration.json` file in the `public` folder with the new city name, country, latitude, and longitude.

## Technologies Used

- Open-Meteo API

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).