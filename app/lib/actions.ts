"use server";

import { redirect } from "next/navigation";
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

  const { error } = await supabase
    .from("todo")
    .update({ name: name })
    .eq("id", id);

  revalidatePath(`/todo/${id}`);
}

export async function registerUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
    return redirect("/auth/register");
  }

  return redirect("/");
}

export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
    return redirect("/auth/login");
  }

  redirect("/");
}

export async function signout() {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);

  revalidatePath("/");
}
