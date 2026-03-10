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
    rating:'4.6', votes:'289', price:'¥980〜',
    lat:42.9827, lng:144.3868,
    article:'izumiya', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 80% at 30% 60%,rgba(255,87,34,.65),transparent),radial-gradient(ellipse 50% 50% at 80% 30%,rgba(255,235,59,.3),transparent),linear-gradient(160deg,#1a0e05,#3d1a08);',
    body:`
      <h2 id="about">レストラン泉屋とは</h2>
      <p>北海道釧路市のソウルフード「スパカツ」を世に生み出した元祖。1960年（昭和35年）頃、当時は高価だった豚肉をカツにしてスパゲティに乗せ、寒い釧路でも最後まで熱々で食べられるよう鉄板皿で提供したのが始まりです。今では釧路を代表するご当地グルメとして全国から観光客が訪れます。</p>
      <div class="info-box"><p>📍 釧路市末広町2-28（幣舞橋から徒歩2〜3分）　TEL：0154-24-4611　営業時間：11:00〜21:00（10〜3月は〜20:30）　定休日：月1回火曜不定休</p></div>
      <h2 id="review">実食レビュー</h2>
      <h3>スパカツの正体</h3>
      <p>「ジュージュー！バチバチ！」と音を立てて運ばれてくる鉄板皿。その上にはたっぷりのミートソーススパゲティ、そしてとんかつが鎮座します。北海道産牛豚ひき肉の旨みと玉ねぎの甘みが溶け込んだ濃厚ミートソースは、最後まで熱々のまま楽しめます。デュラムセモリナ粉100%の太麺（1.9mm）がソースをしっかり纏い、食べ応え十分のボリューム感。</p>
      <div class="rating-row">
        <div class="rating-item"><div class="rating-num">4.6</div><div class="rating-label">総合評価</div></div>
        <div class="rating-item"><div class="rating-num">4.8</div><div class="rating-label">ソースの深み</div></div>
        <div class="rating-item"><div class="rating-num">4.7</div><div class="rating-label">ボリューム</div></div>
        <div class="rating-item"><div class="rating-num">4.7</div><div class="rating-label">コスパ</div></div>
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
    rating:'4.7', votes:'520', price:'¥800〜',
    lat:42.9742, lng:144.3766,
    article:'maruhira', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 80% at 30% 60%,rgba(255,87,34,.55),transparent),radial-gradient(ellipse 50% 50% at 80% 30%,rgba(255,235,59,.25),transparent),linear-gradient(160deg,#0a0500,#2a0e00);',
    body:`
      <h2 id="about">ラーメンまるひらとは</h2>
      <p>釧路市浦見に店を構える「ラーメンまるひら」は、創業60年以上を誇る釧路ラーメンの代名詞的存在。食べログ ラーメン HOKKAIDO 百名店2024・2025に連続選出されており、全国のラーメンファンが釧路に足を運ぶきっかけにもなっている名店です。2025年3月には札幌にも暖簾分け店がオープンし、即行列の人気を博しています。</p>
      <div class="info-box"><p>📍 釧路市浦見8-1-13　TEL：0154-41-7233　営業時間：9:30〜14:00（売切終了）　定休日：水・木曜（第2・第4木曜）</p></div>
      <h2 id="review">実食レビュー</h2>
      <h3>釧路ラーメンとは何か</h3>
      <p>「釧路ラーメン」の最大の特徴は、かつお節を主体とした魚介出汁ベースのあっさり醤油スープと、卵を使わない極細の縮れ麺です。札幌のこってりラーメンとは真逆の哲学—「漁師に素早く、さっぱりと」という釧路人の気質が生んだ一杯です。まるひらのスープは透き通るような清湯で、口に含んだ瞬間にカツオの風味がふわっと広がります。</p>
      <div class="rating-row">
        <div class="rating-item"><div class="rating-num">4.7</div><div class="rating-label">総合評価</div></div>
        <div class="rating-item"><div class="rating-num">4.9</div><div class="rating-label">スープ</div></div>
        <div class="rating-item"><div class="rating-num">4.7</div><div class="rating-label">麺</div></div>
        <div class="rating-item"><div class="rating-num">4.9</div><div class="rating-label">コスパ</div></div>
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
    rating:'4.5', votes:'312', price:'¥1,200〜',
    lat:42.9721, lng:144.3919,
    article:'chikurouen', large:false,
    hero_style:'background:radial-gradient(ellipse 70% 80% at 60% 50%,rgba(34,139,34,.45),transparent),radial-gradient(ellipse 50% 50% at 20% 80%,rgba(255,235,59,.2),transparent),linear-gradient(135deg,#051a05,#0e2a0e);',
    body:`
      <h2 id="about">竹老園 東家総本店とは</h2>
      <p>1874年（明治7年）小樽にて創業し、のちに釧路へと根を下ろした「竹老園 東家総本店」。150年以上の歴史を刻む北海道最古の蕎麦店のひとつです。春採湖と千代ノ浦海岸を望む落ち着いた場所に店を構え、皇族・著名人をはじめ多くの美食家が訪れてきた格式ある名店です。</p>
      <div class="info-box"><p>📍 釧路市柏木町3-19（春採湖畔）　TEL：0154-41-6291　営業時間：11:00〜16:00（LO 15:30）　定休日：火曜</p></div>
      <h2 id="review">実食レビュー</h2>
      <h3>緑色の蕎麦という驚き</h3>
      <p>東家の蕎麦はまず見た目で驚かせます。更科粉にクロレラを加えた「藪そば」は美しい緑色をしており、「通年新そばのような緑を楽しんでほしい」という初代の想いが込められています。喉越し良くすっと体に入るのどかな一杯です。卵黄をつなぎに用いた「蘭切りそば」は昭和天皇がおかわりを所望したという逸話で知られる名品で、噛めば噛むほど口の中に甘みが広がります。</p>
      <div class="rating-row">
        <div class="rating-item"><div class="rating-num">4.5</div><div class="rating-label">総合評価</div></div>
        <div class="rating-item"><div class="rating-num">4.7</div><div class="rating-label">蕎麦の香り</div></div>
        <div class="rating-item"><div class="rating-num">4.9</div><div class="rating-label">歴史・格式</div></div>
        <div class="rating-item"><div class="rating-num">4.4</div><div class="rating-label">雰囲気</div></div>
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

function renderCards(area) {
  const grid = document.getElementById('cards-grid');
  const visible = STORES.filter(s => !s.hidden);
  const filtered = area === 'all' ? visible : visible.filter(s => s.area === area);
  grid.innerHTML = filtered.map((s, i) => {
    const badgeHtml = s.badge ? `<span class="card-badge ${s.badge}">${s.badgeText}</span>` : '';
    const delay = `d${(i % 6) + 1}`;
    const areaTag = `<span class="card-area-tag">${s.area}</span>`;
    return `
    <div class="card fade-up ${delay}" onclick="location.href='pages/${s.article}.html'">
      <div class="card-visual ${s.visual}">
        <div class="card-visual-overlay"></div>
        <div class="card-emoji">${s.emoji}</div>
        ${badgeHtml}
        ${areaTag}
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-rating">★ ${s.rating}</span>
          <span>(${s.votes}件)</span>
        </div>
        <h3 class="card-name">${s.name}</h3>
        <p class="card-genre">${s.genre}</p>
        <p class="card-desc">${s.desc}</p>
        <div class="card-footer">
          <span class="card-price">${s.price}</span>
          <span class="card-read">詳細を見る <span class="card-arrow">→</span></span>
        </div>
      </div>
    </div>`;
  }).join('');
  // re-observe
  // 既にViewport内にある要素は即座に表示、それ以外はIntersectionObserverに委ねる
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

function filterArea(area) {
  currentArea = area;
  document.querySelectorAll('.area-tab').forEach(t => {
    t.classList.toggle('active', t.textContent.trim() === (area === 'all' ? 'すべて' : area));
  });
  renderCards(area);
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
renderCards('釧路');

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
