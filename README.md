# 프로젝트 소개
나만의 Riot App Page 입니다. 챔피언 소개 및 아이템을 확인할 수 있고 금주 로테이션 챔피언도 확인할 수 있습니다.

# 프로젝트 개발기간
2024.12.11 ~ 2024.12.18

# 프로젝트 개발 도구
`next.js` `typescript` `tailwindcss` `@tanstack/react-query` 

# 시연 스크린샷

1. 메인 페이지
![스크린샷 2024-12-18 200547](https://github.com/user-attachments/assets/21fef2bd-9b09-405f-ab10-b2633efbc3e9)

2. 챔피언 리스트 페이지
![스크린샷 2024-12-18 200558](https://github.com/user-attachments/assets/ba7cc852-eccd-4946-9a52-6ea734d5b3e1)

3. 챔피언 디테일 페이지
![스크린샷 2024-12-18 200609](https://github.com/user-attachments/assets/f07214ae-cd08-4a68-8c02-3e3e60cdfae5)

4. 아이템 리스트 페이지
![스크린샷 2024-12-18 200618](https://github.com/user-attachments/assets/40245fd2-8646-4844-a896-9bb838781a64)

5. 챔피언 로테이션 페이지
![스크린샷 2024-12-18 200627](https://github.com/user-attachments/assets/182818e1-cce4-4f01-9a2c-c01a9a638fde)

# 폴더 구조
`📦src
 ┣ 📂app
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂items
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┗ 📜QueryProvider.tsx
 ┣ 📂pages
 ┃ ┗ 📂api
 ┃ ┃ ┗ 📜rotation.ts
 ┣ 📂types
 ┃ ┣ 📜Champion.ts
 ┃ ┗ 📜Item.ts
 ┗ 📂utils
 ┃ ┣ 📜riotApi.ts
 ┃ ┗ 📜serverApi.ts`
