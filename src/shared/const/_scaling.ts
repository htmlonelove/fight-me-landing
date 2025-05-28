import { DeviceSize } from './_deviceSize'

export type ScalingBreakpoint = {
  size: { min?: number; base: number }
  fontSize: { min?: number; base: number; max?: number }
}

export const BASE_FONT_SIZE = 16

export const SCALING_BREAKPOINTS: ScalingBreakpoint[] = [
  {
    size: { base: DeviceSize.Desktop.XL },
    fontSize: { base: BASE_FONT_SIZE, max: 18 }
  },
  {
    size: { base: DeviceSize.Desktop.LARGE },
    fontSize: { base: BASE_FONT_SIZE }
  },
  {
    size: { base: DeviceSize.Desktop.SMALL },
    fontSize: { base: BASE_FONT_SIZE, max: 20 }
  },
  {
    size: { base: DeviceSize.Tablet.LANDSCAPE },
    fontSize: { base: BASE_FONT_SIZE, max: 18 }
  },
  {
    size: { base: DeviceSize.Tablet.PORTRAIT },
    fontSize: { base: BASE_FONT_SIZE, max: 18 }
  },
  {
    size: { base: DeviceSize.Mobile.SMALL },
    fontSize: { base: BASE_FONT_SIZE, max: 18 }
  }
]
