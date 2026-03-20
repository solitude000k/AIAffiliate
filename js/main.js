/* ════════════════════════════════════
   釧路テーブル — main.js
════════════════════════════════════ */

const STORES = [
  /* ───── 釧路 ───── */
  {
    id:'k1', area:'釧路', genre:'居酒屋', hidden:true, badge:'hot', badgeText:'🔥 人気No.1',
    visual:'v-izakaya', emoji:'🔥',
    name:'炉端の番屋（ばんや）',
    desc:'釧路が誇る炉端焼きの聖地。炭火で丁寧に焼いた北海道産食材の旨みが凝縮。地元漁師が持ち込む新鮮な魚介と地酒「福司」の組み合わせが最高。',
    rating:'4.7', votes:'143', price:'¥3,000〜',
    lat:42.9837, lng:144.3877,
    article:'banya', large:true,
    hero_style:'background:radial-gradient(ellipse 80% 60% at 50% 80%,rgba(255,87,34,.5),transparent),radial-gradient(ellipse 40% 40% at 20% 30%,rgba(255,235,59,.2),transparent),linear-gradient(135deg,#0e1a1a,#1a0e05);',
    body:`
      <h2 id="about">炉端の番屋とは</h2>
      <p>釧路和商市場のほど近くに構える炉端焼き居酒屋「炉端の番屋」。釧路の炉端焼き文化は全国的にも有名で、その中でも特に地元民から愛される名店です。店主自ら仕入れる釧路港直送の魚介を炭火で豪快に焼き上げるスタイルが評判を呼んでいます。</p>
      <div class="info-box"><p>📍 釧路市栄町3丁目（和商市場近く）　営業時間：17:00〜23:00（LO 22:30）　定休日：月曜</p></div>
      <h2 id="review">実食レビュー</h2>
      <h3>炉端焼きの醍醐味</h3>
      <p>釧路産のホッケの炉端焼きは身がふっくらとして絶品。地元の日本酒「福司（ふくつかさ）」との相性が抜群で、ついつい杯が進みます。タコの刺身は新鮮そのもので、コリコリとした食感が忘れられません。</p>
      <div class="rating-row">
        <div class="rating-item"><div class="rating-num">4.7</div><div class="rating-label">総合評価</div></div>
        <div class="rating-item"><div class="rating-num">4.9</div><div class="rating-label">鮮度・素材</div></div>
        <div class="rating-item"><div class="rating-num">4.6</div><div class="rating-label">雰囲気</div></div>
        <div class="rating-item"><div class="rating-num">4.5</div><div class="rating-label">コスパ</div></div>
      </div>
      <h2 id="menu">おすすめメニュー</h2>
      <ul>
        <li><strong>ホッケ炉端焼き</strong> ¥1,200〜 — 身がふっくら、皮目がパリッと香ばしい</li>
        <li><strong>ホタテ貝焼き</strong> ¥1,400〜 — バター醤油で贅沢に</li>
        <li><strong>タコ刺身</strong> ¥900〜 — 当日水揚げの新鮮な一品</li>
        <li><strong>地酒「福司」</strong> ¥700〜/合 — 釧路唯一の地酒蔵</li>
      </ul>
      <h2 id="access">アクセス・予約</h2>
      <div class="info-box"><p>📍 釧路市栄町3丁目 ／ 要予約（直接電話にて）／ 駐車場：近隣コインPあり</p></div>
      <h2 id="tips">訪問のコツ</h2>
      <ul>
        <li>予約必須。当日飛び込みは断られることがほとんど</li>
        <li>旬の食材は「今日のおすすめ」を必ず聞くべし</li>
        <li>地元の日本酒「福司」は釧路限定のため必ず注文を</li>
      </ul>
    `,
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k2', area:'釧路', genre:'洋食', badge:'hot', badgeText:'🔥 元祖スパカツ',
    visual:'v-yoshoku', emoji:'🍝',
    name:'レストラン泉屋（いずみや）総本店',
    desc:'釧路ソウルフード「スパカツ」発祥の元祖。昭和34年創業。熱々の鉄板皿に盛られた濃厚ミートソーススパゲティ＋とんかつは一度食べたら忘れられない。',
    rating:null, votes:null, price:'¥980〜',
    lat:42.9827, lng:144.3868,
    name_en:'Restaurant Izumiya (Main)', name_zh:'泉屋總本店', genre_en:'Western', genre_zh:'西式料理', desc_en:'The original creator of Spa-katsu — Kushiro\'s soul food since 1959. Sizzling iron-plate spaghetti topped with crispy pork cutlet and rich meat sauce.', desc_zh:'1959年創業，釧路靈魂美食「鐵板肉排麵」的發源地。鐵板盛裝的義大利麵配上炸豬排與濃郁肉醬，熱騰騰送上桌。',
    img:'images/izumiya/01_spa_katsu.jpg', article:'izumiya', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 80% at 30% 60%,rgba(255,87,34,.65),transparent),radial-gradient(ellipse 50% 50% at 80% 30%,rgba(255,235,59,.3),transparent),linear-gradient(160deg,#1a0e05,#3d1a08);',
    body:`
      <h2 id="about">レストラン泉屋とは</h2>
      <p>北海道釧路市のソウルフード「スパカツ」を世に生み出した元祖。1960年（昭和35年）頃、当時は高価だった豚肉をカツにしてスパゲティに乗せ、寒い釧路でも最後まで熱々で食べられるよう鉄板皿で提供したのが始まりです。今では釧路を代表するご当地グルメとして全国から観光客が訪れます。</p>
      <div class="info-box"><p>📍 釧路市末広町2-28（幣舞橋から徒歩2〜3分）　TEL：0154-24-4611　営業時間：11:00〜21:00（10〜3月は〜20:30）　定休日：月1回火曜不定休</p></div>
      <h2 id="review">実食レビュー</h2>
      <h3>スパカツの正体</h3>
      <p>「ジュージュー！バチバチ！」と音を立てて運ばれてくる鉄板皿。その上にはたっぷりのミートソーススパゲティ、そしてとんかつが鎮座します。北海道産牛豚ひき肉の旨みと玉ねぎの甘みが溶け込んだ濃厚ミートソースは、最後まで熱々のまま楽しめます。デュラムセモリナ粉100%の太麺（1.9mm）がソースをしっかり纏い、食べ応え十分のボリューム感。</p>
      <div class="rating-row">
        <div class="rating-item" style="grid-column:1/-1;text-align:center;opacity:.5;font-size:.75rem;color:var(--gray-lt)">評価は調査中です</div>
      </div>
      <h2 id="menu">おすすめメニュー</h2>
      <ul>
        <li><strong>スパカツ</strong> ¥980〜（税込）— 看板メニュー、大盛り・特大盛りも対応</li>
        <li><strong>泉屋風スパゲティ</strong> ¥777〜 — 塩ベースでヘルシーな人気作</li>
        <li><strong>ナポリタン</strong> ¥900〜 — 懐かしの昭和洋食スタイル</li>
        <li><strong>ピカタ</strong> ¥950〜 — 豚肉の卵衣焼き、隠れた名品</li>
      </ul>
      <h2 id="access">アクセス・混雑情報</h2>
      <div class="info-box"><p>📍 釧路市末広町2-28 ／ JR釧路駅から徒歩約15分 ／ 幣舞橋から徒歩2〜3分 ／ 駐車場：近隣コインPあり</p></div>
      <h2 id="tips">訪問のコツ</h2>
      <ul>
        <li>平日ランチ時は地元の方が多く、週末は観光客が増加</li>
        <li>「フォークは止めるな」— 鉄板が冷めると麺が固まるので勢いよく食べること</li>
        <li>大盛りにすると満腹感が高すぎるので初回は普通盛りが吉</li>
        <li>1階ビルの地下にも「イタリアンポロネ」という別業態あり</li>
      </ul>
    `,
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k3', area:'釧路', genre:'ラーメン', badge:'hot', badgeText:'🏆 百名店',
    visual:'v-ramen', emoji:'🍜',
    name:'ラーメン まるひら',
    desc:'食べログ ラーメン HOKKAIDO 百名店2025選出。創業60年超の釧路ラーメンの聖地。カツオ出汁ベースのあっさり醤油スープに細縮れ麺の組み合わせが唯一無二。',
    rating:null, votes:null, price:'¥800〜',
    lat:42.9742, lng:144.3766,
    name_en:'Ramen Maruhira', name_zh:'丸平拉麵', genre_en:'Ramen', genre_zh:'拉麵', desc_en:'Tabelog Top 100 Winner for two consecutive years. Since the 1960s, this institution serves only two flavors — shoyu and shio — with delicate bonito-based broth and ultra-thin curly noodles.', desc_zh:'Tabelog百名店連續兩年入選。1960年代創業以來只提供醬油和鹽味兩種口味，以鰹魚高湯為底的清澈湯頭與細捲麵堪稱絕配。',
    img:'images/maruhira/01_ramen.jpg', article:'maruhira', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 80% at 30% 60%,rgba(255,87,34,.55),transparent),radial-gradient(ellipse 50% 50% at 80% 30%,rgba(255,235,59,.25),transparent),linear-gradient(160deg,#0a0500,#2a0e00);',
    body:`
      <h2 id="about">ラーメンまるひらとは</h2>
      <p>釧路市浦見に店を構える「ラーメンまるひら」は、創業60年以上を誇る釧路ラーメンの代名詞的存在。食べログ ラーメン HOKKAIDO 百名店2024・2025に連続選出されており、全国のラーメンファンが釧路に足を運ぶきっかけにもなっている名店です。2025年3月には札幌にも暖簾分け店がオープンし、即行列の人気を博しています。</p>
      <div class="info-box"><p>📍 釧路市浦見8-1-13　TEL：0154-41-7233　営業時間：9:30〜14:00（売切終了）　定休日：水・木曜（第2・第4木曜）</p></div>
      <h2 id="review">実食レビュー</h2>
      <h3>釧路ラーメンとは何か</h3>
      <p>「釧路ラーメン」の最大の特徴は、かつお節を主体とした魚介出汁ベースのあっさり醤油スープと、卵を使わない極細の縮れ麺です。札幌のこってりラーメンとは真逆の哲学—「漁師に素早く、さっぱりと」という釧路人の気質が生んだ一杯です。まるひらのスープは透き通るような清湯で、口に含んだ瞬間にカツオの風味がふわっと広がります。</p>
      <div class="rating-row">
        <div class="rating-item" style="grid-column:1/-1;text-align:center;opacity:.5;font-size:.75rem;color:var(--gray-lt)">評価は調査中です</div>
      </div>
      <h2 id="menu">メニュー</h2>
      <ul>
        <li><strong>醤油ラーメン</strong> ¥800 — 王道のあっさり釧路ラーメン</li>
        <li><strong>塩ラーメン</strong> ¥800 — より繊細なカツオ風味が前面に</li>
        <li><strong>ミックス（裏メニュー）</strong> — 醤油×塩のブレンド、常連に人気</li>
        <li><strong>大盛・特大</strong> — 追加料金で対応（量が多いため注意）</li>
      </ul>
      <h2 id="access">アクセス・混雑情報</h2>
      <div class="info-box"><p>📍 釧路市浦見8-1-13 ／ JR新富士駅から車約6分 ／ 駐車場：店前＋向かいに計20台分あり</p></div>
      <h2 id="tips">訪問のコツ</h2>
      <ul>
        <li>朝9:30開店から並びが出る人気店。開店直後か13時以降が比較的空いている</li>
        <li>メニューは潔くラーメンのみ（ビールとトッピングを除く）なので回転が早い</li>
        <li>スープが売り切れ次第終了なので、遅い時間の来店は要確認</li>
        <li>初訪問は「醤油の普通盛り」一択で釧路ラーメンの本質を体感</li>
      </ul>
    `,
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k4', area:'釧路', genre:'そば', badge:'', badgeText:'',
    visual:'v-soba', emoji:'🍵',
    name:'竹老園 東家総本店（ちくろうえん）',
    desc:'明治7年（1874年）創業、北海道最古の蕎麦店のひとつ。クロレラを練り込んだ緑色の「藪そば」と天皇も食したという「蘭切りそば」が有名。春採湖畔の静寂な佇まいで味わう格別の一杯。',
    rating:'4.2', rating_src:'google', votes:'1,247', price:'¥1,200〜',
    lat:42.9721, lng:144.3919,
    name_en:'Chikurouen Azumaya (Main)', name_zh:'竹老園東家總本店', genre_en:'Soba', genre_zh:'蕎麥麵', desc_en:'One of Hokkaido\'s oldest soba restaurants, founded in 1874. Nestled beside Lake Harutori, it serves the signature "Rankirisoba" — green noodles made with chlorella — alongside soba sushi.', desc_zh:'1874年創業，北海道最古老的蕎麥麵店之一。位於春採湖畔，提供以綠藻製成的「蘭切蕎麥麵」及蕎麥壽司等招牌料理。',
    img:'images/chikurouen/01_soba.jpg', article:'chikurouen', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 80% at 60% 50%,rgba(34,139,34,.45),transparent),radial-gradient(ellipse 50% 50% at 20% 80%,rgba(255,235,59,.2),transparent),linear-gradient(135deg,#051a05,#0e2a0e);',
    body:`
      <h2 id="about">竹老園 東家総本店とは</h2>
      <p>1874年（明治7年）小樽にて創業し、のちに釧路へと根を下ろした「竹老園 東家総本店」。150年以上の歴史を刻む北海道最古の蕎麦店のひとつです。春採湖と千代ノ浦海岸を望む落ち着いた場所に店を構え、皇族・著名人をはじめ多くの美食家が訪れてきた格式ある名店です。</p>
      <div class="info-box"><p>📍 釧路市柏木町3-19（春採湖畔）　TEL：0154-41-6291　営業時間：11:00〜16:00（LO 15:30）　定休日：火曜</p></div>
      <h2 id="review">実食レビュー</h2>
      <h3>緑色の蕎麦という驚き</h3>
      <p>東家の蕎麦はまず見た目で驚かせます。更科粉にクロレラを加えた「藪そば」は美しい緑色をしており、「通年新そばのような緑を楽しんでほしい」という初代の想いが込められています。喉越し良くすっと体に入るのどかな一杯です。卵黄をつなぎに用いた「蘭切りそば」は昭和天皇がおかわりを所望したという逸話で知られる名品で、噛めば噛むほど口の中に甘みが広がります。</p>
      <div class="rating-row">
        <div class="rating-item"><div class="rating-num">4.2</div><div class="rating-label">Googleマップ</div></div>
        <div class="rating-item"><div class="rating-num">1,247</div><div class="rating-label">口コミ件数</div></div>
        <div class="rating-item"><div class="rating-num" style="font-size:.7rem;color:var(--gray-lt)">Google</div><div class="rating-label">出典</div></div>
      </div>
      <h2 id="menu">おすすめメニュー</h2>
      <ul>
        <li><strong>特製品コース</strong> ¥2,780 — かしわ抜き・蘭切りそば・茶そば・そば寿司の4品</li>
        <li><strong>蘭切りそば（単品）</strong> — 卵黄のつなぎで黄金色に輝く名品</li>
        <li><strong>そば寿司</strong> — そばをご飯に見立て酢でしめた釧路独自の一品</li>
        <li><strong>かしわ抜き</strong> — かしわそばからそばを引いたスープ。酒のつまみに最高</li>
        <li><strong>茶そば</strong> — 抹茶を加えた上品な風味のそば</li>
      </ul>
      <h2 id="access">アクセス</h2>
      <div class="info-box"><p>📍 釧路市柏木町3-19 ／ JR釧路駅から車約10分 ／ 駐車場：50台（無料）</p></div>
      <h2 id="tips">訪問のコツ</h2>
      <ul>
        <li>昼食時は地元の方で賑わうため、12時台は混雑</li>
        <li>座敷席（個室10室あり）は事前予約がベター</li>
        <li>「特製品コース」が東家の魅力を一度に堪能できる最良の選択</li>
        <li>そば寿司はお土産用の持ち帰りも可能</li>
      </ul>
    `,
    aff_main:'hotpepper', aff_sub:'ikyu'
  },
  /* ───── 他エリア（非表示） ───── */
  { id:'s1', area:'札幌', genre:'ラーメン', hidden:true, badge:'', badgeText:'', visual:'v-ramen', emoji:'🍜', name:'麺屋 彩未', desc:'', rating:'4.8', votes:'312', price:'¥900〜', lat:43.07, lng:141.35, article:'saibi', large:false, hero_style:'', body:'' },
  { id:'s2', area:'函館', genre:'海鮮', hidden:true, badge:'', badgeText:'', visual:'v-sushi', emoji:'🦀', name:'きくよ食堂', desc:'', rating:'4.6', votes:'198', price:'¥2,500〜', lat:41.77, lng:140.73, article:'kikuyo', large:false, hero_style:'', body:'' },
  { id:'s3', area:'札幌', genre:'カフェ', hidden:true, badge:'', badgeText:'', visual:'v-cafe', emoji:'☕', name:'珈琲専科 森彦', desc:'', rating:'4.5', votes:'287', price:'¥700〜', lat:43.05, lng:141.32, article:'morihiko', large:false, hero_style:'', body:'' },
  { id:'s5', area:'旭川', genre:'ラーメン', hidden:true, badge:'', badgeText:'', visual:'v-ramen', emoji:'🍜', name:'蜂屋五条創業店', desc:'', rating:'4.6', votes:'223', price:'¥850〜', lat:43.77, lng:142.36, article:'hachiya', large:false, hero_style:'', body:'' },
  { id:'s6', area:'帯広', genre:'スイーツ', hidden:true, badge:'', badgeText:'', visual:'v-sweets', emoji:'🧁', name:'六花亭 帯広本店', desc:'', rating:'4.7', votes:'412', price:'¥400〜', lat:42.92, lng:143.20, article:'rokkatei', large:false, hero_style:'', body:'' },
  { id:'s7', area:'小樽', genre:'居酒屋', hidden:true, badge:'', badgeText:'', visual:'v-izakaya', emoji:'🍶', name:'小樽バイン', desc:'', rating:'4.4', votes:'167', price:'¥3,500〜', lat:43.19, lng:140.99, article:'otaruvine', large:false, hero_style:'', body:'' },
  { id:'s8', area:'札幌', genre:'焼肉', hidden:true, badge:'', badgeText:'', visual:'v-yakiniku', emoji:'🥩', name:'ジンギスカン だるま', desc:'', rating:'4.5', votes:'389', price:'¥2,500〜', lat:43.05, lng:141.35, article:'daruma', large:false, hero_style:'', body:'' },
  /* ─────────────── 追加店舗10件 ─────────────── */
  {
    id:'k5', area:'釧路', genre:'ザンギ', badge:'hot', badgeText:'🔴 元祖ザンギ',
    visual:'v-zangi', emoji:'🍗',
    name:'鳥松（とりまつ）',
    desc:'昭和30年代に釧路で生まれた北海道名物「ザンギ」の発祥店。骨付き鶏肉をブツ切りにして揚げ、秘伝のウスターソースダレで食べる元祖の味は60年以上変わらない。',
    rating:null, votes:null, price:'¥1,000〜',
    lat:42.9837955, lng:144.3878089,
    name_en:'Torimatsu', name_zh:'鳥松', genre_en:'Zangi', genre_zh:'炸雞（Zangi）', desc_en:'The birthplace of Zangi — Hokkaido\'s iconic bone-in fried chicken. Since the 1950s, the secret marinade and crispy batter have made this late-night legend a must-visit.', desc_zh:'北海道名物「Zangi炸雞」的發源店。1950年代起以祕製醃醬炸製的帶骨雞肉深受愛戴，是深夜必訪的傳奇老店。',
    img:'images/torimatsu/01_zangi.jpg', article:'torimatsu', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 80% at 30% 70%,rgba(255,87,34,.6),transparent),linear-gradient(160deg,#1a0500,#2a0800);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k6', area:'釧路', genre:'炉端焼き', badge:'', badgeText:'',
    visual:'v-robata', emoji:'🔥',
    name:'炉ばた',
    desc:'1951年創業、炉端焼き発祥の聖地。釧路産の炭を使いコの字カウンターの中央でおばちゃんが焼く昔ながらのスタイル。2023年に火災から復活した奇跡の老舗。',
    rating:'3.56', rating_src:'tabelog', votes:'', price:'¥4,000〜',
    lat:42.9837224, lng:144.3876844,
    name_en:'Robata (Original)', name_zh:'炉ばた（爐端燒發源店）', genre_en:'Robatayaki', genre_zh:'爐端燒', desc_en:'The restaurant that started Japan\'s robatayaki culture, open since 1951. The lady chef grills fresh Kushiro seafood over charcoal at the center of a U-shaped counter. Revived in 2023 after a fire.', desc_zh:'1951年創業，孕育日本爐端燒文化的發源地。大媽在U型吧台中央用炭火烤製道東新鮮海鮮。2023年火災後成功復活。',
    img:'images/robata/01_main.jpg', article:'robata', large:false,
    hero_style:'background:radial-gradient(ellipse 60% 80% at 50% 90%,rgba(255,120,20,.55),transparent),linear-gradient(160deg,#0e0e05,#1a1000);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k7', area:'釧路', genre:'海鮮', badge:'hot', badgeText:'🦀 北海道三大市場',
    visual:'v-kaisen', emoji:'🐟',
    name:'釧路和商市場（勝手丼）',
    desc:'1954年創業、北海道三大市場のひとつ。約50店舗が並ぶ市場内で自分だけの海鮮丼「勝手丼」を作れる。春はトキシラズ、夏はイカ、秋はサンマ——旬の一杯を。',
    rating:null, votes:null, price:'¥1,200〜',
    lat:42.9892463, lng:144.3799285,
    name_en:'Kushiro Washo Market', name_zh:'釧路和商市場（勝手丼）', genre_en:'Seafood', genre_zh:'海鮮・市場', desc_en:'One of Hokkaido\'s three great markets since 1954. Pick your own fresh seafood toppings from 50+ stalls and build your personal "kattedon" rice bowl.', desc_zh:'1954年創業，北海道三大市場之一。在50多家攤位中自選新鮮海鮮配料，打造專屬「勝手丼」海鮮丼。',
    img:'images/washo/01_kattedon.jpg', article:'washo', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 80% at 50% 80%,rgba(26,107,90,.6),transparent),linear-gradient(160deg,#001a12,#002a1a);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k8', area:'釧路', genre:'ラーメン', badge:'', badgeText:'',
    visual:'v-ramen2', emoji:'🍜',
    name:'釧路ラーメン 河むら',
    desc:'ミシュランガイド北海道2017掲載。1989年創業、釧路ラーメン本流を継ぐ一軒。鶏ガラ×魚介の澄んだ醤油スープと、かん水不使用の極細縮れ麺が奏でる完璧なハーモニー。',
    rating:'', rating_src:'tabelog', votes:'481', price:'¥800〜',
    lat:42.9843192, lng:144.3863942,
    name_en:'Kushiro Ramen Kawamura', name_zh:'釧路拉麵 河村', genre_en:'Ramen', genre_zh:'拉麵', desc_en:'Listed in the Michelin Guide Hokkaido 2017. Since 1989, this spot carries on the pure Kushiro ramen tradition with a clear chicken-and-seafood broth and ultra-thin noodles.', desc_zh:'米其林指南北海道2017收錄。1989年創業，以清澈的雞骨×海鮮高湯和細麵繼承釧路拉麵正宗風味。',
    img:'images/kawamura/01_ramen.jpg', article:'kawamura', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 80% at 30% 60%,rgba(255,87,34,.4),transparent),linear-gradient(160deg,#0a0500,#1a0800);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k9', area:'釧路', genre:'炉端焼き', badge:'', badgeText:'',
    visual:'v-robata2', emoji:'🍶',
    name:'炉ばた居酒屋 はたご家',
    desc:'180席の釧路最大規模の炉端居酒屋。釧路名物ザンギ、備長炭で炙った地場の魚、創作おでん……豊富なメニューで宴会にも一人飲みにも対応。',
    rating:'3.35', rating_src:'tabelog', votes:'', price:'¥3,000〜',
    lat:42.9840430, lng:144.3882965,
    name_en:'Hatagoya Robata Izakaya', name_zh:'爐端居酒屋 旅籠家', genre_en:'Robatayaki', genre_zh:'爐端燒・居酒屋', desc_en:'Kushiro\'s largest robatayaki izakaya with 180 seats. A huge menu covers local zangi, charcoal-grilled fish, and creative oden — perfect for solo diners and big groups alike.', desc_zh:'180席的釧路最大爐端居酒屋。菜單豐富多樣，涵蓋在地Zangi炸雞、備長炭炙烤鮮魚、創意關東煮，適合一人或團體用餐。',
    img:'images/hatagoya/01_food.jpg', article:'hatagoya', large:false,
    hero_style:'background:radial-gradient(ellipse 60% 70% at 40% 80%,rgba(255,100,30,.5),transparent),linear-gradient(160deg,#0e0800,#1a1000);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k10', area:'釧路', genre:'炉端焼き', badge:'', badgeText:'',
    visual:'v-robata3', emoji:'🌿',
    name:'炉ばた釧路しつげん',
    desc:'釧路湿原を連想させる名を持つ情緒豊かな炉端居酒屋。塩ダレで味わう「七輪塩ホルモン」と「いさだの塩辛」が名物。地元常連が集う落ち着いた隠れ家的一軒。',
    rating:'3.04', rating_src:'tabelog', votes:'6', price:'¥2,500〜',
    lat:42.9840483, lng:144.3873731,
    name_en:'Robata Kushiro Shitsugen', name_zh:'爐端釧路溼原', genre_en:'Robatayaki', genre_zh:'爐端燒', desc_en:'Named after the Kushiro Wetlands, this atmospheric robata bar is beloved for its salt-seasoned horumon grilled on a shichirin and rare "isada no shiokara" fermented krill.', desc_zh:'以釧路溼原命名的情調爐端酒吧。以七輪炭火烤製的鹽味內臟料理和罕見的「沙丁蝦醃辛子」聞名。',
    img:'images/shitsugen/01_appetizers.jpg', article:'shitsugen', large:false,
    hero_style:'background:radial-gradient(ellipse 60% 70% at 40% 80%,rgba(26,107,90,.5),transparent),linear-gradient(160deg,#001a10,#002015);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k11', area:'釧路', genre:'創作料理', badge:'', badgeText:'',
    visual:'v-sousaku', emoji:'⭐',
    name:'BISTRO TAKKE（タッケ）',
    desc:'釧路繁華街の全20席の小さな宝石。「星空の黒牛」や十勝産野菜など道東食材を使った創作料理を高級レストランのクオリティでリーズナブルに。',
    rating:null, votes:null, price:'¥4,000〜',
    lat:42.9844442, lng:144.3850060,
    name_en:'Bistro Takke', name_zh:'BISTRO TAKKE', genre_en:'Creative Cuisine', genre_zh:'創意料理', desc_en:'A 20-seat jewel in the Kushiro entertainment district, serving creative dishes made from eastern Hokkaido ingredients like "Starry Sky Black Beef" and Tokachi vegetables.', desc_zh:'釧路繁華街的20席精緻餐廳，以「星空黑牛」和十勝產蔬菜等道東食材入饌的創意料理著稱。',
    img:'images/takke/01_dish.jpg', article:'takke', large:false,
    hero_style:'background:radial-gradient(ellipse 60% 70% at 50% 80%,rgba(255,179,0,.4),transparent),linear-gradient(160deg,#0d0d05,#1a1500);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k12', area:'釧路', genre:'炉端焼き', badge:'hot', badgeText:'🌊 漁師直送',
    visual:'v-robata4', emoji:'🦞',
    name:'港釧路の炉端焼 虎や',
    desc:'使用する海鮮はすべて道東産。全室個室の掘りごたつスタイルで釧路名物ザンギや備長炭で炙った地場の魚介をゆっくり堪能。厚岸ウイスキーが飲める数少ない名店。',
    rating:'3.44', rating_src:'tabelog', votes:'', price:'¥3,500〜',
    lat:42.9826160, lng:144.3865820,
    name_en:'Toraya Robatayaki', name_zh:'港釧路炉端焼 虎や', genre_en:'Robatayaki', genre_zh:'爐端燒', desc_en:'All seafood sourced from eastern Hokkaido, served in fully private sunken-floor rooms. One of the few places to enjoy Akkeshi whisky alongside charcoal-grilled local fish.', desc_zh:'海鮮全部來自道東。全室包廂掘炕風格，是少數能一邊享用厚岸威士忌一邊品嚐備長炭炙烤鮮魚的名店。',
    img:'images/toraya/01_grilled.jpg', article:'toraya', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 80% at 40% 90%,rgba(255,87,34,.5),transparent),linear-gradient(160deg,#050a0e,#0a1510);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k13', area:'釧路', genre:'洋食', badge:'', badgeText:'',
    visual:'v-yoshoku2', emoji:'🍳',
    name:'レストラン ドリーム',
    desc:'釧路市芦野の住宅地に佇む家庭的な洋食店。スパカツ・ハンバーグ・カレーなど昔ながらの洋食が充実。地元ファミリーが日常的に通う釧路のリアルなソウルフードの一軒。',
    rating:null, votes:null, price:'¥900〜',
    lat:43.0122336, lng:144.3928217,
    name_en:'Restaurant Dream', name_zh:'夢幻西餐廳', genre_en:'Western', genre_zh:'西式料理', desc_en:'A cozy neighborhood western diner in the Ashinoshita residential area of Kushiro, beloved by local families for hearty spa-katsu, hamburger steak, and classic curry.', desc_zh:'位於釧路蘆野住宅區的家庭式西餐廳。鐵板肉排麵、漢堡排、咖喱等家常洋食深受在地家庭喜愛。',
    img:'images/dream/01_spakatsu.jpg', article:'dream', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 80% at 30% 60%,rgba(255,87,34,.5),transparent),linear-gradient(160deg,#1a0e05,#2a1005);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k14', area:'釧路', genre:'さんまんま', badge:'hot', badgeText:'🐟 釧路新名物',
    visual:'v-sanma', emoji:'🌀',
    name:'さんまんま 魚政（さかなまさ）',
    desc:'秋刀魚を丸ごと炊き込みご飯に巻いた釧路の新名物「さんまんま」の人気店。釧路フィッシャーマンズワーフMOO内でアクセス抜群。焼きたての熱々を頬張れる食べ歩きグルメ。',
    rating:null, votes:null, price:'¥600〜',
    lat:42.9816600, lng:144.3834367,
    name_en:'Sakanamasa (Sanma-mamma)', name_zh:'魚政（秋刀魚飯卷）', genre_en:'Sanma-mamma', genre_zh:'秋刀魚飯卷', desc_en:'The go-to spot for sanma-mamma — whole Pacific saury marinated in a secret sauce, wrapped with seasoned rice and grilled over charcoal. A new Kushiro specialty worth the trip.', desc_zh:'以整條秋刀魚以祕製醬料醃漬後與炊飯卷起炭火炙烤的「秋刀魚飯卷」聞名，是釧路新名物的代表店家。',
    img:'images/sakanamasa/01_sanmanma.jpg', article:'sakanamasa', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 80% at 50% 80%,rgba(26,107,90,.55),transparent),linear-gradient(160deg,#001a12,#001510);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
,
  {
    id:'k15', area:'釧路', genre:'炉端焼き', badge:'hot', badgeText:'🦀 備長炭炙り',
    visual:'v-izakaya', emoji:'🦀',
    name:'くし炉 あぶり家（あぶりや）',
    desc:'備長炭の炎で炙る道東の魚介が絶品。釧路駅から徒歩10分、末広町5丁目の人気炉端居酒屋。花咲蟹・毛蟹・ししゃも・厚岸牡蠣など道東の逸品が揃い、地元・観光客ともに支持。年中無休16:30〜。',
    rating:null, votes:null, price:'¥4,000〜',
    lat:42.9796, lng:144.3850,
    img:'images/aburiya/01_scallops.jpg', article:'aburiya', large:false,
    hero_style:'background:radial-gradient(ellipse 80% 80% at 30% 110%,rgba(232,66,10,.85),transparent),radial-gradient(ellipse 50% 40% at 90% 15%,rgba(155,28,28,.45),transparent),linear-gradient(160deg,#0A0402,#1E0A04);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k16', area:'釧路', genre:'炉端焼き', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🧱',
    name:'炉ばた煉瓦（れんが）',
    desc:'明治末期の赤レンガ倉庫を改装したレトロな空間で楽しむ本格炉端焼き。テーブル備え付けの炉で釧路産さんまや野付産ホタテを自分で焼くスタイルが好評。幣舞橋そばで錦町3丁目に位置。',
    rating:null, votes:null, price:'¥3,000〜',
    lat:42.9825298, lng:144.3826731,
    img:'images/renga/01_grilled.jpg', article:'renga', large:false,
    hero_style:'background:radial-gradient(ellipse 80% 80% at 30% 110%,rgba(210,80,10,.8),transparent),radial-gradient(ellipse 50% 40% at 85% 20%,rgba(155,28,28,.35),transparent),linear-gradient(160deg,#0A0402,#200A04);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k17', area:'釧路', genre:'海鮮', badge:'hot', badgeText:'🐟 TV出演・朝から炉端',
    visual:'v-sushi', emoji:'🐟',
    name:'喰い処 鮭番屋（さけばんや）',
    desc:'水産工場直営の圧倒的鮮度。バナナマンせっかくグルメでも紹介された炉端焼き・いくら丼の名店。浜町西港そばに立地し朝7:30から営業。旅の朝食に行列ができる釧路の名所。水曜定休。',
    rating:null, votes:null, price:'¥2,000〜',
    lat:42.9960731, lng:144.3623301,
    img:'images/sakebanya/01_uni_bowl.jpg', article:'sakebanya', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 70% at 60% 110%,rgba(180,60,20,.7),transparent),radial-gradient(ellipse 50% 40% at 20% 30%,rgba(224,144,16,.25),transparent),linear-gradient(160deg,#0C0602,#1A0A06);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k18', area:'釧路', genre:'炉端焼き', badge:'hot', badgeText:'🌅 夏季限定・夕日絶景',
    visual:'v-izakaya', emoji:'🌅',
    name:'岸壁炉ばた（MOO）',
    desc:'世界三大夕日を眺めながら幣舞橋そばの岸壁で炭火BBQ。5月中旬〜10月末限定の夏の風物詩。釧路港直送の魚介を自分で豪快に焼くセルフスタイル。毎年3万人が訪れる釧路夏の名物。17:00〜21:00。',
    rating:null, votes:null, price:'¥2,000〜',
    lat:42.9817626, lng:144.3833396,
    img:'images/kishikabe/01_grilled.jpg', article:'kishikabe', large:false,
    hero_style:'background:radial-gradient(ellipse 80% 80% at 30% 110%,rgba(232,120,10,.8),transparent),radial-gradient(ellipse 60% 40% at 85% 20%,rgba(224,144,16,.4),transparent),linear-gradient(160deg,#0A0402,#1C0A02);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k19', area:'釧路', genre:'洋食', badge:'', badgeText:'',
    visual:'v-yoshoku', emoji:'🍝',
    name:'スパゲティーハウス ピレネ',
    desc:'スパカツ発祥の地・釧路でもう一軒の名店。タマネギの甘みとトマトの酸味のミートソースにカツレツを乗せたSNS話題の一品。共栄大通2丁目、カウンター6席の小さな名店。釧路駅から徒歩5分。',
    rating:null, votes:null, price:'¥1,200〜',
    lat:42.9937258, lng:144.3811917,
    img:'images/pirene/01_pasta.jpg', article:'pirene', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 90% at 60% 110%,rgba(232,66,10,.75),transparent),radial-gradient(ellipse 50% 40% at 10% 20%,rgba(224,144,16,.3),transparent),linear-gradient(160deg,#120606,#2A0C04);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k20', area:'釧路', genre:'炉端焼き', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🎏',
    name:'さかまる（炉ばた）',
    desc:'「地物をとことん味わう」をコンセプトに平成13年創業。釧路栄町4丁目に構える炉端焼き・串焼き店。名物のおでん・ザンギ・釧路産魚介の炭火焼きが地元客・観光客に支持。個室完備で予約推奨。',
    rating:null, votes:null, price:'¥4,000〜',
    lat:42.9840, lng:144.3875,
    img:'images/sakamaru/01_grilled.jpg', article:'sakamaru', large:false,
    hero_style:'background:radial-gradient(ellipse 80% 80% at 30% 110%,rgba(210,80,10,.75),transparent),radial-gradient(ellipse 50% 40% at 85% 15%,rgba(155,28,28,.35),transparent),linear-gradient(160deg,#0A0402,#1E0A04);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k21', area:'釧路', genre:'ラーメン', badge:'hot', badgeText:'🍖 東京修業・本格つけ麺',
    visual:'v-ramen', emoji:'🍖',
    name:'麺屋 武双（むそう）',
    desc:'東京の名門「麺屋武蔵」修業の店主が釧路・芦野5丁目に凱旋。鶏豚魚介のトリプルスープに太麺が絡む本格つけ麺は釧路随一の濃厚派。エゾシカ担々麺など釧路らしいジビエアレンジも必食。',
    rating:null, votes:null, price:'¥900〜',
    lat:43.0146933, lng:144.3899701,
    img:'images/musou/01_ramen.jpg', article:'musou', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 80% at 40% 110%,rgba(210,90,0,.8),transparent),radial-gradient(ellipse 50% 50% at 90% 30%,rgba(180,40,0,.4),transparent),linear-gradient(160deg,#0C0602,#1A0C04);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k22', area:'釧路', genre:'ラーメン', badge:'hot', badgeText:'🐟 魚醤ラーメン百名店',
    visual:'v-ramen', emoji:'🦪',
    name:'らーめん工房 魚一（うおっち）',
    desc:'サンマ×ニシンの自家製魚醤を使った唯一無二のスープが評判。牡蠣ラーメンは釧路産殻付き牡蠣がたっぷり！釧路丹頂市場（幸町13）内の人気店で食べログ百名店選出歴あり。朝8時から営業。',
    rating:null, votes:null, price:'¥990〜',
    lat:42.9887045, lng:144.3793,
    img:'images/uocchi/01_ramen.jpg', article:'uocchi', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 80% at 40% 110%,rgba(200,80,0,.8),transparent),radial-gradient(ellipse 50% 50% at 90% 30%,rgba(170,30,0,.4),transparent),linear-gradient(160deg,#0C0602,#1A0C04);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k23', area:'釧路', genre:'豚丼', badge:'hot', badgeText:'🐷 釧路の豚丼',
    visual:'v-yoshoku', emoji:'🐷',
    name:'ぶた福',
    desc:'帯広が本場の豚丼を釧路で食べるならここ。大楽毛の炭火焼き豚丼の名店。バラ・ロースの選べるミックスが人気で、香ばしい炭火の薫りと甘辛タレが食欲を全開にさせる。空港から近く駐車場完備。',
    rating:null, votes:null, price:'¥960〜',
    lat:43.0132611, lng:144.265096,
    img:'images/butafuku/01_butadon.jpg', article:'butafuku', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 90% at 60% 110%,rgba(224,80,10,.75),transparent),radial-gradient(ellipse 50% 40% at 10% 20%,rgba(200,120,16,.25),transparent),linear-gradient(160deg,#120606,#2A0C04);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k24', area:'釧路', genre:'ジンギスカン', badge:'hot', badgeText:'🐑 道東ラムジンギスカン',
    visual:'v-izakaya', emoji:'🐑',
    name:'釧路霧のビール園（MOO 3F）',
    desc:'幣舞橋のたもと・フィッシャーマンズワーフMOO3階の解放感抜群のビアガーデン。道東産生ラムのジンギスカンに釧路地ビールが最高。夕日が窓一面に広がる至極の時間。錦町2-4 MOO 3F。',
    rating:null, votes:null, price:'¥2,500〜',
    lat:42.9817626, lng:144.3833396,
    img:'images/kirinobeer/01_menu.jpg', article:'kirinobeer', large:false,
    hero_style:'background:radial-gradient(ellipse 80% 80% at 30% 110%,rgba(180,80,10,.8),transparent),radial-gradient(ellipse 60% 40% at 85% 20%,rgba(224,144,16,.3),transparent),linear-gradient(160deg,#0A0402,#1C0A02);',
    aff_main:'hotpepper', aff_sub:'jalan'
  },
  {
    id:'k25', area:'釧路', genre:'炉端焼き', badge:'hot', badgeText:'🌊 幣舞橋そば・牡蠣酢絶品',
    visual:'v-izakaya', emoji:'🔥',
    name:'旬鮮炉ばた もりや',
    desc:'幣舞橋ほど近くのホテル1Fに構える炉端居酒屋。地球の歩き方にも掲載された釧路海鮮の名店。プリプリの牡蠣酢と大将の気さくな接客が人気。釧路産の刺身盛りはその日の漁…',
    rating:'3.8', votes:'86', rating_src:'google',
    price:'¥3,000〜',
    lat:42.982385, lng:144.386906,
    img:'images/moriya/01_main.jpg', article:'moriya', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k26', area:'釧路', genre:'ザンタレ', badge:'hot', badgeText:'🐔 ザンタレ発祥の店',
    visual:'v-ramen', emoji:'🍗',
    name:'南蛮酊',
    desc:'釧路町郊外にありながら週末は行列必至の超人気店。ザンタレ発祥として全国的に有名。揚げたてのザンギに自家製甘酢ダレがたっぷりかかった「ザンタレ」は1人前600〜7…',
    rating:'4.4', votes:'430', rating_src:'google',
    price:'¥1,200〜',
    lat:43.0471541, lng:144.459363,
    img:'images/nanbanteii/01_exterior.jpg', article:'nanbanteii', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k27', area:'釧路', genre:'串揚げ', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🍢',
    name:'串揚げ処 和からずや',
    desc:'釧路の繁華街に佇む本格串揚げ店。大阪スタイルの揚げ方で釧路産の鮮度抜群の素材を一本ずつ仕上げる。カウンターで揚げたてを食べる大人の一軒。ホットペッパーグルメでネ…',
    rating:'3.8', votes:'27', rating_src:'google',
    price:'¥4,000〜',
    lat:42.9839429, lng:144.3876977,
    img:'images/wakarazuya/01_kushiage.jpg', article:'wakarazuya', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k28', area:'釧路', genre:'カレーチキン', badge:'hot', badgeText:'🐔 創業45年・釧路のソウルフード',
    visual:'v-yoshoku', emoji:'🍗',
    name:'ジョイパックチキン 和商市場本店',
    desc:'釧路人なら誰もが知る45年の歴史を持つソウルフード。門外不出オリジナルスパイスブレンドのカレーチキンは1個300円。和商市場内で朝8時から楽しめる釧路のB級グル…',
    rating:'3.8', votes:'13', rating_src:'google',
    price:'¥300〜',
    lat:42.988848, lng:144.38004,
    img:'images/joypack/01_curry_chicken.jpg', article:'joypack', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k29', area:'釧路', genre:'洋食', badge:'hot', badgeText:'🥩 釧路名物ポークチャップ',
    visual:'v-yoshoku', emoji:'🍖',
    name:'レストラン山彦',
    desc:'地元民に長年愛される昼のみ営業の洋食店。手のひらサイズのビッグなポークチャップが名物で、特製ソースを下のナポリタンに絡めて食べるのが常連の流儀。昼時はほぼ満席の…',
    rating:'4.0', votes:'267', rating_src:'google',
    price:'¥1,500〜',
    lat:42.9959671, lng:144.3820536,
    img:'images/yamahiko/01_spakatsu.jpg', article:'yamahiko', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k30', area:'釧路', genre:'居酒屋', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🦞',
    name:'魚々路 ととろ 釧路栄町店',
    desc:'釧路栄町の海鮮×創作和食居酒屋。個室完備で年末年始も営業する頼れる一軒。もつ鍋の出汁は醤油・塩から選べ、刺身盛りは道東の旬の地魚中心。コース料理の充実度も高く宴…',
    rating:'4.1', votes:'380', rating_src:'google',
    price:'¥3,000〜',
    lat:42.984637, lng:144.3879101,
    img:'images/totoro/01_sashimi.jpg', article:'totoro', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k31', area:'釧路', genre:'居酒屋', badge:'hot', badgeText:'🦪 牡蠣安い・全席個室',
    visual:'v-izakaya', emoji:'🍶',
    name:'個室のせんごく 末広本店',
    desc:'全席個室の海鮮居酒屋。厚岸産牡蠣をリーズナブルに楽しめると口コミで話題。マグロ刺し三種や蟹サラダなどコスパ抜群。釧路のビジネス・観光客に大人気で、前日予約が安心…',
    rating:'4.1', votes:'437', rating_src:'google',
    price:'¥3,000〜',
    lat:42.9827674, lng:144.387346,
    img:'images/sengoku/01_oyster.jpg', article:'sengoku', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k32', area:'釧路', genre:'居酒屋', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🔥',
    name:'炭火居酒屋 炎 末広店',
    desc:'ホテルパコ釧路1Fの炭火居酒屋。飲み放題付きコースが充実しており宴会利用に最適。梅レンコンなどスピードメニューも評判。ホットペッパーグルメ掲載店でネット予約対応…',
    rating:'3.5', votes:'169', rating_src:'google',
    price:'¥2,000〜',
    lat:42.9825796, lng:144.3872857,
    img:'images/homura/01_interior.jpg', article:'homura', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k33', area:'釧路', genre:'寿司', badge:'hot', badgeText:'🦀 道東旬ネタ・市内最多口コミ',
    visual:'v-sushi', emoji:'🍣',
    name:'回転寿司まつりや 新橋店',
    desc:'釧路市内で最多の口コミを誇る回転寿司の人気店。道東の旬の地魚を新鮮なまま提供。英語メニューもあり外国人観光客にも大人気。ランチもディナーも通し営業で使いやすく、…',
    rating:'4.0', votes:'1334', rating_src:'google',
    price:'¥2,000〜',
    lat:43.0025452, lng:144.3788097,
    img:'images/matsuriya/01_sushi.png', article:'matsuriya', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k34', area:'釧路', genre:'ザンギ', badge:'hot', badgeText:'🐔 ザンギ専門・外国人も行列',
    visual:'v-izakaya', emoji:'🍗',
    name:'鳥善',
    desc:'ザンギ一本で勝負するストイックな専門居酒屋。骨付き・骨なし・丸鶏など注文に応じて揚げたてを提供。独自のタレとスパイスが癖になると海外旅行者の間でもSNSで話題に…',
    rating:'4.2', votes:'317', rating_src:'google',
    price:'¥1,500〜',
    lat:42.98332, lng:144.3887116,
    img:'images/toriyoshi/01_zangi.jpg', article:'toriyoshi', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k35', area:'釧路', genre:'居酒屋', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🌊',
    name:'海へ 釧路中央店',
    desc:'幣舞橋すぐそば、タブレット注文の使いやすい海鮮居酒屋。カニコロッケ・焼き鳥・刺身・カルボナーラうどんなど幅広いメニューが揃い、家族連れ・観光客にも最適。ホットペ…',
    rating:'3.7', votes:'296', rating_src:'google',
    price:'¥2,000〜',
    lat:42.9823166, lng:144.3862148,
    img:'images/umie/01_seafood.jpg', article:'umie', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k36', area:'釧路', genre:'洋食', badge:'hot', badgeText:'🦀 1946年創業・カニクリームコロッケ',
    visual:'v-yoshoku', emoji:'🦀',
    name:'レストラン常盤',
    desc:'1946年（昭和21年）創業の釧路老舗洋食店。濃厚なカニクリームコロッケが必食メニュー。ハンバーグ・チキンソテー・ビーフシチューなど昔ながらの味が変わらず提供さ…',
    rating:'4.0', votes:'264', rating_src:'google',
    price:'¥1,500〜',
    lat:42.992723, lng:144.391224,
    img:'images/tokiwa/01_croquette.jpg', article:'tokiwa', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k37', area:'釧路', genre:'居酒屋', badge:'hot', badgeText:'🦑 住宅街の海鮮隠れ名店',
    visual:'v-izakaya', emoji:'🦑',
    name:'居酒屋 釧之助',
    desc:'住宅街に佇む大型海鮮居酒屋。ランチ・ディナー通し営業で地元民に愛される隠れ名店。鮮魚の造りや海鮮丼のレベルが高く、職人技を間近で見られるカウンター席が人気。外国…',
    rating:'4.0', votes:'190', rating_src:'google',
    price:'¥2,000〜',
    lat:43.0137539, lng:144.3463332,
    img:'images/kushinosuke/01_sashimi.jpg', article:'kushinosuke', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k38', area:'釧路', genre:'カフェ', badge:'hot', badgeText:'🍔 釧路発クラフトバーガー',
    visual:'v-cafe', emoji:'🍔',
    name:'ROUTE 38',
    desc:'星が浦のロードサイドに佇むアメリカンスタイルのカフェ&バーガーショップ。フワフワもちもちのオリジナルバンズに挟んだジューシーなパティが地元で話題。キッズスペース…',
    rating:'4.3', votes:'66', rating_src:'google',
    price:'¥1,500〜',
    lat:43.0135829, lng:144.3100515,
    img:'images/route38/01_burger.jpg', article:'route38', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k39', area:'釧路', genre:'焼き鳥', badge:'hot', badgeText:'🍢 釧路一の焼き鳥・地元常連多数',
    visual:'v-izakaya', emoji:'🍢',
    name:'串ヤキ炭ヤ',
    desc:'釧路随一の焼き鳥屋と地元ファンが絶賛する名店。太もも・皮・レバーなど炭火でじっくり焼き上げる串は絶品。外国人旅行者の口コミでも「Kushiro best yak…',
    rating:'4.4', votes:'56', rating_src:'google',
    price:'¥2,500〜',
    lat:42.9847242, lng:144.3830253,
    img:'images/sumiya/01_yakitori.jpg', article:'sumiya', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k40', area:'釧路', genre:'イタリアン', badge:'hot', badgeText:'🍷 道産スモーク×イタリアン',
    visual:'v-cafe', emoji:'🍷',
    name:'イタリアン POTION',
    desc:'道産食材を使ったスモーク料理が評判の隠れ家イタリアン。鶴居のクラフトビールと相性抜群の料理が揃い、釧路で最も洗練された夜を演出。ワインのセレクションも豊富。赤横…',
    rating:'4.7', votes:'15', rating_src:'google',
    price:'¥4,000〜',
    lat:42.9845003, lng:144.3893332,
    img:'images/potion/01_main.jpg', article:'potion', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k41', area:'釧路', genre:'寿司', badge:'', badgeText:'',
    visual:'v-sushi', emoji:'🍣',
    name:'なごやか亭 春採店',
    desc:'口コミ数900件超・釧路市内屈指の回転寿司。春採湖近くのロードサイドで駐車場も広い。道東の旬の魚介ネタをリーズナブルに楽しめ、外国人観光客からも高評価。英語スタ…',
    rating:'4.0', votes:'907', rating_src:'google',
    price:'¥2,000〜',
    lat:42.9783513, lng:144.4128427,
    img:'images/nagoyakatei/01_sushi.jpg', article:'nagoyakatei', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k42', area:'釧路', genre:'ラーメン', badge:'hot', badgeText:'🍜 霧色ラーメン・角煮トッピング',
    visual:'v-ramen', emoji:'🍜',
    name:'麺処 ばかあたり',
    desc:'真っ白なスープに大きな角煮が浮かぶ「霧色ラーメン」が人気の釧路郊外のラーメン店。エビ味噌・醤油・塩など多彩な味が揃い、釧路ラーメンの第四の地位を示す一軒。自動券…',
    rating:'4.1', votes:'597', rating_src:'google',
    price:'¥1,000〜',
    lat:43.0172361, lng:144.3254701,
    img:'images/bakaatari/01_ramen.jpg', article:'bakaatari', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k43', area:'釧路', genre:'カフェ', badge:'hot', badgeText:'☕ Google評価5.0・英語堪能オーナー',
    visual:'v-cafe', emoji:'☕',
    name:'CAFE The Lucky Boots',
    desc:'Google評価5.0を誇る釧路の奇跡のカフェ。英語堪能でアメリカ留学経験を持つオーナー・舟木さんが温かく迎えてくれる。海外旅行者の間でSNS（YouTube・…',
    rating:'5.0', votes:'80', rating_src:'google',
    price:'¥800〜',
    lat:43.0011507, lng:144.3801524,
    img:'images/luckyboots/01_interior.jpg', article:'luckyboots', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k44', area:'釧路', genre:'洋食', badge:'hot', badgeText:'🍽 地元常連御用達・コンビセット',
    visual:'v-yoshoku', emoji:'🍽️',
    name:'レストラン麻里の',
    desc:'釧路市芦野エリアの人気洋食店。ハンバーグ・ドリア・スパゲティ・カレーを一度に楽しめるコンビセット・トリプルセットが名物。スカイチケット観光ガイドにも掲載。駐車場…',
    rating:'4.2', votes:'180', rating_src:'tabelog',
    price:'¥1,000〜',
    lat:43.0232, lng:144.3608,
    img:'images/mario/01_western.jpg', article:'mario', large:false,
    hero_style:'',
    body:``
  },

  {
    id:'k45', area:'釧路', genre:'ラーメン', badge:'hot', badgeText:'🍜 黒担担麺・豚骨13素材スープ',
    visual:'v-ramen', emoji:'🍜',
    name:'担々専家 豪壱',
    desc:'釧路・芦野の黒担担麺で有名なラーメン店。豚骨スープに13種素材の濃厚な一杯とランチライスサービスが人気。',
    rating:'4.1', votes:'150', rating_src:'tabelog',
    price:'¥900〜',
    lat:43.0232, lng:144.3608,
    img:'images/gouichi/01_tantanmen.jpg', article:'gouichi', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k46', area:'釧路', genre:'居酒屋', badge:'', badgeText:'🐚 昭和41年創業・釧路名物つぶ焼き',
    visual:'v-izakaya', emoji:'🍶',
    name:'つぶ焼 かど屋',
    desc:'創業昭和41年・釧路の夜の定番「つぶ焼き」と真っ黒スープの名代ラーメン。末広歓楽街の老舗。',
    rating:'3.9', votes:'80', rating_src:'tabelog',
    price:'¥1,500〜',
    lat:42.9751, lng:144.3742,
    img:'images/kadoya/01_tsubuyaki.jpg', article:'kadoya', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k47', area:'釧路', genre:'ラーメン', badge:'', badgeText:'🍜 深夜ラーメン・背脂豚骨醤油',
    visual:'v-ramen', emoji:'🍜',
    name:'ラーメン大将',
    desc:'釧路・末広歓楽街の深夜ラーメン。背脂豚骨醤油のネギラーメンが名物。飲み後の〆に最適な昭和の名店。',
    rating:'3.8', votes:'60', rating_src:'tabelog',
    price:'¥700〜',
    lat:42.9751, lng:144.3742,
    img:'images/taisho/01_ramen.jpg', article:'taisho', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k48', area:'釧路', genre:'海鮮', badge:'hot', badgeText:'🦀 朝7時〜・漁師御用達・海鮮丼950円〜',
    visual:'v-kaisen', emoji:'🦀',
    name:'釧ちゃん食堂 水産センター店',
    desc:'港のくしろ水産センター内。仲買人直営で鮮度抜群の海鮮丼950円〜。朝7時から開く漁師御用達の食堂。食べログ食堂百名店選出。',
    rating:'4.2', votes:'400', rating_src:'tabelog',
    price:'¥950〜',
    lat:42.9826, lng:144.3711,
    img:'images/senchan/01_seafood.jpg', article:'senchan', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k49', area:'釧路', genre:'ラーメン', badge:'hot', badgeText:'🍜 ラーメンDB釧路1位・濃厚つけ麺',
    visual:'v-ramen', emoji:'🍜',
    name:'麺屋 彰',
    desc:'ラーメンデータベース釧路1位の実力店。魚粉たっぷりの濃厚つけ麺と柚子香る平打ち麺が絶品。',
    rating:'4.4', votes:'300', rating_src:'tabelog',
    price:'¥900〜',
    lat:42.9800, lng:144.3750,
    img:'images/akira/01_ramen_tonkotsu.jpg', article:'akira', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k50', area:'釧路', genre:'ラーメン', badge:'', badgeText:'🍜 極細縮れ麺・百名店常連',
    visual:'v-ramen', emoji:'🍜',
    name:'ラーメン屋 夏堀',
    desc:'釧路・春日町の極細縮れ麺名店。カツオ×鶏ガラのダブルスープ、とろとろチャーシューが評判。百名店常連のラーメン店。',
    rating:'3.9', votes:'200', rating_src:'tabelog',
    price:'¥800〜',
    lat:42.9850, lng:144.3800,
    img:'images/natsubori/01_ramen.jpg', article:'natsubori', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k51', area:'釧路', genre:'ラーメン', badge:'', badgeText:'🍜 本格博多豚骨・辛子高菜完備',
    visual:'v-ramen', emoji:'🍜',
    name:'博多麺処 上々ふくちゃん',
    desc:'釧路・昭和地区の本格博多豚骨ラーメン。辛子高菜・紅しょうが完備。あっさり文化の釧路に本格とんこつを持ち込んだ人気店。',
    rating:'4.0', votes:'120', rating_src:'tabelog',
    price:'¥800〜',
    lat:42.9780, lng:144.3720,
    img:'images/fukuchan/01_hakata_ramen.jpg', article:'fukuchan', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k52', area:'釧路', genre:'ラーメン', badge:'', badgeText:'🍜 化学調味料不使用・かつお出汁',
    visual:'v-ramen', emoji:'🍜',
    name:'ラーメン 仁',
    desc:'釧路・鳥取大通の老舗ラーメン。化学調味料不使用のかつお出汁あっさり醤油・塩・タンメンが人気。地元常連に愛される滋味の一杯。',
    rating:'3.8', votes:'90', rating_src:'tabelog',
    price:'¥700〜',
    lat:42.9900, lng:144.3850,
    img:'images/jin/01_shoyu_ramen.jpg', article:'jin', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k53', area:'釧路', genre:'創作和食', badge:'hot', badgeText:'🍽 食べログ1位・要予約の高級割烹',
    visual:'v-washoku', emoji:'🍽',
    name:'食事処 勢喜',
    desc:'釧路の食べログランキング1位。地元漁師直送の鮮魚で仕立てる予約制創作割烹。刺身盛り・炭火焼き・季節コースで釧路の海を堪能。',
    rating:'3.60', votes:'180', rating_src:'tabelog',
    price:'¥15,000〜',
    lat:42.9748, lng:144.3773,
    img:'images/seiki/01_main.jpg', article:'seiki', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k54', area:'釧路', genre:'天ぷら', badge:'', badgeText:'🍤 完全予約制・カウンター11席の天ぷら専門',
    visual:'v-tempura', emoji:'🍤',
    name:'天ぷら料理 さくら',
    desc:'釧路唯一の本格天ぷら専門店。完全予約制・カウンター11席の割烹スタイル。道東の魚介・山菜・野菜を揚げたて一品一品手渡しで提供。',
    rating:'3.56', votes:'120', rating_src:'tabelog',
    price:'¥10,000〜',
    lat:42.9744, lng:144.3769,
    img:'images/sakuratempura/01_main.jpg', article:'sakuratempura', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k55', area:'釧路', genre:'フレンチ', badge:'', badgeText:'🇫🇷 エゾ鹿・ジビエの本格フレンチ',
    visual:'v-french', emoji:'🇫🇷',
    name:'オルディネール',
    desc:'釧路唯一の本格フランス料理店。エゾ鹿（ジビエ）と道東の鮮魚を組み合わせたオリジナルフレンチ。黒金町の釧路川沿いに佇む隠れ家レストラン。',
    rating:'3.54', votes:'140', rating_src:'tabelog',
    price:'¥5,000〜',
    lat:42.9762, lng:144.3759,
    img:'images/ordinaire/01_main.jpg', article:'ordinaire', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k56', area:'釧路', genre:'居酒屋', badge:'', badgeText:'🍢 漁師小屋風・串焼き専門居酒屋',
    visual:'v-izakaya', emoji:'🍢',
    name:'くし炉 番小屋',
    desc:'末広町の路地に潜む串焼き専門居酒屋。炭火で焼く釧路名物つぶ焼き・ほっき貝・ザンギなど道東の海の幸串が人気。漁師小屋風の雰囲気が独特。',
    rating:'3.44', votes:'108', rating_src:'tabelog',
    price:'¥4,000〜',
    lat:42.9745, lng:144.3770,
    img:'images/kushibanya/01_main.jpg', article:'kushibanya', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k57', area:'釧路', genre:'焼き鳥', badge:'', badgeText:'🍗 昭和50年創業・名物さんまんま串',
    visual:'v-yakitori', emoji:'🍗',
    name:'鳥政',
    desc:'昭和50年創業の老舗炭火焼き鳥店。名物「さんまのまんま串」「うにわさ串」など釧路ならではの創作串が評判。道産ワインと合わせる楽しみ方が人気。',
    rating:'3.52', votes:'84', rating_src:'tabelog',
    price:'¥4,000〜',
    lat:42.9760, lng:144.3752,
    img:'images/torimasa/01_main.jpg', article:'torimasa', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k58', area:'釧路', genre:'焼肉', badge:'hot', badgeText:'🥩 精肉店直営・Retty4.04の実力店',
    visual:'v-yakiniku', emoji:'🥩',
    name:'焼肉大野屋',
    desc:'精肉店直営の本格炭火焼肉。Retty評価4.04という高スコアが示す釧路北部の実力店。道産和牛を精肉店として直仕入れし、鮮度・品質ともに市内随一。',
    rating:'4.04', votes:'210', rating_src:'retty',
    price:'¥3,000〜',
    lat:42.9958, lng:144.3975,
    img:'images/oonoya/01_main.jpg', article:'oonoya', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k59', area:'釧路', genre:'焼肉', badge:'', badgeText:'🍋 深夜1時まで営業・レモンサワー焼肉',
    visual:'v-yakiniku', emoji:'🥩',
    name:'くしろ肉酒場 金ちゃん',
    desc:'末広町のモダン焼肉バー。深夜1時まで営業しホルモン各種とレモンサワー飲み放題が人気。食べログ3.58の評価を誇る釧路の夜の肉酒場。',
    rating:'3.58', votes:'165', rating_src:'tabelog',
    price:'¥3,500〜',
    lat:42.9751, lng:144.3780,
    img:'images/kinchan/01_main.jpg', article:'kinchan', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k60', area:'釧路', genre:'焼肉', badge:'', badgeText:'🥩 文苑の地元密着焼肉・駅から2.8km',
    visual:'v-yakiniku', emoji:'🥩',
    name:'焼肉ごしき苑',
    desc:'釧路市文苑の地元ファミリー焼肉店。駅から2.8kmの穴場的存在ながら食べログ3.57の高評価。国産和牛からホルモンまで幅広く、ファミリー利用にも最適。',
    rating:'3.57', votes:'145', rating_src:'tabelog',
    price:'¥3,000〜',
    lat:42.9724, lng:144.3627,
    img:'images/goshikien/01_main.jpg', article:'goshikien', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k61', area:'釧路', genre:'焼肉', badge:'', badgeText:'🥩 末広町のホルモン専門・食べログ3.58',
    visual:'v-yakiniku', emoji:'🥩',
    name:'三代目ホルモン とんちゃん',
    desc:'末広町の人気ホルモン焼肉専門店。食べログ3.58の高評価。豚・牛ホルモン各種とジンギスカンが揃い、金曜・土曜は深夜3時まで営業する夜型の名店。',
    rating:'3.58', votes:'170', rating_src:'tabelog',
    price:'¥4,000〜',
    lat:42.9740, lng:144.3760,
    img:'images/tonchan/01_main.jpg', article:'tonchan', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k62', area:'釧路', genre:'寿司', badge:'', badgeText:'🦀 大正15年創業・毛ガニ×老舗江戸前寿司',
    visual:'v-sushi', emoji:'🍣',
    name:'八千代本店',
    desc:'大正15年（1926年）創業の老舗寿司店。毛ガニ丸ごと料理と旬の地魚にぎりで知られる釧路の格式ある寿司処。個室完備で接待・記念日にも対応。',
    rating:'3.50', votes:'130', rating_src:'tabelog',
    price:'¥5,000〜',
    lat:42.9748, lng:144.3770,
    img:'images/yachiyo/01_main.jpg', article:'yachiyo', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k63', area:'釧路', genre:'焼肉', badge:'', badgeText:'🥩 下町焼肉居酒屋・コスパ抜群の地元密着店',
    visual:'v-yakiniku', emoji:'🥩',
    name:'外苑',
    desc:'末広町の路地裏に構える地元常連御用達の下町焼肉居酒屋。リーズナブルな価格設定と気取らない雰囲気が魅力で、食べログ3.56の評価を誇る本物の釧路焼肉を体験。',
    rating:'3.56', votes:'110', rating_src:'tabelog',
    price:'¥2,500〜',
    lat:42.9752, lng:144.3778,
    img:'images/gaien/01_main.jpg', article:'gaien', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k64', area:'釧路', genre:'居酒屋', badge:'', badgeText:'🍺 赤ちょうちん横丁の炭火焼き居酒屋',
    visual:'v-izakaya', emoji:'🍺',
    name:'炭焼 ブロウ',
    desc:'釧路の飲み屋街「赤ちょうちん横丁」の炭火焼き居酒屋。道産食材の炭火串とクラフトビールの組み合わせが人気。食べログ3.57の評価を誇る夜の釧路の定番店。',
    rating:'3.57', votes:'125', rating_src:'tabelog',
    price:'¥3,500〜',
    lat:42.9740, lng:144.3758,
    img:'images/blow/01_main.jpg', article:'blow', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k65', area:'釧路', genre:'焼肉', badge:'', badgeText:'🥩 東釧路の老舗焼肉・ホルモンの旨みで人気',
    visual:'v-yakiniku', emoji:'🥩',
    name:'長久園焼肉店',
    desc:'東釧路エリアに位置する地元常連に長年愛される老舗焼肉店。食べログ3.56の評価を誇り、特にホルモンの鮮度と自家製タレが高く評価される本物の釧路焼肉。',
    rating:'3.56', votes:'135', rating_src:'tabelog',
    price:'¥2,500〜',
    lat:42.9778, lng:144.4260,
    img:'images/chokyuen/01_main.jpg', article:'chokyuen', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k66', area:'釧路', genre:'焼肉', badge:'', badgeText:'🥩 大楽毛の人気焼肉ダイニング・家族で楽しむ',
    visual:'v-yakiniku', emoji:'🥩',
    name:'かもめ食堂 大楽毛店',
    desc:'大楽毛駅徒歩1分の人気焼肉ダイニング。食べログ3.57の評価を誇り、広い駐車場と家族向けのゆったりした空間が特徴。ランチ営業もあり幅広いシーンで利用可能。',
    rating:'3.57', votes:'160', rating_src:'tabelog',
    price:'¥3,000〜',
    lat:42.9884, lng:144.3461,
    img:'images/kamome/01_main.jpg', article:'kamome', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k67', area:'釧路', genre:'焼肉', badge:'', badgeText:'🥩 韓国スタイルのヘルシー焼肉・春採湖そば',
    visual:'v-yakiniku', emoji:'🥩',
    name:'焼肉菜包 朴然 春採店',
    desc:'春採エリアの韓国スタイル焼肉店。サンチュやエゴマの葉で肉を包んで食べる「菜包」スタイルが人気。野菜の食べ放題付きでヘルシーに楽しめる釧路の焼肉。',
    rating:'3.56', votes:'150', rating_src:'tabelog',
    price:'¥3,000〜',
    lat:42.9910, lng:144.3780,
    img:'images/bokun/01_main.jpg', article:'bokun', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k68', area:'釧路', genre:'カレー', badge:'', badgeText:'🍛 30種以上スパイス・釧路唯一の本格スパイスカレー',
    visual:'v-curry', emoji:'🍛',
    name:'Kitchen Pharaoh',
    desc:'釧路市内では珍しい本格スパイスカレー専門店。30種以上のハーブ・スパイスをブレンドしたカレーに道産野菜・カキなど地元食材を組み合わせた独自の一皿。',
    rating:'3.48', votes:'95', rating_src:'tabelog',
    price:'¥1,000〜',
    lat:42.9820, lng:144.3810,
    img:'images/pharaoh/01_main.jpg', article:'pharaoh', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k69', area:'釧路', genre:'中国料理', badge:'', badgeText:'🥟 道産食材×本格四川・広東料理',
    visual:'v-chinese', emoji:'🥟',
    name:'中国料理 楓林',
    desc:'釧路市北部の本格中国料理店。道産豚・野菜・魚介を使いながら四川・広東料理の技法を活かしたメニューが充実。テイクアウト・天心自動販売機も完備。',
    rating:'3.45', votes:'90', rating_src:'tabelog',
    price:'¥1,200〜',
    lat:42.9918, lng:144.3728,
    img:'images/fuurin/01_main.jpg', article:'fuurin', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k70', area:'釧路', genre:'居酒屋', badge:'', badgeText:'🐟 末広町の海鮮居酒屋・旬の釧路魚介が揃う',
    visual:'v-izakaya', emoji:'🐟',
    name:'あけぼの',
    desc:'末広町の地元密着海鮮居酒屋。釧路産牡蠣・ほっき・さんまなど旬の魚介の刺身・炭火焼き・ザンギが充実。1人でも気軽に入れる雰囲気で地元客に長く愛される一軒。',
    rating:'3.46', votes:'100', rating_src:'tabelog',
    price:'¥3,000〜',
    lat:42.9747, lng:144.3773,
    img:'images/akebono/01_main.jpg', article:'akebono', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k71', area:'釧路', genre:'焼肉', badge:'', badgeText:'🐑 ジンギスカン＆ホルモン専門・末広町',
    visual:'v-yakiniku', emoji:'🥩',
    name:'浜ジン 末広店',
    desc:'末広町のジンギスカン（北海道ラム肉焼肉）とホルモン専門店。北海道らしいラム肉の旨みと各種ホルモンをリーズナブルに楽しめる。食べログ3.56の地元人気店。',
    rating:'3.56', votes:'140', rating_src:'tabelog',
    price:'¥3,000〜',
    lat:42.9745, lng:144.3769,
    img:'images/hamajin/01_main.jpg', article:'hamajin', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k72', area:'釧路', genre:'焼肉', badge:'', badgeText:'🥩 新富士の焼肉×塩ラーメンが地元の定番',
    visual:'v-yakiniku', emoji:'🥩',
    name:'牛太郎',
    desc:'新富士駅近くの人気焼肉店。食べログ3.57の評価を誇り、焼肉のシメに「塩ラーメン」を組み合わせる「牛太郎スタイル」が地元の定番文化として定着。',
    rating:'3.57', votes:'155', rating_src:'tabelog',
    price:'¥3,000〜',
    lat:42.9780, lng:144.4010,
    img:'images/gyutaro/01_main.jpg', article:'gyutaro', large:false,
    hero_style:'',
    body:``
  },
];

const AFF_INFO = {
  hotpepper: {
    head:'🌶️ ホットペッパーグルメで予約',
    name:'ホットペッパーグルメ',
    desc:'クーポン・ポイント還元でお得に予約。釧路エリアの飲食店を網羅。',
    rate:'ネット予約対応 / クーポンあり',
    btn_text:'▶ ホットペッパーで予約する',
    btn_url:'https://www.hotpepper.jp/SA11/',
    sub_text:'アフィリエイト登録（成果報酬型）',
    sub_url:'https://www.hotpepper.jp/affiliate/'
  },
  jalan: {
    head:'🏨 じゃらんで宿を探す',
    name:'じゃらん',
    desc:'釧路・道東エリアの温泉宿・ホテルを最安値で検索。グルメプラン付きが人気。',
    rate:'宿泊予約 / 最大10%ポイント還元',
    btn_text:'▶ じゃらんで釧路の宿を探す',
    btn_url:'https://www.jalan.net/hokkaido/',
    sub_text:'アフィリエイト登録（A8.net経由）',
    sub_url:'https://affiliate.jalan.net/'
  },
  rakuten: {
    head:'✈️ 楽天トラベルで予約',
    name:'楽天トラベル',
    desc:'楽天ポイントが貯まる・使える。釧路全エリアの宿を最安値で比較。',
    rate:'楽天ポイント / 最大5倍還元',
    btn_text:'▶ 楽天トラベルで探す',
    btn_url:'https://travel.rakuten.co.jp/place/hokkaido/',
    sub_text:'楽天アフィリエイトに登録（無料）',
    sub_url:'https://affiliate.rakuten.co.jp/'
  },
  ikyu: {
    head:'🍽️ 一休レストランで予約',
    name:'一休レストラン',
    desc:'釧路の特別な一夜に。記念日ディナー・接待向け店舗を厳選掲載。',
    rate:'高級店専門 / ポイント2%還元',
    btn_text:'▶ 一休で高級店を予約',
    btn_url:'https://restaurant.ikyu.com/area/ar0100/',
    sub_text:'アフィリエイト情報を見る',
    sub_url:'https://www.ikyu.com/affiliate/'
  }
};

/* ════════════════════════════════════
   CARDS
════════════════════════════════════ */
let currentArea = '釧路';

/* ジャンルグループ定義：フィルターキー → マッチするgenre値リスト */
const GENRE_GROUPS = {
  '炉端焼き': ['炉端焼き','ザンギ','居酒屋','創作料理','さんまんま','ジンギスカン'],
  'ラーメン': ['ラーメン'],
  '洋食':    ['洋食'],
  'そば':    ['そば'],
  '海鮮':    ['海鮮','さんまんま'],
  'ザンギ':  ['ザンギ'],
  '豚丼':   ['豚丼'],
  '焼肉':   ['焼肉','ホルモン','焼肉・ホルモン','ジンギスカン','焼肉・韓国料理'],
  '焼き鳥': ['焼き鳥'],
  '寿司':   ['寿司','寿司・海鮮'],
  '天ぷら': ['天ぷら'],
  'フレンチ':['フレンチ'],
  'カレー': ['カレー'],
  '中国料理':['中国料理'],
  '創作和食':['創作和食'],
};

let currentGenre = 'all';
let currentSort  = 'default';  // 'default' | 'rating' | 'votes'

/* ── ページング状態 ── */
const CARDS_PER_PAGE = 8;
let _currentFiltered = [];
let _visibleCount = 0;

function makeCardHtml(s, i) {
  const badgeHtml = s.badge ? `<span class="card-badge ${s.badge}">${s.badgeText}</span>` : '';
  const delay = `d${(i % 6) + 1}`;
  const areaTag = `<span class="card-area-tag">${s.area}</span>`;
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'ja';
  const displayName  = (lang==='en' && s.name_en)  ? s.name_en  : (lang==='zh-TW' && s.name_zh)  ? s.name_zh  : s.name;
  const displayDesc  = (lang==='en' && s.desc_en)  ? s.desc_en  : (lang==='zh-TW' && s.desc_zh)  ? s.desc_zh  : s.desc;
  const displayGenre = (lang==='en' && s.genre_en) ? s.genre_en : (lang==='zh-TW' && s.genre_zh) ? s.genre_zh : s.genre;
  const readMore = (typeof t==='function') ? t('card.read') : '詳細を見る';
  return `
    <div class="card fade-up ${delay}" onclick="location.href='pages/${s.article}.html'">
      <div class="card-visual ${s.visual}">
        ${s.img ? '<img class="card-bg-img" src="'+s.img+'" alt="'+s.name+'" loading="lazy">' : ''}
        <div class="card-visual-overlay"></div>
        <div class="card-emoji" style="${s.img ? 'display:none' : ''}">${s.emoji}</div>
        ${badgeHtml}
        ${areaTag}
      </div>
      <div class="card-body">
        <div class="card-meta">
          ${s.rating
            ? `<span class="card-rating">★ ${s.rating}<span class="card-rating-src">${s.rating_src==='google'?'Google':s.rating_src==='tabelog'?'食べログ':''}</span></span>`
            : `<span class="card-rating card-rating-none">─</span>`
          }
          ${s.votes ? `<span class="card-votes">(${s.votes}件)</span>` : ''}
        </div>
        <h3 class="card-name">${displayName}</h3>
        <p class="card-genre">${displayGenre}</p>
        <p class="card-desc">${displayDesc}</p>
        <div class="card-footer">
          <span class="card-price">${s.price}</span>
          <span class="card-read">${readMore} <span class="card-arrow">→</span></span>
        </div>
      </div>
    </div>`;
}

function _observeCards() {
  setTimeout(() => {
    document.querySelectorAll('.fade-up:not(.in)').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in');
      } else {
        io.observe(el);
      }
    });
  }, 50);
}

