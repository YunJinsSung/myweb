// script.js

document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            // 클릭한 아이템의 제목과 설명을 가져옵니다.
            const title = item.querySelector('h4').innerText;
            const description = item.querySelector('p').innerText;

            // 지금은 간단히 alert로 보여주지만,
            // 나중에 이 부분에 상세 내용을 보여주는 모달(팝업) 창을 띄우는 코드를 추가할 수 있습니다.
            alert(`프로젝트: ${title}\n설명: ${description}`);
        });
    });
});
// 스크롤 리빌 효과 로직
const revealItems = document.querySelectorAll('.reveal-item');

const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        // isIntersecting: 요소가 뷰포트와 교차하는지 (즉, 보이는지) 여부
        if (entry.isIntersecting) {
            // 보이는 요소에 'visible' 클래스 추가
            entry.target.classList.add('visible');
            // 한 번 나타난 요소는 더 이상 관찰할 필요가 없으므로 관찰 중지 (성능 최적화)
            observer.unobserve(entry.target);
        }
    });
};

// Intersection Observer 생성
const observer = new IntersectionObserver(revealOnScroll, {
    root: null, // 뷰포트를 기준으로
    rootMargin: '0px',
    threshold: 0.1 // 요소가 10% 보였을 때 콜백 함수 실행
});

// 모든 reveal-item 요소에 대해 관찰 시작
revealItems.forEach(item => {
    observer.observe(item);
});