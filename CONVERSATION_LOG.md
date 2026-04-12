# MIRAI-ME 프로젝트 대화 로그
> 날짜: 2026-04-07
> 환경: Windows, Claude Code
> 이 파일은 대화 내용을 다른 기기에서 참고하기 위한 기록입니다.

---

## 대화 흐름 요약

### Phase 1: Gemini 대화 검토 & 팩트체크

**시작점**: 사용자가 Gemini와 나눈 대화(AI 맞춤형 동화책 사업 아이디어)를 검토 요청.

**팩트체크 결과 요약**:

#### 한국 서비스
| 서비스 | 실존 | 정확도 |
|--------|------|--------|
| 꿈틀꿈틀(Wriggle) | O | 중간 — 서비스 존재하나 URL, 앱이름, 유사도95% 미확인 |
| 스톨라(Stoala) | O | 높음 — SNOW 계열사, 핵심 설명 일치 |
| 포토몬(Photomon) | O | 낮음 — AI 개인화 아닌 포토북 서비스 |
| 퍼블로그/스마일캣 | 각각 O | 낮음 — 별개 회사를 하나로 묶음 |
| B tv 살아있는 동화 | O | 높음 — 핵심 설명 정확 |
| 브레인팟(Brainpod) | **X** | **할루시네이션 가능성 높음** |

#### 일본 서비스
| 서비스 | 실존 | 정확도 |
|--------|------|--------|
| KidTeller | O | 낮음 — 일본 서비스가 아닌 글로벌 서비스 |
| むげん絵本 | O | 중상 — BuzzFunc 개발, 3.0 업데이트 확인 |
| はじまりはじまり | O | 중상 — 앱 아닌 웹서비스 |
| coemo | O | 높음 — 타카라토미 12,980엔, 가장 정확 |

#### 시장 데이터
- 일본 아동서 시장: 실제 941억 엔 (Gemini의 800~900억엔은 대체로 맞음)
- 디지털 성장률 10%: 과장 (실제 3~6%)
- 식스 포켓, 마고카츠: 사실
- 구리와 구라/논탄 롱셀러: 사실

#### 인프라 — 가장 심각한 오류
- ImageMagic: 동화책 인쇄 부적합 (어패럴/굿즈 위주)
- 후지필름 API: 미국 기반, 일본 이용 불확실
- **하드커버 1부 POD 비용**: Gemini 2,500엔 vs 실제 14,000엔+ (5~6배 차이!)

---

### Phase 2: 제작단가 절감 방안

**핵심 결론**:
1. 하드커버 → 소프트커버 전환 (60~80% 절감, 가장 큰 임팩트)
2. Gelato/Mixam 일본 현지 POD 활용 (SC 기준 1,500~2,500엔)
3. 소형 정방형(178mm) + 24p + 매트코트지
4. 디지털 퍼스트 하이브리드 (PDF → SC → HC 3단계)

**수정된 원가 (소프트커버 기준)**:
- AI 이미지 ~300엔 + 인쇄 ~1,500~2,500엔 + 3PL ~300엔 + 배송 ~500~700엔 + 수수료 ~200엔
- **합계: ~2,800~4,000엔** → 판매가 5,900엔 → 마진 40~55%

**글로벌 POD 가격 비교**:
| 서비스 | HC 1부 | SC 1부 | 일본 현지 인쇄 | API |
|--------|--------|--------|--------------|-----|
| Gelato | $12~20 | $7~12 | O | O |
| Peecho | ~€5.20+ | ~€4+ | X | O |
| Lulu | ~$14~28 | ~$2.35+ | X | O |
| Mixam | 견적필요 | 견적필요 | O (mixam.jp) | O |
| Blurb | $32~50 | $12~17 | X | 제한적 |

---

### Phase 3: 브랜드 네이밍

**MIMO vs MIRAI-ME 비교 후 MIRAI-ME 선택**

