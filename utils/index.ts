import cookie from "js-cookie"
import { format } from "date-fns"
import numeral from "numeral"

export const getToken = () => cookie.get("accessToken")
export const getCookie = (key: string) => cookie.get(key)
export const setToken = (value: string) => cookie.set("accessToken", value)
export const setCookie = (key: string, value: string) => cookie.set(key, value)
export const removeCookie = (key: string) => cookie.remove(key)
export const removeToken = () => cookie.remove("accessToken")
export const isBrowser = typeof window !== "undefined"

const dateIsValid = (date: string) => {
  return !Number.isNaN(new Date(date).getTime())
}

export const formatDate = (val: string = new Date().toISOString(), str = "dd-MMM-yy") => {
  return format(new Date(dateIsValid(val) ? val : new Date().toISOString()), str)
}

export const money = (val: number) => {
  return numeral(val).format("0,0")
}