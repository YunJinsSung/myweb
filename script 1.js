// 페이지의 모든 HTML 요소가 로드된 후 스크립트를 안전하게 실행합니다.
document.addEventListener('DOMContentLoaded', () => {

    // ================================
    // Custom Mouse Cursor
    // ================================
    const cursor = document.querySelector('.custom-cursor');
    // 상호작용 가능한 모든 요소를 선택합니다 (a, button 등)
    const interactiveElements = document.querySelectorAll('a, button');

    // 커서 요소가 페이지에 존재하는 경우에만 로직을 실행합니다.
    if (cursor) {
        window.addEventListener('mousemove', e => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        // 상호작용 요소에 마우스를 올리거나 내렸을 때의 효과
        interactiveElements.forEach(el => {
            el.addEventListener('mouseover', () => {
                cursor.classList.add('grow');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('grow');
            });
        });
    }

    // ================================
    // Scroll Reveal Effect
    // ================================
    const revealItems = document.querySelectorAll('.reveal-item');

    // 스크롤 효과를 적용할 요소가 하나라도 있을 경우에만 로직을 실행합니다.
    if (revealItems.length > 0) {
        const revealOnScroll = (entries, observer) => {
            entries.forEach(entry => {
                // 요소가 화면에 보이면 'visible' 클래스 추가
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } 
                // 요소가 화면 밖으로 나가면 'visible' 클래스 제거
                else {
                    entry.target.classList.remove('visible');
                }
            });
        };

        // Intersection Observer를 생성합니다.
        const observer = new IntersectionObserver(revealOnScroll, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // 요소가 10% 보였을 때 반응
        });

        // 모든 대상 요소에 대해 관찰을 시작합니다.
        revealItems.forEach(item => {
            observer.observe(item);
        });
    }

});