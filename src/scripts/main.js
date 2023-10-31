'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const blocks = document.querySelectorAll('.animated');

  function checkBlocksVisibility() {
    const windowHeight = window.innerHeight;

    blocks.forEach(block => {
      const blockPosition = block.getBoundingClientRect().top;

      if (blockPosition < windowHeight - 100) {
        block.style.opacity = '1';
        block.style.transform = 'translate(0)';
      }
    });
  }

  checkBlocksVisibility();

  window.addEventListener('scroll', function() {
    checkBlocksVisibility();
  });
});
