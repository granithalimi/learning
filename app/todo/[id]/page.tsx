import { updateTodo } from "@/app/lib/actions";
import { supabase } from "@/app/lib/supabase";

export default async function Page({ params }: any) {
  const { id } = await params;

  const data = await supabase.from("todo").select("name").eq("id", id).single();
  const todo = data.data;
  console.log(todo);
  return (
    <div>
      <h1>welcome to update</h1>
      <form action={updateTodo.bind(null, id)}>
        {todo && (
          <>
            <input name="name" id="name" defaultValue={todo.name} />
          </>
        )}
        <button type="submit">update</button>
      </form>
    </div>
  );
}
