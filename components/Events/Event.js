import React, { useState } from "react";

import { Card, CardBody, Badge, Collapse, Button } from "reactstrap";

import { app_url } from "./../../utils/constants";

import formatDate from "./../../utils/formatDate";
import formatTime from "./../../utils/formatTime";

const Event = ({
  id = "",
  name = "",
  date_of_event = "",
  start_time,
  end_time,
  venue,
  details,
  team_size
}) => {
  const [fullMode, setFullMode] = useState(false);

  const toggle = () => {
    setFullMode(!fullMode);
  };
  return (
    <Card className="mt-2">
      <CardBody>
        <div className="card-head">
          <h5>{name}</h5>

          <Badge color="light" pill>
            <strong>Team Size</strong>: {team_size}
          </Badge>
        </div>
        <div className="card-venue-det mb-2">
          <div className="card-venue">
            <strong>Venue</strong>: {venue}
          </div>
          <div className="card-time">
            <strong>Time</strong>: {formatTime(start_time)} to{" "}
            {formatTime(end_time) || "end of day"}
          </div>
          <div className="card-date">
            <strong>Date</strong>: {formatDate(date_of_event)}
          </div>
        </div>
        <Collapse isOpen={fullMode}>
          <div
            className="card-details mt-2"
            dangerouslySetInnerHTML={{ __html: details }}
          ></div>
        </Collapse>
        <div className="card-bottom">
          <a
            className="btn btn-outline-success btn-sm "
            href={app_url}
            role="button"
          >
            Enroll
          </a>
          <span className="read-more-link" color="light" onClick={toggle}>
            Show {fullMode ? "less" : "more"}
          </span>
        </div>
      </CardBody>
    </Card>
  );
};

export default Event;
