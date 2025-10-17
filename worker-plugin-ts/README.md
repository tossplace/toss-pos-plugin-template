# worker-plugin-ts

Toss POS용 [Web Worker 플러그인](https://docs.tossplace.com/guide/pos-integration/plugin/develop/package.html) TypeScript 템플릿입니다.

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

### 3. 테스트 실행

개발 중 테스트를 위해 다음 명령어를 실행합니다:

```bash
npm run test:dev
```

## 개발 가이드

### 플러그인 기능 구현

`src/index.ts` 파일을 수정하여 플러그인 기능을 구현합니다. TypeScript 타입 지원으로 안정적인 개발이 가능합니다.

### 타입 검사

```bash
npm run typecheck
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
