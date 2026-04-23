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
            detail_borabora: "보라보라 섬은 남태평양 프랑스령 폴리네시아에 위치한 지상 최후의 낙원입니다. 세계에서 가장 아름다운 석호(Lagoon)로 덮여 있으며, 물감을 풀어놓은 듯한 투명한 에메랄드빛 바다가 펼쳐집니다. 산호초 위에 지어진 최고급 수상 가옥(Overwater Bungalow)에서 머물며 발아래로 헤엄치는 가오리와 상어들을 관찰하거나, 온종일 태양 아래서 프라이빗하고 완벽한 휴식을 취할 수 있습니다.",
            reco_title: "🗺️ 추천 스팟 & 맛집",
            reco_santorini: "📍 **추천 스팟:** 아무디 베이 (Ammoudi Bay) - 절벽 아래 위치한 평화로운 항구<br>🍽️ **추천 맛집:** Roka - 좁은 골목에 숨겨진 정통 그리스식 타베르나 (무사카 강력 추천!)",
            reco_swiss: "📍 **추천 스팟:** 슈타우프바흐 폭포 (Staubbach Falls) - 300m 높이에서 떨어지는 장관<br>🍽️ **추천 맛집:** Hotel Oberland Restaurant - 진한 치즈 퐁듀와 바삭한 뢰스티(Rösti)의 진수",
            reco_kyoto: "📍 **추천 스팟:** 기요미즈데라 (청수사) - 교토 시내가 한눈에 내려다보이는 목조 사원<br>🍽️ **추천 맛집:** 가츠쿠라 (Katsukura) - 겉바속촉의 정석을 보여주는 교토 전통 돈카츠",
            reco_norway: "📍 **추천 스팟:** 피엘하이센 케이블카 (Fjellheisen) - 야경과 오로라를 감상하는 최고의 전망대<br>🍽️ **추천 맛집:** Mathallen Tromso - 신선한 연어와 대구 등 북극해 해산물 요리의 끝판왕",
            reco_paris: "📍 **추천 스팟:** 루브르 박물관 (Louvre Museum) - 세계 최대의 미술관이자 유리 피라미드<br>🍽️ **추천 맛집:** 르 를레 드 랑트르코트 (Le Relais de l'Entrecôte) - 단일 메뉴로 승부하는 궁극의 스테이크 프릿츠",
            reco_borabora: "📍 **추천 스팟:** 오테마누 산 (Mount Otemanu) - 헬기 투어나 사파리로 즐기는 섬의 랜드마크<br>🍽️ **추천 맛집:** 블러디 메리스 (Bloody Mary's) - 수많은 할리우드 스타들이 방문한 모래바닥 해산물 레스토랑"
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
            detail_borabora: "Bora Bora is the ultimate paradise on earth, located in French Polynesia in the South Pacific. It is covered by one of the most beautiful lagoons in the world, with dazzlingly transparent emerald waters that look like painted watercolors. Stay in a luxurious overwater bungalow built over a coral reef, observe rays and sharks swimming right below your feet, or take a perfect, private rest under the sun all day long.",
            reco_title: "🗺️ Recommended Spots & Dining",
            reco_santorini: "📍 **Must Visit:** Ammoudi Bay - A peaceful port at the bottom of the red cliffs<br>🍽️ **Must Eat:** Roka - A hidden traditional Greek tavern (Highly recommend the Moussaka!)",
            reco_swiss: "📍 **Must Visit:** Staubbach Falls - A spectacular 300m high free-falling waterfall<br>🍽️ **Must Eat:** Hotel Oberland Restaurant - The essence of rich cheese fondue and crispy Rösti",
            reco_kyoto: "📍 **Must Visit:** Kiyomizu-dera - A historic wooden temple with panoramic views of Kyoto<br>🍽️ **Must Eat:** Katsukura - Kyoto's legendary tonkatsu (pork cutlet) with a perfect crunch",
            reco_norway: "📍 **Must Visit:** Fjellheisen Cable Car - The absolute best viewpoint for city lights and the Aurora<br>🍽️ **Must Eat:** Mathallen Tromso - The ultimate Arctic seafood experience featuring fresh salmon and cod",
            reco_paris: "📍 **Must Visit:** Louvre Museum - The world's largest art museum and the iconic glass pyramid<br>🍽️ **Must Eat:** Le Relais de l'Entrecôte - The ultimate steak frites experience with their legendary secret sauce",
            reco_borabora: "📍 **Must Visit:** Mount Otemanu - The island's majestic landmark, best seen via helicopter or boat tour<br>🍽️ **Must Eat:** Bloody Mary's - A famous sand-floored seafood restaurant visited by countless Hollywood stars"
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
            detail_borabora: "ボラボラ島は、南太平洋のフランス領ポリネシアに位置する地上最後の楽園です。世界で最も美しいラグーンに囲まれており、絵の具を溶かしたような透明なエメラルドグリーンの海が広がります。サンゴ礁の上に建てられた最高級の水上コテージ（Overwater Bungalow）に滞在し、足元を泳ぐエイやサメを観察したり、一日中太陽の下でプライベートで完璧な休息を取ることができます。",
            reco_title: "🗺️ おすすめスポット＆グルメ",
            reco_santorini: "📍 **おすすめスポット:** アムディ湾 (Ammoudi Bay) - 崖の下にある平和な港<br>🍽️ **おすすめグルメ:** Roka - 路地裏に隠れた伝統的なギリシャのタベルナ（ムサカが絶品！）",
            reco_swiss: "📍 **おすすめスポット:** シュタウプバッハの滝 (Staubbach Falls) - 高さ300mから流れ落ちる絶景<br>🍽️ **おすすめグルメ:** Hotel Oberland Restaurant - 濃厚なチーズフォンデュとサクサクのレシュティの神髄",
            reco_kyoto: "📍 **おすすめスポット:** 清水寺 - 京都市内を一望できる歴史ある木造寺院<br>🍽️ **おすすめグルメ:** かつくら - 外はサクサク、中はジューシーな京都伝統の絶品とんかつ",
            reco_norway: "📍 **おすすめスポット:** フィルハイセン・ケーブルカー (Fjellheisen) - 夜景とオーロラを鑑賞する最高の展望台<br>🍽️ **おすすめグルメ:** Mathallen Tromso - 新鮮なサーモンやタラなど、北極海のシーフード料理の最高峰",
            reco_paris: "📍 **おすすめスポット:** ルーヴル美術館 (Louvre Museum) - 世界最大の美術館とガラスのピラミッド<br>🍽️ **おすすめグルメ:** ル・ルレ・ドゥ・ラントレコート - 単一メニューで勝負する究極のステーキ＆フリット",
            reco_borabora: "📍 **おすすめスポット:** オテマヌ山 (Mount Otemanu) - ヘリコプターやボートツアーで楽しむ島のランドマーク<br>🍽️ **おすすめグルメ:** ブラッディ・マリーズ (Bloody Mary's) - 数多くのハリウッドスターが訪れた砂浜のシーフードレストラン"
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
            detail_borabora: "波拉波拉岛位于南太平洋法属波利尼西亚，是地球上最后的乐园。它被世界上最美丽的泻湖（Lagoon）环绕，清澈的翡翠色海水仿佛颜料化开一般。入住建在珊瑚礁上的顶级水上屋（Overwater Bungalow），观察在脚下游弋的黄貂鱼和鲨鱼，或者在阳光下度过一整天私密而完美的假期。",
            reco_title: "🗺️ 推荐景点与美食",
            reco_santorini: "📍 **推荐景点:** 阿穆迪湾 (Ammoudi Bay) - 位于悬崖下方的宁静港湾<br>🍽️ **推荐美食:** Roka - 隐藏在小巷中的传统希腊餐厅（强烈推荐木莎卡！）",
            reco_swiss: "📍 **推荐景点:** 施陶巴赫瀑布 (Staubbach Falls) - 从300米高处倾泻而下的壮观瀑布<br>🍽️ **推荐美食:** Hotel Oberland Restaurant - 浓郁奶酪火锅与香脆土豆饼的极致享受",
            reco_kyoto: "📍 **推荐景点:** 清水寺 - 可将京都市区尽收眼底的木造寺庙<br>🍽️ **推荐美食:** 名代炸猪排 (Katsukura) - 外酥里嫩的京都传统炸猪排",
            reco_norway: "📍 **推荐景点:** 费耶尔海森缆车 (Fjellheisen) - 观赏夜景和极光的最佳观景台<br>🍽️ **推荐美食:** Mathallen Tromso - 极致的北冰洋海鲜盛宴，包括新鲜三文鱼和鳕鱼",
            reco_paris: "📍 **推荐景点:** 卢浮宫 (Louvre Museum) - 世界最大的艺术博物馆和标志性玻璃金字塔<br>🍽️ **推荐美食:** Le Relais de l'Entrecôte - 仅凭一道招牌牛排配薯条征服食客的传奇餐厅",
            reco_borabora: "📍 **推荐景点:** 奥特马努山 (Mount Otemanu) - 乘坐直升机或游船欣赏的岛屿地标<br>🍽️ **推荐美食:** 血腥玛丽餐厅 (Bloody Mary's) - 众多好莱坞明星光顾的沙底海鲜餐厅"
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
            detail_borabora: "Бора-Бора — это последний рай на земле, расположенный во Французской Полинезии в южной части Тихого океана. Остров окружен одной из самых красивых лагун в мире с ослепительно прозрачной изумрудной водой. Остановитесь в роскошном бунгало на воде, построенном над коралловым рифом, наблюдайте за скатами и акулами, плавающими прямо у вас под ногами, или наслаждайтесь идеальным, уединенным отдыхом под солнцем весь день.",
            reco_title: "🗺️ Рекомендуемые места и рестораны",
            reco_santorini: "📍 **Место:** Залив Аммуди (Ammoudi Bay) - тихая гавань у подножия скал<br>🍽️ **Еда:** Roka - скрытая в переулках традиционная греческая таверна (обязательно попробуйте мусаку!)",
            reco_swiss: "📍 **Место:** Водопад Штауббах (Staubbach Falls) - захватывающий водопад высотой 300 метров<br>🍽️ **Еда:** Hotel Oberland Restaurant - суть насыщенного сырного фондю и хрустящего рёшти",
            reco_kyoto: "📍 **Место:** Киёмидзу-дэра - исторический деревянный храм с панорамным видом на Киото<br>🍽️ **Еда:** Katsukura - идеальный хрустящий традиционный киотский тонкацу",
            reco_norway: "📍 **Место:** Канатная дорога Фьеллхейсен (Fjellheisen) - лучшая смотровая площадка для огней города и Авроры<br>🍽️ **Еда:** Mathallen Tromso - вершина арктических морепродуктов со свежим лососем и треской",
            reco_paris: "📍 **Место:** Лувр (Louvre Museum) - крупнейший художественный музей мира и стеклянная пирамида<br>🍽️ **Еда:** Le Relais de l'Entrecôte - легендарный стейк с картофелем фри и секретным соусом",
            reco_borabora: "📍 **Место:** Гора Отеману (Mount Otemanu) - величественный ориентир острова для экскурсий<br>🍽️ **Еда:** Bloody Mary's - знаменитый ресторан морепродуктов с песчаным полом, который посещают звезды"
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
        const recoKey = `reco_${id}`;

        document.getElementById('modal-img').src = imgSrc;
        document.getElementById('modal-tag').innerText = tagText;
        document.getElementById('modal-title').innerText = titleText;
        document.getElementById('modal-desc').innerText = translations[currentLang][descKey] || card.querySelector('.card-desc').innerText;
        document.getElementById('modal-detail').innerHTML = translations[currentLang][detailKey] || '';
        
        const recoEl = document.getElementById('modal-reco');
        if (translations[currentLang][recoKey]) {
            recoEl.innerHTML = translations[currentLang][recoKey];
            recoEl.parentElement.style.display = 'block';
        } else {
            recoEl.parentElement.style.display = 'none';
        }
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
