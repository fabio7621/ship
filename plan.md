# 暴風雨夜晚漁船 3D 海洋場景 — 專案計畫

> 目標:一個橫向視角、暴風雨夜晚、北歐漁船乘風破浪的網頁 3D 動畫。
> 技術棧:Three.js(渲染)+ Vite + 原生 ES Modules(不用框架)。
> 決策紀錄:曾考慮 Vue 3,但場景邏輯是每幀命令式更新(position/uniform),吃不到 Vue 響應式渲染的優勢;純 ES modules 已足夠解決「單檔案太大不好維護」的問題。若之後要加參數控制面板(滑桿調暴風強度等 DOM UI),屆時再評估 Vue/React 或 Tweakpane。
> 文件用途:記錄目前進度、可重用的物理函式、以及專案結構。

## 專案結構

```
ship/
├── index.html            Vite 入口 HTML
├── src/
│   ├── main.js            場景組裝 + 主渲染迴圈
│   ├── camera.js           攝影機跟拍
│   ├── physics/
│   │   ├── waves.js         3 道 Gerstner 長湧浪(船的浮力只跟這部分)、漂移、CPU 端反向迭代取樣
│   │   ├── spectrum.js      JONSWAP 頻譜 + 方向分布 → 初始頻譜 h0(k)
│   │   ├── fftSampler.js    FFT 海面的 CPU 鏡像(波長 > 10m 的成分),給浮力用
│   │   ├── floater.js        彈簧阻尼浮力 + 船頭入水深度/速度(驅動艏浪與水花)
│   │   └── whitecap.js       Monahan 白頭浪覆蓋率(依風速)+ 白沫門檻回授控制器
│   └── scene/
│       ├── lights.js         低角度月光、半球環境光、閃電方向光
│       ├── sky.js            暴風雲天空(雲隙月亮、閃電打亮雲層),同時當環境貼圖
│       ├── post.js           Bloom + tone mapping 輸出
│       ├── glsl/noise.js     共用 GLSL 雜訊
│       ├── parts.js          建模小工具(rod / rods 合併 / ring / tube / roundedBox),船與燈塔共用
│       ├── layers.js         NO_REFLECTION_LAYER:不進水面反射的物件(水花、光束)
│       ├── lighthouse/
│       │   ├── index.js       擺位(月亮左側約 150m 的海岬尖端)+ 光束旋轉 + 給海面的燈光反射
│       │   ├── headland.js    海岬山崖高度場(崖面、緩坡頂、斜降岬角)+ 巨石 + 離岸距離貼圖
│       │   ├── tower.js       八角基座、收分塔身、托座瞭望台與欄杆、入口、守塔人小屋、崖邊護欄
│       │   ├── lantern.js     燈室細節:斜交叉窗格、蜂巢菲涅耳透鏡、牛眼面板、紅圓頂肋條、通風球、避雷針、風向標
│       │   ├── beams.js       旋轉光束(錐體 + 視角柔邊)+ 掃到鏡頭的眩光
│       │   ├── materials.js   遠景材質(霧氣密度減半)、塔身紅白帶貼圖、牛眼面板貼圖
│       │   └── noise.js       CPU 2D 值雜訊
│       ├── ocean/
│       │   ├── ocean.js       海面網格 + FFT 頻譜參數(風速/吹風距離/cascade)
│       │   ├── oceanShader.js Gerstner + FFT 位移、逐像素 FFT 法線、Fresnel、次表面散射、白沫、航跡
│       │   ├── fft/fftOcean.js   GPU 逆 FFT(3 cascade × 256²):位移/斜率/累積白沫貼圖
│       │   ├── fft/fftShaders.js 頻譜演化、Stockham butterfly、整理、白沫 pass(破浪白水 + 殘留薄沫 + 風吹流)、統計/控制 pass
│       │   ├── fft/foamStats.js  白沫覆蓋率回授控制,全在 GPU(64² 統計 → 1×1 門檻貼圖),不讀回 CPU
│       │   └── mirror.js      平面鏡反射(HalfFloat,避免夜景色階斷層)
│       ├── boat/
│       │   ├── index.js       組裝 + 雷達旋轉/駕駛台燈閃爍
│       │   ├── hullProfile.js 船體線型(半寬/舷弧/龍骨/艏柱前傾),所有尺寸的唯一來源
│       │   ├── hullClip.js    船殼裁切體積貼圖:海面 shader 丟掉落在船內的水
│       │   ├── hull.js        放樣船殼、艉板、木甲板、舷牆壓條、護舷條、輪胎護舷
│       │   ├── wheelhouse.js  居住艙 + 外傾前窗駕駛台、舷窗、雷達、天線、煙囪、救生筏、舷燈
│       │   ├── rigging.js     前桅、桅燈(拖網作業綠/白燈)、甲板工作燈、吊桿、支索
│       │   ├── deckGear.js    龍門吊架、網板、拖網絞機、魚艙口、漁網、魚箱、錨機、繫纜樁
│       │   ├── materials.js   濕表面材質
│       │   ├── textures.js    程序化貼圖(船殼漆面/鏽痕/船籍號、甲板木紋、窗光)
│       │   └── parts.js       建模小工具(rod / tube / roundedBox)
│       ├── spray.js           船頭破浪水花(持續甩水 + 拍擊爆發 + 水霧,視風吹向船尾)
│       ├── spindrift.js       遠處浪峰水霧:GPU 無狀態粒子,只在有破浪白水的浪峰顯示,往下風吹
│       ├── sprayPoints.js     水花/水霧共用點精靈(距離縮放、閃電打亮、指數平方霧;CPU 與 GPU 粒子共用)
│       ├── rain.js            雨滴粒子
│       └── lightning.js       閃電(分岔 + 連閃)→ 輸出 flash 強度/方向
├── storm-night-water-official.html   舊版單檔(保留備查,不再維護)
├── tests/                node --test 單元測試(npm test)
└── package.json
```

