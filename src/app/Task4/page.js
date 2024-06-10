"use client";
import { useQuery } from "react-query";
import React from "react";
import { Get_All_Posts } from "@/GraphQL/Queries";
import { request } from 'graphql-request';

const page = () => {
    
  const { isLoading, error, data } = useQuery("allPosts", async () => {
   const query =Get_All_Posts;
   const responseData = await request('https://graphqlzero.almansi.me/api',query)
   return responseData.posts.data;
  });
  console.log("fetched data", data); // Log the fetched data

  return (
    <div>
      <div>
        <div className="text-white uppercase text-3xl my-12">
          <h1>
            Total Posts{" "}
            {data?.length ? (
              <span className="text-red-600">({data?.length})</span>
            ) : null}
          </h1>
        </div>
        <div className="text-white flex flex-wrap gap-3 justify-center">
          {data?.map((item, index) => (
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
