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
          {data?.map((item) => (
            <tr key={`key-${item.timeSpent}`}>
              <td className="item-wrapper">
                <Avatar initials={item.name.substring(0, 2)} avatarClass={`initials ${item.bg}`} />
                <div className="">
                  <h5 className="title">{item.name}</h5>
                  <p className="small-text">{item.email}</p>
                </div>
              </td>
              <td>
                <div>
                  <h5 className="title">{item.date}</h5>
                  <p className="small-text">{item.time}</p>
                </div>
              </td>
              <td>
                <h5 className="title">{item.location}</h5>
                <p className="small-text">{item.device}</p>
              </td>
              <td>
                <h5 className="title">{item.timeSpent}</h5>
                <p className="small-text">{`${item.percentage}% read`}</p>
              </td>
              <td>
                <RadialProgressBar percentage={item.percentage} color="#696F8C" />
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
