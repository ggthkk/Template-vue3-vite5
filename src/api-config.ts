import axios, { type AxiosError, type AxiosInstance } from 'axios'
import router from './router'
import { useCookies } from '@vueuse/integrations/useCookies'
import * as T from '@/types'

import { useAuthStore } from '@/stores/auth'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const isDev = import.meta.env.MODE === 'development'
const URLDev = API_BASE_URL
const defaultBaseURL = isDev ? URLDev : API_BASE_URL

declare module 'axios' {
  interface AxiosRequestConfig {
    token?: boolean
    formdata?: boolean
  }
}

// ฟังก์ชันเปลี่ยน baseURL ตามการใช้งาน
function preparedApi(baseURL: string) {
  const api: AxiosInstance = axios.create({ baseURL })

  api.interceptors.request.use(
    (config) => {
      const tokenCookie = useCookies(['token'])
      const getCookie = tokenCookie.get('token')

      const customHeaders: Record<string, string> = {}

      if (getCookie) {
        customHeaders['Authorization'] = `Bearer ${getCookie}`
      }

      try {
        const authStore = useAuthStore()
        if (authStore.$state.user) {
          customHeaders['permissionservice'] = authStore.$state.user.permissionService
        }
      } catch (e: unknown) {
        console.log('Pinia not active yet', e)
      }

      if (localStorage.getItem('language')) {
        customHeaders['Language'] = String(localStorage.getItem('language'))
      }
      //  เหลือส่งภาษา
      if (config.formdata) {
        customHeaders['Content-Type'] = 'multipart/form-data'
      }

      if (config.headers && 'set' in config.headers) {
        Object.entries(customHeaders).forEach(([key, value]) => {
          if (value) config.headers.set(key, value)
        })
      }

      return config
    },
    (error) => Promise.reject(error),
  )

  interface CustomError {
    like?: string
    message?: string
  }

  api.interceptors.response.use(
    (res) => res,
    async (err: AxiosError<CustomError>) => {
      const authStore = useAuthStore()

      console.log('err: ', err.response?.data)

      if (
        err.response?.status === 401 &&
        router.currentRoute.value.name !== 'login' &&
        router.currentRoute.value.name !== 'login-redirect'
      ) {
        useCookies(['token']).remove('token')
        authStore.loggedIn = false
        authStore.user = {} as T.User
        authStore.token = null
        authStore.$reset()
        router.push({ name: 'login' })
      }

      if (err.response?.data.like) {
        window.location.href = err.response.data.like
      }

      return Promise.reject(err)
    },
  )

  return api
}

export const getApiInstance = (
  serviceDomain?: string | undefined,
  serviceType: T.ApiInstance['serviceType'] = 'default',
): AxiosInstance => {
  const domain = decodeURIComponent(import.meta.env.VITE_API_SERVICE_DOMAIN || '')
  let baseURL = defaultBaseURL
  console.log('serviceDomain: ', serviceType)
  // switch (serviceType) {
  //   case 'agent':
  //     baseURL = URL_AGENT || defaultBaseURL
  //     break
  //   case 'member':
  //     baseURL = URL_MEMBER || defaultBaseURL
  //     break
  //   case 'partner':
  //     baseURL = URL_PARTNER || defaultBaseURL
  //     break
  //   case 'service':
  //     baseURL = URL_SERVICE || defaultBaseURL
  //     break
  // }
  if (serviceDomain !== undefined) {
    if (domain.includes('://')) {
      const [secure, target] = domain.split('://')

      let fullUrl = ''

      if (target.includes('*')) {
        const formattedTarget = target.replace('*', serviceDomain)
        fullUrl = `${secure}://${formattedTarget.startsWith('.') ? formattedTarget.substring(1) : formattedTarget}`
      } else {
        fullUrl = `${secure}://${serviceDomain ? serviceDomain + '.' : ''}${target.startsWith('.') ? target.substring(1) : target}`
      }

      if (!['.', '127.0.0.1'].includes(target) || !domain.includes('127.0.0.1')) {
        baseURL = fullUrl
      } else {
        baseURL = `${secure}://${target}`
      }
    }
  }
  return preparedApi(baseURL)
}

export const getManualApiInstance = preparedApi

export default getApiInstance()
