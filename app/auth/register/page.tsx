import { registerUser } from "@/app/lib/actions";
import { supabase } from "@/app/lib/supabase";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const { data: { user } } = await supabase.auth.getUser()

  if(user){
    redirect("/")
  }
  return (
    <div>
      <h1>Welcome to the register page</h1>
      <form action={registerUser} className="flex flex-col gap-3">
        <div className="flex flex-col mt-3">
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            type="email"
            className="rounded-lg py-1 ps-3 bg-white text-black"
            placeholder="john@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            id="password"
            type="password"
            className="rounded-lg py-1 ps-3 bg-white text-black"
            placeholder="........"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-white rounded-lg py-1 text-black font-extrabold hover:bg-gray-300 cursor-pointer"
        >
          Register
        </button>
      </form>
      <h1>
        Already have an account?{" "}
        <Link href={"/auth/login"} className="cursor-pointer underline">
          Login
        </Link>
      </h1>
    </div>
  );
}
