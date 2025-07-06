import { supabase } from "./lib/supabase";
import { montserrat, roboto } from "./ui/fonts";

export default async function Home() {
  const data = await supabase.from("users").select("*")
  return (
    <div>
      <h1 className={`${montserrat.className} text-3xl`}>This is montserrat font !!</h1>
      <p className={`${roboto.className} text-gray-500 font-bold mt-3 text-sm`}>Tseklgf sdkfjhgdf lsdkhjglkd a;dofihg Tseklgf sdkfjhgdf lsdkhjglkd a;dofihg Tseklgf sdkfjhgdf lsdkhjglkd a;dofihg Tseklgf sdkfjhgdf lsdkhjglkd a;dofihg Tseklgf sdkfjhgdf lsdkhjglkd a;dofihg Tseklgf sdkfjhgdf lsdkhjglkd a;dofihg Tseklgf sdkfjhgdf lsdkhjglkd a;dofihg </p>
    </div>
  );
}
