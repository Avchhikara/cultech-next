import { useState } from "react";
import Link from "next/link";

import { Button } from "reactstrap";
const LoggedIn = props => {
  const { team_size, id, name, onEnroll, isEnrolling } = props;
  const [enrolling, setEnrolling] = useState(isEnrolling);

  return (
    <>
      {team_size === 1 ? (
        <Button
          color="success"
          size={"sm"}
          outline
          onClick={() => {
            setEnrolling(true);
            onEnroll(id);
          }}
        >
          {enrolling ? "Enrolling..." : "Enroll"}
        </Button>
      ) : (
        <Link
          href={`/create-team/[...event]`}
          as={`/create-team/${id}/${name}`}
        >
          <Button color="success" size="sm" outline>
            Create Team
          </Button>
        </Link>
      )}
    </>
  );
};

export default LoggedIn;
