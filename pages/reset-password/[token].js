import { useRouter } from "next/router";

import ResetPassword from "./../../components/ResetPassword/ResetPassword";

const ResetPasswordPage = props => {
  const router = useRouter();
  const { token } = router.query;
  return <ResetPassword token={token} />;
};

export default ResetPasswordPage;
