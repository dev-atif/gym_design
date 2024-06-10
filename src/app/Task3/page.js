"use client";
import { Get_All_Posts } from "@/GraphQL/Queries";
import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";

const page = () => {
  const { error, loading, data } = useQuery(Get_All_Posts);
  useEffect(() => {
    if (data && data.posts.data) {
    }
  }, [data]);

  const len = data?.posts?.data?.length;
  return (
    <div>
      <div>
        <div className="text-white uppercase text-3xl my-12">
          <h1>
            Total Posts{" "}
            {len ? <span className="text-red-600">({len})</span> : null}
          </h1>
        </div>
        <div className="text-white flex flex-wrap gap-3 justify-center">
          {data?.posts?.data?.map((item, index) => (
            <div className="w-[30%] ">
              <div className="text-white bg-red-600 h-12 rounded-t-lg flex items-center px-3 justify-between gap-4">
                <h1 className="text-white text-base font-bold tracking-wide line-clamp-1 truncate">
                  {item.title}
                </h1>
                <h3 className="text-sm whitespace-nowrap">
                  ({item.user.name})
                </h3>
              </div>
              <div className="px-3 border-l border-r border-b h-80 pt-4 flex flex-col justify-evenly border-red-600 rounded-b-lg">
                <h1 className="text-red-600 font-bold text-xl underline ">
                  {item.title}
                </h1>
                <h1 className="text-white">{item.body}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
