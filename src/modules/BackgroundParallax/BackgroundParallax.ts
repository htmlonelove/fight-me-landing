import { gsap } from 'gsap'

export const initBackgroundParallax = () => {
  const container = document.querySelector('[data-parallax="hover"]')

  if (!container) {
    return
  }

  const movement = 5 // Определите максимальное смещение в процентах

  // Обработчик события движения мыши
  window.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 769) {
      // Проверка ширины экрана
      const { innerWidth } = window
      const mouseX = e.clientX / innerWidth // Нормализуем по ширине

      const initialPositionX = 0
      const adjustedPositionX = (1 - mouseX) * movement // Инвертируем сдвиг в процентах
      const newPositionX = initialPositionX + adjustedPositionX

      gsap.to(container, {
        backgroundPosition: `${newPositionX + 100}% 100%, ${newPositionX + 6.5}% 100%, ${newPositionX + 50}% 21%, ${newPositionX + 34}% 50%, ${newPositionX + 100}% 6.6%, 50% bottom, 50% 50%`,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  })
}
