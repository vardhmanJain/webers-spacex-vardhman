import React from "react";
import { useState, useEffect } from "react";
import Launchpad from "./Launchpad";
import "./App.css";

function Launchpads() {
  const [launchpads, setLaunchpads] = useState([]);
  const fetchLaunchpads = async () => {
    const response = await fetch("https://api.spacexdata.com/v4/launchpads");
    const data = await response.json();
    setLaunchpads(data);
  };
  useEffect(() => {
    fetchLaunchpads();
  }, []);

  return (
    <div className="launchpads">
      {launchpads.map((launchpad) => {
        const { name, details, status } = launchpad;
        const launches = launchpad.launches.splice(0, 3);
        return (
          <>
            <Launchpad data={{ name, details, status }} launches={launches} />
          </>
        );
      })}
    </div>
  );
}

export default Launchpads;
