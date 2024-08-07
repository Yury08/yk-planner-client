import { useMutation, useQueryClient } from '@tanstack/react-query'

import { pomodoroService } from '@/service/pomodoro.service'

export function useDeleteSession(onDeleteSuccess: () => void) {
	const queryClient = useQueryClient()

	const { mutate: deleteSession, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete new session'],
		mutationFn: (id: string) => pomodoroService.deleteSession(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get today session']
			})
			// setSecondsLeft(workInterval * 60)
			onDeleteSuccess()
		}
	})

	return { deleteSession, isDeletePending }
}
