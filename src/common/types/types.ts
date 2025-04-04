import { ResultCode } from "@/common/enums"
import { z } from "zod"

// ❌
export type FieldError = {
  error: string
  field: string
}

// ✅
export const fieldErrorSchema = z.object({
  error: z.string(),
  field: z.string(),
})

// ❌
export type BaseResponse<T = {}> = {
  data: T
  resultCode: number
  messages: string[]
  fieldsErrors: FieldError[]
}

// ✅
export const baseResponseSchema = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    data: schema,
    resultCode: z.nativeEnum(ResultCode),
    messages: z.string().array(),
    fieldsErrors: fieldErrorSchema.array(),
  })
export type RequestStatus = "idle" | "loading" | "succeeded" | "failed"