function _updateMoreBtn() {
  const btn  = document.getElementById('cards-more-btn');
  const wrap = document.getElementById('cards-more-wrap');
  if (!btn) return;
  const remaining = _currentFiltered.length - _visibleCount;
  if (remaining <= 0) {
    btn.hidden = true;
  } else {
    btn.hidden = false;
    const next = Math.min(remaining, CARDS_PER_PAGE);
    const countEl = document.getElementById('cards-more-count');
    if (countEl) countEl.textContent = `+${next} / 残り${remaining}件`;
  }
}

function _parseRating(s) {
  // Return numeric rating for sort; stores with no rating go to bottom
  if (!s.rating) return -1;
  return parseFloat(s.rating) || -1;
}
function _parseVotes(s) {
  if (!s.votes) return -1;
  // votes may be '1,247' or '481' etc
  return parseInt(String(s.votes).replace(/[^0-9]/g, ''), 10) || -1;
}

function renderCards(genre) {
  const grid = document.getElementById('cards-grid');
  const visible = STORES.filter(s => !s.hidden);
  let filtered = (!genre || genre === 'all')
    ? visible
    : visible.filter(s => {
        const list = GENRE_GROUPS[genre];
        return list ? list.includes(s.genre) : s.genre === genre;
      });

  // ── ソート ──
  if (currentSort === 'rating') {
    filtered = [...filtered].sort((a, b) => _parseRating(b) - _parseRating(a));
  } else if (currentSort === 'votes') {
    filtered = [...filtered].sort((a, b) => _parseVotes(b) - _parseVotes(a));
  }

  _currentFiltered = filtered;
  _visibleCount = Math.min(CARDS_PER_PAGE, _currentFiltered.length);
  grid.innerHTML = _currentFiltered.slice(0, _visibleCount).map((s, i) => makeCardHtml(s, i)).join('');
  _updateMoreBtn();
  _observeCards();
}

