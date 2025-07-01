import { DotLottie } from '@lottiefiles/dotlottie-web'

export const initButtonAnimation = () => {
  const buttonsNodes = document.querySelectorAll('[data-lottie-button]')
  if (buttonsNodes.length === 0) {
    return
  }

  buttonsNodes.forEach((button : HTMLCanvasElement) => {

    const path = button.dataset.lottieButton

    new DotLottie({
      autoplay: true,
      loop: true,
      canvas: button,
      src: path
    })
  })
}