MIMO 기각 이유:
- 제16류(서적) 상표 충돌 (등록번호 5174354)
- 제9류(앱/전자출판물) 충돌 (등록번호 6144920)
- mimo.app을 Mimo 코딩 플랫폼(2,500만 유저)이 사용 중
- 주요 도메인(.com, .jp, .app, .io) 전부 선점

MIRAI-ME 선택 이유:
- J-PlatPat 상표 충돌 0건
- mirai-me.jp, mirai-me.app 등 도메인 확보 가능
- "미래의 나" 의미가 동화책 서비스와 완벽 매칭

**서브 브랜드 확장**:
- Kids (아이 동화책): "未来のわたしに会いに行こう"
- Story (프로포즈/커플): "ふたりの未来を、一冊に"
- Memory (시니어 회고록): "あの日の私に届ける物語"
- Paw (반려동물)

---

### Phase 4: 도메인 확보

- **mirai-me.jp**: ✅ 확보 완료
- 등록 방법: JP-Domains.com 추천 (영어 인터페이스, 해외 카드 가능, 로컬 프레즌스 무료, $35~49/년)
- Onamae.com은 해외 카드 불가 + 일본어 전용이라 비추천

**도메인 현황**:
| 도메인 | 상태 |
|--------|------|
| mirai-me.jp | ✅ 확보 완료 |
| mirai-me.app | 미등록 (~$13/년, 추후 확보) |
| mirai-me.com | 2026-03-28 선점됨 (후쿠오카, 사이트 미구축) |
| miraime.com | 파킹 상태 (Porkbun) |

---

### Phase 5: 기획 PPT 생성

- 파일: `/Users/charlie/Workshop/MIRAI-ME/01_기획/MIRAI-ME_사업기획초안.pptx`
- 11슬라이드: 타이틀, 사업개요, 시장분석, 제품라인업, 비즈니스프로세스, 제작단가, 기술스택, 마케팅전략, 법무/도메인, 로드맵, 확장비전
- pptxgenjs + react-icons로 생성, 파스텔 동화풍 디자인

---

### Phase 6: 랜딩 페이지 개발

**기술 스택**:
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (커스텀 파스텔 팔레트)
- next-intl v4 (ja 기본 + ko)
- framer-motion v12 (스크롤 애니메이션)
- react-hook-form + zod (폼 검증)
- lucide-react (아이콘)
- googleapis (Google Sheets 연동 준비)

**i18n 구조**:
- 기본 로케일: ja (URL 접두사 없음)
- 한국어: /ko 접두사
- 메시지 파일: src/messages/ja.json, ko.json

**8개 섹션**:
1. Hero — 태그라인 + CTA + 파스텔 장식 + 히어로 비주얼 SVG
2. About — 3개 특징 카드 (AI주인공, 스토리, 추억)
3. HowItWorks — 4단계 (사진→AI→커스텀→배송) + 스텝 SVG 아이콘
4. Products — 3 티어 (디지털/SC/HC) + 제품 SVG + Coming Soon
5. Gallery — 6개 샘플 SVG 캐러셀
6. PreRegister — 이메일 폼 (react-hook-form + zod)
7. FAQ — 아코디언 6개 항목
8. Footer — 다크 푸터 + 링크 + SNS

**이메일 수집 API**:
- POST /api/pre-register
- Google Sheets 환경변수 있으면 → Sheets API 사용
- 없으면 → data/registrations.json 파일 저장 (폴백)
- Rate limiting: IP당 분당 3회

**SVG 에셋 18개**:
- logo.svg, hero-visual.svg
- steps/step-1~4.svg
- products/digital.svg, softcover.svg, hardcover.svg
- decorations/cloud-1.svg, star.svg, flower.svg
- gallery/sample-1~6.svg (숲, 바다, 별나라, 성, 동물, 구름나라)
- og-image.svg, favicon.svg

