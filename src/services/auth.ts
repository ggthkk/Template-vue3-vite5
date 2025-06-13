import helper from '@/utilities/helper'
import { getApiInstance } from '@/api-config'
import type { AxiosResponse } from 'axios'
import { useCookies } from '@vueuse/integrations/useCookies'
import * as T from '@/types'
import { useAuthStore } from '@/stores/auth'

const createAuthService = (
  serviceDomain?: string,
  serviceType: T.ApiInstance['serviceType'] = 'default',
) => {
  const api = getApiInstance(serviceDomain, serviceType)

  const removeTokenFromAllPaths = () => {
    const cookie = useCookies(['token'])

    const allPaths = [
      '/',
      '/agent',
      ...location.pathname
        .split('/')
        .filter(Boolean)
        .map((_, i, arr) => '/' + arr.slice(0, i + 1).join('/')),
    ]

    const uniquePaths = Array.from(new Set(allPaths))

    uniquePaths.forEach((path) => {
      cookie.remove('token', { path })
    })
  }

  const login = async ({
    username,
    password,
    code,
  }: {
    username: string
    password: string
    code?: string | null
  }): Promise<T.LoginResponse> => {
    try {
      const subdomain =
        helper.getSubdomain() === 'mc-backoffice' ? 'ocenter' : helper.getSubdomain()
      const payload = {
        username,
        password,
        subdomain,
        ...(code ? { code } : {}),
      }

      const response: AxiosResponse<T.LoginResponse> = await api.post('/auth/login', payload)

      return response.data
    } catch (error) {
      console.warn('Login failed:', error)
      throw error
    }
  }

  const logout = async () => {
    const authStore = useAuthStore()

    await api.post('/auth/logout')
    removeTokenFromAllPaths()
    authStore.loggedIn = false
    authStore.user = {} as T.User
    authStore.token = null
  }

  async function post2faAuthentication(): Promise<void> {
    try {
      const res = await api.get(`/user/two-factor-authentication`)
      return res.data
    } catch (error) {
      console.warn('Post two-factor-authentication failed:', error)
      throw error
    }
  }

  async function post2faCheck(payload: { code: string }): Promise<void> {
    try {
      const res = await api.get(`/user/two-factor-check`, { data: payload })
      return res.data
    } catch (error) {
      console.warn('Post 2fa check failed:', error)
      throw error
    }
  }
  async function post2faQRCode(): Promise<{ svg: string; url: string; firstqr: boolean }> {
    try {
      const res = await api.get(`/user/two-factor-qr-code`)
      return res.data
    } catch (error) {
      console.warn('Post 2fa check failed:', error)
      throw error
    }
  }
  async function post2faRecoveryCode(): Promise<Array<string>> {
    try {
      const res = await api.get(`/user/two-factor-recovery-codes`)
      return res.data
    } catch (error) {
      console.warn('Post 2fa check failed:', error)
      throw error
    }
  }

  return {
    login,
    logout,

    post2faAuthentication,
    post2faCheck,
    post2faQRCode,
    post2faRecoveryCode,
  }
}

const AuthService = createAuthService()

export { createAuthService, AuthService }
