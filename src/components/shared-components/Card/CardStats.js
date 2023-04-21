import { useCallback } from "react";
import Card from ".";
import LineChart from "../LineChart";
import Tag from "../Tag";
import "./Card.css";

const CardStats = ({ items, cardStatWrapperStyle }) => {
  const CardStatsItem = useCallback(
    ({ title, count, percentageChange, icon, chartColor, tagClass, variant, append     }) => (
      <div className="d-flex card-analytics-item">
        <div className="card-analytics-profile">
          {append || <h6>{title}</h6>}
          <p>{count}</p>
          <Tag label={percentageChange} icon={icon} tagClass={tagClass} variant={variant} />
        </div>

        <div className={[cardStatWrapperStyle].join(" ")}>
          <LineChart color={chartColor} title={title} />
        </div>
      </div>
    ),
    [cardStatWrapperStyle],
  );
  return (
    <Card cardClass="card-analytics">
      <div className="card-analytics-wrapper">
        {items.map((item) => (
          <CardStatsItem
            title={item.title}
            count={item.count}
            percentageChange={item.percentageChange}
            icon={item.icon}
            chartColor={item.chartColor}
            variant={item.variant}
            tagClass={item.tagClass}
            append={item.append}
          />
        ))}
      </div>
    </Card>
  );
};
export default CardStats;
