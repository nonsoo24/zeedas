import ArrowUpIcon from "assets/svg/ArrowUpIcon";
import InfoIcon from "assets/svg/InfoIcon";
import CardStats from "components/shared-components/Card/CardStats";
import HeaderTitle from "components/shared-components/HeaderTitle";
import UserProfile from "components/shared-components/UserProfile.js";
import React, { useMemo } from "react";
import "./Resume.css";

const Resume = () => {
  const stats = useMemo(
    () => [
      {
        append: (
          <div className="d-flex align-items-center">
            <h6 className="resume-card-title">Speed</h6>
            <InfoIcon />
          </div>
        ),
        appendCount: (
          <h6 className="count">
            2.8
            <span className="unit">c/hr</span>
          </h6>
        ),
        percentageChange: "87%",
        icon: <ArrowUpIcon />,
        chartColor: "#429777",
        variant: "emerald",
        tagClass: "profile-visit speed",
      },
      {
        append: (
          <div className="d-flex align-items-center">
            <h6 className="resume-card-title">Accuracy</h6>
            <InfoIcon />
          </div>
        ),
        appendCount: (
          <h6 className="count">
            89
            <span className="unit">%</span>
          </h6>
        ),
        percentageChange: "79%",
        icon: <ArrowUpIcon />,
        chartColor: "#429777",
        variant: "emerald",
        tagClass: "profile-visit accuracy",
      },
    ],
    [],
  );
  return (
    <div className="resume">
      <UserProfile showRole />

      <div className="resume-metrics">
        <HeaderTitle title="Metrics" titleClass="metrics-title" />
        <CardStats items={stats} cardStatWrapperStyle="cardStat" />
      </div>
    </div>
  );
};

export default Resume;
