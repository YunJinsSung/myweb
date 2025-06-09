// script.js

document.addEventListener('DOMContentLoaded', () => {
    // DOMContentLoaded는 HTML 문서가 완전히 로드되고 파싱되었을 때 발생합니다.
    // 이는 JavaScript가 필요한 HTML 요소를 찾을 수 있음을 보장합니다.

    // 메뉴 토글 기능
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

    if (menuToggle && mobileMenuOverlay) { // 요소가 존재하는지 확인 (안전성)
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll'); // 메뉴 열렸을 때 스크롤 방지
        });
    }

    // 모바일 메뉴 항목 클릭 시 메뉴 닫기
    if (mobileMenuOverlay) {
        mobileMenuOverlay.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', () => {
                // 클릭된 링크의 href가 #으로 시작하면 (같은 페이지 내 이동) 메뉴 닫기
                if (item.getAttribute('href').startsWith('#')) {
                    if (menuToggle) menuToggle.classList.remove('active');
                    mobileMenuOverlay.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            });
        });
    }

    // 스크롤 시 헤더 배경 변경 기능
    const headerContainer = document.querySelector('.header-container');

    if (headerContainer) { // 요소가 존재하는지 확인 (안전성)
        window.addEventListener('scroll', () => {
            // console.log("Scrolling detected! Current scrollY:", window.scrollY); // 디버깅용
            if (window.scrollY > 50) { // 50px 이상 스크롤 시
                headerContainer.classList.add('scrolled');
                // console.log("Scrolled class added!"); // 디버깅용
            } else { // 다시 50px 미만으로 돌아오면
                headerContainer.classList.remove('scrolled');
                // console.log("Scrolled class removed!"); // 디버깅용
            }
        });
    }
});