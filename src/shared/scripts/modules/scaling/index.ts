import type { ScalingBreakpoint } from '@shared/const'
import { SCALING_BREAKPOINTS } from '@shared/const'
import { iosChecker } from '@shared/helpers/_ios-checker'

const getScaleFontSize = (
  windowWidth: number,
  windowHeight: number,
  breakpoints: ScalingBreakpoint[]
) => {
  const currentBreakpoint =
    breakpoints.find((breakpoint) =>
      breakpoint.size.min
        ? windowWidth >= breakpoint.size.min
        : windowWidth >= breakpoint.size.base
    ) || breakpoints[breakpoints.length - 1]

  const minFontSize = currentBreakpoint.fontSize?.min
  const maxFontSize = currentBreakpoint.fontSize?.max

  const widthScale = windowWidth / currentBreakpoint.size.base
  const heightScale = windowHeight / currentBreakpoint.size.heightBase

  let scale = Math.min(widthScale, heightScale)

  if (windowHeight < currentBreakpoint.size.heightBase) {
    scale = scale * (windowHeight / currentBreakpoint.size.heightBase)
  }

  let size = scale * currentBreakpoint.fontSize.base

  if (minFontSize) {
    size = Math.max(size, minFontSize)
  }

  if (maxFontSize) {
    size = Math.min(size, maxFontSize)
  }

  return Number(size.toFixed(2))
}

const handleWindowResize = (evt, isInitialCall?: boolean) => {
  if (!document || !window) {
    return
  }

  const isIOS = iosChecker()
  const htmlElement = document.documentElement

  const viewportWidth = isIOS
    ? document.documentElement.clientWidth
    : window.innerWidth
  const viewportHeight = isIOS
    ? document.documentElement.clientHeight
    : window.innerHeight

  htmlElement.style.fontSize = `${getScaleFontSize(viewportWidth, viewportHeight, SCALING_BREAKPOINTS)}px`
  htmlElement.style.setProperty('--vh', `${viewportHeight * 0.01}px`)

  if (isInitialCall) {
    document.body.classList.remove('is-loading')
  }
}

export const initScaling = () => {
  handleWindowResize(null, true)
  window.addEventListener('resize', handleWindowResize)
}
