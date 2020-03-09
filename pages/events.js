import { base_url } from "./../utils/constants";
import fetch from "isomorphic-unfetch";
import Events from "./../components/Events/Events";

import { getToken } from "./../utils/auth";

const EventsPage = ({ events, token }) => {
  return (
    <div>
      <Events events={events.events} token={token} />
    </div>
  );
};

EventsPage.getInitialProps = async ctx => {
  const token = getToken(ctx);
  if (token) {
    const res = await fetch(base_url + "/events", {
      method: "POST",
      body: JSON.stringify({ token: token }),
      headers: {
        "content-type": "application/json"
      }
    });

    const json = await res.json();
    return { events: json.data, token };
  } else {
    const res = await fetch(base_url + "/events");
    const json = await res.json();
    return { events: json.data };
  }
};

export default EventsPage;
