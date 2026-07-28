# 每日照顧簿簿

把《每日照顧簿簿》的 180 個 self-care 練習轉成每日互動網站。

## 已包含

- 每日按日期顯示一個練習
- 180 個練習完整題庫、搜尋與主題篩選
- 隨機換題與收藏
- 練習回應文字欄
- 完成紀錄、連續日數與個人足跡
- 本機儲存：使用者資料只保留在自己的瀏覽器
- 桌面、平板及手機響應式版面
- 鍵盤操作、語意標籤與 reduced-motion 支援

## 本機運行

需要 Node.js 22.13 或以上版本。

```bash
npm install
npm run dev
```

瀏覽器開啟終端顯示的本機網址。

## 部署到 Vercel

1. 把整個資料夾上載到 GitHub。
2. 在 Vercel 選擇 **Add New → Project**。
3. 匯入該 GitHub repository。
4. 保留系統偵測到的設定並部署。

網站不需要資料庫或環境變數。

## 部署到 GitHub Pages

這個版本使用 React／Vinext，建議以 Vercel 部署。若必須使用 GitHub Pages，請在 GitHub Actions 中加入 Node build workflow，並把建置產物發佈到 Pages；請勿只把原始碼資料夾直接設為 Pages root。

## 主要程式

- `app/page.tsx`：180 題資料、畫面及全部互動邏輯
- `app/globals.css`：完整視覺、動畫及響應式版面
- `app/layout.tsx`：網站 metadata 與語言設定

## 修改題目

在 `app/page.tsx` 的 `RAW_EXERCISES` 區塊，每行代表一個練習。題目次序就是 Day 001–180。

## 私隱

完成紀錄、收藏和文字回應使用瀏覽器 `localStorage`。資料不會傳送到伺服器；清除瀏覽器網站資料會同時刪除紀錄。
