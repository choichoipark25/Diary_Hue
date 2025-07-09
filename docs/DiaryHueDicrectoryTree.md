# 📁 Diary Hue Directory Structure

```
diary_hue/
├── docs/                      # 프로젝트 문서
│   ├── DiaryHueColourPallet.md
│   └── DiaryHueDicrectoryTree.md
│
├── public/                    # 정적 파일
│   ├── assets/               # 이미지, 폰트 등의 정적 자원
│   │   ├── images/
│   │   └── fonts/
│   └── icons/                # 아이콘 파일들
│
├── src/                       # 소스 코드
│   ├── app/                  # Next.js 13+ App Router
│   │   ├── (auth)/          # 인증 관련 라우트 그룹
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── profile/
│   │   │
│   │   ├── (diary)/         # 다이어리 관련 라우트 그룹
│   │   │   ├── write/
│   │   │   ├── view/
│   │   │   └── calendar/
│   │   │
│   │   ├── layout.tsx       # 루트 레이아웃
│   │   └── page.tsx         # 홈페이지
│   │
│   ├── components/           # 리액트 컴포넌트
│   │   ├── common/          # 공통 컴포넌트
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   └── Modal/
│   │   │
│   │   ├── auth/            # 인증 관련 컴포넌트
│   │   ├── diary/           # 다이어리 관련 컴포넌트
│   │   └── layout/          # 레이아웃 컴포넌트
│   │
│   ├── lib/                  # 유틸리티 함수 및 설정
│   │   ├── firebase/        # Firebase 설정 및 유틸
│   │   ├── hooks/           # 커스텀 훅
│   │   └── utils/           # 유틸리티 함수
│   │
│   ├── styles/              # 스타일 관련 파일
│   │   ├── globals.css      # 전역 스타일
│   │   └── theme/           # 테마 관련 설정
│   │
│   └── types/               # TypeScript 타입 정의
│
├── .env.local               # 환경 변수 (git ignore)
├── .env.example             # 환경 변수 예시
├── .eslintrc.json          # ESLint 설정
├── .gitignore              # Git 무시 파일 목록
├── next.config.js          # Next.js 설정
├── package.json            # 프로젝트 의존성
├── postcss.config.js       # PostCSS 설정
├── README.md               # 프로젝트 설명
├── tailwind.config.js      # Tailwind CSS 설정
└── tsconfig.json           # TypeScript 설정
```

## 📌 주요 디렉토리 설명

### 📁 docs/

- 프로젝트 관련 문서들을 보관
- 컬러 팔레트, 디렉토리 구조 등의 문서 포함

### 📁 public/

- 정적 파일들을 저장
- 이미지, 폰트, 아이콘 등의 에셋 포함

### 📁 src/

- 프로젝트의 주요 소스 코드

#### 📁 app/

- Next.js 13+ App Router 구조
- 페이지 및 라우트 그룹화

#### 📁 components/

- 재사용 가능한 React 컴포넌트
- 기능별로 구분된 하위 폴더 구조

#### 📁 lib/

- Firebase 설정
- 커스텀 훅
- 유틸리티 함수

#### 📁 styles/

- 전역 스타일 및 테마 설정
- Tailwind CSS 커스텀 스타일

#### 📁 types/

- TypeScript 타입 정의 파일

## 🔍 주요 설정 파일

- `.env.local`: 환경 변수 (Firebase 설정 등)
- `next.config.js`: Next.js 설정
- `tailwind.config.js`: Tailwind CSS 설정
- `tsconfig.json`: TypeScript 설정
