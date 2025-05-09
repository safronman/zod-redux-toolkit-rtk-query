import { handleError } from "@/common/utils"
import { baseQueryWithZodValidation } from "@/common/utils/baseQueryWithZodValidation.ts"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
  reducerPath: "todolistsApi",
  tagTypes: ["Todolist", "Task"],
  baseQuery: baseQueryWithZodValidation(async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: import.meta.env.VITE_BASE_URL,
      prepareHeaders: (headers) => {
        headers.set("API-KEY", import.meta.env.VITE_API_KEY)
        headers.set("Authorization", `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`)
      },
    })(args, api, extraOptions)
    handleError(api, result)

    return result
  }),
  endpoints: () => ({}),
})