**빌드 중 수정한 이슈들**:
- lucide-react에서 Instagram, Twitter 아이콘 삭제됨 → ExternalLink, Globe, Mail로 대체
- Header에서 Button의 asChild prop 없음 → 인라인 a 태그로 교체
- Root layout에 html/body 필요 (Next.js 16) → 구조 조정
- Root / 경로 404 → page.tsx에 redirect("/ja") 추가

---

### Phase 7: 배포

**순서**:
1. GitHub 리포 생성: github.com/Charile1082/mirai-me-landing (Public)
   - (참고: GitHub이 자동으로 Charlie1082로 리다이렉트)
2. git push 완료
3. Vercel Import + Deploy 성공 ("Congratulations!" 화면 확인)
4. Cloudflare DNS 설정:
   - A 레코드: @ → 76.76.21.21 (Proxied)
   - CNAME: www → cname.vercel-dns.com (Proxied)
   - SSL: Full (strict)
5. Vercel Domains에 mirai-me.jp 추가 → "Proxy Detected" ✅
6. **https://mirai-me.jp 접속 성공!**

---

### 주요 결정사항 기록

1. 타겟 시장: 일본 (한국 아님)
2. 브랜드: MIRAI-ME (MIMO 기각)
3. 디자인 톤: 파스텔 동화풍 + 일본 일러스트 느낌
4. 사이트 언어: 일본어 + 한국어 동시
5. 첫 제품: 랜딩 페이지 (소개 + 사전예약)
6. 인쇄 파트너: Gelato(일본 현지) / Mixam Japan
7. 3PL: OpenLogi
8. 배포: Vercel + Cloudflare DNS

---

---

### Phase 8: 맥북 세션 — 모바일 수정 + 사전등록 API 연동 (2026-04-07)

**환경**: macOS, Claude Code (맥북)

#### 1. 모바일 언어 선택 수정
- **문제**: 스마트폰에서 언어 선택 불가 + 디폴트가 한국어
- **원인 1**: `next-intl` 미들웨어가 브라우저 `Accept-Language` 헤더로 자동 감지 → 한국어 브라우저면 `/ko`로 리다이렉트
- **원인 2**: LanguageSwitcher가 드롭다운 방식 → `mousedown` 이벤트가 모바일 터치에서 미작동 + `overflow-hidden`에 가려짐
- **수정**:
  - `src/i18n/routing.ts`: `localeDetection: false` 추가
  - `src/components/layout/LanguageSwitcher.tsx`: 드롭다운 → `[日本語 | 한국어]` 인라인 토글 버튼으로 변경

#### 2. 사전등록 이메일 → Google Sheets 연동
- **문제**: Vercel 서버리스 환경에서 JSON 파일 쓰기 불가 → 등록 실패
- **해결**: Google Sheets API 연동
  - GCP 프로젝트 `mirai-me` 생성
  - 서비스 계정: `sheets-writer@mirai-me.iam.gserviceaccount.com`
  - Google Sheets API 활성화
  - Vercel 환경변수 3개 설정 (CLI로)
  - **트러블슈팅**: `echo`의 trailing newline 때문에 인증 실패 → `printf '%s'`로 해결
- **스프레드시트 ID**: `1kdZvzVfMSKsDPDMjF5OXF7lWFu2FtbCUqA-1Z37HtjA`

#### 3. 사전등록 폼 locale 전송 수정
- **문제**: 폼에서 `locale` 값을 API에 미전송 → `unknown`으로 기록
- **수정**: `PreRegisterSection.tsx`에서 `useLocale()` 추가, JSON body에 locale 포함

#### 4. 국가/도시 정보 추가
- Vercel 자동 제공 헤더 활용: `x-vercel-ip-country`, `x-vercel-ip-city`
- 스프레드시트 컬럼 확장: email, locale, timestamp, source, **country**, **city**

