import Image from "next/image";
import { ctoF, codeToDescription } from "../services/converters";
import { getIcon } from "../services/helpers";
import styles from "./MainCard.module.css";

export const MainCard = ({
  city,
  country,
  weather_code,
  unitSystem,
  weatherData,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}, {country}
      </h1>
      <p className={styles.weather_code}>{codeToDescription(weather_code)}</p>
      <Image
        width="300px"
        height="300px"
        src={getIcon(weather_code)}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
        {unitSystem == "metric"
          ? Math.round(weatherData.current.temperature_2m)
          : Math.round(ctoF(weatherData.current.temperature_2m))}
        °{unitSystem == "metric" ? "C" : "F"}
      </h1>
      <p>
        Feels like{" "}
        {unitSystem == "metric"
          ? Math.round(weatherData.current.apparent_temperature)
          : Math.round(ctoF(weatherData.current.apparent_temperature))}
        °{unitSystem == "metric" ? "C" : "F"}
      </p>
    </div>
  );
};
