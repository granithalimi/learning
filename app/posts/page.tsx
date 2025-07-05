import { montserrat, poppins } from "../ui/fonts";
import { Suspense } from "react";
import Posts from "../components/posts";
import PostsSkeleton from "../skeletons/PostsSkeleton";

export default function Page() {
  return (
    <div>
      <h1 className={`${montserrat.className} text-2xl`}>Page</h1>
      <div className="flex flex-col gap-1 mt-3">
        <Suspense fallback={<PostsSkeleton />}>
          <Posts />
        </Suspense>
      </div>
    </div>
  );
}
