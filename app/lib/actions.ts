"use server";

import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const name = formData.get("name") as string;

  const { error } = await supabase.from("todo").insert({ name: name.trim() });

  if (error) {
    console.error("Error creating todo:", error);
    throw new Error("Failed to create todo");
  }

  revalidatePath("/todo");
}

export async function deleteTodo(id: number) {
  const { error } = await supabase.from("todo").delete().eq("id", id);

  if (error) {
    console.error("Error deleting todo:", error);
    throw new Error("Failed to delete todo");
  }

  revalidatePath("/todo");
}

export async function updateTodo(id: number, formData: FormData) {
  const name = formData.get("name") as string;

  const { error } = await supabase.from("todo").update({name:name}).eq("id", id);

  revalidatePath(`/todo/${id}`)
}