執行:`npm run dev`(開發)、`npm run build`(打包到 `dist/`)。

---

## 一、目前進度

### 已完成的探索(原型階段)

| 版本                 | 技術                                  | 結果                                   | 保留價值              |
| -------------------- | ------------------------------------- | -------------------------------------- | --------------------- |
| 2D Canvas 版         | 純 Canvas 2D                          | 多層視差海浪 + 船 + 雨 + 閃電,能跑     | 概念驗證,非主線       |
| 3D 手刻版            | Three.js + MeshStandardMaterial       | Gerstner 波寫進 vertex shader,標準光照 | 波浪/船/浮力骨架可用  |
| 3D 官方 Water 改造版 | Three.js 官方 `Water` + 注入 Gerstner | 即時反射水面,質感大幅提升              | **目前最佳渲染基礎**  |
| 物理工具模組         | `ocean-physics.js`                    | 12 個函式,已驗證可運作                 | **核心資產,直接沿用** |

### 關鍵認知(踩坑換來的)

1. **波浪的「形狀」不難**,難的是「看起來像真的海」——海水外觀幾乎全來自反射/折射(天空、月光、船的倒影、白沫),這是即時渲染問題,不是動畫問題。
2. **暴風雨把難度乘好幾倍**:劇烈起伏、扭曲反射、大量白沫、浪花、雨、閃電,全是難的那一掛。
3. **一半的痛苦跟海浪無關**,是工程環境摩擦(import map、CDN 載入、預覽環境擋外部資源)。→ 這正是轉 Vue + Vite 要解決的部分。
4. **GPU 位移,CPU 讀不到**:波浪寫在 vertex shader 裡,JS 端讀不到頂點位置。所以船的浮力取樣必須在 CPU 端保留一份「同樣的波函數」。解法是用同一份 `WAVES` 參數陣列,同時生成 GLSL(給 GPU)與 JS 取樣(給 CPU),確保兩邊永遠一致。
5. **不要從 GPU 讀回 CPU**:Chrome 的 GPU 在另一個行程,`readPixels` 就算改用 PBO + fence 非同步,取資料時仍要等 GPU 消化完佇列,GPU 忙時實測卡 30–200 ms(規律頓一下)。需要 GPU 結果的邏輯(白沫門檻控制、浪峰水霧)直接留在 GPU 上做。

