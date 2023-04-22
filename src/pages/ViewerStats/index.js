import ArrowDown from "assets/svg/ArrowDownIcon";
import ArrowUpIcon from "assets/svg/ArrowUpIcon";
import Card from "components/shared-components/Card";
import CardStats from "components/shared-components/Card/CardStats";
import HeaderTitle from "components/shared-components/HeaderTitle";
import Table from "components/shared-components/Table";
import useDocumentTitle from "hooks/useDocumentTitle";
import React, { useMemo } from "react";
import tableData from "utils/mock-data/table";
import "./ViewerStats.css";

const ViewerStats = () => {
  useDocumentTitle("Viewer Stats");
  const stats = useMemo(
    () => [
      {
        title: "Profile visits",
        count: 732,
        percentageChange: "87%",
        icon: <ArrowUpIcon />,
        chartColor: "#429777",
        variant: "emerald",
        tagClass: "profile-visit",
      },
      {
        title: "Time spent (hrs)",
        count: 328,
        percentageChange: "27%",
        icon: <ArrowDown />,
        chartColor: "#F15832",
        variant: "red",
        tagClass: "time-spent",
      },
    ],
    [],
  );

  return (
    <div className="wrapper container">
      <HeaderTitle
        title="Profile analytics"
        showDropdown
        items={[{ label: "Last 30 days", value: "all" }]}
      />
      <CardStats items={stats} />

      <div>
        <Card cardClass="recent-visitors">
          <HeaderTitle title="Recent visitors" titleClass="visitor-header" />
          <Table data={tableData} />
        </Card>
      </div>
    </div>
  );
};

export default ViewerStats;
