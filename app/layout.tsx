import "@/app/globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="w-full h-20 flex justify-center items-center">
          <div className="w-2/3 h-full flex items-center justify-between">
            <div className="ms-3 h-full ">
              <Link
                href={"/"}
                className="text-gray-400 font-extrabold hover:text-white hover:underline duration-500 h-full flex items-center"
              >
                Home
              </Link>
            </div>
            <div className="me-3 h-full flex items-center gap-3">
              <Link
                href={"/posts"}
                className="text-gray-400 font-extrabold flex items-center hover:text-white hover:underline duration-500 h-full"
              >
                Products
              </Link>
              <Link
                href={"/todo"}
                className="text-gray-400 font-extrabold flex items-center hover:text-white hover:underline duration-500 h-full"
              >
                Todos
              </Link>
            </div>
          </div>
        </div>
        <div className="w-2/3 mx-auto mt-10">{children}</div>
      </body>
    </html>
  );
}
