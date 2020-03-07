import { base_url } from "./../../utils/constants";
import fetch from "isomorphic-unfetch";
import Events from "./../../components/Events/Events";

const EventsPage = events => {
  return (
    <div>
      <Events {...events} />
    </div>
  );
};

EventsPage.getInitialProps = async ctx => {
  const res = await fetch(base_url + "/events");
  const json = await res.json();
  return json.data;
};

export default EventsPage;
