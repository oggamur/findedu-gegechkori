
import {mobileVhFix} from './utils/mobile-vh-fix.js';

window.addEventListener('DOMContentLoaded', () => {
  mobileVhFix();

  const initBenefitsCards = () => {
    const benefitCards = document.querySelectorAll('.info-benefit');
    const benefitsSection = document.querySelector('.benefits');

    if (benefitCards.length === 0 || !benefitsSection) {
      return;
    }

    const infoImage = benefitsSection.querySelector('.info-left img');
    const infoLeft = benefitsSection.querySelector('.info-left');
    const infoTitle = benefitsSection.querySelector('.text-container h4');

    const updateContent = (card) => {
      const imageSrc = card.getAttribute('data-image');
      const titleText = card.getAttribute('data-title');
      const titleBreak = card.getAttribute('data-title-break');

      if (imageSrc && infoImage && infoLeft) {
        infoImage.classList.add('fade-out');

        setTimeout(() => {
          infoImage.src = imageSrc;
          if (imageSrc.includes('benefits-2.svg') || imageSrc.includes('benefits-3.svg')) {
            infoImage.classList.add('compact');
            infoLeft.classList.add('has-compact-image');
          } else {
            infoImage.classList.remove('compact');
            infoLeft.classList.remove('has-compact-image');
          }

          requestAnimationFrame(() => {
            infoImage.classList.remove('fade-out');
          });
        }, 150);
      }

      if (titleText && infoTitle) {
        infoTitle.classList.add('fade-out');

        setTimeout(() => {
          if (titleBreak) {
            infoTitle.innerHTML = `${titleText}<br>${titleBreak}`;
          } else {
            infoTitle.textContent = titleText;
          }

          requestAnimationFrame(() => {
            infoTitle.classList.remove('fade-out');
          });
        }, 150);
      }
    };

    benefitCards.forEach((card) => {
      card.addEventListener('click', (e) => {
        e.preventDefault();

        if (card.classList.contains('active')) {
          return;
        }

        benefitCards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
        updateContent(card);
      });
    });

    if (benefitCards.length > 0) {
      benefitCards[0].classList.add('active');
      updateContent(benefitCards[0]);
    }
  };

  initBenefitsCards();
});