#### 5. 환경 설정 (맥북)
- Node.js v24.14.1 (`/usr/local/bin/node`)
- Vercel CLI v50.40.0 설치 + 로그인 (charile1082)
- 프로젝트 링크: `vercel link` 완료
- `.claude/launch.json` 설정

#### 커밋 히스토리 (이번 세션)
```
dcdc590 feat: add country and city columns from Vercel geo headers
fb79431 fix: send locale with pre-register form submission
ff364b9 chore: remove debug error logging from pre-register API
a1f3b10 debug: add error logging to pre-register API
333cda0 fix: 모바일 언어 선택 불가 및 디폴트 한국어 문제 수정
```

---

### Phase 9: 윈도우 세션 — 환경 세팅 + 정리 + OG 연결 (2026-04-07)

**환경**: Windows, Claude Desktop (MCP)
**마지막 작업 플랫폼**: `[Windows]` 🖥️

#### 1. 맥북 최신 코드 동기화
- `git pull`로 Phase 8 (맥북) 커밋 5건 수신 완료
- LanguageSwitcher, Google Sheets 연동, locale 전송, country/city 추가 등 반영

#### 2. 윈도우 Vercel CLI 환경 세팅
- **Vercel CLI v50.40.0 설치** (`npm install -g vercel`)
- 한글 Windows 사용자명 문제 → 토큰 방식으로 인증 해결
- `vercel link --project mirai-me-landing` 완료
- 환경변수 3개 (Google Sheets) 확인됨
- 불필요한 중복 프로젝트 `landing` 발견 (Vercel 웹에서 삭제 필요)

#### 3. 프로젝트 정리 (불필요 파일 삭제)
삭제한 파일:
- `public/next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg` (create-next-app 기본)
- `src/app/favicon.ico` (favicon.svg와 중복, 25KB 절약)
- `data/` 빈 폴더 (Google Sheets로 전환 완료)
- `/Users/charlie/Workshop/MIRAI-ME/._*.md` (macOS 메타데이터 잔여)
- `/Users/charlie/Workshop/MIRAI-ME/` 루트의 중복 md 파일 2개 (Git 리포 내 파일만 유지)

보류한 파일 (향후 활용 가능):
- `public/images/logo.svg` — 로고 이미지 교체 시 사용
- `public/images/decorations/` 3개 — 디자인 개선 시 사용
- `src/components/ui/Card.tsx` — 향후 확장 시 사용

#### 4. OG 이미지 메타데이터 연결
- `src/app/[locale]/layout.tsx`: OpenGraph `images` + Twitter `images` 추가
- SNS 공유 시 `og-image.svg` (MIRAI-ME 로고 + 동화책 일러스트) 표시됨

#### 5. favicon SVG 통일
- `src/app/layout.tsx`: `metadata.icons.icon` → `/favicon.svg` 연결
- 중복 `favicon.ico` 삭제

#### 커밋 히스토리 (이번 세션)
```
acba665 chore: cleanup unused files + connect OG image + favicon svg
```

---

### Phase 10: AI 조직 구조 수립 + 엔진 설계 (2026-04-08)

**환경**: Windows, Claude Code

#### 1. 코드 품질 수정
- 커밋 `249ec7a`: i18n 하드코딩 수정, 접근성 개선, 링크 버그 수정, ESLint 0 에러
- 수정 파일 8개: ProductsSection, HowItWorks, Footer, Header, PreRegister, Gallery, ja.json, ko.json

#### 2. 프로젝트 폴더 정리
- `E:/mirai-me-landing/` 중복 폴더 삭제 (수동)
- `/Users/charlie/Workshop/MIRAI-ME/` 단일 폴더로 통합 확정
- CLAUDE.md에 폴더 강제 룰 적용

#### 3. AI 조직 구조 수립
- **문서**: `/Users/charlie/Workshop/MIRAI-ME/AI_ORGANIZATION.md`
- 총괄: Claude / 디자인+마케팅+재무: Gemini / 보조: OpenAI, Groq
- 절대 규칙: 단독 모델 출력 금지, 부서당 최소 2모델 협업
- 5단계 업무 프로세스: 지시→부서작업→총괄검증→합동리뷰→오너승인

