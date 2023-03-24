import { storeData, getData } from "../data/database";

export const getWeather = async (location, forecastDate) => {
  let data = await getData(location);
  if (data) {
    const items = data.forecasts.filter(f => f.date == forecastDate);
    if (items.length) {
      return items[0];
    }
  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '84bb9133a3msh1a63d1acbe52c5dp1f8976jsn12eaf169e690',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
    },
  };

  const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=c`;

  const response = await fetch(url, options);

  if (response.status == 200) {
    data = await response.json();
    await storeData(location, data);
    return data.forecasts.filter(f => f.date == forecastDate)[0] ?? [];
  }
 
  return [];
};
