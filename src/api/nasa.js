// api/nasa.js
import axios from 'axios';

const API_KEY = 'xWOw6MFOWHtweMatDLYQHEmS7kiOOHJmWnY8ladg';
const EONET_URL = `https://eonet.gsfc.nasa.gov/api/v3/events?api_key=${API_KEY}`;

export const fetchDisasterData = async (selectedCategories, startDate, endDate) => {
  try {
    const params = {
      category: selectedCategories.length > 0 ? selectedCategories : undefined,
      start: startDate ? new Date(startDate).toISOString() : undefined,
      end: endDate ? new Date(endDate).toISOString() : undefined,
    };
    
    const response = await axios.get(EONET_URL, { params });
    
    if (response.status === 200) {
      return response.data.events;
    } else {
      throw new Error(`API error: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching disaster data:", error);
    return [];
  }
};