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
        count: "2.8c/hr",
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
        count: "89%",
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
