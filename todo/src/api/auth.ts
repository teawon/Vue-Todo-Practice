import baseAxios from "./baseAxios"; // 수정된 부분

interface CreateUserParams {
  userName: string;
  email: string;
  password: string;
}

export const createUser = async ({
  userName,
  email,
  password,
}: CreateUserParams) => {
  await baseAxios.post("users/signup", {
    nickname: userName,
    email: email,
    password: password,
  });
};
