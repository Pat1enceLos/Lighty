/*
 * action 类型
 */

export const ADD_USER_INFO = 'ADD_USER_INFO';


export function addUserInfo(info: any) {
  return { type: ADD_USER_INFO, info }
}

