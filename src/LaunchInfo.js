import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./App.css";
function LaunchInfo() {
  const { id } = useParams();
  const [launchInfo, setLaunchInfo] = useState({});
  const fetchLaunchInfo = async () => {
    const response = await fetch(
      `https://api.spacexdata.com/v4/launches/${id}`
    );
    const data = await response.json();
    setLaunchInfo(data);
  };
  useEffect(() => {
    fetchLaunchInfo();
  }, []);

  return (
    <>
      <div className="launchinfo">
        <h3 className="launchname">
          <span>{launchInfo.name}</span>
        </h3>
        <h3 className="launchdetails">{launchInfo.details}</h3>
        <h3 className="launchdate">
          {new Date(launchInfo.date_utc).toString()}
        </h3>
      </div>
      <Link to="/">back to all Launchpads</Link>
    </>
  );
}

export default LaunchInfo;
