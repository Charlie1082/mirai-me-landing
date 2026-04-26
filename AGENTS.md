# MIRAI-ME Landing — Local Rules

> 상위 규칙: `/Users/charlie/Workshop/AGENTS.md`
> 본 파일은 랜딩 앱 전용 지역 규칙이다. 보안, 삭제, Git, API 키 정책은 상위 규칙을 따른다.

---

<!-- BEGIN:nextjs-agent-rules -->
## Next.js 주의

This version has breaking changes — APIs, conventions, and file structure may differ from training data.
Before writing code, read the relevant guide in `node_modules/next/dist/docs/` when a Next.js API or convention is uncertain.
Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## 프로젝트 범위

- 랜딩 페이지 개발 위치: `/Users/charlie/Workshop/MIRAI-ME/03_개발/landing/`
- MIRAI-ME 전체 프로젝트 루트: `/Users/charlie/Workshop/MIRAI-ME/`
- 중복 복제본을 다른 루트에 만들지 않는다.
- 새 웹/API 모듈은 `/Users/charlie/Workshop/MIRAI-ME/03_개발/` 하위에 둔다.

---

## 기술 스택

- Next.js 16 App Router + TypeScript
- Tailwind CSS v4
- next-intl v4
- framer-motion v12
- react-hook-form + zod
- googleapis

---

## i18n 규칙

- 기본 로케일: `ja` (URL 접두사 없음)
- 한국어: `/ko`
- 사용자 노출 텍스트는 `src/messages/ja.json`, `src/messages/ko.json` 키로 관리한다.
- 새 키 추가 시 `ja.json`과 `ko.json`을 함께 갱신한다.
- 사용자 노출 텍스트 하드코딩은 피하고 `useTranslations()`를 사용한다.

---

## 배포/운영

- GitHub: `github.com/Charlie1082/mirai-me-landing`
- Vercel: `main` 브랜치 push 시 자동 배포
- 라이브: `https://mirai-me.jp`
- DNS: Cloudflare
- 커밋, push, 배포 트리거는 Charlie 요청 시에만 실행한다.

---

## 작업 전 검증 기준

- 일반 변경 후: `npm run lint`
- 릴리즈 영향 변경 후: `npm run build`
- Google Sheets 연동 변경 시 `.env.local.example`과 실제 코드의 환경변수명을 함께 확인한다.
