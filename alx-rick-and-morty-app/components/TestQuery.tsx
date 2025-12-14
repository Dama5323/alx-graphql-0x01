import { useQuery } from '@apollo/client';
import { GET_EPISODES } from '@/graphql/queries';

const TestQuery = () => {
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: 1 }
  });

  if (loading) return <p className="text-blue-500">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="mt-4 p-4 bg-green-50 rounded">
      <h3 className="font-bold">GraphQL Query Successful!</h3>
      <p>Total Episodes on Page 1: {data?.episodes?.results?.length || 0}</p>
      <p className="text-sm mt-2">First episode: {data?.episodes?.results[0]?.name}</p>
    </div>
  );
};

export default TestQuery;