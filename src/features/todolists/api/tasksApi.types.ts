import { TaskPriority, TaskStatus } from "@/common/enums"
import { baseResponseSchema } from "@/common/types"
import { z } from "zod"

export const domainTaskSchema = z.object({
  deadline: z.string(),
  description: z.string().nullable(),
  startDate: z.string().nullable(),
  addedDate: z.string().datetime({ local: true }),
  title: z.string(),
  status: z.nativeEnum(TaskStatus),
  priority: z.nativeEnum(TaskPriority),
  id: z.string(),
  todoListId: z.string(),
  order: z.number(),
})

export type DomainTask = z.infer<typeof domainTaskSchema>

export const getTasksSchema = z.object({
  error: z.string().nullable(),
  totalCount: z.number().int().nonnegative(),
  items: domainTaskSchema.array(),
})

export type GetTasksResponse = z.infer<typeof getTasksSchema>

export const taskOperationResponseSchema = baseResponseSchema(
  z.object({
    item: domainTaskSchema,
  }),
)
export type TaskOperationResponse = z.infer<typeof taskOperationResponseSchema>

export type UpdateTaskModel = {
  description: string | null
  title: string
  status: TaskStatus
  priority: TaskPriority
  startDate: string | null
  deadline: string | null
}
