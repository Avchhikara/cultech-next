import { useRouter } from "next/router";
import AddTeamMem from "./../../components/AddTeamMem/AddTeamMem";
import { auth } from "./../../utils/auth";

const TeamPage = props => {
  const router = useRouter();
  const { team } = router.query;
  return <AddTeamMem {...props} team={team} />;
  // return <div>Add team m/m</div>;
};

TeamPage.getInitialProps = async ctx => {
  const token = await auth(ctx);
  return { token };
};

export default TeamPage;
