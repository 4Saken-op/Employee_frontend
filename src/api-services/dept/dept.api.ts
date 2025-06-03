import baseApi from "../api";
import type { deptResponse } from "./types";

export const DeptApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    selectAllDept: builder.query<deptResponse[], {}>({
      query: () => ({
        url: "/dept",
        method: "GET",
      }),
      providesTags: ["Dept"],
    }),
  }),
});

export const { useSelectAllDeptQuery } = DeptApi;
