'use client'
const { Get_All_Posts } = require("@/GraphQL/Queries");
const { ApolloClient, InMemoryCache } = require("@apollo/client");
const {  useQuery } = require("react-query");


const rtkClient = new ApolloClient({
    uri:'https://graphqlzero.almansi.me/api',
    cache:new InMemoryCache(),
})
const useGrapghQlQuery=()=>{
    return useQuery('allPost',async()=>{
        const {data} = await rtkClient.query({
            query:Get_All_Posts
        })
        return data.posts.data;
    })
}

export default useGrapghQlQuery