---

## 二、核心物理原理對照

| 原理                    | 作用                                | 對應函式                                  |
| ----------------------- | ----------------------------------- | ----------------------------------------- |
| 疊加原理                | 多個波相加 = 自然海面               | `seaHeight()`                             |
| 深水色散關係 ω=√(g·k)   | 長波跑得快、短波跑得慢,層次錯開     | `createWaves()`                           |
| Gerstner 波(трохоida)   | 水粒子圓周運動 → 尖波峰、平波谷     | `gerstnerDisplace()` / `gerstnerNormal()` |
| 波的破碎(陡度 > 約 1/7) | 波峰夠陡就破碎成白沫                | `crestRatio()`                            |
| 阿基米德原理 F=ρgV      | 沒入越深浮力越大                    | `buoyancyForce()` / `probeBuoyancy()`     |
| 多點取樣浮力            | 船頭/船尾→俯仰,左/右舷→翻滾         | `createFloater()` / `updateFloater()`     |
| 慣性與阻尼              | 船「追」波面而非黏在波面,顛簸感來源 | `springDamper()`                          |

---

## 三、技術函式清單(`ocean-physics.js`)

> 已驗證可運作的 ES Module。以下為各函式用途與簽名摘要。

### 波的建立

- **`createWaves(spec)`** — 把人類參數(方向、波長、振幅、尖銳度 q)轉成內部參數,自動算好色散 ω。
- **`checkSteepness(waves)`** — 驗證 Gerstner 尖銳度總和;> 1 波峰會自我穿插打結,調參時要跑。

### 海面取樣

- **`seaHeight(x, z, t, waves)`** — 只算垂直高度,最快。用於浮力取樣、相機跟隨、判斷是否入水。
- **`gerstnerDisplace(x, z, t, waves)`** — 完整位移 `{dx, dy, dz}`(含水平推擠)。
- **`gerstnerNormal(x, z, t, waves)`** — 解析法線(非有限差分),用於打光、對齊波面、反射方向。
- **`surfaceHeightAt(x, z, t, waves, iterations)`** — 反向迭代求「世界座標正上方」的真實水面高度,解決 Gerstner 水平位移誤差。

### 白沫

- **`crestRatio(x, z, t, waves)`** — 回傳 -1~1。> 0.6 開始畫白沫,> 0.85 全白。

### 浮力與運動

- **`springDamper(state, target, stiffness, damping, dt)`** — 彈簧-阻尼,**與幀率脫鉤**(dt 縮放,60/144Hz 手感一致)。
- **`createFloater(opts)`** — 建立漂浮物(halfLength / halfWidth / draft / stiffness / damping...)。
- **`updateFloater(f, x, z, t, waves, dt)`** — 每幀更新,回傳 `{y, pitch, roll, slam}`。`slam=true` 代表船頭砸進浪 → 觸發浪花。

### 剛體進階(之後接物理引擎用)

- **`buoyancyForce(submergedVolume, rho)`** — 阿基米德浮力,海水密度預設 1025。
- **`probeBuoyancy(probeWorldPos, t, waves, opts)`** — 單一浮力探針,回傳 `{fy, depth, submerged}`,丟給剛體 `applyForceAtPoint`。
- **`waterDrag(velocity, dragCoef)`** — 水的線性阻力,沒有它船會永遠彈跳。

### GPU/CPU 同步

- **`buildGerstnerGLSL(waves)`** — 從同一份 waves 生成 vertex shader 字串,注入 `onBeforeCompile`。改參數只改一處。
  - GLSL 簽名:`vec3 gerstner(vec2 p, float t, out vec3 nrm, out float crestN)`

---

## 四、現成套件評估(避免重造輪子)

