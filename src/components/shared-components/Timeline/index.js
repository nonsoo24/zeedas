/* eslint-disable react/no-array-index-key */
import ClockIcon from "assets/images/clock-icon.png";
import { useCallback } from "react";
import Tag from "../Tag";
import "./Timeline.css";

const Timeline = ({ items }) => {
  const TimeLineItem = useCallback(
    ({
      title,
      description,
      imageSource,
      tagLabel,
      tagIcon,
      tagClass,
      variant,
      date,
      width,
      height,
    }) => (
      <li className="timeline-event">
        <img
          src={ClockIcon}
          className="timeline-event-icon"
          alt="clock-icon"
          width={16}
          height={16}
        />
        <div className="timeline-event-copy" data-date={date}>
          <Tag label={tagLabel} icon={tagIcon} tagClass={tagClass} variant={variant} />
          <img
            src={imageSource}
            alt="text"
            width={width}
            height={height}
            className="activity-image"
          />
          <div>
            <p className="activity-title">{title}</p>
            <p className="activity-description">{description}</p>
          </div>
        </div>
      </li>
    ),
    [],
  );

  return (
    <div className="timeline-wrapper">
      <ul className="timeline">
        {items.map((item) => (
          <TimeLineItem
            key={item.title}
            title={item.title}
            description={item.description}
            imageSource={item.imageSource}
            tagLabel={item.label}
            tagIcon={item.tagIcon}
            tagClass={item.tagClass}
            variant={item.variant}
            date={item.date}
            width={item.width}
            height={item.height}
          />
        ))}
      </ul>
    </div>
  );
};
export default Timeline;
