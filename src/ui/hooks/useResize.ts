import { useLayoutEffect, useState } from 'react'

export const useResize = (): any => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const [initialWidth, setInitialWidth] = useState(0)
  const [initialHeight, setInitialHeight] = useState(0)

  useLayoutEffect(() => {
    setInitialWidth(window.innerWidth)
    setInitialHeight(window.innerHeight)
  }, [])

  useLayoutEffect(() => {
    const handleResize = (): void => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })

      // eslint-disable-next-line max-len
      if (windowSize.width !== initialWidth || windowSize.height !== initialHeight) {
        document.documentElement.style.setProperty('overflow', 'auto')
        const metaViewport = document.querySelector('meta[name=viewport]')
        console.log(metaViewport)
        // eslint-disable-next-line max-len
        metaViewport?.setAttribute('content', `height=${initialHeight}px, width=device-width, initial-scale=1.0`)
        return
      }

      const metaViewport = document.querySelector('meta[name=viewport]')
      console.log(metaViewport)
      // eslint-disable-next-line max-len
      metaViewport?.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0')
    }

    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }
  , [window.innerWidth, window.innerHeight])

  return {
    width: windowSize.width,
    height: windowSize.height,
    windowSize,
    setWindowSize
  }
}
