import { montserrat, poppins } from "@/app/ui/fonts";
import { FaRegEye } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import { Suspense } from "react";
import PostSkeleton from "@/app/skeletons/PostSkeleton";
import Post from "@/app/components/post";

export default async function Page({ params }: any) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<PostSkeleton />}>
        <Post id={id} />
      </Suspense>
    </div>
  );
}
