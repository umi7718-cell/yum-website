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
        },
        ja: {
            nav_home: "ホーム",
            nav_dest: "旅行先",
            nav_about: "概要",
            hero_title: "Discover the<br>Extraordinary",
            hero_subtitle: "世界中の美しい瞬間を共有します。",
            cta_btn: "旅行先を見る",
            sec_title: "Breathtaking Places",
            sec_desc: "私が実際に訪れた、皆さんにぜひ行ってほしい場所です。",
            desc_santorini: "夕日と青いエーゲ海、白いドーム屋根が織りなす幻想的な風景。",
            desc_swiss: "雄大な滝と万年雪、居心地の良い山小屋があるおとぎ話のような村。",
            desc_kyoto: "舞い散る桜と静かな伝統寺院が作り出す夢のような春。",
            desc_norway: "夜空を華やかに彩るオーロラと神秘的な雪原の風景。",
            desc_paris: "花が満開のバルコニーから眺めるエッフェル塔のロマンチックな夕暮れ。",
            desc_borabora: "まぶしいほど透明なエメラルドグリーンの海とプライベートな水上コテージ。",
            detail_santorini: "サントリーニ島は、エーゲ海南部に位置するギリシャの美しい火山島です。絶壁の上に密集して建つ真っ白な家々と青いドーム屋根は、世界で最もロマンチックな風景の一つとされています。夕暮れ時になると島全体が黄金色に染まるイア（Oia）の夕日は、一生忘れられない感動を与えてくれます。迷路のように入り組んだ路地を散策し、地中海の風を感じてください。",
            detail_swiss: "ラウターブルンネンは、スイスアルプスの深い谷間に位置するおとぎ話のような村です。「音の鳴る泉」という名前の由来通り、村全体を囲む巨大な岩壁から72もの滝が流れ落ちます。澄んだ空気と緑の草原、そして万年雪に覆われたユングフラウの雄大な姿が調和し、完璧なアルプスの平和を体験できる最高のハイキングスポットです。",
            detail_kyoto: "京都は、日本の歴史と伝統がそのまま息づく千年の古都です。春になると街全体が薄紅色の桜で覆われ、何百年もの歴史を持つ木造寺院や庭園と調和して絵のような風景を作り出します。静かな竹林である嵐山や、数千の赤い鳥居が並ぶ伏見稲荷大社を歩きながら、日本特有の清楚な美しさと静寂を感じてください。",
            detail_norway: "トロムソは北極圏の中心に位置するノルウェーの美しい都市で、「北欧のパリ」と呼ばれています。冬の長く暗い夜空を彩る色鮮やかなオーロラ（Aurora Borealis）は驚異そのものです。真っ白な雪に覆われたフィヨルドと巨大な山脈の間で犬ぞりに乗ったり、焚き火の前で温かいコーヒーを飲みながら大自然の神秘を鑑賞できます。",
            detail_paris: "パリはフランスの首都であり、芸術とロマンが息づく世界的な都市です。セーヌ川沿いを歩いていると出会えるエッフェル塔は、特に夕暮れと夜にその真価を発揮します。柔らかな夕焼け空の下、シャンゼリゼ通りの明かりが一つずつ灯り、毎時ちょうどにエッフェル塔でシャンパンフラッシュと呼ばれるイルミネーションが繰り広げられます。テラスカフェに座り、クロワッサンを味わいながらパリジャンの余裕を楽しんでください。",
            detail_borabora: "ボラボラ島は、南太平洋のフランス領ポリネシアに位置する地上最後の楽園です。世界で最も美しいラグーンに囲まれており、絵の具を溶かしたような透明なエメラルドグリーンの海が広がります。サンゴ礁の上に建てられた最高級の水上コテージ（Overwater Bungalow）に滞在し、足元を泳ぐエイやサメを観察したり、一日中太陽の下でプライベートで完璧な休息を取ることができます。"
        },
        zh: {
            nav_home: "首页",
            nav_dest: "目的地",
            nav_about: "关于",
            hero_title: "Discover the<br>Extraordinary",
            hero_subtitle: "与您分享世界各地的美好瞬间。",
            cta_btn: "探索目的地",
            sec_title: "Breathtaking Places",
            sec_desc: "我亲自去过，并强烈推荐给您的必去之地。",
            desc_santorini: "夕阳下的蓝色爱琴海与白色圆顶屋交织而成的梦幻风景。",
            desc_swiss: "拥有壮丽瀑布、万年积雪和温馨小木屋的童话村落。",
            desc_kyoto: "飘落的樱花与古老的传统寺庙交相辉映的梦幻之春。",
            desc_norway: "绚丽极光点缀夜空的神秘雪原风光。",
            desc_paris: "从开满鲜花的阳台眺望埃菲尔铁塔的浪漫日落。",
            desc_borabora: "耀眼透明的翡翠色海水与私密的极品水上屋。",
            detail_santorini: "圣托里尼是位于爱琴海南部的一座美丽的希腊火山岛。悬崖上密密麻麻的纯白房屋和蓝色圆顶被认为是世界上最浪漫的风景之一。日落时分，整个岛屿被染成金黄色，伊亚（Oia）的日落将给您带来一生难忘的感动。漫步在如迷宫般狭窄的小巷中，感受地中海的微风吧。",
            detail_swiss: "劳特布龙嫩是坐落在瑞士阿尔卑斯山深谷中的一个童话般的村庄。正如其名“轰鸣的瀑布”一样，72条瀑布从环绕整个村庄的巨大岩壁上倾泻而下。清新的空气、翠绿的草地以及被万年积雪覆盖的少女峰的壮丽身姿交相辉映，是体验完美阿尔卑斯宁静的最佳徒步旅行胜地。",
            detail_kyoto: "京都拥有千年历史，完整地保留了日本的历史与传统。每到春天，整个城市被淡粉色的樱花覆盖，与拥有数百年历史的木造寺庙和庭院交相辉映，构成如画般的风景。漫步在幽静的岚山竹林，或是矗立着数千座红色鸟居的伏见稻荷大社，感受日本特有的清雅之美与宁静吧。",
            detail_norway: "特罗姆瑟是位于北极圈中心的一座美丽的挪威城市，被称为“北极的巴黎”。在冬季漫长而漆黑的夜空中，色彩斑斓的极光（Aurora Borealis）令人惊叹不已。在白雪覆盖的峡湾和巨大的山脉之间乘坐狗拉雪橇，或在篝火前喝一杯热咖啡，欣赏大自然的奥秘。",
            detail_paris: "巴黎是法国的首都，也是一座充满艺术与浪漫气息的世界级城市。漫步塞纳河畔，映入眼帘的埃菲尔铁塔在日落和夜晚尤其迷人。在柔和的晚霞中，香榭丽舍大街的灯光一盏盏亮起，每到整点，埃菲尔铁塔都会上演闪烁的灯光秀。坐在露台咖啡馆里，品尝着可颂面包，享受巴黎人的惬意时光。",
            detail_borabora: "波拉波拉岛位于南太平洋法属波利尼西亚，是地球上最后的乐园。它被世界上最美丽的泻湖（Lagoon）环绕，清澈的翡翠色海水仿佛颜料化开一般。入住建在珊瑚礁上的顶级水上屋（Overwater Bungalow），观察在脚下游弋的黄貂鱼和鲨鱼，或者在阳光下度过一整天私密而完美的假期。"
        },
        ru: {
            nav_home: "Главная",
            nav_dest: "Места",
            nav_about: "О нас",
            hero_title: "Discover the<br>Extraordinary",
            hero_subtitle: "Делимся прекрасными моментами со всего мира.",
            cta_btn: "Исследовать",
            sec_title: "Breathtaking Places",
            sec_desc: "Места, где я был лично, и которые вы обязательно должны увидеть.",
            desc_santorini: "Фантастический пейзаж с белыми куполами и синим Эгейским морем на закате.",
            desc_swiss: "Сказочная деревня с великолепными водопадами, заснеженными горами и уютными домиками.",
            desc_kyoto: "Мечтательная весна, созданная порхающей сакурой и старинными храмами.",
            desc_norway: "Северное сияние, раскрашивающее ночное небо, и таинственный снежный пейзаж.",
            desc_paris: "Романтический закат над Эйфелевой башней, видимый с балкона в цветах.",
            desc_borabora: "Ослепительно прозрачные изумрудные воды и приватные бунгало на воде.",
            detail_santorini: "Санторини — красивый вулканический остров в Греции, расположенный в южной части Эгейского моря. Белые дома и синие купола, плотно стоящие на скалах, считаются одним из самых романтичных пейзажей в мире. На закате весь остров озаряется золотым светом, и закат в деревне Ия оставляет незабываемые впечатления. Прогуляйтесь по узким улочкам-лабиринтам и почувствуйте средиземноморский бриз.",
            detail_swiss: "Лаутербруннен — сказочная деревня, расположенная в глубокой долине Швейцарских Альп. Оправдывая свое название, которое означает «грохочущий водопад», 72 водопада низвергаются с массивных скал, окружающих деревню. Чистый воздух, зеленые луга и величественная заснеженная гора Юнгфрау сливаются воедино, создавая идеальное место для походов, где можно ощутить полное альпийское умиротворение.",
            detail_kyoto: "Киото — тысячелетняя столица, где оживают история и традиции Японии. Весной весь город покрывается нежно-розовой сакурой, которая гармонирует со старинными деревянными храмами и садами, создавая живописный пейзаж. Прогуляйтесь по тихой бамбуковой роще Арасияма или храму Фусими Инари с тысячами красных врат тории, чтобы почувствовать уникальную японскую утонченность и покой.",
            detail_norway: "Тромсё — красивый норвежский город, расположенный за Северным полярным кругом, который часто называют «Северным Парижем». Разноцветное северное сияние (Aurora Borealis), озаряющее долгое и темное зимнее небо, представляет собой настоящее чудо. Среди заснеженных фьордов и огромных горных хребтов вы можете прокатиться на собачьей упряжке или выпить горячего кофе у костра, любуясь тайнами природы.",
            detail_paris: "Париж — столица Франции и город мирового уровня, дышащий искусством и романтикой. Эйфелева башня, которую можно увидеть, гуляя вдоль Сены, особенно прекрасна на закате и ночью. Под мягким вечерним небом постепенно загораются огни Елисейских полей, а каждый час на Эйфелевой башне начинается сверкающее световое шоу. Присядьте на террасе кафе, попробуйте круассан и насладитесь неспешным отдыхом парижан.",
            detail_borabora: "Бора-Бора — это последний рай на земле, расположенный во Французской Полинезии в южной части Тихого океана. Остров окружен одной из самых красивых лагун в мире с ослепительно прозрачной изумрудной водой. Остановитесь в роскошном бунгало на воде, построенном над коралловым рифом, наблюдайте за скатами и акулами, плавающими прямо у вас под ногами, или наслаждайтесь идеальным, уединенным отдыхом под солнцем весь день."
        }
    };

    let currentLang = 'ko';
    const langSelect = document.getElementById('lang-select');

    langSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        
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
