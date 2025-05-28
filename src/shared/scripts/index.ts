import { initScaling } from '@scripts/modules/scaling'
import { initHeader } from '../../modules/Header/Header.ts'

document.addEventListener(
  'DOMContentLoaded',
  () => {
    initScaling()
    initHeader()
  },
  true
)
