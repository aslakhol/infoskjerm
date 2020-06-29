import React from "react";
import { DateTime } from "luxon";

const Clock = () => {
  const dateTime = DateTime.local().setLocale("nb-NO");

  console.log(DateTime.TIME_24_SIMPLE);
  return (
    <div className="clock">
      <h2 className="time">
        {dateTime.toLocaleString(DateTime.TIME_24_SIMPLE)}
      </h2>

      <h2 className="date">
        {dateTime.toLocaleString({
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
      </h2>
    </div>
  );
};

export default Clock;
