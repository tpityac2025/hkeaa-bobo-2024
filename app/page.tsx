"use client";

import { useEffect, useMemo, useState } from "react";

const RAW_EXERCISES = `5 個深呼吸
閉上眼睛聆聽周圍的聲音
與電子產品隔絕 3 分鐘
記錄今日喝了幾多水
如果用顏色代表今天
晒太陽
今天的快樂指數是
品嚐一款自己喜歡的食物
聞咖啡豆
吃自己喜歡的水果
清理手機相冊
整理衣櫃
用 5 分鐘擦 hand cream
按摩一下自己
Yoga
把你現在想到的食物畫下來
去聽 ASMR 放鬆一下
製作一個 Self Care Playlist
記下三樣「唔需要解釋但覺得開心」的事
拍一張有天空的相片
拍下你的朋友
自拍一張並記下你今天做的事
創造一個代表你今日心情的 emoji
為自己畫一張學生證
在別人的帖子下留一句讚美
擁抱一下枕頭
數數有多少個 Ha
大叫最煩心的事
躺平 3 分鐘
如果今天是一個形狀
吃一點甜的東西
你認為世界上最快的東西是
去一個舒服的地方看日落
回收一件物品
去公園找一棵樹的簡介
拾一片樹葉
吃一點酸的東西
睡眠衛生檢查
畫下你昨日睡覺的時間
比昨天早睡 20 分鐘
睡一個好覺
畫下你最喜歡的公仔
記下今天的支出
跳健康操
做一個你想做的家務
睡前一杯熱牛奶或熱水
與朋友交換三件小確幸
打一通電話給你掛念的人
寫低一句你最喜歡的歌詞
為朋友製作專屬歌單
拍下自己今日穿著
想一下自己多久沒有笑
敷面膜或者洗個臉
隨便打開一本書並記下第一句
嘗試寫下一段文字
去茶記食 C 餐
用五種語言寫下你最著緊的價值觀
接聽一個垃圾來電並打招呼
畫出你想到的一種小動物
拿起筆合上眼隨手畫
畫禪繞畫
幫手機換一張背景圖
Follow 一個記錄生活的 Blogger
與朋友說聲謝謝
與朋友聊天 30 分鐘
吃一餐素食
坐 MTR 去一個今星期未到過的站
做 30 分鐘帶氧運動
執枱
逛超市買自己想買的東西
練習說不
寫下你的原則和底線
寫下你的煩惱
錄一段影片給一天後的自己
回顧昨天錄的影片
寫下 10 件你喜歡做的事
獎勵自己一杯飲品
你最喜歡的氣味是
列出自己的優點和需要改善的地方
每隻牙齒刷夠 30 秒
如果你是守護獸
自由、健康、金錢、愛：排一個順序
理想的生活是怎樣的
對一位在意的人表達三項不涉及外貌的欣賞
與朋友交換為彼此挑選的一款香氣
擁抱你的家人
向身邊的人坦白一件事
對你著緊的人說「我愛你」
做一道甜品
跟自己聊天
給自己買一束花
煮一餐飯給自己吃
斷捨離
離線玩一場小恐龍
吃一點辣的東西
制定一星期的時間表
記下未來日子的重要行程
為今年的自己寫一個時間錦囊
寫下你一直渴望成全的夢想
寫下一件尷尬的事
曾經最恐懼的事情是
用腳趾夾一樣東西
你的焦慮源於
如果你現在能時光倒流
寫下最反叛但又令你成長的事情
你的理想型是怎樣的
嘗試吃一種你抗拒的食物
我希望別人第一眼知道的五件事
為今天的自己說一句鼓勵的話
倘若不用考慮後果你最想做甚麼
你是由甚麼構成的
把你覺得不見了的部分畫上去
洗頭
形容一下被愛的感覺
去公園摸一下樹
在街上捕捉一個暖心時刻
冥想
選擇一本書刊閱讀 5 分鐘
上一次哭是甚麼時候
開始學習一個技能
沖個涼
Post 個 Story 發牢騷
存錢，多少也沒有關係
幫陌生人開門
如果你可以跟影子說話
沖涼的時候唱歌
訪問一下鏡中人
喜歡和愛的分別是
如果聲音有重量
描述好朋友身上的氣味
到林村河邊走走
留意從家到學校的風景
聽一個 Podcast
嘗試在 23:00 前睡覺
嘗試欣賞文字的溫度
「joyisnowhere」你看到的是
寫下 10 件想但不敢做的事
發掘身上看似沒用但很有用的部分
量一下體重
AI 不能取代的是
如果你能窺探自己的夢
寫下你發過最奇怪的夢
做一次無聲的「原始吼叫」
回家的路上放下手機
寫幾句只給自己的文字
小時候有過甚麼夢想
找一句喜歡的名言並改寫
如果一個讓你受傷的人向你求助
高歌一曲
Follow 我們的 Instagram
用 Google Maps 探索想去的國家
畫下你在假期想做的事
如果植物會說話
你被甚麼追趕
假如春夏秋冬擬人化
如果從月亮望回地球
如果你有尾巴，它會長怎樣
為你做到的事逐一劃掉
把這一頁給一位陌生人
與毛公仔對話
和自己或朋友講一個笑話
用最舒服的姿勢發呆
決定你朋友的午餐
學廣告牌上的模特兒拍照
關雪櫃門時留意它何時關燈
吃一點鹹的東西
寫下一件中學時光深刻的事
休息一下
買一份禮物給自己
聽古典音樂
寫下 10 件我擅長的事
關心一下身邊的人
畫下你的理想房間
食雪糕
分享一段搞笑短片給身邊的人
回憶的半分鐘
生活中有哪些小確幸
如果鏡子照出的不是樣子
請一位信任的人寫三句欣賞你的話
吃一點苦的東西`;

