import "./App.css";
import { gql, useQuery } from "@apollo/client";

const SAMPLE_QUERY = gql`
  query test {
    me {
      id
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(SAMPLE_QUERY);
  if (error) {
    console.error(error);
    return <div>{error.message}</div>;
  }
  if (loading) {
    return <div>Loading</div>;
  }
  if (data) {
    console.log(data);
    return <div>{data.me.id}</div>;
  }
}

export default App;