function loadMoreCards() {
  const grid = document.getElementById('cards-grid');
  const start = _visibleCount;
  const end   = Math.min(_visibleCount + CARDS_PER_PAGE, _currentFiltered.length);
  const newHtml = _currentFiltered.slice(start, end).map((s, i) => makeCardHtml(s, start + i)).join('');
  grid.insertAdjacentHTML('beforeend', newHtml);
  _visibleCount = end;
  _updateMoreBtn();
  _observeCards();
}

function setSort(key) {
  currentSort = key;
  document.querySelectorAll('.sort-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.sort === key);
  });
  renderCards(currentGenre);
}

function filterArea(area) {
  /* 後方互換ラッパー（地図・他から呼ばれる場合用） */
  filterGenre('all');
}

function filterGenre(genre) {
  currentGenre = genre;
  document.querySelectorAll('.area-tab').forEach(t => {
    const fn = t.getAttribute('onclick') || '';
    const match = fn.match(/filterGenre\('([^']+)'\)/);
    const tabKey = match ? match[1] : null;
    t.classList.toggle('active', tabKey === genre || (!tabKey && genre === 'all'));
  });
  renderCards(genre);
}

/* ════════════════════════════════════
   goHome
════════════════════════════════════ */
function goHome() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ════════════════════════════════════
   INTERSECTION OBSERVER (fade-in)
