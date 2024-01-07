import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../components/HelloWorld.vue";
import TodoList from "../components/TodoList.vue";

//  애플리케이션의 경로(path)와 각 경로에 연결된 컴포넌트(component)를 정의
const routes: Array<RouteRecordRaw> = [
  {
    path: "/", // URL 경로
    name: "Home", // 경로의 이름 (선택적)
    component: Home, // 이 경로로 이동했을 때 렌더링할 컴포넌트
  },
  {
    path: "/todo",
    name: "Todo",
    component: TodoList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// 브라우저의 history API를 사용하여 현재의 위치를 기반으로 내비게이션 형성.

export default router;
