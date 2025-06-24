import { gsap } from 'gsap'

export const initBackgroundParallax = () => {
  const container = document.querySelector('[data-parallax="hover"]')

  if (!container) {
    return
  }

  const movement = 7 // максимальное смещение в процентах
  const coeff = 0.9

  window.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 769) {
      // Проверка ширины экрана
      const { innerWidth } = window
      const mouseX = e.clientX / innerWidth

      const initialPositionX = 0
      const adjustedPositionX = (1 - mouseX) * movement
      const newPositionX = initialPositionX + adjustedPositionX

      gsap.to(container, {
        backgroundPosition: `${newPositionX + 100}% 100%, ${newPositionX + 6.5}% 100%, ${(newPositionX + 50) * coeff}% 21%, ${(newPositionX + 34) * coeff}% 50%, ${(newPositionX + 100) * coeff}% 6.6%, 50% bottom, 50% 50%`,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  })
}
