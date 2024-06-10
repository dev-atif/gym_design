import Image from "next/image";
import Link from "next/link";
import HomePage from "./Components/HomePage/HomePage";

export default function Home() {
  return (
    <main>
      <div className="flex items-center gap-3 flex-wrap">
        <div className="w-1/4">
          <Link href={"/Task1"}>
            <button className="bg-white text-black  w-full py-2 text-xl font-semibold rounded-lg">
              Svg Boxes Task
            </button>
          </Link>
        </div>
        <div className="w-1/4">
          <Link href={"/Task2"}>
            <button className="bg-white text-black  w-full py-2 text-xl font-semibold rounded-lg">
              AG Grid Table
            </button>
          </Link>
        </div>
        <div className="w-1/4">
          <Link href={"/Task3"}>
            <button className="bg-white text-black  w-full py-2 text-xl font-semibold rounded-lg">
              Get data from GQL using Appolo
            </button>
          </Link>
        </div>
        <div className="w-1/4">
          <Link href={"/Task4"}>
            <button className="bg-white text-black  w-full py-2 text-xl font-semibold rounded-lg">
              Get data from GQL using RTK
            </button>
          </Link>
        </div>
      </div>
      {/* ------------------------------ */}
      {/* <HomePage/> */}
    </main>
  );
}
