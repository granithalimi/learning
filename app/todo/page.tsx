import { Suspense } from "react";
import { montserrat } from "../ui/fonts";
import Todos from "../components/todos";
import TodosSkeleton from "../skeletons/TodosSkeleton";
import { createTodo } from "../lib/actions";

export default async function Page() {
  return (
    <div>
      <h1 className={`${montserrat.className} text-2xl mb-5`}>
        Welcome to todos
      </h1>
      <form action={createTodo}>
        <div className="flex flex-col">
          <label htmlFor="name" className="w-40">
            Name:
          </label>
          <input
            id="name"
            name="name"
            className="w-40 ps-3 py-1 bg-white text-black rounded-lg"
            type="text"
          />
        </div>
        <button type="submit">add</button>
      </form>
      <Suspense fallback={<TodosSkeleton />}>
        <Todos />
      </Suspense>
    </div>
  );
}
