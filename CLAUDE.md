@AGENTS.md

# MIRAI-ME 프로젝트 규칙

> **필수 참조**: AI 조직 운영 규칙은 `E:/MIRAI-ME/AI_ORGANIZATION.md` 참조
> 모든 부서 출력물은 단독 모델 금지, 최소 2모델 협업 + 총괄(Claude) 검증 필수

## 프로젝트 폴더 구조 (필수 준수)

MIRAI-ME 프로젝트의 모든 작업은 반드시 `E:/MIRAI-ME/` 폴더 내에서 수행한다.

```
E:/MIRAI-ME/
├── 01_기획/        — 사업 기획, PPT
├── 02_디자인/      — 디자인 에셋
├── 03_개발/
│   └── landing/   — Next.js 랜딩 페이지 (Git 리포)
├── 04_인프라/      — 서버, 배포 설정
├── 05_마케팅/      — 마케팅 자료
├── 06_법무/        — 상표, 법적 문서
└── 07_재무/        — 재무 계획
```

### 강제 규칙

1. **절대 경로**: 랜딩 페이지 개발은 `E:/MIRAI-ME/03_개발/landing/`에서만 진행
2. **중복 금지**: E: 루트나 다른 경로에 프로젝트 복제본을 생성하지 않는다
3. **새 모듈**: 새로운 개발 모듈(앱, API 등)은 `E:/MIRAI-ME/03_개발/` 하위에 생성
4. **문서/기획**: 기획 문서는 `01_기획/`, 디자인은 `02_디자인/` 등 해당 폴더에 저장
5. **Git 작업**: `cd E:/MIRAI-ME/03_개발/landing` 후 git 명령 실행

## 기술 스택

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- next-intl v4 (ja 기본 + ko)
- framer-motion v12
- react-hook-form + zod
- googleapis (Google Sheets)

## i18n 규칙

- 기본 로케일: ja (URL 접두사 없음)
- 한국어: /ko 접두사
- 모든 사용자 노출 텍스트는 `src/messages/ja.json`, `ko.json`에 키로 관리
- 하드코딩 금지 — 반드시 `useTranslations()` 사용
- 새 키 추가 시 ja.json과 ko.json 양쪽 모두 동시 추가

## 배포

- GitHub: github.com/Charlie1082/mirai-me-landing
- Vercel: main 브랜치 push 시 자동 배포
- 라이브: https://mirai-me.jp
- DNS: Cloudflare
