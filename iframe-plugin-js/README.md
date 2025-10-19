# iframe-plugin-js

Toss POS용 [Iframe 플러그인](https://docs.tossplace.com/guide/pos-integration/plugin/develop/iframe-package.html) TypeScript 템플릿입니다.

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. SDK 최신화

```bash
npm install @tossplace/pos-plugin-sdk@latest
```

### 3. 개발 서버 실행

```bash
npm run dev
```

## 개발 가이드

### 개발

React 기반의 프로젝트를 개발합니다.

### 탭 정보 수정

`public/iframe-manifest.json` 파일에서, Toss Pos에 노출하는 탭의 제목과 설명을 수정할 수 있습니다.

```
iframe-manifest.json
└── tab
    ├── title          # 탭 이름
    ├── description    # 탭 페이지 소개 (짧게 작성)
    └── href           # dist로 참조하는 index.html 파일명
```

## 배포 가이드

1. **빌드 실행**

   ```bash
   npm run build
   ```

2. **배포 파일 압축**

   - 생성된 `dist` 폴더를 zip 파일로 압축

3. **[개발자 센터](https://developers.tossplace.com/plugins) 업로드**

   - zip 파일을 토스플레이스 개발자 센터에 업로드
   - 플러그인 검수 및 배포 진행
