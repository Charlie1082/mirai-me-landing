# MIRAI-ME (미라이-미) 프로젝트 요약

> 이 파일은 다른 기기(맥북 등)에서 작업을 이어갈 때 참고용입니다.
> 마지막 업데이트: 2026-04-07

---

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **서비스** | AI 맞춤형 동화책 서비스 (아이 사진 → AI 캐릭터 → 동화책 제작/배송) |
| **타겟 시장** | 일본 (학부모/조부모, 식스포켓/마고카츠 소비 구조) |
| **브랜드명** | MIRAI-ME / ミライミー |
| **태그라인** | 未来のわたしに会いに行こう (미래의 나를 만나러 가자) |
| **운영 형태** | 1인 비즈니스, API 연동 풀 자동화 |

---

## 현재 완료된 것

### 1. 팩트체크 (Gemini 대화 검증)
- 한국 서비스 6건 검증 (꿈틀꿈틀, 스톨라, 포토몬, 퍼블로그/스마일캣, B tv, 브레인팟)
- 일본 서비스 4건 검증 (KidTeller, むげん絵本, はじまりはじまり, coemo)
- 시장 데이터 5건 검증 (시장규모 941억엔, 식스포켓, 마고카츠 등)
- 인프라 5건 검증 (ImageMagic, OpenLogi, LOGILESS, 후지필름API, JPEX)
- **핵심 발견**: Gemini의 하드커버 1부 POD 인쇄비 2,500엔은 실제(14,000엔+)와 5~6배 차이

### 2. 제작단가 절감 방안
- 하드커버 → 소프트커버 전환 (60~80% 절감)
- 글로벌 POD: Gelato(일본 현지 인쇄), Mixam Japan
- 소형 정방형(178mm) + 24p + 매트코트지 최적 조합
- 디지털 퍼스트 하이브리드 모델 (PDF → SC → HC 3단계 티어)

### 3. 브랜드 네이밍
- **MIRAI-ME 확정** (MIMO는 상표 충돌로 기각)
- J-PlatPat 검색: MIRAI-ME 관련 상표 등록/출원 0건
- 서브 브랜드: Kids(아이동화), Story(프로포즈), Memory(회고록), Paw(반려동물)

### 4. 도메인
- **mirai-me.jp** ✅ 확보 완료
- mirai-me.app → 추후 확보 예정
- mirai-me.com → 2026-03-28 선점됨 (매입 타진 가능)

### 5. 사업 기획 PPT
- 11슬라이드 기획안: `E:/MIRAI-ME/01_기획/MIRAI-ME_사업기획초안.pptx`

### 6. 랜딩 페이지 개발 & 배포
- **기술 스택**: Next.js 16 + TypeScript + Tailwind CSS + next-intl + framer-motion
- **8개 섹션**: Hero, About, HowItWorks, Products, Gallery, PreRegister, FAQ, Footer
- **i18n**: 일본어(ja) + 한국어(ko)
- **이메일 수집 API**: JSON 파일 저장 + Google Sheets 연동 준비 완료
- **SVG 일러스트**: 18개 에셋 (히어로, 스텝 아이콘, 제품, 갤러리, 장식, OG, 파비콘)
- **SEO**: robots.txt, sitemap.xml, OG 이미지

### 7. 배포 인프라
- **GitHub**: https://github.com/Charile1082/mirai-me-landing
- **Vercel**: 자동 배포 연결됨 (push하면 자동 반영)
- **Cloudflare**: DNS 관리 (CDN/DDoS 방어/SSL)
- **라이브 URL**: https://mirai-me.jp ✅

### 8. 사전등록 → Google Sheets 연동 ✅
- **GCP 프로젝트**: `mirai-me`
- **서비스 계정**: `sheets-writer@mirai-me.iam.gserviceaccount.com`
- **스프레드시트 ID**: `1kdZvzVfMSKsDPDMjF5OXF7lWFu2FtbCUqA-1Z37HtjA`
- **Vercel 환경변수**: 3개 설정 완료 (GOOGLE_SHEETS_CLIENT_EMAIL, PRIVATE_KEY, SPREADSHEET_ID)
- **수집 데이터**: email, locale, timestamp, source, country, city
- **확인 방법**: mirai-me@miraime.net으로 Google Sheets 접속

