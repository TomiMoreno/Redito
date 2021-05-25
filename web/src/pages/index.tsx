import { withUrqlClient } from "next-urql";
import { NavBar } from "../components/NavBar";
import { createUrqlClient } from "../utils/createUrqlClient";
import { usePostsQuery } from "../generated/graphql";

const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <div>
      <NavBar />
      {data && data.posts.map((p) => <div key={p.id}>{p.title}</div>)}
    </div>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