const NOTES = [
  "慢慢來就可以，今日的你已經做得很好。",
  "你的感受才是主角，沒有標準答案。",
  "留意當下的小事，也是在照顧自己。",
  "休息不是偷懶，是為下一步補充能量。",
  "你有屬於自己的色調，無需迎合別人的調色盤。",
  "每一次把注意力帶回自己，都是溫柔的練習。",
];

const exercises = RAW_EXERCISES.split("\n").map((title, index) => ({
  id: index + 1,
  title,
  note: NOTES[index % NOTES.length],
  category:
    /朋友|家人|身邊|陌生人|著緊/.test(title) ? "連結" :
    /寫|畫|記|形容|回憶|夢|焦慮/.test(title) ? "覺察" :
    /睡|吃|飲|水|運動|按摩|沖|洗|Yoga/.test(title) ? "身體" : "日常",
}));

type SavedState = {
  completed: number[];
  favourites: number[];
  reflections: Record<number, string>;
  dates: string[];
};

const emptyState: SavedState = { completed: [], favourites: [], reflections: {}, dates: [] };
const key = "daily-care-journal-v1";
const todayKey = () => new Date().toLocaleDateString("en-CA");
const dailyIndex = () => {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const now = new Date();
  const day = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return (day - 1 + exercises.length) % exercises.length;
};

