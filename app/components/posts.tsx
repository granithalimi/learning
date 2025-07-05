import Link from "next/link";
import { poppins } from "../ui/fonts";

export default async function Posts() {
  const products = await fetch("https://dummyjson.com/posts?limit=5");
  const data = await products.json();

  return (
    <div className="mt-5 flex flex-col gap-2">
      {data.posts.map((p: {id:number, title:string}, ind: number) => (
        <Link key={ind} href={`/posts/${p.id}`} className={`${poppins.className} text-gray-400 hover:text-white hover:underline duration-500`}>{p.title}</Link>
      ))}
    </div>
  );
}
