import { useState } from "react";
import { Card, CardBody, Badge, Collapse, Button } from "reactstrap";

import formatDate from "./../../utils/formatDate";
import formatTime from "./../../utils/formatTime";

import { base_url } from "./../../utils/constants";

const NonTeamEvent = ({
  venue,
  name,
  details,
  team_size,
  start_time,
  end_time,
  date_of_event,
  onUnenroll,
  enrollment_id,
  event_id
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
          <Button
            color="danger"
            outline
            size="sm"
            onClick={() => {
              setRemoving(true);
              onUnenroll(enrollment_id, event_id);
            }}
            disabled={removing}
          >
            {removing ? "UnEnrolling..." : "UnEnroll"}
          </Button>

          <span className="read-more-link" color="light" onClick={toggle}>
            Show {fullMode ? "less" : "more"}
          </span>
        </div>
      </CardBody>
    </Card>
  );
};

export default NonTeamEvent;