export default function Home() {
  const [view, setView] = useState<"today" | "explore" | "journey">("today");
  const [active, setActive] = useState(dailyIndex());
  const [data, setData] = useState<SavedState>(emptyState);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("全部");
  const [hydrated, setHydrated] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const saved = localStorage.getItem(key);
        if (saved) setData(JSON.parse(saved));
      } catch {}
      setHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(key, JSON.stringify(data));
  }, [data, hydrated]);

  const exercise = exercises[active];
  const filtered = useMemo(() => exercises.filter((item) =>
    (filter === "全部" || item.category === filter) &&
    item.title.toLowerCase().includes(query.toLowerCase())
  ), [query, filter]);

  const streak = useMemo(() => {
    const dates = new Set(data.dates);
    let count = 0;
    const cursor = new Date();
    while (dates.has(cursor.toLocaleDateString("en-CA"))) {
      count++;
      cursor.setDate(cursor.getDate() - 1);
    }
    return count;
  }, [data.dates]);

  const isDone = data.completed.includes(exercise.id);
  const isFavourite = data.favourites.includes(exercise.id);

  function pick(index: number) {
    setActive(index);
    setView("today");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleFavourite(id: number) {
    setData((old) => ({
      ...old,
      favourites: old.favourites.includes(id)
        ? old.favourites.filter((item) => item !== id)
        : [...old.favourites, id],
    }));
  }

  function completeToday() {
    const date = todayKey();
    setData((old) => ({
      ...old,
      completed: old.completed.includes(exercise.id) ? old.completed : [...old.completed, exercise.id],
      dates: old.dates.includes(date) ? old.dates : [...old.dates, date],
    }));
    setModal(false);
  }

  return (
    <main>
      <header className="site-header">
        <button className="brand" onClick={() => setView("today")}>每日照顧簿簿</button>
        <nav aria-label="主要選單">
          {[
            ["today", "今日練習"],
            ["explore", "探索 180"],
            ["journey", "我的足跡"],
          ].map(([id, label]) => (
            <button key={id} className={view === id ? "active" : ""} onClick={() => setView(id as typeof view)}>
              {label}
            </button>
          ))}
        </nav>
      </header>

      {view === "today" && (
        <section className="today-view">
          <div className="intro">
            <span className="day-label">DAY {String(exercise.id).padStart(3, "0")}</span>
            <p className="eyebrow">{exercise.category}練習</p>
            <h1>{exercise.title}</h1>
            <div className="marker" />
            <p className="lead">今日，留幾分鐘俾自己。</p>
            <div className="actions">
              <button className="primary" onClick={() => setModal(true)}>
                {isDone ? "再做一次" : "開始今日練習"}
              </button>
              <button className="swap" onClick={() => setActive(Math.floor(Math.random() * exercises.length))}>
                ↻ 換一個練習
              </button>
            </div>
            <div className="streak-card">
              <span>連續照顧自己 <strong>{streak} 日</strong></span>
              <div className="stamps" aria-label={`連續 ${streak} 日`}>
                {Array.from({ length: 7 }).map((_, i) => <i key={i} className={i < Math.min(streak, 7) ? "filled" : ""}>✓</i>)}
              </div>
            </div>
          </div>

          <article className="paper-stack">
            <div className="kraft" />
            <div className="grid-paper" />
            <div className="exercise-paper">
              <span className="clip">⌇</span>
              <button className={`heart ${isFavourite ? "saved" : ""}`} onClick={() => toggleFavourite(exercise.id)} aria-label="收藏練習">
                {isFavourite ? "♥" : "♡"}
              </button>
              <div className="doodle-icon">✦</div>
              <p className="paper-copy">{exercise.note}</p>
              <p className="hand-note">你的感受，先係今日嘅答案。</p>
              <div className="paper-line" />
              <small>PERSONAL SPACE · NO RIGHT ANSWER</small>
            </div>
            <span className="tape" />
          </article>
        </section>
      )}

      {view === "explore" && (
        <section className="content-view">
          <div className="section-heading">
            <span className="day-label">180 EXERCISES</span>
            <h1>探索照顧自己的方法</h1>
            <p>揀一頁此刻最適合你的，無需要跟次序。</p>
          </div>
          <div className="toolbar">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜尋練習…" aria-label="搜尋練習" />
            <div className="filters">
              {["全部", "身體", "覺察", "連結", "日常"].map((name) => (
                <button key={name} className={filter === name ? "selected" : ""} onClick={() => setFilter(name)}>{name}</button>
              ))}
            </div>
          </div>
          <div className="exercise-grid">
            {filtered.map((item) => (
              <article key={item.id} className={data.completed.includes(item.id) ? "done" : ""}>
                <div><span>DAY {String(item.id).padStart(3, "0")}</span><em>{item.category}</em></div>
                <h2>{item.title}</h2>
                <button onClick={() => pick(item.id - 1)}>打開這一頁 →</button>
              </article>
            ))}
          </div>
        </section>
      )}

      {view === "journey" && (
        <section className="content-view journey">
          <div className="section-heading">
            <span className="day-label">MY JOURNEY</span>
            <h1>你留下的足跡</h1>
            <p>每一個小小的完成，都值得被看見。</p>
          </div>
          <div className="stats">
            <div><strong>{data.completed.length}</strong><span>完成練習</span></div>
            <div><strong>{streak}</strong><span>連續日數</span></div>
            <div><strong>{data.favourites.length}</strong><span>收藏練習</span></div>
          </div>
          <div className="journey-list">
            <h2>最近完成</h2>
            {data.completed.length ? data.completed.slice().reverse().map((id) => {
              const item = exercises[id - 1];
              return <button key={id} onClick={() => pick(id - 1)}><span>✓ DAY {String(id).padStart(3, "0")}</span>{item.title}</button>;
            }) : <p className="empty">完成第一個練習後，足跡就會在這裡出現。</p>}
          </div>
        </section>
      )}

      {modal && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="今日練習">
          <div className="modal-paper">
            <button className="close" onClick={() => setModal(false)} aria-label="關閉">×</button>
            <span className="day-label">DAY {String(exercise.id).padStart(3, "0")}</span>
            <h2>{exercise.title}</h2>
            <p>{exercise.note}</p>
            <label htmlFor="reflection">完成後，想留低甚麼？</label>
            <textarea
              id="reflection"
              value={data.reflections[exercise.id] || ""}
              onChange={(e) => setData((old) => ({ ...old, reflections: { ...old.reflections, [exercise.id]: e.target.value } }))}
              placeholder="寫下一句感受就可以…"
            />
            <button className="primary" onClick={completeToday}>✓ 完成今日練習</button>
            <small>內容只會儲存在你現在使用的裝置。</small>
          </div>
        </div>
      )}

      <footer>
        <p>每日照顧簿簿 · 180 個自我覺察小練習</p>
        <p>HKEAA.TPITYAC · 你的感受才是主角</p>
      </footer>
    </main>
  );
}
