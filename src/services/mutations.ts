import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../types/todo";
import { createTodo } from "./api";

export function useCreateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Todo) => createTodo(data),
    onMutate: () => {
      console.log("onMutate");
    },
    onError: () => {
      console.log("onError");
    },
    onSuccess: () => {
      console.log("onSuccess");
    },
    onSettled: async () => {
      console.log("onSettled");
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
}
