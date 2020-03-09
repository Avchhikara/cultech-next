import { auth } from "./../utils/auth";
const ProfilePage = props => {
  return <div>This is for the profilePage</div>;
};

ProfilePage.getInitialProps = async ctx => {
  const { token } = auth(ctx);
  return { token };
};

export default ProfilePage;
