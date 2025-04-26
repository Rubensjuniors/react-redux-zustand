import ReactPlayer from 'react-player'

import { useDispatch } from 'react-redux'
import { next } from '../store/slices/player'
import { useCurrentLesson } from '../store/hooks/useCurrentLesson'

export function Video() {
  const { currentLesson } = useCurrentLesson()
  const dispatch = useDispatch()

  function handlePlayNext() {
    dispatch(next())
  }
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        onEnded={handlePlayNext}
        playing
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  )
}
