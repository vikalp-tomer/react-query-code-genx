import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateTodo } from "../services/mutations";
import { useTodoIds, useTodos } from "../services/queries";
import { Todo } from "../types/todo";

export default function Todos() {
  const todosIdsQuery = useTodoIds();
  const todosQueries = useTodos(todosIdsQuery.data);

  const createTodoMutation = useCreateTodo();

  const { register, handleSubmit } = useForm<Todo>();

  const handleCreateTodoSubmit: SubmitHandler<Todo> = (data: Todo) => {
    createTodoMutation.mutate(data);
  };

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

      <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
        <input type="text" {...register("title")} placeholder="title" />
        <input type="text" {...register("description")} placeholder="description" />
        <input type="submit" />
      </form>

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
