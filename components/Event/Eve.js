import { Card, CardBody, Badge } from "reactstrap";
import Link from "next/link";

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
  team_size,
  token,
  enrolled
}) => {
  const getLoggedInData = () => {
    // console.log(enrolled);
    if (enrolled) {
      return (
        <div>
          You are already enrolled for the event, you can the access the event
          on your{" "}
          <Link href="/dashboard">
            <span>Dashboard</span>
          </Link>
        </div>
      );
    }
    return (
      <div style={{ width: "100%" }}>
        You are already logged in, Visit{" "}
        <Link href="/events">
          <span>Events</span>
        </Link>{" "}
        page to register for the event
      </div>
    );
  };

  // console.log(token);
  return (
    <Card className="mt-2 bg-dark text-light">
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
        <div className="card-bottom alert alert-dark">
          {token ? (
            getLoggedInData()
          ) : (
            <div style={{ width: "100%" }}>
              To Register for the event, please{" "}
              <Link href="/login">
                <span>Login</span>
              </Link>{" "}
              /{" "}
              <Link href="/register">
                <span>Register</span>
              </Link>{" "}
              first !
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};
export default Eve;
