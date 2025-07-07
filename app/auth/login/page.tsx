import { loginUser } from "@/app/lib/actions";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabaseAuth = createServerComponentClient({ cookies });
  const {
    data: { user },
    error: authError,
  } = await supabaseAuth.auth.getUser();

  if (!user || authError) {
    redirect("/auth/login");
  }

  return (
    <div>
      <h1>Welcome to the Login page</h1>
      <form action={loginUser} className="flex flex-col gap-3">
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
          Login
        </button>
      </form>
      <h1>
        Don't have an account?{" "}
        <Link href={"/auth/register"} className="cursor-pointer underline">
          Register
        </Link>
      </h1>
    </div>
  );
}
