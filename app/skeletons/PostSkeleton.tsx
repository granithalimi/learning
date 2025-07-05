import { FaRegEye } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import { poppins } from "../ui/fonts";

export default function PostSkeleton() {
  return (
    <div className="mt-10 flex flex-col gap-2">
      <div className="h-12 w-1/3 color-change rounded-lg"></div>
      <div className="h-6 w-full mt-5 color-change rounded-lg"></div>
      <div className="h-6 w-full color-change rounded-lg"></div>
      <div className="h-6 w-1/2 color-change rounded-lg"></div>
    </div>
  );
}
