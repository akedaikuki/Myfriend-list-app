# 朋友清單 Myfriends List
此為朋友清單專案 
This is a Myfriend list project

## 專案畫面 Presentation Project
![MyImage](https://github.com/akedaikuki/Myfriend-list-app/blob/main/public/img/friend%20app.PNG)
![MyImage](https://github.com/akedaikuki/Myfriend-list-app/blob/main/public/img/friend%20app%20dark.PNG)

## 網站功能 Features
- 查看所有朋友 view all friends
- 瀏覽朋友的詳細資訊 can see your friends details
- 搜尋特定朋友 search your friends
- 新增朋友 add your friends
- 編輯朋友 edit your friends
- 刪除朋友 delete your friends
- 內鑲入音樂 可撥放 embedded music
- 可變換白天及夜晚模式 Changeable daytime or night mode

### 專案開發環境 Development Environment
- node.js 環境 node.js environment
- express 框架 express Web framework
- express-handlebars 樣板引擎 express-handlebars Template Engine

#### 操作
- Step1. 確認安裝 node.js 與 npm
```bash  

```
- Step2. 下載專案
```bash
git clone https://github.com/akedaikuki/friend-list-app.git
```
- Step3. 終端機輸入
```bash  
npm install
```
- Step4. nodemon (如果已有可跳過) 
```bash  
npm install -g nodemon
```
- Step5. 安裝套件 darkmode-js 
```bash  
npm install darkmode-js
```
- Step6. 安裝套件 express 
```bash  
npm install express@4.18.2
```
- Step7. 安裝套件 sweetalert2 
```bash  
npm install sweetalert2
```
- Step8. 使用 MongoDB cloud 獲得你的 connection string 
```bash  

```
- Step9. 在專案內創造一個 .env 檔案，並在其輸入你的 MongoDB connection string，
並更改你 MongoDB 的 username、password、database name 可參閱 .envexample 
```bash  

```
- Step10. 產生種子資料
```bash  
npm run seed
```
- Step11. 安裝完畢後 
```bash
npm run dev
```
- *ps 如果到這裡還無法順利執行 請參考開發工具 看是否有其他需要下載的套件
```bash  

```
- Step12. 確認訊息是否如下 
```bash
App is running on http://localhost:3000
MongoDB connected!
```
- Step13. 瀏覽器輸入 
```bash
http://localhost:3000
```
- Step14. 如需暫停伺服器，請切換至終端機並且
```bash
ctrl+c
```

##### 開發工具 Development tools
- Node.js v14.16.0
- Express 4.18.2
- Express-Handlebars @5.3.3
- Bootstrap v5.3.0
- body-parser 1.20.2
- method-override 3.0.0
- mongoose 6.0.5
- darkmode-js 1.5.7
- sweetalert2 11.7.5
- dotenv 16.0.3
- standard 17.0.0
- MongoDB