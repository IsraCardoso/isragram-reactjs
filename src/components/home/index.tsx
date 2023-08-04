import WithAuth from "@/hoc/WithAuth";
import HomeFeed from "../feed";

function Home({authenticatedUser}) {
  return <HomeFeed authenticatedUser={authenticatedUser} />;
}

export default WithAuth(Home);
