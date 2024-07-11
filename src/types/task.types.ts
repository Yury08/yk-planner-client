import { IBase } from './root.types'

export enum EnumTaskPriority {
	low = 'low',
	medium = 'medium',
	high = 'high'
}

export interface ITaskResponse extends IBase {
	name: string
	priority?: EnumTaskPriority
	isCompleted: boolean
}

// Omit указывает, что мы вырезаем id и updatedAt из ITaskResponse при возвращении ответа
export type TypeTaskFormState = Partial<Omit<ITaskResponse, 'id' | 'updatedAt'>>
