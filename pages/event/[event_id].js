import { useRouter } from "next/router";
import Event from "./../../components/Event/Event";

import { getToken } from "./../../utils/auth";

const EventPage = props => {
  const router = useRouter();
  const { event_id } = router.query;
  return <Event {...props} event_id={event_id} />;
};

EventPage.getInitialProps = async ctx => {
  const token = getToken(ctx);

  return { token };
};

export default EventPage;
