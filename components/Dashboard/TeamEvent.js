import { useState } from "react";
import { Card, CardBody, Badge, Collapse, Button } from "reactstrap";
import Router from "next/router";

import formatDate from "./../../utils/formatDate";
import formatTime from "./../../utils/formatTime";

const NonTeamEvent = ({
  venue,
  name,
  details,
  team_size,
  start_time,
  end_time,
  date_of_event,
  event_id,
  enrollment_id,
  onUnenroll,
  leader,
  team_id
}) => {
  const [fullMode, setFullMode] = useState(false);

  const [removing, setRemoving] = useState(false);

  const toggle = () => {
    setFullMode(!fullMode);
  };
  return (
    <Card className="mb-4">
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
          <div>
            <Button
              color="success"
              outline
              size="sm"
              onClick={() => {
                Router.push(`/team/${team_id}/${event_id}`);
              }}
            >
              View / Modify Team
            </Button>

            <Button
              color="danger"
              outline
              size="sm"
              onClick={async () => {
                setRemoving(true);
                if (
                  confirm(
                    `Warning: This will permanently ${
                      leader === "1"
                        ? "delete the whole team"
                        : "remove you from team"
                    }`
                  )
                )
                  await onUnenroll(enrollment_id, event_id);
                else {
                  setRemoving(false);
                }
              }}
              className="ml-2"
              disabled={removing}
            >
              {leader === "1" ? "Delete Team" : "Unenroll"}
            </Button>
          </div>

          <span className="read-more-link" color="light" onClick={toggle}>
            Show {fullMode ? "less" : "more"}
          </span>
        </div>
      </CardBody>
    </Card>
  );
};

export default NonTeamEvent;
