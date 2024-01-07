# Vue-Todo-Practice

## 디렉토리 구조

src: 소스 코드가 있는 곳

components: Vue 컴포넌트 파일들이 위치

App.vue: 애플리케이션의 루트 컴포넌트

main.ts: 애플리케이션을 시작하는 진입점

## Vue의 컴포넌트 구조

1. UI (Template):
   위치: 파일의 가장 위쪽에 위치

   역할: HTML과 같은 마크업을 사용하여 컴포넌트의 사용자 인터페이스를 정의

   데이터 바인딩, 디렉티브, 이벤트 바인딩 등 Vue의 템플릿 문법을 사용하여 동적으로 데이터를 표시하고 사용자 상호작용을 처리

2. 로직 (Script):
   위치: UI 부분 바로 아래에 위치

   역할: 컴포넌트의 데이터, 메서드, 계산된 속성, 생명주기 훅, 감시자 등을 정의(컴포넌트의 동적인 행동과 상태 관리)

   예시: `<script>` 태그 내에서 data, methods, computed, watch, props 등을 정의

3. 스타일 (Style):
   위치: 파일의 가장 아래

   역할: 컴포넌트의 스타일을 정의 CSS 또는 프리프로세서(Sass, Less 등)를 사용하여 컴포넌트의 디자인과 레이아웃을 지정.

   scoped 속성을 사용하여 스타일이 해당 컴포넌트에만 적용되도록 할 수도 있음

   (별도 라이브러리를 통해 css-in-js 형태도 가능)

## Vue vs React?

- Vue의 경우 HTML, React의 JSX와 다르다는 특징이 두드러짐

- Vue는 Vuex라는 자체 상태관리 라이브러리를 제공해서 사용한다 (Vue.js의 생태계와 특징에 더 적합하게 설계된 방식)

- Vue 왜써요?

  - React에 비해 러닝커브 적음 (JS친화적)

  - For반복문 등 대체로 Vue의 코드가 더 간결하고 깔끔하다 (가독성, HTML구조 보기 좋음)

  - 코드 짜는 방식이 React에 비해 단적(?)이라, 고민이나 컨벤션 혼동이 적음

  - 미세하긴한데 HTML렌더링 속도가 더 빠름
    https://codingapple.com/unit/why-use-vue-over-react/
