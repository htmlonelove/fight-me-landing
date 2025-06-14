import { DeviceSize } from './_deviceSize'

export type ScalingBreakpoint = {
  size: { min?: number; base: number; heightBase: number }
  fontSize: { min?: number; base: number; max?: number }
}

export const BASE_FONT_SIZE = 16

export const SCALING_BREAKPOINTS: ScalingBreakpoint[] = [
  {
    size: { base: DeviceSize.Desktop.XL, heightBase: 1440 },
    fontSize: { base: BASE_FONT_SIZE }
  },
  {
    size: { base: DeviceSize.Desktop.LARGE, heightBase: 1080 },
    fontSize: { base: BASE_FONT_SIZE }
  },
  {
    size: { base: DeviceSize.Desktop.SMALL, heightBase: 720 },
    fontSize: { base: BASE_FONT_SIZE }
  },
  {
    size: { base: DeviceSize.Tablet.LANDSCAPE, heightBase: 768 },
    fontSize: { base: BASE_FONT_SIZE }
  },
  {
    size: { base: DeviceSize.Tablet.PORTRAIT, heightBase: 1024 },
    fontSize: { base: BASE_FONT_SIZE }
  },
  {
    size: { base: DeviceSize.Mobile.SMALL, heightBase: 694 },
    fontSize: { base: BASE_FONT_SIZE }
  }
]
