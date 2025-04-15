// Live Map of Help Requests and Resources with Filters

import React, { useState } from "react";
import MapboxGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Home = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 10,
  });
  const [filters, setFilters] = useState({
    category: "all",
  });

  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  // Mock data for resources
  const resources = [
    { id: 1, category: "food", latitude: 37.7749, longitude: -122.4194 },
    { id: 2, category: "shelter", latitude: 37.7849, longitude: -122.4294 },
  ];

  const filteredResources =
    filters.category === "all"
      ? resources
      : resources.filter((item) => item.category === filters.category);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="text-center p-4 bg-blue-600 text-white">
        <h1 className="text-2xl font-bold">Disaster Relief Platform</h1>
        <p>Real-time resources and help for disaster management</p>
      </header>
      <div className="p-4">
        <label className="mr-2">Filter by Category:</label>
        <select
          value={filters.category}
          onChange={handleCategoryChange}
          className="p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="shelter">Shelter</option>
          <option value="medical">Medical</option>
        </select>
      </div>
      <main className="flex-1">
        <MapboxGL
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          {...viewport}
          style={{ width: "100%", height: "100%" }}
          onMove={(evt) => setViewport(evt.viewState)}
        >
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              latitude={resource.latitude}
              longitude={resource.longitude}
              className="bg-red-500 rounded-full w-4 h-4"
            ></div>
          ))}
        </MapboxGL>
      </main>
    </div>
  );
};

export default Home;