### 9. 모바일 언어 선택 수정 ✅
- `localeDetection: false`로 항상 일본어 디폴트
- LanguageSwitcher: 드롭다운 → 인라인 토글 버튼 (모바일 터치 호환)

---

## 프로젝트 폴더 구조

```
E:/MIRAI-ME/
├── 01_기획/
│   └── MIRAI-ME_사업기획초안.pptx
├── 02_디자인/
├── 03_개발/
│   └── landing/           ← Next.js 프로젝트 (GitHub 연동)
│       ├── src/
│       │   ├── app/           (라우팅, API, 레이아웃)
│       │   ├── components/    (섹션, UI, 레이아웃, 애니메이션)
│       │   ├── messages/      (ja.json, ko.json)
│       │   ├── i18n/          (next-intl 설정)
│       │   ├── lib/           (google-sheets.ts)
│       │   └── styles/        (fonts.ts)
│       ├── public/images/     (SVG 일러스트)
│       └── .env.local.example (환경변수 템플릿)
├── 04_인프라/
├── 05_마케팅/
├── 06_법무/
└── 07_재무/
```

---

## 맥북에서 작업 시작하기

```bash
# 1회만 (초기 세팅)
cd ~/Desktop
git clone https://github.com/Charile1082/mirai-me-landing.git
cd mirai-me-landing
npm install

# 매번 작업 시작 시
cd ~/Desktop/mirai-me-landing
git pull
npm run dev
# → http://localhost:3000/ja 에서 확인

# 수정 후 배포
git add -A
git commit -m "수정 내용"
git push
# → 1~2분 후 mirai-me.jp에 자동 반영
```

---

## 주요 파일 수정 가이드

| 수정 대상 | 파일 경로 |
|----------|----------|
| 일본어 텍스트 전체 | `src/messages/ja.json` |
| 한국어 텍스트 전체 | `src/messages/ko.json` |
| 히어로 섹션 | `src/components/sections/HeroSection.tsx` |
| 서비스 소개 | `src/components/sections/AboutSection.tsx` |
| 만드는 방법 (4단계) | `src/components/sections/HowItWorksSection.tsx` |
| 요금제 | `src/components/sections/ProductsSection.tsx` |
| 갤러리 | `src/components/sections/GallerySection.tsx` |
| 사전등록 폼 | `src/components/sections/PreRegisterSection.tsx` |
| FAQ | `src/components/sections/FAQSection.tsx` |
| 헤더 | `src/components/layout/Header.tsx` |
| 푸터 | `src/components/layout/Footer.tsx` |
| 색상/폰트 | `src/app/globals.css` |
| 이미지 | `public/images/` |

---

## 다음 할 것 (로드맵)

| 우선순위 | 항목 | 상태 |
|----------|------|------|
| 1 | 상표 출원 (일본 변리사, 제9/16/41류) | 미진행 |
| 2 | Google Sheets API 연동 | ✅ 완료 |
| 3 | AI 파이프라인 프로토타입 (사진→캐릭터→PDF) | 미진행 |
| 4 | Gelato/Mixam API 테스트 + 샘플 발주 | 미진행 |
| 5 | 일러스트 고도화 (실제 동화책 느낌 비주얼) | 미진행 |
| 6 | Google Analytics 연동 | 미진행 |

---

## 제품 가격 구조 (검증된 수치 기반)

| 티어 | 원가 | 판매가 (예상) | 마진율 |
|------|------|-------------|--------|
| Digital (PDF) | ~300엔 | ~1,200엔 | 75% |
| Softcover | 2,800~4,000엔 | 5,900엔 | 40~55% |
| Hardcover | 10,000~18,000엔 | 20,000~30,000엔 | 40~50% |

---

## 계정/서비스 정보

| 서비스 | 용도 | URL |
|--------|------|-----|
| GitHub | 코드 저장소 | github.com/Charile1082/mirai-me-landing |
| Vercel | 웹 호스팅 (자동 배포) | vercel.com |
| Cloudflare | DNS + CDN + 보안 | dash.cloudflare.com |
| JP-Domains | mirai-me.jp 도메인 등록 | jp-domains.com (또는 등록한 레지스트라) |
| GCP | Google Sheets API 서비스 계정 | console.cloud.google.com (프로젝트: mirai-me) |
| Google Workspace | 기업 이메일 mirai-me@miraime.net | workspace.google.com |
