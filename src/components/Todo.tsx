import { useTodoIds } from "../services/queries";

export default function Todo() {
  const todosIdsQuery = useTodoIds();

  if (todosIdsQuery.isPending) {
    return <p>Loading...</p>;
  }

  if (todosIdsQuery.isError) {
    return <p>Error</p>;
  }

  return (
    <>
      {todosIdsQuery.data.map((id) => (
        <p key={id}>{id}</p>
      ))}
    </>
  );
}
