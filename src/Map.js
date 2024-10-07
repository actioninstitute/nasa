import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { fetchDisasterData } from "./api/nasa";
import Filter from "./Filter";
import Timeline from "./Timeline";
import CriticalInformation from "./CriticalInformation";
import CollaborationTools from "./CollaborationTools";
import {
  MapWrapper,
  FilterWrapper,
  TimelineWrapper,
  CollaborationToolsWrapper,
  ErrorMessage, 
  LoadingSpinner,
} from "./stylecomponent/StyledComponents"; 
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import wildfireIcon from './icons/wildfire.png';
import earthquakeIcon from './icons/earthquake.png';

const Map = () => {
  const [disasterData, setDisasterData] = useState([]);
  const [filter, setFilter] = useState({
    selectedCategories: [],
    startDate: null,
    endDate: null,
    searchTerm: "", 
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      setError(null); 

      try {
        const events = await fetchDisasterData(filter);
        setDisasterData(events);
      } catch (error) {
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, [filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const icons = {
    wildfires: new L.Icon({
      iconUrl: wildfireIcon,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: markerShadow,
      shadowSize: [41, 41],
    }),
    earthquakes: new L.Icon({
      iconUrl: earthquakeIcon,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: markerShadow,
      shadowSize: [41, 41],
    }),
  };
  const getIconByCategory = (category) => {
    if (category.toLowerCase() === "wildfires") return icons.wildfires;
    if (category.toLowerCase() === "earthquakes") return icons.earthquakes;
    return L.icon({
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    });
  };

  const filteredDisasters = disasterData
    .filter((event) => {
      if (filter.selectedCategories.length === 0) return true;
      return filter.selectedCategories.some((category) =>
        event.categories.some(
          (cat) => cat.title.toLowerCase() === category.toLowerCase()
        )
      );
    })
    .filter((event) => {
      const searchTermLower = filter.searchTerm.toLowerCase();
      return (
        event.title.toLowerCase().includes(searchTermLower) ||
        (event.description &&
          event.description.toLowerCase().includes(searchTermLower))
      );
    });

  return (
    <MapWrapper>
      <FilterWrapper>
        <Filter onFilterChange={handleFilterChange} />
      </FilterWrapper>

      {loading && <LoadingSpinner></LoadingSpinner>}

      {error && <ErrorMessage><h2>Error</h2><p>{error}</p></ErrorMessage>}

      {!loading && !error && (
        <div>
          <MapContainer center={[20, 0]} zoom={2} style={{ height: "calc(100vh - 50px)" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {filteredDisasters.map((event) => (
              <Marker
                key={event.id}
                position={[
                  event.geometry[0].coordinates[1],
                  event.geometry[0].coordinates[0],
                ]}
                icon={getIconByCategory(event.categories[0]?.title || "default")}
              >
                <Popup>
                  <div className="popup-content">
                    <h2 className="popup-title">{event.title || "Unknown"}</h2>
                    <div className="popup-info">
                      <p>
                        <strong>Category:</strong> {event.categories[0]?.title || "Unknown"}
                      </p>
                      <p>
                        <strong>Date:</strong> {event.geometry[0]?.date ? new Date(event.geometry[0].date).toLocaleDateString() : "Unknown"}
                      </p>
                      <p>
                        <strong>Description:</strong> {event.description || "No description available."}
                      </p>
                    </div>
                    <CriticalInformation disasterEvent={event} />
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          <TimelineWrapper>
            <Timeline disasterEvents={filteredDisasters} />
          </TimelineWrapper>
          <CollaborationToolsWrapper>
            <CollaborationTools />
          </CollaborationToolsWrapper>
        </div>
      )}
    </MapWrapper>
  );
};

export default Map;