#### 4. 스토리 생성 설계 (B 확정)
- 하이브리드 방식 (템플릿 10개 + AI 개인화)
- 시그니처 스토리: "未来のわたし" (디폴트)
- 입력: 사진, 이름(닉네임OK), 성별, 나이, 좋아하는것, 테마, 메시지 + 선택(가족, 손글씨)
- 손글씨 이미지 → 책 첫/마지막 페이지 삽입 기능 (기술적 구현 가능 확인)
- 프라이버시: 닉네임 허용, 제작 후 즉시 삭제
- 검수: 6항목 완전 자동화 + 고객 웹 컨펌

#### 5. 빌드 계획 (C 확정)
- Phase 1 (MVP): 사진→캐릭터→스토리→손글씨→PDF→프리뷰→다운로드
- Phase 2: Gelato API + Stripe 결제
- Phase 3: 고객 계정, LINE Bot, 관리자 대시보드
- 플랫폼: 웹앱 (스마트폰+PC 반응형), 네이티브 앱 추후
- 우선순위: 캐릭터 변환 → PDF 프로토타입 → 풀 사이클

#### 6. 제본/페이지 규격 확정
- **문서**: `/Users/charlie/Workshop/MIRAI-ME/01_기획/絵本_製本規格ガイド.md`
- 론칭 사이즈: 203x203mm (8x8") 정방형 단일
- 확장 사이즈: 128x182mm (B6 만화책 사이즈) — Story/Memory 라인용
- 24p (SC) / 32p (HC), 8의 배수 원칙
- SC: 무선철/PUR, HC: 실 제본 (糸かがり)

#### 7. 디자인 엔진 기술 리포트
- **문서**: `/Users/charlie/Workshop/MIRAI-ME/01_기획/デザインエンジン_技術レポート.md`
- 5개 엔진 모듈 설계:
  1. 캐릭터 팩토리 (사진→레퍼런스 시트)
  2. 씬 컴포저 (24페이지 일러스트 생성)
  3. 품질 게이트 (6항목 자동 검증)
  4. 북 어셈블러 (PDF 조립)
  5. 오케스트레이터 (전체 흐름 제어)
- 1권당 API 비용: ~$1.29 (약 200엔)
- 총 개발 기간: 10~15주

#### 커밋 히스토리 (이번 세션)
```
249ec7a fix: i18n 완성도, 접근성, 링크 버그 수정
```

#### 생성된 기획 문서
```
/Users/charlie/Workshop/MIRAI-ME/AI_ORGANIZATION.md            — AI 조직 운영 규칙
/Users/charlie/Workshop/MIRAI-ME/01_기획/絵本_製本規格ガイド.md    — 제본/페이지 규격
/Users/charlie/Workshop/MIRAI-ME/01_기획/デザインエンジン_技術レポート.md — 엔진 기술 리포트
/Users/charlie/Workshop/MIRAI-ME/01_기획/MVP_빌드계획.md         — MVP 빌드 계획
```

---

## 🏷️ 마지막 작업 플랫폼: `[Windows]` 🖥️
> 다음 작업: 맥북에서 엔진 개발 시작 (캐릭터 팩토리부터)
> 반드시 `git pull` 먼저 실행할 것

---

## 다른 기기에서 이 대화를 이어가려면

Claude Code / Claude Desktop에서:
```
"PROJECT_SUMMARY.md와 CONVERSATION_LOG.md를 읽고 프로젝트 전체 맥락을 파악해줘. 이어서 작업할 거야."
```

Git 최신 코드 받기:
```bash
# Windows
cd /Users/charlie/Workshop/MIRAI-ME/03_개발/landing
git pull

# macOS
cd ~/Desktop/mirai-me-landing
git pull
```