| 方案                  | 類型           | 特點                                                         | 適用時機                    |
| --------------------- | -------------- | ------------------------------------------------------------ | --------------------------- |
| Three.js 官方 `Water` | 免費(內建範例) | 即時鏡面反射 + 法線貼圖波光,本身是平面需自行加 Gerstner 位移 | **目前主線,練習/demo 足夠** |
| Three.js Water Pro    | 付費           | WebGPU + FFT 海洋、多層白沫、浮力、焦散、8 種預設            | 正式接案、需電影級海面      |
| Tidewater             | 付費($75)      | 串聯 FFT + Gerstner、CPU 浮力鏡像、航跡場                    | 正式專案、需航跡系統        |

連結:

- Three.js 官方 Water 範例:https://threejs.org/examples/#webgl_shaders_ocean
- Gerstner 改造官方範例(社群):https://discourse.threejs.org/t/classic-ocean-shader-example-with-gestner-waves/29227
- Three.js Water Pro 文件:https://docs.threejswaterpro.com/
- Tidewater 介紹:https://ilikekillnerds.com/2026/05/21/i-built-tidewater-threejs-ocean-kit/
- GPU Gems Ch.1(Gerstner 經典教材):https://developer.nvidia.com/gpugems/gpugems/part-i-natural-effects/chapter-1-effective-water-simulation-physical-models
- Catlike Coding — Waves(sin → Gerstner 圖解):https://catlikecoding.com/unity/tutorials/flow/waves/

---

## 五、海面架構(FFT + Gerstner 混合)

- 只用少量 Gerstner 波疊加時,浪會黏成圓滑的大塊(只適合平靜海面)。暴風雨海面改用 Tessendorf FFT 頻譜海洋。
- **長湧浪(> 30m)**:3 道 Gerstner,CPU 可算 → 船的浮力同步。
- **風浪(48m ~ 5cm)**:JONSWAP 頻譜,GPU 每幀逆 FFT,三個 cascade(251m / 37.3m / 7.1m)各自負責一段波長。
- 法線由 FFT 斜率逐像素取樣;白沫 = Jacobian < 門檻時注入、隨時間指數衰減(拖尾白沫紋)。
- FFT 管線已用 CPU 模擬對照直接加總驗證(誤差 1e-15);Nyquist 行列必須歸零,否則打包的實數場會互相滲漏。
- **浮力**:湧浪(Gerstner)+ FFT 長波 CPU 鏡像(同一份 h0、同一套時間演化,已驗證與 GPU 貼圖一致),船才不會被浪穿過。注意 GPU 貼圖有半格偏移。
- **船殼裁切**:海面 fragment 轉到船身座標,查 hullClip 貼圖,落在船殼內且低於甲板 +0.3m 的水直接 discard。
- **燈塔**:月亮在畫面左 1/3,燈塔放在月亮再往左約 19°、150m 外的海岬尖端;崖高 10m(更高燈室會頂到畫面上緣)。光束每 12 秒一圈(兩道 → 每 6 秒閃一次),掃到鏡頭時眩光 + 海面倒影同步變亮。燈室內不放 PointLight(會讓全場受光材質都多算一盞燈)。
- **船身推浪**:頂點 shader 依船身座標加上艏前堆高、V 形分歧波、船肩凹陷、艉浪;強度隨船頭入水速度加強。

## 六、可調參數速查(手感旋鈕)

| 參數                    | 位置       | 效果                                |
| ----------------------- | ---------- | ----------------------------------- |
| `STORM`                 | waves 設定 | 長湧浪振幅 0.4 平靜 ~ 1.2 狂暴       |
| `FFT_SETTINGS`          | ocean.js   | 風速、吹風距離、各 cascade `scale`(粗糙度)、`choppiness`(浪峰尖銳)、白沫門檻/衰減 |
| `WAVES[].len / amp / q` | waves 設定 | 各波的波長 / 振幅 / 尖銳度          |
| `phys.stiff`            | 浮力       | 高=船緊貼波面(像貼紙);低=失重延遲感 |
| `phys.dampY / dampR`    | 浮力       | 阻尼,越低越顛簸                     |
| `distortionScale`       | 官方 Water | 反射扭曲強度,暴風雨調高             |
| `scene.fog` 密度        | 場景       | 能見度                              |
| `nextBolt` 間隔         | 閃電       | 打雷頻率                            |

---
