import { baseApi } from "@/redux/api/baseApi";

export const dashboardApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getAdminUsersStats: builder.query({
            query: () => ({
                url: "/stats/admin/users",
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["Dashboard"],
        }),

        getAdminDashboardStats: builder.query({
            query: () => ({
                url: "/stats/admin/dashboard",
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["Dashboard"],
        }),

        getDashboardStats: builder.query({
            query: () => ({
                url: "/dashboard/stats",
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["Dashboard"],
        }),
    }),
});

export const { 
    useGetAdminUsersStatsQuery, 
    useGetAdminDashboardStatsQuery, 
    useGetDashboardStatsQuery 
} = dashboardApi;
