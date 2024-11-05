"use client";
import React, { useState } from "react";

function GetCurrentLocation({ setState }) {
  const [locationLink, setLocationLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      setError(""); // Reset error state

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          const link = `https://www.google.com/maps?q=${latitude},${longitude}`;
          setLocationLink(link);
          setState((prev) => ({
            ...prev,
            GetCurrentLocation: link,
          }));
          console.log(`Location accuracy: ${accuracy} meters`);
          setLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setError(getErrorMessage(error));
          setLoading(false);
        },
        {
          enableHighAccuracy: true, // Request high-accuracy location
          timeout: 10000, // Timeout if location not found within 10 seconds
          maximumAge: 0, // No cached location, always request new data
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const getErrorMessage = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return "Permission denied. Please allow location access.";
      case error.POSITION_UNAVAILABLE:
        return "Location information is unavailable.";
      case error.TIMEOUT:
        return "Request timed out. Try again.";
      default:
        return "An unknown error occurred.";
    }
  };

  return (
    <div>
      <button onClick={handleGetLocation} disabled={loading}>
        {loading ? "Getting Location..." : "Get Current Location"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {locationLink && (
        <div>
          <a href={locationLink} target="_blank" rel="noopener noreferrer">
            Open Current Location in Google Maps to Confirm.
          </a>
        </div>
      )}
    </div>
  );
}

export default GetCurrentLocation;
