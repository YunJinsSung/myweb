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

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            document.body.classList.add('nav-open');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        });
    }
    
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        });
    });

    // ==================================================
    // 5. 마우스 오버 시 비디오 재생 (Hover to Play Video)
    // ==================================================
    const hoverVideos = document.querySelectorAll('.hover-to-play');

    hoverVideos.forEach(video => {
        video.addEventListener('mouseover', () => {
            video.play();
        });

        video.addEventListener('mouseout', () => {
            video.pause();
            video.currentTime = 0;
        });
    });

    // ==================================================
  // script.js 파일

// ==================================================
// 6. 소개 페이지 인터랙티브 레이아웃 (스크롤 버그 수정)
// ==================================================
const interactiveLayout = document.querySelector('.two-column-layout');
const clickableColumn = document.querySelector('.column-left');

// 해당 요소들이 페이지에 있을 경우에만 실행
if (interactiveLayout && clickableColumn) {
    clickableColumn.addEventListener('click', () => {
        
        // 현재 레이아웃이 활성화(펼쳐진) 상태인지 확인
        if (interactiveLayout.classList.contains('active')) {
            // [닫을 때의 동작]
            // 먼저 페이지를 부드럽게 맨 위로 스크롤합니다.
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // 스크롤 애니메이션이 보일 약간의 시간(0.3초)을 준 뒤에
            // 레이아웃을 초기 상태로 되돌립니다.
            setTimeout(() => {
                interactiveLayout.classList.remove('active');
                document.body.classList.add('no-scroll');
            }, 300); // 300ms = 0.3초

        } else {
            // [열 때의 동작]
            // 즉시 레이아웃을 펼치고 스크롤을 허용합니다.
            interactiveLayout.classList.add('active');
            document.body.classList.remove('no-scroll');
        }
    });
}

});