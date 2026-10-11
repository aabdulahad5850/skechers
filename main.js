document.addEventListener('DOMContentLoaded', () => {

  setTimeout(() => {
    const preloader = document.getElementById('preloaderBox');
    if (preloader) preloader.classList.add('box1-hide');
  }, 900);

  const shoeImg = document.getElementById('shoeCustomImg');
  const shoeGlow = document.getElementById('shoeGlow');
  
  const colorBtns = [
    { btn: document.getElementById('btnRed'), img: 'https://images.skechers.com/image;width=800%2Cformat=auto/172210_PINK_HERO_LG' },
    { btn: document.getElementById('btnBlue'), img: 'https://images.skechers.com/image;width=1120%2Cformat=auto/172210_WLB_HERO_LG' },
    { btn: document.getElementById('btnGreen'), img: 'https://images.skechers.com/image;width=1120%2Cformat=auto/172210_PWMT_HERO_LG' },
    { btn: document.getElementById('btnGold'), img: 'https://images.skechers.com/image;width=1120%2Cformat=auto/172210_BKW_HERO_LG' }
  ];

  colorBtns.forEach(item => {
    if (item.btn) {
      item.btn.addEventListener('click', () => {
        colorBtns.forEach(b => b.btn?.classList.remove('box59-active'));
        item.btn.classList.add('box59-active');

        if (shoeImg) {
          shoeImg.style.opacity = '0';
          shoeImg.style.transform = 'scale(0.95)';
          setTimeout(() => {
            shoeImg.src = item.img;
            shoeImg.style.opacity = '1';
            shoeImg.style.transform = 'scale(1)';
          }, 150);
        }
      });
    }
  });

  const checkBtn = document.getElementById('checkSizeBtn');
  const sizeInput = document.getElementById('sizeInput');
  const sizeResult = document.getElementById('sizeResult');

  if (checkBtn && sizeInput && sizeResult) {
    checkBtn.addEventListener('click', () => {
      if (!sizeInput.value.trim()) {
        sizeResult.textContent = 'Please enter your shoe size.';
        sizeResult.style.color = '#ff3366';
      } else {
        sizeResult.textContent = 'Good size';
        sizeResult.style.color = '#00cc88';
      }
    });
  }

  document.querySelectorAll('.box97').forEach(header => {
    header.addEventListener('click', () => {
      header.parentElement.classList.toggle('box96-active');
    });
  });

  document.querySelectorAll('button').forEach(btn => {
    if (btn.classList.contains('box59') || btn.id === 'checkSizeBtn') return;
    
    btn.addEventListener('click', () => {
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Loading...';
      btn.style.pointerEvents = 'none';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.pointerEvents = 'auto';
      }, 1200);
    });
  });
});
