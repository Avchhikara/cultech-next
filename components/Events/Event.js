import React, { useState } from "react";
import Router from "next/router";
import { Card, CardBody, Badge, Collapse, Button } from "reactstrap";

import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";

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
  team_size,
  isLogged,
  onEnroll
}) => {
  const [fullMode, setFullMode] = useState(false);
  // console.log(id);
  const toggle = () => {
    Router.push(`/event/${id}`);
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
          {isLogged ? (
            <LoggedIn
              name={name}
              id={id}
              team_size={team_size}
              onEnroll={onEnroll}
            />
          ) : (
            <NotLoggedIn team_size={team_size} />
          )}
          <span className="read-more-link" color="light" onClick={toggle}>
            Show {fullMode ? "less" : "more"}
          </span>
        </div>
      </CardBody>
    </Card>
  );
};

export default Event;
