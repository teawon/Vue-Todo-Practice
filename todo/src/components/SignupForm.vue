<template>
  <div class="signup-container">
    <h1>회원가입</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">이메일</label>
        <input id="email" v-model="email" type="email" required />
      </div>
      <div class="form-group">
        <label for="password">비밀번호</label>
        <input id="password" v-model="password" type="password" required />
      </div>
      <div class="form-group">
        <label for="nickname">닉네임</label>
        <input id="nickname" v-model="nickname" type="text" required />
      </div>
      <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { createUser } from "@/api/auth";
import { useRouter } from "vue-router";

export default {
  name: "SignupForm",
  setup() {
    const router = useRouter();

    const email = ref("");
    const password = ref("");
    const nickname = ref("");

    const handleSubmit = async () => {
      try {
        await createUser({
          userName: nickname.value,
          email: email.value,
          password: password.value,
        });
        router.push("/");
      } catch (error) {
        alert(error);
      }
    };

    return {
      email,
      password,
      nickname,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: calc(100% - 20px);
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>
