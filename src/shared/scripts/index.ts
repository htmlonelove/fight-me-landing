import { initScaling } from '@scripts/modules/scaling'
import { initHeader } from '../../modules/Header/Header.ts'
import { initParallaxBackground } from 'src/modules/ParallaxBackground/ParallaxBackground.ts'
import { initButtonAnimation } from './modules/scaling/animations/init-button-animation.ts'

document.addEventListener(
  'DOMContentLoaded',
  () => {
    initScaling()
    initHeader()
    initParallaxBackground()
    initButtonAnimation()
  },
  true
)
