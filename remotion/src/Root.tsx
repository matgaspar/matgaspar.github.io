import { Composition } from 'remotion'
import { BrandLoop } from './BrandLoop'

// 6s seamless loop at 30fps, 1080p — used as the hero background video.
export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="BrandLoop"
      component={BrandLoop}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
    />
  )
}
