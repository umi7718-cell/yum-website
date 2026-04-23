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
            desc_borabora: "눈부시게 투명한 에메랄드빛 바다와 프라이빗한 수상 가옥.",
            detail_santorini: "산토리니는 에게해 남부에 위치한 그리스의 아름다운 화산섬입니다. 절벽 위로 빼곡히 들어선 새하얀 집들과 파란 돔 지붕은 세계에서 가장 낭만적인 풍경 중 하나로 꼽힙니다. 해 질 녘이 되면 온 섬이 황금빛으로 물드는 이아 마을(Oia)의 일몰은 평생 잊을 수 없는 감동을 선사합니다. 미로처럼 얽힌 좁은 골목길을 거닐며 지중해의 바람을 느껴보세요.",
            detail_swiss: "라우터브루넨은 스위스 알프스의 깊은 계곡에 자리 잡은 동화 같은 마을입니다. '우레와 같은 폭포'라는 이름의 뜻처럼, 마을 전체를 둘러싼 거대한 암벽에서 72개의 폭포가 쏟아져 내립니다. 맑은 공기와 푸른 초원, 그리고 만년설이 덮인 융프라우의 장엄한 자태가 어우러져 완벽한 알프스의 평화를 경험할 수 있는 최고의 하이킹 명소입니다.",
            detail_kyoto: "교토는 일본의 역사와 전통이 고스란히 살아 숨 쉬는 천년 고도입니다. 봄이 되면 도시 전체가 연분홍빛 벚꽃으로 뒤덮이며, 수백 년 된 목조 사찰과 정원이 어우러져 그림 같은 풍경을 만들어냅니다. 고즈넉한 대나무 숲인 아라시야마나 수천 개의 붉은 토리이가 늘어선 후시미 이나리 신사를 걸으며 일본 특유의 정갈한 아름다움과 고요함을 느껴보세요.",
            detail_norway: "트롬쇠는 북극권 한가운데 위치한 노르웨이의 아름다운 도시로, '북극의 파리'라 불립니다. 겨울철 길고 짙은 밤하늘을 수놓는 형형색색의 오로라(Aurora Borealis)는 경이로움 그 자체입니다. 새하얀 눈으로 덮인 피오르드와 거대한 산맥들 사이에서 개썰매를 타거나 모닥불 앞에서 따뜻한 커피를 마시며 대자연의 신비를 감상할 수 있습니다.",
            detail_paris: "파리는 프랑스의 수도이자 예술과 낭만이 살아 숨 쉬는 세계적인 도시입니다. 센 강을 따라 걷다 보면 만날 수 있는 에펠탑은 특히 해 질 녘과 밤에 그 진가를 발휘합니다. 부드러운 노을이 지는 하늘 아래 샹젤리제 거리의 불빛이 하나둘 켜지고, 매 정각마다 에펠탑에서 반짝이는 조명 쇼가 펼쳐집니다. 테라스 카페에 앉아 크루아상을 맛보며 파리지앵의 여유를 즐겨보세요.",
            detail_borabora: "보라보라 섬은 남태평양 프랑스령 폴리네시아에 위치한 지상 최후의 낙원입니다. 세계에서 가장 아름다운 석호(Lagoon)로 덮여 있으며, 물감을 풀어놓은 듯한 투명한 에메랄드빛 바다가 펼쳐집니다. 산호초 위에 지어진 최고급 수상 가옥(Overwater Bungalow)에서 머물며 발아래로 헤엄치는 가오리와 상어들을 관찰하거나, 온종일 태양 아래서 프라이빗하고 완벽한 휴식을 취할 수 있습니다."
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
            desc_borabora: "Dazzlingly transparent emerald waters and private overwater bungalows.",
            detail_santorini: "Santorini is a beautiful volcanic island in Greece, located in the southern Aegean Sea. The white houses and blue domes densely packed on the cliffs are considered one of the most romantic landscapes in the world. At sunset, the entire island is bathed in golden light, and the sunset in Oia offers an unforgettable experience. Stroll through the maze-like narrow streets and feel the Mediterranean breeze.",
            detail_swiss: "Lauterbrunnen is a fairytale village nestled in a deep valley of the Swiss Alps. True to its name, which means 'many springs', 72 waterfalls cascade down from the massive rock faces surrounding the village. With crisp air, lush meadows, and the majestic snow-capped Jungfrau in the background, it is the ultimate hiking destination to experience perfect Alpine peace.",
            detail_kyoto: "Kyoto is a thousand-year-old capital where Japan's history and traditions are fully preserved. In spring, the entire city is covered in light pink cherry blossoms, creating a picturesque landscape in harmony with centuries-old wooden temples and gardens. Walk through the tranquil Arashiyama bamboo grove or the Fushimi Inari Shrine with its thousands of red torii gates to feel the neat beauty and tranquility unique to Japan.",
            detail_norway: "Tromso is a beautiful Norwegian city located in the middle of the Arctic Circle, often called the 'Paris of the North'. The colorful Aurora Borealis (Northern Lights) that paint the long, dark winter night sky is pure wonder. Between the snow-covered fjords and massive mountain ranges, you can ride a dog sled or drink warm coffee by a bonfire while admiring the mysteries of Mother Nature.",
            detail_paris: "Paris is the capital of France and a world-class city breathing with art and romance. The Eiffel Tower, which you can meet while walking along the Seine River, truly shines at sunset and at night. Under the softly setting sun, the lights of the Champs-Élysées turn on one by one, and a sparkling light show unfolds at the Eiffel Tower every hour on the hour. Sit at a terrace cafe, taste a croissant, and enjoy the leisure of a Parisian.",
            detail_borabora: "Bora Bora is the ultimate paradise on earth, located in French Polynesia in the South Pacific. It is covered by one of the most beautiful lagoons in the world, with dazzlingly transparent emerald waters that look like painted watercolors. Stay in a luxurious overwater bungalow built over a coral reef, observe rays and sharks swimming right below your feet, or take a perfect, private rest under the sun all day long."
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

        // Update modal content if it is open
        if (currentModalId) {
            updateModalContent(currentModalId);
        }
    });

    // Initialize with default Korean text (Optional since HTML is already KO)
    langToggleBtn.innerText = '🇺🇸 EN';

    // Modal Logic
    const modal = document.getElementById('detail-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalCloseBtn = document.querySelector('.modal-close');
    const cards = document.querySelectorAll('.card');
    
    let currentModalId = null;

    const updateModalContent = (id) => {
        const card = document.querySelector(`.card[data-id="${id}"]`);
        if (!card) return;

        const imgSrc = card.querySelector('.card-image').src;
        const tagText = card.querySelector('.card-tag').innerText; // Note: tag translations might be needed if they change, but here they are static names
        const titleText = card.querySelector('.card-title').innerText;
        
        // Find corresponding keys based on ID
        const descKey = `desc_${id}`;
        const detailKey = `detail_${id}`;

        document.getElementById('modal-img').src = imgSrc;
        document.getElementById('modal-tag').innerText = tagText;
        document.getElementById('modal-title').innerText = titleText;
        document.getElementById('modal-desc').innerText = translations[currentLang][descKey] || card.querySelector('.card-desc').innerText;
        document.getElementById('modal-detail').innerHTML = translations[currentLang][detailKey] || '';
    };

    const openModal = (id) => {
        currentModalId = id;
        updateModalContent(id);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => { currentModalId = null; }, 400); // clear after animation
    };

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            if (id) openModal(id);
        });
    });

    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

});
