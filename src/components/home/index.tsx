import WithAuth from "@/hoc/WithAuth";

function Home() {
  return (
      <h1>Home</h1>
  );
}

export default WithAuth(Home);