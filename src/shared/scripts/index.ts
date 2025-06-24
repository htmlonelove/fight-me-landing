import { initScaling } from '@scripts/modules/scaling'
import { initHeader } from '../../modules/Header/Header.ts'
import { initParallaxBackground } from 'src/modules/ParallaxBackground/ParallaxBackground.ts'

document.addEventListener(
  'DOMContentLoaded',
  () => {
    initScaling()
    initHeader()
    initParallaxBackground()
  },
  true
)
