import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://tub-backend.nodetechit.com/api/v2",
        prepareHeaders: (headers, { getState }) => {
            let token = "";

            if (typeof window !== "undefined") {
                token = localStorage.getItem("refreshToken");
            }
            headers.set("Authorization", `Bearer ${token}`);

            return headers;
        },
    }),
    refetchOnReconnect: true,
    tagTypes: ["get-all-cart"],

    endpoints: (builder) => ({}),
});

export const { } = apiSlice;
