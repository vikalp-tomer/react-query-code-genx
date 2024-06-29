import { useTodoIds, useTodos } from "../services/queries";

export default function Todo() {
  const todosIdsQuery = useTodoIds();
  const todosQueries = useTodos(todosIdsQuery.data);

  if (todosIdsQuery.isPending) {
    return <p>Loading...</p>;
  }

  if (todosIdsQuery.isError) {
    return <p>Error</p>;
  }

  return (
    <>
      {/* <p>Query function status: {todosIdsQuery.fetchStatus}</p>
      <p>Query data status: {todosIdsQuery.status}</p> */}
      {/* {todosIdsQuery.data?.map((id) => (
        <p key={id}>{id}</p>
      ))} */}

      <ul>
        {todosQueries.map(({ data }) => (
          <li key={data?.id}>
            <div>{data?.id}</div>
            <span>
              <strong>Title:</strong> {data?.title} <strong>Description: {data?.description}</strong>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
