document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.card, .section-header');
    
    // Add reveal class for initial state
    revealElements.forEach(el => el.classList.add('reveal'));

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Language Toggle Logic
    const translations = {
        ko: {
            nav_home: "홈",
            nav_dest: "여행지",
            nav_about: "소개",
            hero_title: "Discover the<br>Extraordinary",
            hero_subtitle: "세계 곳곳의 아름다운 순간들을 공유합니다.",
            cta_btn: "여행지 둘러보기",
            sec_title: "Breathtaking Places",
            sec_desc: "제가 직접 다녀온, 여러분도 꼭 가보셨으면 하는 곳들입니다.",
            desc_santorini: "석양이 지는 푸른 에게해와 하얀 돔 지붕이 어우러진 환상적인 풍경.",
            desc_swiss: "웅장한 폭포와 만년설, 아늑한 오두막이 있는 동화 속 마을.",
            desc_kyoto: "흩날리는 벚꽃과 고즈넉한 전통 사찰이 만들어내는 몽환적인 봄.",
            desc_norway: "밤하늘을 화려하게 수놓는 오로라와 신비로운 설원의 풍경.",
            desc_paris: "꽃이 만발한 발코니에서 바라보는 에펠탑의 낭만적인 노을.",
            desc_borabora: "눈부시게 투명한 에메랄드빛 바다와 프라이빗한 수상 가옥."
        },
        en: {
            nav_home: "Home",
            nav_dest: "Destinations",
            nav_about: "About",
            hero_title: "Discover the<br>Extraordinary",
            hero_subtitle: "Sharing beautiful moments from around the world.",
            cta_btn: "Explore Destinations",
            sec_title: "Breathtaking Places",
            sec_desc: "Places I've visited that you absolutely must see.",
            desc_santorini: "A fantastic landscape of white domes and the blue Aegean Sea at sunset.",
            desc_swiss: "A fairytale village with magnificent waterfalls, snow-capped mountains, and cozy cabins.",
            desc_kyoto: "A dreamy spring created by fluttering cherry blossoms and traditional temples.",
            desc_norway: "The spectacular aurora painting the night sky and a mysterious snowy landscape.",
            desc_paris: "A romantic sunset over the Eiffel Tower seen from a flower-filled balcony.",
            desc_borabora: "Dazzlingly transparent emerald waters and private overwater bungalows."
        }
    };

    let currentLang = 'ko';
    const langToggleBtn = document.getElementById('lang-toggle');

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ko' ? 'en' : 'ko';
        langToggleBtn.innerText = currentLang === 'ko' ? '🇺🇸 EN' : '🇰🇷 KR';
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });
    });

    // Initialize with default Korean text (Optional since HTML is already KO)
    langToggleBtn.innerText = '🇺🇸 EN';
});
