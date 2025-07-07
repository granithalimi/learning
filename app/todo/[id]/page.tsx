import { updateTodo } from "@/app/lib/actions";
import { supabase } from "@/app/lib/supabase";
import { montserrat } from "@/app/ui/fonts";
import { notFound } from "next/navigation";

export default async function Page({ params }: any) {
  const { id } = params;

  const { data: todo, error } = await supabase
    .from("todo")
    .select("name")
    .eq("id", id)
    .single();

  if (error || !todo) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-800 rounded-lg">
      <h1 className={`${montserrat.className} mb-6 text-2xl text-white`}>
        Update Todo
      </h1>
      <form
        action={updateTodo.bind(null, id)}
        className="space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white mb-2">
            Todo Name:
          </label>
          <input
            id="name"
            name="name"
            className="w-full px-3 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            defaultValue={todo.name}
            required
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
          >
            Update Todo
          </button>
          <a
            href="/todo"
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors text-center"
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
