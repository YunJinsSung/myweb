// 페이지의 모든 HTML 요소가 로드되고 준비된 후에 스크립트를 안전하게 실행합니다.
document.addEventListener('DOMContentLoaded', () => {

    // ==================================================
    // 1. 커스텀 마우스 커서 (Custom Mouse Cursor)
    // ==================================================
    const cursor = document.querySelector('.custom-cursor');
    const interactiveElements = document.querySelectorAll('a, button');

    if (cursor) {
        window.addEventListener('mousemove', e => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        interactiveElements.forEach(el => {
            el.addEventListener('mouseover', () => {
                cursor.classList.add('grow');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('grow');
            });
        });
    }

    // ==================================================
    // 2. 스크롤 리빌 효과 (Scroll Reveal Effect)
    // ==================================================
    const revealItems = document.querySelectorAll('.reveal-item');

    if (revealItems.length > 0) {
        const revealOnScroll = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        };

        const observer = new IntersectionObserver(revealOnScroll, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        revealItems.forEach(item => {
            observer.observe(item);
        });
    }

    // ==================================================
    // 3. 메인 페이지 배경 슬라이더 (Hero Background Slider)
    // ==================================================
    const sliderImages = document.querySelectorAll('.hero-background-slider img');
    let currentIndex = 0;

    if (sliderImages.length > 0) {
        setInterval(() => {
            sliderImages[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % sliderImages.length;
            sliderImages[currentIndex].classList.add('active');
        }, 5000);
    }

    // ==================================================
    // 4. 전체 화면 메뉴 (Hamburger & Overlay Menu)
    // ==================================================
    const hamburger = document.querySelector('.hamburger-menu');
    const closeBtn = document.getElementById('close-menu-btn');
    const menuLinks = document.querySelectorAll('.menu-nav a');

    // 열기: 햄버거 버튼 클릭 시
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            document.body.classList.add('nav-open');
        });
    }

    // 닫기: Close 버튼 클릭 시
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        });
    }
    
    // 닫기: 메뉴 안의 링크 클릭 시
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        });
    });

});