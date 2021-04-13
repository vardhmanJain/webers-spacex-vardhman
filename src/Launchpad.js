import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Launchpad({ data, launches }) {
  return (
    <div className="launchpad">
      <h3 className="launchpadname">{data.name}</h3>
      <p>{data.details}</p>
      <h4>Launchpad status: {data.status}</h4>
      <div className="launches">
        <h4>Recent launches</h4>
        <ul>
          {launches.length ? (
            <Launches launches={launches} />
          ) : (
            "No Launch Available "
          )}
        </ul>
      </div>
    </div>
  );
}
const Launches = ({ launches }) => {
  console.log(launches);
  return (
    <>
      {launches.map((launchId, index) => {
        return (
          <li>
            <Link key={index} to={`/launches/${launchId}`}>{`Launch ${
              index + 1
            }`}</Link>
          </li>
        );
      })}
    </>
  );
};

export default Launchpad;
