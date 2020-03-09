import { useRouter } from "next/router";

import CreateTeam from "./../../components/CreateTeam/CreateTeam";

import { auth } from "./../../utils/auth";

const CreateTeamPage = props => {
  const router = useRouter();
  const { event } = router.query;
  // console.log(event);
  return <CreateTeam event={event} {...props} />;
};

CreateTeamPage.getInitialProps = async ctx => {
  const token = await auth(ctx);
  return { token };
};

export default CreateTeamPage;
