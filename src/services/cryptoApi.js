import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders ={
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '8749ed4df7msh3192dc1e13fc437p1d670ajsnde07c156d70d',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'   
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',  
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        })
    })
});
 
export const {
    useGetCryptosQuery
} = cryptoApi;