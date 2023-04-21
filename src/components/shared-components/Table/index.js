import ChevronDownIcon from "assets/svg/ChevronDownIcon";
import React, { useCallback } from "react";
import Avatar from "../Avatar";
import RadialProgressBar from "../RadicialBar";
import "./Table.css";

const Table = ({ data }) => {
  const onShowMore = useCallback(() => {}, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name and email</th>
            <th>Date</th>
            <th>Location</th>
            <th>Time spent</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(({ name, email, date, time, location, device, timeSpent, percentage, bg         }) => (
            <tr key={email}>
              <td className="item-wrapper">
                <Avatar initials={name.substring(0, 2)} avatarClass={`initials ${bg}`} />
                <div className="">
                  <h5 className="title">{name}</h5>
                  <p className="small-text">{email}</p>
                </div>
              </td>
              <td>
                <div>
                  <h5 className="title">{date}</h5>
                  <p className="small-text">{time}</p>
                </div>
              </td>
              <td>
                <h5 className="title">{location}</h5>
                <p className="small-text">{device}</p>
              </td>
              <td>
                <h5 className="title">{timeSpent}</h5>
                <p className="small-text">{`${percentage}% read`}</p>
              </td>
              <td>
                <RadialProgressBar percentage={percentage} color="#696F8C" />
              </td>
              <td>
                <ChevronDownIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="card-button" onClick={onShowMore}>
        Show more
      </button>
    </>
  );
};

export default Table;
