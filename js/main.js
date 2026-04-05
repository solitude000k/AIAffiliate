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
    img:'', article:'moriya', large:false,
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
    img:'', article:'nanbanteii', large:false,
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
    img:'', article:'wakarazuya', large:false,
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
    img:'', article:'joypack', large:false,
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
    img:'', article:'yamahiko', large:false,
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
    img:'', article:'totoro', large:false,
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
    img:'', article:'sengoku', large:false,
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
    img:'', article:'homura', large:false,
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
    img:'', article:'matsuriya', large:false,
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
    img:'', article:'toriyoshi', large:false,
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
    img:'', article:'umie', large:false,
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
    img:'', article:'tokiwa', large:false,
    hero_style:'',
    body:``
  },
  // kushinosuke は kushinjyo の完全重複のため削除（2026-04-05）
  {
    id:'k38', area:'釧路', genre:'カフェ', badge:'hot', badgeText:'🍔 釧路発クラフトバーガー',
    visual:'v-cafe', emoji:'🍔',
    name:'ROUTE 38',
    desc:'星が浦のロードサイドに佇むアメリカンスタイルのカフェ&バーガーショップ。フワフワもちもちのオリジナルバンズに挟んだジューシーなパティが地元で話題。キッズスペース…',
    rating:'4.3', votes:'66', rating_src:'google',
    price:'¥1,500〜',
    lat:43.0135829, lng:144.3100515,
    img:'', article:'route38', large:false,
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
    img:'', article:'sumiya', large:false,
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
    img:'', article:'potion', large:false,
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
    img:'', article:'nagoyakatei', large:false,
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
    img:'', article:'bakaatari', large:false,
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
    img:'', article:'luckyboots', large:false,
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
    img:'', article:'mario', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k45', area:'釧路', genre:'焼肉', badge:'hot', badgeText:'🥩 地元民ランチの聖地',
    visual:'v-yakiniku', emoji:'🥩',
    name:'焼肉レストラン ピットイン 新橋店',
    desc:'平日ランチから地元民で賑わう焼肉の人気店。牛タン・ハラミをはじめホルモン類も充実。毎週金曜は牛タンカレー500円のランチサービスが話題。生肉にこだわり新鮮な…',
    rating:'4.0', votes:'259', rating_src:'google',
    price:'¥2,000〜',
    lat:43.0061, lng:144.3723,
    img:'', article:'pittin', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k46', area:'釧路', genre:'中華料理', badge:'hot', badgeText:'🥢 釧路で本格中華・唐揚げ絶品',
    visual:'v-yoshoku', emoji:'🥢',
    name:'陽陽亭',
    desc:'釧路の本格中華として地元グルメガイドにも紹介される名店。カリカリに揚げた鶏の唐揚げは外国人旅行者からも絶賛の声が多い。ヤキトリ定食・餃子・麻婆豆腐など昔なが…',
    rating:'4.1', votes:'207', rating_src:'google',
    price:'¥900〜',
    lat:42.992823, lng:144.389966,
    img:'', article:'yoyotei', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k47', area:'釧路', genre:'カフェ', badge:'hot', badgeText:'☕ 地鶏卵のオムライス・女子に人気',
    visual:'v-cafe', emoji:'☕',
    name:'ベナマート BENAMART',
    desc:'釧路労災病院すぐそば、イタリア語で「大切な」を意味する店名の小さなカフェ。山花地鶏牧場の新鮮卵を使うオムライスやデミグラスハンバーグが女性を中心に大人気。ス…',
    rating:'4.3', votes:'64', rating_src:'google',
    price:'¥1,200〜',
    lat:43.007098, lng:144.382968,
    img:'', article:'benamart', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k48', area:'釧路', genre:'定食', badge:'hot', badgeText:'🍚 50種以上の総菜・釧路の豚丼も絶品',
    visual:'v-yoshoku', emoji:'🍚',
    name:'うるとら食堂',
    desc:'50〜60種類もの総菜が並ぶ食堂スタイルの人気店。日替わりの豚丼・うなぎ丼・釧路産アナゴ丼など丼物も充実。平日ランチはコーヒー無料、スタンプカードあり。電子…',
    rating:'3.9', votes:'497', rating_src:'google',
    price:'¥800〜',
    lat:42.999265, lng:144.39919,
    img:'', article:'urutora', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k49', area:'釧路', genre:'居酒屋', badge:'hot', badgeText:'🦑 駅前ホテル内・英語メニューあり',
    visual:'v-izakaya', emoji:'🦑',
    name:'やん衆居酒屋 釧路食堂 本店',
    desc:'釧路駅至近のホテルパルー1Fに入る海鮮居酒屋。英語メニューを完備し外国人観光客にも対応。アワビ・チーズ揚げ・海鮮・ヤキトリなど幅広いメニューが揃い、1時間飲…',
    rating:'3.9', votes:'341', rating_src:'google',
    price:'¥3,000〜',
    lat:42.988794, lng:144.38482,
    img:'', article:'kushiroshokudo', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k50', area:'釧路', genre:'焼肉', badge:'hot', badgeText:'🥩 Google評価4.7・予約必須の名店',
    visual:'v-yakiniku', emoji:'🥩',
    name:'焼肉 外苑',
    desc:'釧路栄町の焼肉の中でも「釧路で一番うまい」と地元民が絶賛する老舗。Google評価4.7と圧倒的な支持を誇る。センマイ刺し・牛タン・ハラミが看板メニューで、…',
    rating:'4.7', votes:'78', rating_src:'google',
    price:'¥4,000〜',
    lat:42.983847, lng:144.388758,
    img:'', article:'gaien', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k51', area:'釧路', genre:'韓国料理', badge:'hot', badgeText:'🇰🇷 Google評価4.9・外国人に大人気',
    visual:'v-yakiniku', emoji:'🇰🇷',
    name:'韓国式焼肉 こひゃん',
    desc:'釧路末広町に構える韓国式焼肉店。Google評価4.9という驚異的スコアを誇り、外国人旅行者の間では「Best Korean BBQ I have ever…',
    rating:'4.9', votes:'30', rating_src:'google',
    price:'¥3,000〜',
    lat:42.982253, lng:144.386478,
    img:'', article:'kohyan', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k52', area:'釧路', genre:'イタリアン', badge:'hot', badgeText:'🍷 Google評価4.9・蝦夷鹿×イタリアン',
    visual:'v-cafe', emoji:'🍷',
    name:'炭焼き×osteria BAMBU',
    desc:'道東食材を炭火で焼き上げイタリアンに仕立てる唯一無二の新業態。蝦夷鹿ロースや十勝産骨付き豚ロースなど地元食材を活かした料理がGoogle評価4.9（15件）…',
    rating:'4.9', votes:'15', rating_src:'google',
    price:'¥2,000〜',
    lat:42.988882, lng:144.385039,
    img:'', article:'bambu', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k53', area:'釧路', genre:'天ぷら', badge:'hot', badgeText:'🍤 完全予約制・釧路の本格天ぷらコース',
    visual:'v-soba', emoji:'🍤',
    name:'日本料理 天ぷら あいだ',
    desc:'釧路昭和エリアの住宅街に構える完全予約制の本格天ぷら店。1組ずつ対応するので完全プライベート空間で旬の食材を揚げる職人の技を目の前で鑑賞できる。フランス・ス…',
    rating:'4.5', votes:'44', rating_src:'google',
    price:'¥6,500〜',
    lat:43.022529, lng:144.353717,
    img:'', article:'aida', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k54', area:'釧路', genre:'割烹', badge:'hot', badgeText:'🍶 Google評価4.9・外国人が絶賛する割烹',
    visual:'v-sushi', emoji:'🍶',
    name:'旬夜 Shunya',
    desc:'末広町の地下飲食街にある割烹・寿司の名店。Google評価4.9（432件）という驚異的な評価数と高スコアを誇り、外国人旅行者が「Best meal I h…',
    rating:'4.9', votes:'432', rating_src:'google',
    price:'¥4,000〜',
    lat:42.984064, lng:144.386941,
    img:'', article:'shunya', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k55', area:'釧路', genre:'和食', badge:'hot', badgeText:'🍱 うなぎ・天ぷら・海鮮カレー・釧路B級',
    visual:'v-soba', emoji:'🍱',
    name:'ちく半',
    desc:'北大通の地下1Fに構える和食の名店。うなぎ・天丼・海鮮カレーが三本柱で、地元グルメ通が「隠れた名店」と評する。カウンターでシェフの技を見ながら楽しむスタイル…',
    rating:'4.4', votes:'194', rating_src:'google',
    price:'¥1,500〜',
    lat:42.982809, lng:144.384744,
    img:'', article:'chikuhan', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k56', area:'釧路', genre:'日本料理', badge:'hot', badgeText:'🎋 Google評価4.9・1,500円コースが驚愕CP',
    visual:'v-soba', emoji:'🎋',
    name:'日本料理 和廉',
    desc:'釧路浪花町の日本料理店。Google評価4.9（20件）という完璧に近いスコアを持つ隠れた名店。1,500円から楽しめる昼コース（月水金のみ）が驚きのコスパ…',
    rating:'4.9', votes:'20', rating_src:'google',
    price:'¥1,500〜',
    lat:42.987325, lng:144.37624,
    img:'', article:'waren', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k57', area:'釧路', genre:'ベーカリー', badge:'hot', badgeText:'🥖 水曜木曜のみ開店・幻のベーカリー',
    visual:'v-cafe', emoji:'🥖',
    name:'bakery house MEGUMIYA',
    desc:'水曜・木曜のみ開店する幻のベーカリー。赤ワイン×ドライフルーツのハードパンやカヌレが人気で、外国人観光客が「Amazing」と絶賛。閉店前に売り切れることも…',
    rating:'4.2', votes:'47', rating_src:'google',
    price:'¥300〜',
    lat:43.004638, lng:144.39171,
    img:'', article:'megumiya', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k58', area:'釧路', genre:'スイーツ', badge:'hot', badgeText:'🍰 霧の牧草ミルク×オムレット・釧路スイーツの名店',
    visual:'v-sweets', emoji:'🍰',
    name:'Fresh Cream Desserts jiri（じり）',
    desc:'釧路北大通の小さなスイーツ店。「海霧（じり）を吸った牧草で育った牛のミルクから作るクリーム」を使ったオムレット・ミルフィーユ・ソフトクリームが名物。tabi…',
    rating:'4.4', votes:'142', rating_src:'google',
    price:'¥500〜',
    lat:42.984305, lng:144.384745,
    img:'', article:'jiri', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k59', area:'釧路', genre:'海鮮', badge:'hot', badgeText:'🦞 生きた毛ガニを目の前で・市場直結の食堂',
    visual:'v-sushi', emoji:'🦞',
    name:'橋本商店（はしもとしょうてん）',
    desc:'くしろたんちょう市場（旧・和商市場エリア近く）に構える鮮魚店直営の食堂。生きた毛ガニを生け簀から選んで調理してもらえる体験型の食スポット。ホタテ・カニ・海鮮…',
    rating:'4.1', votes:'55', rating_src:'google',
    price:'¥1,500〜',
    lat:42.988708, lng:144.379428,
    img:'', article:'hashimoto', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k60', area:'釧路', genre:'居酒屋', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'⚓',
    name:'釧路港（くしろこう）',
    desc:'末広町の繁華街のビル2階に構える居酒屋。ランチは釧路港風スパゲティカツ（スパカツ）・牡蠣フライ定食・天ぷらそばなど日替わり12種類。ランチはドリンク1杯無料…',
    rating:'4.2', votes:'24', rating_src:'google',
    price:'¥2,000〜',
    lat:42.983077, lng:144.387293,
    img:'', article:'kushirominato', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k61', area:'釧路', genre:'洋食', badge:'hot', badgeText:'🍋 住宅街の隠れ家・老舗洋食の名店',
    visual:'v-yoshoku', emoji:'🍋',
    name:'レストラン シトロン',
    desc:'釧路桜ヶ岡の住宅街に佇む隠れ家洋食店。プリプリのエビフライ・ビーフシチューオムライス・カキフライなど昔ながらの洋食が絶品。公園が見える窓際席が心地よく「一人…',
    rating:'4.3', votes:'77', rating_src:'google',
    price:'¥1,200〜',
    lat:42.968056, lng:144.420012,
    img:'', article:'citron', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k62', area:'釧路', genre:'担々麺', badge:'hot', badgeText:'🍜 釧路No.1ラーメン・海老白湯',
    visual:'v-ramen', emoji:'🍜',
    name:'担々専家 豪壱（ごういち）',
    desc:'釧路で「ラーメンといえば豪壱」と言われるほど地元に根付いた名店。濃厚な海老白湯スープ（えびしろたん）と担々麺の2本柱。2025年1月にも「釧路No.1ラーメ…',
    rating:'4.2', votes:'296', rating_src:'google',
    price:'¥900〜',
    lat:43.012337, lng:144.393901,
    img:'', article:'gouichi_dan', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k63', area:'釧路', genre:'天ぷら', badge:'', badgeText:'',
    visual:'v-soba', emoji:'🍤',
    name:'天ぷら 釧（てんぷら くし）',
    desc:'釧路栄町のカウンター8席だけの小さな天ぷら専門店。ご夫婦が切り盛りし、揚げたてを順番に提供するスタイル。魚介・野菜のバラエティが豊富で、常連客との会話も楽し…',
    rating:'4.1', votes:'23', rating_src:'google',
    price:'¥3,000〜',
    lat:42.983445, lng:144.387764,
    img:'', article:'tempurakushi', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k64', area:'釧路', genre:'海鮮', badge:'hot', badgeText:'🐟 朝7時〜・漁港直送・外国人にも大人気',
    visual:'v-sushi', emoji:'🐟',
    name:'釧ちゃん食堂 水産センター店',
    desc:'くしろ水産センター内で朝7時から営業する海鮮食堂。釧路港で水揚げされた新鮮な魚介を使った海鮮丼・三色丼・朝食メニューが揃う。口コミ数1,200件超の高信頼店…',
    rating:'4.2', votes:'1220', rating_src:'google',
    price:'¥1,600〜',
    lat:42.989789, lng:144.364803,
    img:'', article:'senchankousui', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k65', area:'釧路', genre:'コーヒー', badge:'hot', badgeText:'☕ Google評価4.8・釧路最高峰の自家焙煎',
    visual:'v-cafe', emoji:'☕',
    name:'舟木米穀店／舟木コーヒー',
    desc:'米穀店の次男がコーヒー店を兼業する珍しいスタンド形式の名店。Google評価4.8を誇り外国人旅行者から「By far the best coffee in…',
    rating:'4.8', votes:'53', rating_src:'google',
    price:'¥400〜',
    lat:42.985117, lng:144.376584,
    img:'', article:'funaki', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k66', area:'釧路', genre:'カフェ', badge:'hot', badgeText:'☕ Google評価4.7・スタイリッシュ2Fカフェ',
    visual:'v-cafe', emoji:'☕',
    name:'ANAVRIN Cafe（アナブリン）',
    desc:'釧路駅から5分、ブティックの2Fに上がるスタイリッシュなカフェ。Google評価4.7（54件）。スペシャルティコーヒーと自家製ケーキが評判で、外国人旅行者…',
    rating:'4.7', votes:'54', rating_src:'google',
    price:'¥600〜',
    lat:42.987612, lng:144.383164,
    img:'', article:'anavrin', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k67', area:'釧路', genre:'炭火焼き', badge:'hot', badgeText:'🥩 Google評価4.5・和牛炭焼きコスパ最強',
    visual:'v-yakiniku', emoji:'🥩',
    name:'炭焼き「肉バル」NIKU18',
    desc:'末広町パステルパーク1Fの人気炭火焼き肉店。北海道産フルーツ和牛を180gで2,880円という驚きのコスパを誇りGoogle評価4.5（353件）を獲得。外…',
    rating:'4.5', votes:'353', rating_src:'google',
    price:'¥3,000〜',
    lat:42.983281, lng:144.386392,
    img:'', article:'niku18', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k68', area:'釧路', genre:'カレー', badge:'hot', badgeText:'🍛 開店前行列・釧路の絶品スパイスカレー',
    visual:'v-yoshoku', emoji:'🍛',
    name:'イッケンヤカレー コミン',
    desc:'釧路富士見の住宅街に佇む完全予約待ちのスパイスカレー専門店。自家製ジンジャーエール付き、フリードリンク付きで昼のみ営業。開店20分前から並ぶ常連客が多く5回…',
    rating:'4.4', votes:'105', rating_src:'google',
    price:'¥900〜',
    lat:42.976206, lng:144.392114,
    img:'', article:'comin', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k69', area:'釧路', genre:'インドカレー', badge:'hot', badgeText:'🫓 Google評価4.7×629件・チーズナン絶品',
    visual:'v-yoshoku', emoji:'🫓',
    name:'DIYO スパイスダイニング 釧路店',
    desc:'イオンモール釧路昭和内のインド・スパイスカレー店。Google評価4.7（629件）という高信頼度と大量の口コミを誇る。チーズナン・ラムカレーが外国人旅行者…',
    rating:'4.7', votes:'629', rating_src:'google',
    price:'¥1,000〜',
    lat:43.026931, lng:144.361084,
    img:'', article:'diyo', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k70', area:'釧路', genre:'そば', badge:'hot', badgeText:'🍵 幣舞橋そば・緑そば・天ぷらが絶品',
    visual:'v-soba', emoji:'🍵',
    name:'東家 幣舞分店（あずまや ぬさまいぶんてん）',
    desc:'釧路の老舗そば「東家（あずまや）」の幣舞橋そばの分店。釧路名物の緑色そば（クロレラ入り）と揚げたての天ぷらが地元民に愛される昼のみ営業の名店。外国人旅行者に…',
    rating:'4.3', votes:'370', rating_src:'google',
    price:'¥900〜',
    lat:42.979582, lng:144.38442,
    img:'', article:'azunusam', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k71', area:'釧路', genre:'そば', badge:'hot', badgeText:'🍵 Google評価4.2×472件・天ぷら豚丼そば名店',
    visual:'v-soba', emoji:'🍵',
    name:'そば処 ながや',
    desc:'釧路町睦エリアの人気そば処。口コミ472件と釧路市内でも多くの実績を誇る。揚げたて天ぷらそば・豚丼・ちゃわんむしなど多彩なメニューが揃い、地元ファンのリピー…',
    rating:'4.2', votes:'472', rating_src:'google',
    price:'¥900〜',
    lat:43.012279, lng:144.412551,
    img:'', article:'nagaya', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k72', area:'釧路', genre:'イタリアン', badge:'hot', badgeText:'🍝 釧路川リバービュー・イタリアン隠れ家',
    visual:'v-cafe', emoji:'🍝',
    name:'Kushiro Club（くしろくらぶ）',
    desc:'釧路川リバーサイドを一望できるビル2Fのイタリアンレストラン。外国人旅行者から「True hidden gem」「Great view, great mus…',
    rating:'4.2', votes:'107', rating_src:'google',
    price:'¥2,000〜',
    lat:42.980282, lng:144.38387,
    img:'', article:'kushiroclub', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k73', area:'釧路', genre:'イタリアン', badge:'', badgeText:'',
    visual:'v-cafe', emoji:'🍷',
    name:'Bar Italiana Soul Free',
    desc:'釧路北大通のイタリアンバル。ワイン好きの女性客が多く集まる居心地の良いダイニング。ソファ席が心地よく「ついつい長居してしまう」と常連多数。アラカルト中心でサ…',
    rating:'4.2', votes:'68', rating_src:'google',
    price:'¥3,000〜',
    lat:42.984452, lng:144.385071,
    img:'', article:'soulfree', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k74', area:'釧路', genre:'カフェ', badge:'hot', badgeText:'🍰 Google評価5.0・手作りパルフェが絶品',
    visual:'v-sweets', emoji:'🍰',
    name:'カフェルナルド',
    desc:'釧路栄町のGoogle評価5.0（満点）の小さなカフェ。パルフェ（パフェ）・スコーン・ケーキ・コーヒーを提供し、店主が一品一品丁寧に作る手仕事の味わいが話題…',
    rating:'5.0', votes:'6', rating_src:'google',
    price:'¥600〜',
    lat:42.982635, lng:144.387994,
    img:'', article:'lunardo', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k75', area:'釧路', genre:'創作料理', badge:'hot', badgeText:'🍶 Google評価5.0・路地裏カウンター8席の名店',
    visual:'v-soba', emoji:'🍶',
    name:'roji。（ロジ）',
    desc:'釧路末広町の路地裏に佇むカウンター8席のみの創作和洋料理店。Google評価5.0（満点）。道東の旬食材を使ったコース料理と厳選日本酒・ワインのペアリングが…',
    rating:'5.0', votes:'10', rating_src:'google',
    price:'¥5,000〜',
    lat:42.983774, lng:144.388456,
    img:'', article:'roji', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k76', area:'釧路', genre:'おでん', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🍢',
    name:'おでん屋 水木（みずき）',
    desc:'釧路北大通のクリーンな内装のおでん居酒屋。女性オーナーが一人で切り盛りし、丁寧に仕込んだ出汁のおでんとオリジナルの玉子焼きが評判。「おでん＋〆の出汁ラーメン…',
    rating:'3.8', votes:'26', rating_src:'google',
    price:'¥2,000〜',
    lat:42.989127, lng:144.38229,
    img:'', article:'mizuki', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k77', area:'釧路', genre:'おでん', badge:'hot', badgeText:'🍢 老夫婦が守る釧路の老舗おでん屋',
    visual:'v-izakaya', emoji:'🍢',
    name:'おでん 王将（おうしょう）',
    desc:'釧路栄町の路地裏に佇む老夫婦が守る老舗おでん屋。外国人旅行者から「One of the most enjoyable meals we had in Hok…',
    rating:'4.3', votes:'44', rating_src:'google',
    price:'¥2,500〜',
    lat:42.983697, lng:144.387551,
    img:'', article:'osho', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k78', area:'釧路', genre:'居酒屋', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🦞',
    name:'大光（だいこう）',
    desc:'釧路黒金町の和食系居酒屋。ホテルルートイン釧路駅前の近くにあり観光客にも便利な立地。北海道産食材にこだわったメニューが豊富で、シシャモ・サンマ刺し・鯨の生姜…',
    rating:'4.1', votes:'117', rating_src:'google',
    price:'¥2,500〜',
    lat:42.98973, lng:144.381713,
    img:'', article:'daiko', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k79', area:'釧路', genre:'そば', badge:'', badgeText:'',
    visual:'v-soba', emoji:'🍵',
    name:'とも里 明松（とも里 めいしょう）',
    desc:'釧路栄町の夜そば・酒の肴居酒屋。そばの風味が濃く「本格的な蕎麦」と評される盛りそばと、刺身・焼き鳥・串焼きが揃う夜遅くまで営業の穴場。スモークナスなどユニー…',
    rating:'4.0', votes:'41', rating_src:'google',
    price:'¥2,000〜',
    lat:42.984114, lng:144.387189,
    img:'', article:'tomori', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k80', area:'釧路', genre:'ベーカリー', badge:'hot', badgeText:'🥐 全粒粉クロワッサン・アートのある癒しベーカリー',
    visual:'v-cafe', emoji:'🥐',
    name:'Mon Coeur（モンクール）',
    desc:'釧路米町の住宅街に佇む小さなベーカリーカフェ。地元アーティストの作品と本が飾られた空間で、全粒粉クロワッサンが外国人旅行者に「Totally amazing…',
    rating:'4.5', votes:'67', rating_src:'google',
    price:'¥200〜',
    lat:42.971385, lng:144.374423,
    img:'', article:'monceur', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k81', area:'釧路', genre:'ステーキ', badge:'', badgeText:'',
    visual:'v-yakiniku', emoji:'🥩',
    name:'ステーキ＆ハンバーグ。ばらてぃえ',
    desc:'釧路末広町の深夜型ステーキ＆ハンバーグレストラン。夜8時〜翌4時という独特の営業時間で居酒屋の後の締めステーキを楽しむ地元客が多い。和牛100%ハンバーグを…',
    rating:'4.1', votes:'63', rating_src:'google',
    price:'¥3,000〜',
    lat:42.983235, lng:144.387449,
    img:'', article:'baratier', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k82', area:'釧路', genre:'居酒屋', badge:'hot', badgeText:'🌅 Google評価4.5・昭和レトロ×英語メニューあり',
    visual:'v-izakaya', emoji:'🌅',
    name:'釧路夕日酒場',
    desc:'釧路北大通の昭和レトロ感漂う居酒屋。外国人旅行者から「As a Gaijin I was truly impressed」「English menu is …',
    rating:'4.5', votes:'95', rating_src:'google',
    price:'¥2,500〜',
    lat:42.982569, lng:144.384763,
    img:'', article:'yuyake', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k83', area:'釧路', genre:'ネパールカレー', badge:'hot', badgeText:'🫓 Google評価4.5×314件・ネパール人シェフの本格カレー',
    visual:'v-yoshoku', emoji:'🫓',
    name:'Bistarai Bistarai Kushiro（ビスタライ）',
    desc:'釧路鳥取大通のネパール人経営のカレー店。Google評価4.5（314件）を誇り「Best curry we\'ve had in Hokkaido」と旅行者…',
    rating:'4.5', votes:'314', rating_src:'google',
    price:'¥1,000〜',
    lat:43.011957, lng:144.357713,
    img:'', article:'bistarai', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k84', area:'釧路', genre:'イタリアン', badge:'hot', badgeText:'🍝 道東ウニのパスタ・釧路最高イタリアン',
    visual:'v-cafe', emoji:'🍝',
    name:'est di Zuppa（エスト・ディ・ズッパ）',
    desc:'釧路末広町の本格イタリアン。外国人旅行者から「The Best Italian in Hokkaido hands down」と絶賛される。道東産ウニのトマ…',
    rating:'3.9', votes:'89', rating_src:'google',
    price:'¥2,500〜',
    lat:42.985491, lng:144.385039,
    img:'', article:'estzuppa', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k85', area:'釧路', genre:'居酒屋', badge:'hot', badgeText:'🍶 Google評価4.7×290件・外国人が大絶賛',
    visual:'v-izakaya', emoji:'🍶',
    name:'くしろ大衆居酒屋二代目 晴れる家',
    desc:'末広町LSビル地下の海鮮居酒屋。Google評価4.7（290件）を誇り、外国人旅行者から「If you are in Kushiro, go her…',
    rating:'4.7', votes:'290', rating_src:'google',
    price:'¥2,500〜',
    lat:42.9827933, lng:144.3873486,
    img:'', article:'hareruka', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k86', area:'釧路', genre:'居酒屋', badge:'hot', badgeText:'🦞 口コミ481件・クジラ刺しも揃う海鮮居酒屋',
    visual:'v-izakaya', emoji:'🦞',
    name:'チャリンコ',
    desc:'釧路栄町の海鮮居酒屋。口コミ481件と釧路市内でも信頼度の高い人気店。刺身盛りにはクジラも含まれるユニークな品揃えで、ホッケ・ツブ焼き・カキ焼きなど道…',
    rating:'4.1', votes:'481', rating_src:'google',
    price:'¥3,000〜',
    lat:42.983538, lng:144.387951,
    img:'', article:'charinko', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k87', area:'釧路', genre:'居酒屋', badge:'hot', badgeText:'🍶 Google評価4.7・釧路地酒と職人刺身',
    visual:'v-izakaya', emoji:'🍶',
    name:'飲み喰い ひでやん',
    desc:'釧路川上町の日本料理系居酒屋。職人が手がける刺身と釧路・根室の地酒セレクションが評判で、韓国からの旅行者も含め好評を博す。誕生日の地酒（生日本酒）を紹…',
    rating:'4.7', votes:'6', rating_src:'google',
    price:'¥3,500〜',
    lat:42.983964, lng:144.389391,
    img:'', article:'hideyanta', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k88', area:'釧路', genre:'串揚げ', badge:'hot', badgeText:'🍢 厚岸牡蠣フライ100個売切れ・予約必須の串揚げ名店',
    visual:'v-izakaya', emoji:'🍢',
    name:'のどか',
    desc:'釧路栄町の串揚げと海鮮の名店。厚岸産牡蠣フライが1時間で100個売り切れたという逸話が有名。記念日・お誕生日利用で毛ガニや海鮮コースをアレンジしてくれ…',
    rating:'4.4', votes:'68', rating_src:'google',
    price:'¥4,000〜',
    lat:42.983014, lng:144.388128,
    img:'', article:'nodoka', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k89', area:'釧路', genre:'居酒屋', badge:'hot', badgeText:'🦀 花咲ガニ・ヒラメ・道産日本酒の旬料理居酒屋',
    visual:'v-izakaya', emoji:'🦀',
    name:'季の味 海道（きのあじ かいどう）',
    desc:'釧路末広町の旬食材を活かした居酒屋。「Opening on August 8th. Specializes in Kushiro local fish…',
    rating:'4.3', votes:'15', rating_src:'google',
    price:'¥4,000〜',
    lat:42.98338, lng:144.386702,
    img:'', article:'setonoaji', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k90', area:'釧路', genre:'居酒屋', badge:'hot', badgeText:'🏮 6.5坪に小店舗が集結・釧路の飲屋街を体験',
    visual:'v-izakaya', emoji:'🏮',
    name:'赤ちょうちん横丁（あかちょうちんよこちょう）',
    desc:'釧路川上町の狭い横丁に飲食小店舗が集結した飲屋横丁。約6.5坪の空間に多様な店舗が入り、年齢を超えた会話が自然と生まれる独特の空間。BAR Spiri…',
    rating:'4.1', votes:'209', rating_src:'google',
    price:'¥2,000〜',
    lat:42.984301, lng:144.389039,
    img:'', article:'akachochin', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k91', area:'釧路', genre:'スイーツ', badge:'hot', badgeText:'🎂 釧路最高のケーキ・お誕生日ケーキで人気',
    visual:'v-sweets', emoji:'🎂',
    name:'Pâtisserie Mille mille（ミルミル）',
    desc:'釧路愛国東のパティスリー。地元のケーキ好きから「釧路最高のケーキ店」と称される人気店。シフォンケーキ・モンブラン・生クリームケーキが看板で、お誕生日ケ…',
    rating:'4.3', votes:'72', rating_src:'google',
    price:'¥400〜',
    lat:43.007584, lng:144.38908,
    img:'', article:'millmille', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k92', area:'釧路', genre:'カフェ', badge:'hot', badgeText:'🌿 MOO温室カフェ・北海道ミルク×港の景色',
    visual:'v-cafe', emoji:'🌿',
    name:'EGG Cafe（エッグカフェ）',
    desc:'フィッシャーマンズワーフMOO内の温室型カフェ。緑に囲まれた幻想的な空間で飲む北海道産フレッシュミルクのカフェラテは「Peaceful, quiet,…',
    rating:'4.5', votes:'40', rating_src:'google',
    price:'¥500〜',
    lat:42.981797, lng:144.38456,
    img:'', article:'eggcafe', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k93', area:'釧路', genre:'寿司', badge:'hot', badgeText:'🍣 Google評価4.4×220件・親方の人柄が光る老舗',
    visual:'v-sushi', emoji:'🍣',
    name:'よしえ寿司',
    desc:'釧路南大通の老舗寿司店。Google評価4.4（220件）を誇り、外国人旅行者からも「The owner and some other guests …',
    rating:'4.4', votes:'220', rating_src:'google',
    price:'¥1,500〜',
    lat:42.978265, lng:144.382872,
    img:'', article:'yoshiesushi', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k94', area:'釧路', genre:'海鮮', badge:'hot', badgeText:'🐟 口コミ536件・さんまんまの元祖的存在',
    visual:'v-sushi', emoji:'🐟',
    name:'魚政（うおまさ）',
    desc:'釧路錦町の海鮮食堂。口コミ536件の信頼店で、釧路名物さんまんまを焼き魚のせご飯スタイルで提供する店として知られる。サンマの脂の乗りを活かした自家製タ…',
    rating:'4.1', votes:'536', rating_src:'google',
    price:'¥800〜',
    lat:42.98166, lng:144.383437,
    img:'', article:'uomasa', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k95', area:'釧路', genre:'中華料理', badge:'hot', badgeText:'🥢 口コミ263件・レバニラ餃子が衝撃の美味',
    visual:'v-yoshoku', emoji:'🥢',
    name:'龍花飯店（りゅうかはんてん）',
    desc:'釧路町光和エリアの人気中華飯店。ランチ時は駐車場が満車になるほどの繁盛ぶり。特上チャーハン・海老チリが看板で、レバニラ入り餃子が「What is th…',
    rating:'4.2', votes:'263', rating_src:'google',
    price:'¥800〜',
    lat:43.005682, lng:144.402067,
    img:'', article:'ryukahan', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k96', area:'釧路', genre:'中華料理', badge:'', badgeText:'',
    visual:'v-yoshoku', emoji:'🌶️',
    name:'四川料理 聚客縁（しゅうかくえん）',
    desc:'釧路白金町の本格四川料理店。ランチセット880円〜とリーズナブルでボリューム満点のメニューが地元ファミリーに人気。麻婆豆腐・担々麺・よだれ鶏など本場四…',
    rating:'4.1', votes:'175', rating_src:'google',
    price:'¥880〜',
    lat:42.992784, lng:144.38027,
    img:'', article:'shukaken', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k97', area:'釧路', genre:'イタリアン', badge:'hot', badgeText:'🍝 住宅街の本格パスタ・Google評価4.6',
    visual:'v-cafe', emoji:'🍝',
    name:'アトレ（Attore）',
    desc:'釧路愛国東の住宅街に佇む本格イタリアンレストラン。Google評価4.6（11件）を誇り「Very very delicious pasta. I l…',
    rating:'4.6', votes:'11', rating_src:'google',
    price:'¥1,200〜',
    lat:43.00894, lng:144.394474,
    img:'', article:'attore', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k98', area:'釧路', genre:'カフェ', badge:'', badgeText:'',
    visual:'v-cafe', emoji:'☕',
    name:'はぱぱカフェ',
    desc:'釧路愛国東の落ち着いた雰囲気のカフェバー。照明が抑えられた心地よい空間でランチ〜深夜まで幅広く対応。オムハヤシ・ロコモコ・ピザなど多彩なフードと、外で…',
    rating:'4.4', votes:'42', rating_src:'google',
    price:'¥900〜',
    lat:43.005711, lng:144.393362,
    img:'', article:'hapapacafe', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k99', area:'釧路', genre:'居酒屋', badge:'hot', badgeText:'🍜 MOO内・釧路ラーメン×地酒×海鮮のバー',
    visual:'v-izakaya', emoji:'🍜',
    name:'大人の酒場 DABESA（だべさ）',
    desc:'フィッシャーマンズワーフMOO 2階「港の屋台」内のバー。釧路ラーメンと地酒・海鮮おつまみを組み合わせた珍しいスタイル。「釧路ラーメンを提供しながら地…',
    rating:'4.7', votes:'3', rating_src:'google',
    price:'¥2,000〜',
    lat:42.981807, lng:144.383513,
    img:'', article:'dabesa', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k100', area:'釧路', genre:'ラーメン', badge:'hot', badgeText:'🍜 武双が末広町に出店・釧路ラーメン百名店系',
    visual:'v-ramen', emoji:'🍜',
    name:'麺屋 武双 末広店（むそう）',
    desc:'東釧路エリアで実績を誇る「麺屋武双」の末広町出店。魚醤ベースのラーメンが評判で食べログ北海道百名店にも選出された系列店。釧路市街地のど真ん中でアクセス…',
    rating:'4.2', votes:'150', rating_src:'google',
    price:'¥900〜',
    lat:42.9839, lng:144.3868,
    img:'', article:'musou2', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k101', area:'釧路', genre:'寿司', badge:'', badgeText:'',
    visual:'v-sushi', emoji:'🍊',
    name:'夏みかん（なつみかん）寿司',
    desc:'釧路中部エリアの地元に愛される寿司店。厚岸産牡蠣・道東の旬ネタを使ったにぎりが評判で、リーズナブルなランチセットが地元ファミリーに人気。気さくな大将の…',
    rating:'4.2', votes:'80', rating_src:'google',
    price:'¥2,000〜',
    lat:42.9858, lng:144.3855,
    img:'', article:'hapapacafe2', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k102', area:'釧路', genre:'海鮮', badge:'', badgeText:'',
    visual:'v-sushi', emoji:'⚓',
    name:'ふね（鮮魚食堂）',
    desc:'釧路栄町エリアの鮮魚食堂。釧路港で水揚げされた当日の鮮魚を使った海鮮丼・刺身定食が地元民に人気。漁師町らしい豪快な盛り付けで観光客にも評判。ランチから…',
    rating:'4.1', votes:'60', rating_src:'google',
    price:'¥1,200〜',
    lat:42.9842, lng:144.3882,
    img:'', article:'fune', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k103', area:'釧路', genre:'居酒屋', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🌅',
    name:'いろはにほへと 幣舞橋店',
    desc:'幣舞橋すぐ横の全国チェーン居酒屋。全国チェーンながら釧路産食材を活かしたメニューも揃い、幣舞橋を眺めながら飲める好立地が観光客にも便利。飲み放題コース…',
    rating:'3.7', votes:'200', rating_src:'google',
    price:'¥2,500〜',
    lat:42.9824, lng:144.3862,
    img:'', article:'irohanihoheto', large:false,
    hero_style:'',
    body:``
  },
  {
    id:'k104', area:'釧路', genre:'居酒屋', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🌊',
    name:'海乃（うみの）',
    desc:'釧路末広町の海鮮居酒屋。釧路港で水揚げされた新鮮な魚介を中心に、北海道産の食材にこだわった料理が揃う。カウンター中心の落ち着いた空間でゆっくり飲める一…',
    rating:'4.0', votes:'45', rating_src:'google',
    price:'¥3,000〜',
    lat:42.9835, lng:144.3875,
    img:'', article:'umino', large:false,
    hero_style:'',
    body:``
  },

  /* ─────────────── 新規追加15店舗（釧路駅から1km以上） ─────────────── */
  {
    id:'new01', area:'釧路', genre:'海鮮・和食', badge:'', badgeText:'',
    visual:'v-seafood', emoji:'🍱',
    name:'釧路ふく亭 櫂梯楼 芦野店',
    desc:'道東の新鮮な魚介を創作和食に昇華。ランチから宴会まで対応する芦野の人気店。',
    rating:'3.9', votes:'150', rating_src:'tabelog',
    price:'¥1,000〜',
    lat:43.0085, lng:144.3651,
    img:'', article:'kaiteirou', large:false,
    hero_style:'', body:``
  },
  {
    id:'new02', area:'釧路', genre:'居酒屋・海鮮', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🦀',
    name:'やん衆 釧路食堂 芦野店',
    desc:'あふれるイクラ丼が名物。芦野エリアのリーズナブルな海鮮居酒屋。',
    rating:'3.7', votes:'200', rating_src:'tabelog',
    price:'¥2,500〜',
    lat:43.0072, lng:144.3588,
    img:'', article:'yanshokudo', large:false,
    hero_style:'', body:``
  },
  {
    id:'new03', area:'釧路', genre:'焼肉・ホルモン', badge:'', badgeText:'',
    visual:'v-yakiniku', emoji:'🥩',
    name:'焼肉菜包 朴然 春採店',
    desc:'春採湖南側の焼肉店。A5道産和牛からホルモンまで年中無休で提供。',
    rating:'3.8', votes:'300', rating_src:'tabelog',
    price:'¥2,000〜',
    lat:42.9748, lng:144.3782,
    img:'', article:'bokuzen', large:false,
    hero_style:'', body:``
  },
  {
    id:'new04', area:'釧路', genre:'ラーメン', badge:'', badgeText:'',
    visual:'v-ramen', emoji:'🍜',
    name:'ラーメン純水 春採本店',
    desc:'自家製麺×こだわり純水スープが評判。売り切れ次第閉店の春採の名店。',
    rating:'4.0', votes:'400', rating_src:'tabelog',
    price:'¥850〜',
    lat:42.9755, lng:144.3790,
    img:'', article:'junsui', large:false,
    hero_style:'', body:``
  },
  {
    id:'new05', area:'釧路', genre:'炉端焼き・居酒屋', badge:'', badgeText:'',
    visual:'v-robata', emoji:'🔥',
    name:'炭焼炉端 ちくぜん',
    desc:'備長炭の炉端焼きと地酒「福司」が評判。2020年オープンの新進気鋭の一軒。',
    rating:'3.9', votes:'120', rating_src:'tabelog',
    price:'¥4,000〜',
    lat:42.9903, lng:144.3745,
    img:'', article:'chikuzen', large:false,
    hero_style:'', body:``
  },
  {
    id:'new06', area:'釧路', genre:'焼き鳥・居酒屋', badge:'hot', badgeText:'🔴 B-1G受賞',
    visual:'v-yakitori', emoji:'🍢',
    name:'炭焼鮮家 たま鳥',
    desc:'B-1グランプリ受賞「白たまザンタレ」が名物。昭和55年創業の老舗焼き鳥店。',
    rating:'4.0', votes:'350', rating_src:'tabelog',
    price:'¥3,000〜',
    lat:42.9680, lng:144.3722,
    img:'', article:'tamadori', large:false,
    hero_style:'', body:``
  },
  {
    id:'new07', area:'釧路', genre:'居酒屋・海鮮', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🐟',
    name:'居酒屋こうぞう',
    desc:'釧路近海の新鮮な魚介と串焼きが評判の地元密着型居酒屋。釧路町光和。',
    rating:'3.8', votes:'180', rating_src:'tabelog',
    price:'¥3,000〜',
    lat:42.9630, lng:144.4400,
    img:'', article:'kouzou', large:false,
    hero_style:'', body:``
  },
  {
    id:'new08', area:'釧路', genre:'居酒屋・食堂', badge:'', badgeText:'',
    visual:'v-shokudo', emoji:'🌅',
    name:'食事の店 星が浦 日の出',
    desc:'注文後にその場で魚を捌く35年超の老舗食堂。星が浦エリアの地元密着店。',
    rating:'3.7', votes:'100', rating_src:'tabelog',
    price:'¥3,000〜',
    lat:42.9950, lng:144.4340,
    img:'', article:'hinode', large:false,
    hero_style:'', body:``
  },
  {
    id:'new09', area:'釧路', genre:'洋食', badge:'', badgeText:'',
    visual:'v-western', emoji:'🍳',
    name:'レストラン八白 星が浦店',
    desc:'土鍋ハンバーグと1ポンドステーキが人気の老舗洋食店。星が浦40年の歴史。',
    rating:'4.0', votes:'450', rating_src:'tabelog',
    price:'¥1,500〜',
    lat:42.9928, lng:144.4328,
    img:'', article:'happaku', large:false,
    hero_style:'', body:``
  },
  {
    id:'new10', area:'釧路', genre:'焼き鳥・しゃぶしゃぶ', badge:'', badgeText:'',
    visual:'v-yakitori', emoji:'🍗',
    name:'炭火ダイニング とりの介 釧路鳥取店',
    desc:'全席完全個室132席。備長炭焼き鳥＋ラムしゃぶ食べ放題コースが人気の鳥取大通の大型居酒屋。',
    rating:'3.8', votes:'280', rating_src:'tabelog',
    price:'¥3,500〜',
    lat:42.9940, lng:144.3543,
    img:'', article:'torinosuke', large:false,
    hero_style:'', body:``
  },
  {
    id:'new11', area:'釧路', genre:'そば・定食', badge:'', badgeText:'',
    visual:'v-soba', emoji:'🍵',
    name:'そば乃青山亭',
    desc:'釧路湿原のヤマベ天ぷら使用「しつげん天ざる」が夏の名物。鶴野の風情ある蕎麦屋。',
    rating:'3.9', votes:'200', rating_src:'tabelog',
    price:'¥1,000〜',
    lat:43.0052, lng:144.3474,
    img:'', article:'aoyamatei', large:false,
    hero_style:'', body:``
  },
  {
    id:'new12', area:'釧路', genre:'居酒屋・海鮮', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🦞',
    name:'居酒屋 釧之助',
    desc:'全席禁煙・駐車場完備の鳥取大通の海鮮居酒屋。地元常連客に愛されるテイクアウト対応の一軒。',
    rating:'3.7', votes:'90', rating_src:'tabelog',
    price:'¥2,500〜',
    lat:42.9958, lng:144.3558,
    img:'', article:'kushinjyo', large:false,
    hero_style:'', body:``
  },
  {
    id:'new13', area:'釧路', genre:'居酒屋・和食', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🍶',
    name:'居酒屋 かくれんぼ',
    desc:'鳥取大通の隠れ家的居酒屋。旬の一品料理と厳選日本酒が揃うこぢんまりした名店。',
    rating:'3.8', votes:'80', rating_src:'tabelog',
    price:'¥3,000〜',
    lat:42.9972, lng:144.3578,
    img:'', article:'kakurenbo', large:false,
    hero_style:'', body:``
  },
  {
    id:'new14', area:'釧路', genre:'海鮮・食堂', badge:'hot', badgeText:'🔴 仲買人直営',
    visual:'v-seafood', emoji:'🦑',
    name:'くしろ港町 釧ちゃん食堂',
    desc:'仲買人直営のくしろ水産センター内食堂。早朝7時から超新鮮な海鮮丼が楽しめる。',
    rating:'4.1', votes:'350', rating_src:'tabelog',
    price:'¥1,200〜',
    lat:42.9751, lng:144.3965,
    img:'', article:'kuchanchoushokudo', large:false,
    hero_style:'', body:``
  },
  {
    id:'new15', area:'釧路', genre:'居酒屋・個室', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🏮',
    name:'山の猿 芦野店',
    desc:'全席掘りごたつ個室の居酒屋。120分飲み放題コースと炭火焼き鳥で芦野エリアの宴会を盛り上げる。',
    rating:'3.7', votes:'160', rating_src:'tabelog',
    price:'¥3,000〜',
    lat:43.0098, lng:144.3632,
    img:'', article:'yamanosaru', large:false,
    hero_style:'', body:``
  },

  // ── Batch 2 (new16–new30) ─────────────────────────────────────────────
  {
    id:'new16', area:'釧路', genre:'ラーメン', badge:'', badgeText:'',
    visual:'v-ramen', emoji:'🍜',
    name:'麺や北町',
    desc:'自家製麺4種を使う鳥取大通の本格ラーメン店。釧路ご当地細麺からエゾシカ担々麺まで個性豊かな一杯を提供。',
    rating:'3.8', votes:'80', rating_src:'tabelog',
    price:'¥680〜',
    lat:42.9990, lng:144.3505,
    img:'kitamachi/01_main.jpg', article:'kitamachi', large:false,
    hero_style:'', body:``
  },

  {
    id:'new17', area:'釧路', genre:'定食・居酒屋', badge:'', badgeText:'',
    visual:'v-teishoku', emoji:'🍱',
    name:'定食・居酒屋 武蔵',
    desc:'鳥取大通8丁目の地域密着型定食・居酒屋。ボリューム満点の昼定食と夜の居酒屋メニューで地元常連客に愛される一軒。',
    rating:'3.7', votes:'60', rating_src:'tabelog',
    price:'¥800〜',
    lat:43.0012, lng:144.3492,
    img:'musashi/01_main.jpg', article:'musashi', large:false,
    hero_style:'', body:``
  },

  {
    id:'new18', area:'釧路', genre:'そば・うどん', badge:'', badgeText:'',
    visual:'v-soba', emoji:'🍜',
    name:'かまくら',
    desc:'鳥取大通9丁目の手打ちそば専門店。北海道産そば粉の香りと昆布出汁の繊細なバランスが地元常連に評価される一軒。',
    rating:'3.8', votes:'70', rating_src:'tabelog',
    price:'¥700〜',
    lat:43.0025, lng:144.3522,
    img:'kamakura/01_main.jpg', article:'kamakura', large:false,
    hero_style:'', body:``
  },

  {
    id:'new19', area:'釧路', genre:'そば・うどん', badge:'', badgeText:'',
    visual:'v-soba', emoji:'🍵',
    name:'鶴乃庵',
    desc:'鳥取大通5丁目の老舗そば・うどん店。長年地域の食卓を支えてきた懐かしい味と丁寧な仕事が地元客を引き寄せる安心の一軒。',
    rating:'3.8', votes:'80', rating_src:'tabelog',
    price:'¥700〜',
    lat:42.9948, lng:144.3519,
    img:'tsurunoan/01_main.jpg', article:'tsurunoan', large:false,
    hero_style:'', body:``
  },

  {
    id:'new20', area:'釧路', genre:'中華料理', badge:'', badgeText:'',
    visual:'v-chinese', emoji:'🥟',
    name:'北京亭',
    desc:'鳥取大通8丁目の地元密着型中華料理店。パリッとジューシーな餃子とパラパラチャーハンがリーズナブルな価格で楽しめる。',
    rating:'3.7', votes:'70', rating_src:'tabelog',
    price:'¥700〜',
    lat:43.0014, lng:144.3491,
    img:'pekinteii/01_main.jpg', article:'pekinteii', large:false,
    hero_style:'', body:``
  },

  {
    id:'new21', area:'釧路', genre:'洋食・食堂', badge:'', badgeText:'',
    visual:'v-western', emoji:'🍽',
    name:'ポーシェール',
    desc:'鳥取大通8丁目の洋食・食堂。ハンバーグ・スパゲティ・カツなど定番洋食がランチからディナーまで地域住民の食卓を支える。',
    rating:'3.7', votes:'60', rating_src:'tabelog',
    price:'¥800〜',
    lat:43.0016, lng:144.3552,
    img:'porchere/01_main.jpg', article:'porchere', large:false,
    hero_style:'', body:``
  },

  {
    id:'new22', area:'釧路', genre:'ラーメン', badge:'', badgeText:'',
    visual:'v-ramen', emoji:'🍜',
    name:'麺屋さいか',
    desc:'大楽毛エリアの人気ラーメン専門店。厳選素材で丁寧に取ったスープとこだわりの麺が道東ラーメンファンを引き寄せる隠れた名店。',
    rating:'3.9', votes:'100', rating_src:'tabelog',
    price:'¥700〜',
    lat:42.9878, lng:144.3052,
    img:'saika/01_main.jpg', article:'saika', large:false,
    hero_style:'', body:``
  },

  {
    id:'new23', area:'釧路', genre:'お好み焼き', badge:'', badgeText:'',
    visual:'v-okonomiyaki', emoji:'🥞',
    name:'みのりや',
    desc:'大楽毛エリアのお好み焼き名店。ふんわりもちもちの生地と北海道産豚バラが絶妙で、地元の常連が通い続ける人気店。',
    rating:'3.8', votes:'90', rating_src:'tabelog',
    price:'¥700〜',
    lat:42.9875, lng:144.3058,
    img:'minoriya/01_main.jpg', article:'minoriya', large:false,
    hero_style:'', body:``
  },

  {
    id:'new24', area:'釧路', genre:'そば・うどん', badge:'', badgeText:'',
    visual:'v-soba', emoji:'🍵',
    name:'長寿庵 分店',
    desc:'昭和中央エリアのそば・うどん店。クロレラを練り込んだ緑のグリーン麺が名物で、釧路ならではのユニークな一杯が楽しめる老舗の分店。',
    rating:'3.8', votes:'80', rating_src:'tabelog',
    price:'¥650〜',
    lat:42.9972, lng:144.3748,
    img:'chojuan/01_main.jpg', article:'chojuan', large:false,
    hero_style:'', body:``
  },

  {
    id:'new25', area:'釧路', genre:'洋食・パスタ', badge:'', badgeText:'',
    visual:'v-western', emoji:'🍝',
    name:'レストラン サンクス・ア・ロット',
    desc:'昭和中央エリアの本格洋食・パスタレストラン。こだわりのスープと丁寧な火入れの洋食メニューが地域の食通に評価される一軒。',
    rating:'3.8', votes:'100', rating_src:'tabelog',
    price:'¥900〜',
    lat:42.9988, lng:144.3785,
    img:'thanksalot/01_main.jpg', article:'thanksalot', large:false,
    hero_style:'', body:``
  },

  {
    id:'new26', area:'釧路', genre:'炉端焼き', badge:'', badgeText:'',
    visual:'v-robata', emoji:'🔥',
    name:'炉ばたけんたろう',
    desc:'緑ヶ岡エリアの炉端焼き居酒屋。炭火で焼く道産海鮮・野菜の香ばしさと温かな雰囲気が地元客を引き寄せる釧路の夜の名店。',
    rating:'3.8', votes:'90', rating_src:'tabelog',
    price:'¥2,500〜',
    lat:42.9978, lng:144.3605,
    img:'kentaro/01_main.jpg', article:'kentaro', large:false,
    hero_style:'', body:``
  },

  {
    id:'new27', area:'釧路', genre:'カフェ・北欧料理', badge:'hot', badgeText:'🔴 北欧カフェ',
    visual:'v-cafe', emoji:'☕',
    name:'カフェフィーカ',
    desc:'緑ヶ岡の北欧スタイルカフェ。釧路唯一の本格スモーブロー（北欧オープンサンド）とこだわりコーヒーが楽しめる特別な一軒。',
    rating:'3.9', votes:'100', rating_src:'tabelog',
    price:'¥900〜',
    lat:43.0024, lng:144.3639,
    img:'cafefika/01_main.jpg', article:'cafefika', large:false,
    hero_style:'', body:``
  },

  {
    id:'new28', area:'釧路', genre:'カフェ・喫茶', badge:'', badgeText:'',
    visual:'v-cafe', emoji:'🌿',
    name:'ペパーミントレーン',
    desc:'緑ヶ岡3丁目の人気カフェ。ペパーミントをテーマにした清涼感ある空間でこだわりコーヒーと手作りスイーツが楽しめる地元密着店。',
    rating:'3.8', votes:'80', rating_src:'tabelog',
    price:'¥500〜',
    lat:42.9989, lng:144.3624,
    img:'pepperminlane/01_main.jpg', article:'pepperminlane', large:false,
    hero_style:'', body:``
  },

  {
    id:'new29', area:'釧路', genre:'喫茶店・カフェ', badge:'', badgeText:'',
    visual:'v-cafe', emoji:'☕',
    name:'博珈琲',
    desc:'昭和中央エリアの本格喫茶店。自家焙煎のコーヒーへの情熱が光る釧路の喫茶文化を今に伝える一軒で、朝8時からのモーニングも評判。',
    rating:'3.8', votes:'70', rating_src:'tabelog',
    price:'¥500〜',
    lat:42.9942, lng:144.3713,
    img:'hakucoffee/01_main.jpg', article:'hakucoffee', large:false,
    hero_style:'', body:``
  },

  {
    id:'new30', area:'釧路', genre:'喫茶店・ピザ', badge:'', badgeText:'',
    visual:'v-cafe', emoji:'🍕',
    name:'デシベル',
    desc:'大楽毛エリアの個性派喫茶店・ピザ店。音楽が流れる落ち着いた空間でもちもちピザとこだわりコーヒーが楽しめる大楽毛の隠れ家。',
    rating:'3.8', votes:'70', rating_src:'tabelog',
    price:'¥600〜',
    lat:42.9880, lng:144.3055,
    img:'decibel/01_main.jpg', article:'decibel', large:false,
    hero_style:'', body:``
  },

  // ── Batch 3 (new31–new45) ─────────────────────────────────────────────
  {
    id:'new31', area:'釧路', genre:'居酒屋・炉端', badge:'', badgeText:'',
    visual:'v-robata', emoji:'🔥',
    name:'大衆酒場 炉ばた浜小屋',
    desc:'北大通エリアの大衆炉端居酒屋。炭火で焼く道産ホタテ・ほっけ・海鮮が評判で、地元の常連が通う活気ある一軒。',
    rating:'3.7', votes:'70', rating_src:'tabelog',
    price:'¥2,000〜',
    lat:42.9870, lng:144.3490,
    img:'hamakoya/01_main.jpg', article:'hamakoya', large:false,
    hero_style:'', body:``
  },
  {
    id:'new32', area:'釧路', genre:'海鮮・和食', badge:'', badgeText:'',
    visual:'v-kaisen', emoji:'🐟',
    name:'くしろ駒形家',
    desc:'栄町の海鮮・和食店。釧路産の旬の海の幸を乗せた海鮮丼と刺身定食が評判で、地元の食通が足を運ぶ実力店。',
    rating:'3.8', votes:'80', rating_src:'tabelog',
    price:'¥1,200〜',
    lat:42.9760, lng:144.3850,
    img:'komabegaya/01_main.jpg', article:'komabegaya', large:false,
    hero_style:'', body:``
  },
  {
    id:'new33', area:'釧路', genre:'ダイニングバー', badge:'', badgeText:'',
    visual:'v-dining', emoji:'🍷',
    name:'Northern Restaurant Porker',
    desc:'栄町の洗練されたダイニングバー。道産豚を使った創作料理と厳選ワイン・カクテルが楽しめる大人の夜の場所。',
    rating:'3.9', votes:'90', rating_src:'tabelog',
    price:'¥3,000〜',
    lat:42.9770, lng:144.3770,
    img:'porker/01_main.jpg', article:'porker', large:false,
    hero_style:'', body:``
  },
  {
    id:'new34', area:'釧路', genre:'海鮮・炉端', badge:'', badgeText:'',
    visual:'v-robata', emoji:'🦞',
    name:'海鮮炉端 釧路っ子',
    desc:'栄町の海鮮炉端居酒屋。道産海鮮を炭火でじっくり焼く本格炉端スタイルが楽しめる年中無休の実力店。',
    rating:'3.8', votes:'75', rating_src:'tabelog',
    price:'¥2,500〜',
    lat:42.9770, lng:144.3800,
    img:'kushirokko/01_main.jpg', article:'kushirokko', large:false,
    hero_style:'', body:``
  },
  {
    id:'new35', area:'釧路', genre:'ジンギスカン', badge:'', badgeText:'',
    visual:'v-bbq', emoji:'🐑',
    name:'釧路ジンギスカン総本店',
    desc:'栄町のジンギスカン専門店。道産ラム肉と新鮮野菜を専用鍋で焼く北海道の食文化を体験できる人気店。',
    rating:'3.8', votes:'85', rating_src:'tabelog',
    price:'¥2,000〜',
    lat:42.9770, lng:144.3780,
    img:'jingisukan/01_main.jpg', article:'jingisukan', large:false,
    hero_style:'', body:``
  },
  {
    id:'new36', area:'釧路', genre:'鉄板焼き', badge:'', badgeText:'',
    visual:'v-teppan', emoji:'🥩',
    name:'鉄板焼 晃',
    desc:'末広町の鉄板焼き専門店。シェフの前で焼き上げる道産和牛・海鮮の鉄板焼きが評判の特別なディナースポット。',
    rating:'3.9', votes:'85', rating_src:'tabelog',
    price:'¥3,500〜',
    lat:42.9780, lng:144.3750,
    img:'teppanyakikoh/01_main.jpg', article:'teppanyakikoh', large:false,
    hero_style:'', body:``
  },
  {
    id:'new37', area:'釧路', genre:'カクテル・バー', badge:'', badgeText:'',
    visual:'v-bar', emoji:'🍸',
    name:'Cocktail Dining ステア',
    desc:'栄町の洗練されたカクテルダイニング。バーテンダーが創る北海道素材のオリジナルカクテルと料理が融合した大人の夜。',
    rating:'3.9', votes:'90', rating_src:'tabelog',
    price:'¥3,000〜',
    lat:42.9780, lng:144.3740,
    img:'stear/01_main.jpg', article:'stear', large:false,
    hero_style:'', body:``
  },
  {
    id:'new38', area:'釧路', genre:'居酒屋', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🍺',
    name:'居酒屋ダイニング あひる',
    desc:'栄町のアットホームな居酒屋ダイニング。道産食材の創作居酒屋メニューとリーズナブルな価格が地元の常連に人気。',
    rating:'3.8', votes:'75', rating_src:'tabelog',
    price:'¥2,000〜',
    lat:42.9770, lng:144.3810,
    img:'ahiru/01_main.jpg', article:'ahiru', large:false,
    hero_style:'', body:``
  },
  {
    id:'new39', area:'釧路', genre:'焼肉・ステーキ', badge:'', badgeText:'',
    visual:'v-yakiniku', emoji:'🥩',
    name:'阿寒モルト牛 昭和店',
    desc:'昭和エリアの焼肉・ステーキ店。釧路・阿寒地区で麦芽かすで育てたモルト牛の焼肉・ステーキが絶品の名店。',
    rating:'3.9', votes:'100', rating_src:'tabelog',
    price:'¥3,000〜',
    lat:43.0030, lng:144.3670,
    img:'akanmolt/01_main.jpg', article:'akanmolt', large:false,
    hero_style:'', body:``
  },
  {
    id:'new40', area:'釧路', genre:'洋食・炉端', badge:'', badgeText:'',
    visual:'v-robata', emoji:'🔥',
    name:'炉ばたキッチン RICASA',
    desc:'栄町の洋食と炉端が融合したキッチン。炭火炉端の香ばしさとフレンチの技法が出会う独創的なメニューが評判。',
    rating:'3.9', votes:'90', rating_src:'tabelog',
    price:'¥2,500〜',
    lat:42.9770, lng:144.3810,
    img:'ricasa/01_main.jpg', article:'ricasa', large:false,
    hero_style:'', body:``
  },
  {
    id:'new41', area:'釧路', genre:'居酒屋・和食', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🍶',
    name:'瓢',
    desc:'末広町の老舗居酒屋。丁寧に作られた和食と厳選された地酒を静かに楽しめる、釧路の本物の居酒屋文化を体現する一軒。',
    rating:'3.9', votes:'80', rating_src:'tabelog',
    price:'¥2,500〜',
    lat:42.9770, lng:144.3760,
    img:'hyotan/01_main.jpg', article:'hyotan', large:false,
    hero_style:'', body:``
  },
  {
    id:'new42', area:'釧路', genre:'居酒屋', badge:'', badgeText:'',
    visual:'v-izakaya', emoji:'🍺',
    name:'酒楼 玉響',
    desc:'末広町の日本酒居酒屋。全国銘柄酒と釧路地酒が揃い、道産料理との相性を楽しめる日本酒好きのための隠れ家。',
    rating:'3.8', votes:'70', rating_src:'tabelog',
    price:'¥2,000〜',
    lat:42.9750, lng:144.3810,
    img:'tamayura/01_main.jpg', article:'tamayura', large:false,
    hero_style:'', body:``
  },
  {
    id:'new43', area:'釧路', genre:'炉端焼き', badge:'', badgeText:'',
    visual:'v-robata', emoji:'🔥',
    name:'鱗',
    desc:'末広町の老舗炉端焼き名店。釧路の炉端焼き発祥エリアで囲炉裏を囲む本格スタイルを守る評価4.0超えの実力店。',
    rating:'4.0', votes:'100', rating_src:'tabelog',
    price:'¥3,000〜',
    lat:42.9770, lng:144.3740,
    img:'uroko/01_main.jpg', article:'uroko', large:false,
    hero_style:'', body:``
  },
  {
    id:'new44', area:'釧路', genre:'寿司', badge:'', badgeText:'',
    visual:'v-sushi', emoji:'🍣',
    name:'鮨銀扇',
    desc:'末広町の本格鮨店。釧路近海から届く極上食材を握る職人の技と道東の恵みが融合した評価4.0超えの名店。',
    rating:'4.0', votes:'90', rating_src:'tabelog',
    price:'¥4,000〜',
    lat:42.9750, lng:144.3800,
    img:'ginsen/01_main.jpg', article:'ginsen', large:false,
    hero_style:'', body:``
  },
  {
    id:'new45', area:'釧路', genre:'居酒屋・海鮮', badge:'', badgeText:'',
    visual:'v-kaisen', emoji:'🐟',
    name:'小川水産',
    desc:'末広町の水産業者直営海鮮居酒屋。漁港直送の圧倒的な鮮度と価格の海鮮料理が楽しめる評価4.0超えの名店。',
    rating:'4.0', votes:'100', rating_src:'tabelog',
    price:'¥2,500〜',
    lat:42.9750, lng:144.3810,
    img:'ogawamarine/01_main.jpg', article:'ogawamarine', large:false,
    hero_style:'', body:``
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
