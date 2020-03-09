import { useState } from "react";
import { Card, CardBody, Badge, Collapse, Button } from "reactstrap";

import formatDate from "./../../utils/formatDate";
import formatTime from "./../../utils/formatTime";

const Eve = ({
  id = "",
  name = "",
  date_of_event = "",
  start_time,
  end_time,
  venue,
  details,
  team_size
}) => {
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

        <div
          className="card-details mt-2"
          dangerouslySetInnerHTML={{ __html: details }}
        ></div>
        <div className="card-bottom">
          <div>to enroll, login and check the events page</div>
        </div>
      </CardBody>
    </Card>
  );
};
export default Eve;
