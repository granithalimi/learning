import { FaRegEye } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import { poppins, montserrat } from "../ui/fonts";

export default async function Post({ id }: { id: string }) {
  const product = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await product.json();
  return (
    <div>
      <h1 className={`${montserrat.className} text-3xl`}>{data.title}</h1>
      <p className={`${poppins.className} mt-5 text-gray-400 text-lg`}>
        {data.body}
      </p>
      <div className={`${poppins.className} flex gap-3 mt-5 cursor-default`}>
        <div className="flex justify-center items-center gap-2">
          <FaRegEye className="text-xl" />
          <p>Views: {data.views}</p>
        </div>
        <div className="flex justify-center text-blue-400 items-center gap-2">
          <BiLike className="text-xl" />
          <p>Likes: {data.reactions.likes}</p>
        </div>
        <div className="flex justify-center text-red-400 items-center gap-2">
          <BiDislike className="text-xl" />
          <p>Dislikes: {data.reactions.dislikes}</p>
        </div>
      </div>
    </div>
  );
}
