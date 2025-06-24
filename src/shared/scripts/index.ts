import { initScaling } from '@scripts/modules/scaling'
import { initHeader } from '../../modules/Header/Header.ts'
import { initBackgroundParallax } from 'src/modules/BackgroundParallax/BackgroundParallax.ts'

document.addEventListener(
  'DOMContentLoaded',
  () => {
    initScaling()
    initHeader()
    initBackgroundParallax()
  },
  true
)
