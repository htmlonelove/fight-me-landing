import { gsap } from 'gsap'
import { extractNumericValue } from './helpers/extract-numeric-value'

export const initParallaxBackground = () => {
  const tabletMediaQuery = window.matchMedia('(min-width: 768px)')
  const parallaxContainer: HTMLDivElement = document.querySelector(
    '[data-parallax="background"]'
  )

  if (!parallaxContainer) {
    return
  }

  const MAX_MOVEMENT = 7 // максимальное смещение в процентах
  const computedStyle = window.getComputedStyle(parallaxContainer)
  const defaultBackgroundPosition = computedStyle.getPropertyValue(
    '--background-position'
  )

  const parsePositionString = (str) => {
    const pairs = str.split(', ')
    return pairs.map((pair) => {
      const [x, y] = pair.split(' ')
      return { x, y }
    })
  }

  let updatedBackgroundPosition = defaultBackgroundPosition

  const onMouseMoveHandler = (evt) => {
    const { innerWidth } = window
    const mouseXPercentage = evt.clientX / innerWidth

    const initialPositionX = 0
    const adjustedPositionX = (1 - mouseXPercentage) * MAX_MOVEMENT
    const newPositionX = initialPositionX + adjustedPositionX

    const positionArray = parsePositionString(defaultBackgroundPosition)

    const calculateNewBackgroundPosition = () => {
      return positionArray.map((element) => {
        const { x, y } = element
        const yNumericValue = extractNumericValue(y)
        const xNumericValue = extractNumericValue(x)
        let newBackgroundPosition
        if (yNumericValue) {
          newBackgroundPosition = `${xNumericValue + newPositionX}% ${y}`
        } else {
          newBackgroundPosition = `${xNumericValue}% ${y}`
        }
        return newBackgroundPosition
      })
    }

    updatedBackgroundPosition = calculateNewBackgroundPosition().join(', ')

    gsap.to(parallaxContainer, {
      backgroundPosition: updatedBackgroundPosition,
      duration: 0.3
    })
  }

  const checkMediaQueryBreakpoint = () => {
    if (tabletMediaQuery.matches) {
      document.addEventListener('mousemove', onMouseMoveHandler)
    } else {
      document.removeEventListener('mousemove', onMouseMoveHandler)
      parallaxContainer.style.backgroundPosition = ''
    }
  }

  checkMediaQueryBreakpoint()
  tabletMediaQuery.addEventListener('change', checkMediaQueryBreakpoint)
}
