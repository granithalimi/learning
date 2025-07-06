import Link from "next/link";
import { supabase } from "../lib/supabase";
import { poppins } from "../ui/fonts";
import { deleteTodo } from "../lib/actions";

export default async function Todos() {
  const data = await supabase.from("todo").select("*");
  const todos = data.data;

  return (
    <div>
      {todos && todos.length > 0 && (
        <div className="flex flex-col gap-2">
          {todos.map((t: any, ind: number) => (
            <div className={`flex justify-between items-center`} key={ind}>
              <h1 className={`${poppins.className} text-md text-gray-400`}>
                {t.name}
              </h1>
              <div className="flex gap-2">
                <Link
                  className="px-3 hover:bg-blue-400 py-1 bg-blue-500 duration-500 font-extrabold rounded-lg text-sm"
                  href={`#`}
                >
                  Edit
                </Link>
                <form action={deleteTodo.bind(null, t.id)}>
                  <button
                    className="px-3 py-1 hover:bg-red-400 duration-500 bg-red-500 font-extrabold rounded-lg text-sm"
                    type="submit"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
