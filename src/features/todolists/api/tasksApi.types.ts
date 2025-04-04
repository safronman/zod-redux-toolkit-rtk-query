import { TaskPriority, TaskStatus } from "@/common/enums"
import { z } from "zod"

export const domainTaskSchema = z.object({
  deadline: z.string().nullable(),
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
  error: z.string(),
  totalCount: z.number().int().positive(),
  items: domainTaskSchema.array(),
})

export type GetTasksResponse = z.infer<typeof getTasksSchema>

export type UpdateTaskModel = {
  description: string | null
  title: string
  status: TaskStatus
  priority: TaskPriority
  startDate: string | null
  deadline: string | null
}
