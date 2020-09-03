import request from "@/utils/request";

export function login(data: any) {
  return request({
    url: "/uc/local/login/v1/uc-login",
    method: "post",
    data
  });
}

export function getInfo(token: any) {
  return request({
    url: "/vue-element-admin/user/info",
    method: "get",
    params: { token }
  });
}

export function logout() {
  return request({
    url: "/vue-element-admin/user/logout",
    method: "post"
  });
}
