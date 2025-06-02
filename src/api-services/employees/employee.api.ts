import type { Employee } from "../../store/employee/employee.types";
import baseApi from "../api";
import type {
  CreatePayload,
  CreateResponse,
  GetAllPayload,
  GetAllResponse,
  GetOneResponse,
  UpdatePayload,
} from "./types";

export const EmployeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEmp: builder.mutation<CreateResponse, CreatePayload>({
      query: (payload) => ({
        url: "/employee",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Employee"],
    }),
    selectAllEmp: builder.query<GetAllResponse, GetAllPayload>({
      query: () => ({
        url: "/employee",
        method: "GET",
      }),
      providesTags: ["Employee"],
    }),
    selectOneEmp: builder.query<GetOneResponse, number>({
      query: (payload) => ({
        url: `/employee/${payload}`,
        method: "GET",
      }),
      providesTags: ["Employee"],
    }),
    updateEmp: builder.mutation<CreateResponse, UpdatePayload>({
      query: (payload) => ({
        url: `/employee/${payload.id}`,
        method: "PUT",
        body: payload.employee,
      }),
      invalidatesTags: ["Employee"],
    }),
    deleteEmp: builder.mutation<{}, { id: string }>({
      query: (payload) => ({
        url: `/employee/${payload.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Employee"],
    }),
  }),
});

export const {
  useCreateEmpMutation,
  useSelectAllEmpQuery,
  useSelectOneEmpQuery,
  useUpdateEmpMutation,
  useDeleteEmpMutation,
} = EmployeeApi;