════════════════════════════════════ */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

/* ════════════════════════════════════
   HEADER SCROLL
════════════════════════════════════ */
const hdr = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  hdr.classList.toggle('scrolled', y > 60);
});

/* ════════════════════════════════════
   HERO PARALLAX ORB
════════════════════════════════════ */
const orbs = document.querySelectorAll('.hero-orb');
window.addEventListener('mousemove', e => {
  const cx = innerWidth/2, cy = innerHeight/2;
  const dx = (e.clientX - cx)/cx, dy = (e.clientY - cy)/cy;
  orbs.forEach((orb, i) => {
    const f = (i+1) * 10;
    orb.style.transform = `translate(${dx*f}px,${dy*f}px)`;
  });
});

/* ════════════════════════════════════
   INIT
════════════════════════════════════ */
renderCards('all');

/* ════════════════════════════════════
   GOOGLE MAPS LOADER
════════════════════════════════════ */
(function() {
  if (typeof GOOGLE_MAPS_API_KEY !== 'undefined' && GOOGLE_MAPS_API_KEY !== 'YOUR_API_KEY_HERE') {
    const s = document.createElement('script');
    s.src = 'https://maps.googleapis.com/maps/api/js?key=' + GOOGLE_MAPS_API_KEY + '&callback=initMap&language=ja';
    s.async = true;
    s.defer = true;
    document.head.appendChild(s);
  } else {
    // APIキー未設定の場合はマップ要素を非表示にして案内を表示
    const mapEl = document.getElementById('restaurant-map');
    if (mapEl) {
      mapEl.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;background:rgba(255,255,255,.06);border-radius:16px;color:rgba(255,255,255,.55);font-size:.95rem;text-align:center;padding:20px;">🗺️ APIキーが未設定です。<br>上部の案内に従って設定してください。</div>';
    }
  }
})();
