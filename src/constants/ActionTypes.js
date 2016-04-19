/**Book************/
export const ADD_BOOK = 'ADD_BOOK';// 捐书
export const DELETE_BOOK = 'DELETE_BOOK';//删除书籍，客户端没有这个功能
export const BOOK_LIST = 'BOOK_LIST';//首页书的列表
export const CHECK_BOOK = 'CHECK_BOOK';//使用ISBN查询书籍是否寻在
export const FETCH_ONE_BOOK ='FETCH_ONE_BOOK';//获取某本书的详细信息

export const CHOOSE_CATEGORY = 'CHOOSE_CATEGORY';//选择图书种类
export const USER_CATEGORY = 'USER_CATEGORY';//用户当前的关注列表

export const LOAN_BOOK_LIST = 'LOAN_BOOK_LIST';//借出列表
export const BORROW_BOOK_LIST = 'BORROW_BOOK_LIST';//借入列表
export const DESIRE_BOOK_LIST = 'DESIRE_BOOK_LIST';//心愿单列表

/**User************/

export const CHECK_VCODE_SUCCESS = 'CHECK_VCODE_SUCCESS';//验证码

export const LOGIN = 'LOGIN';//登录
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';//登录成功
export const LOGIN_FAILURE = 'LOGIN_FAILURE';//登录失败

export const GET_USERINFO_SUCCESS = 'GET_USERINFO_SUCCESS';//获取用户信息成功
export const GET_USERINFO_FAILURE = 'GET_USERINFO_FAILURE';//获取用户信息失败

export const LOGIN_OUT = 'LOGIN_OUT';//注销
export const REGISTER = 'REGISTER';//注册
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';//注册成功
export const REGISTER_FAILURE = 'REGISTER_FAILURE';//注册失败
