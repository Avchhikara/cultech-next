const NotLoggedIn = props => {
  const { team_size } = props;
  return (
    <div className="text-muted ">
      Login to {team_size === 1 ? "enroll" : "create team"}
    </div>
  );
};

export default NotLoggedIn;
