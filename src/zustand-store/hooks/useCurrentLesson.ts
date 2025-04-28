import { useStore } from '../'

export const useCurrentLesson = () => {
  const currentModuleIndex = useStore((state) => state.currentModuleIndex)
  const currentLessonIndex = useStore((state) => state.currentLessonIndex)
  const course = useStore((state) => state.course)

  const currentModule = course?.modules[currentModuleIndex]
  const currentLesson = currentModule?.lessons[currentLessonIndex]

  return { currentModule, currentLesson }
}
