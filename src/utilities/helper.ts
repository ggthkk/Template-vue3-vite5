import { computed, type Ref, type ComputedRef, isRef } from 'vue'
import { eventBus } from './eventBus'
import { useAuthStore } from '@/stores/auth'
import i18n from '@/plugins/vue-i18n'
import dayjs from 'dayjs'
import type * as T from '@/types'

const t = i18n.global.t as (key: string, opt?: unknown) => string
const te = i18n.global.te as (key: string) => boolean
const n = i18n.global.n as (val: number, format?: string) => string
const locale = i18n.global.locale as unknown as Ref<string>

import { ModalIDs } from '@/constants/index'
import type { ModalID } from '@/constants/index'
class helper {
  modalIds = ModalIDs

  openModal(id: ModalID, options: Record<string, unknown> = {}) {
    eventBus.emit(`${id}-opened`, { id, ...options })
  }

  closeModal(id: ModalID) {
    eventBus.emit(`${id}-closed`)
  }

  onModalEvent(id: ModalID, eventType: 'opened' | 'closed', callback: (data?: unknown) => void) {
    eventBus.on(`${id}-${eventType}`, callback)
  }

  offModalEvent(id: ModalID, eventType: 'opened' | 'closed', callback: (data?: unknown) => void) {
    eventBus.off(`${id}-${eventType}`, callback)
  }

  image = (path?: string): string => {
    return !path || typeof path !== 'string' || path.includes('undefined') || path.includes('null')
      ? '/images/no-data.webp'
      : `/images/${path}`
  }

  isi18n(msg: unknown): boolean {
    return typeof msg === 'string' && /^[a-zA-Z0-9_.]+$/.test(msg) && msg.includes('.')
  }

  text(v: string, option?: object): string {
    return typeof v === 'string' && this.isi18n(v) && te(v) ? t(v, option || {}) : v
  }

  getAliasPermission(key: string): string {
    const fullKey = `alias.permissions[\"${key}\"]`
    return te(fullKey) ? t(fullKey) : key
  }

  // เอาไว้แสดงผลลัพธ์เป็นตัวเลข มันจะได้ string นะ เอาไปคำนวณต่อไม่ได้
  currency(v: string | number, useDecimals = true) {
    const num = typeof v === 'string' ? parseFloat(v) : v
    const preset = useDecimals ? 'decimal' : 'decimalNoFrac'
    return n(num, preset)
  }

  onlyAllowNumber(value: string) {
    return !value || /^\d*\.?\d*$/.test(value)
  }

  onlyAllowText(value: string) {
    return !value || /^[^0-9]+$/.test(value)
  }

  parse = (input: string): number | null => {
    const nums = input.replace(/,/g, '').trim()
    return nums === '' ? null : /^\d+(\.\d+)?$/.test(nums) ? parseFloat(nums) : null
  }

  format = (value: number | null): string => {
    return value === null || isNaN(value)
      ? ''
      : value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  formatPhoneNumber = (phone: string) => {
    return phone ? phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3') : ''
  }

  formatNumber = (value: string | number, options?: Intl.NumberFormatOptions): string => {
    const num = typeof value === 'string' ? parseFloat(value) : value
    if (isNaN(num)) return ''
    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      ...options,
    })
    return formatter.format(num)
  }

  bankNumber = (value: string | number): string => {
    const str = typeof value === 'number' ? value.toString() : value
    if (str.length === 10) return `${str.slice(0, 3)} - ${str[3]} - ${str.slice(4, 9)} - ${str[9]}`
    if (str.length === 12)
      return `${str.slice(0, 3)} - ${str[3]} - ${str.slice(4, 9)} - ${str.slice(9, 12)}`
    return str
  }

  hexToRgba(hex: string, alpha?: number) {
    const cleanHex = hex.replace('#', '')
    const r = parseInt(cleanHex.slice(0, 2), 16)
    const g = parseInt(cleanHex.slice(2, 4), 16)
    const b = parseInt(cleanHex.slice(4, 6), 16)
    const a = cleanHex.length === 8 ? parseInt(cleanHex.slice(6, 8), 16) / 255 : 1
    return `rgba(${r}, ${g}, ${b}, ${alpha ?? a})`
  }

  formatDateTime = (val: number | Date | null) => {
    if (!val || !dayjs(val).isValid()) return '-'
    return dayjs(val).format('DD-MM-YYYY HH:mm:ss')
  }

  formatDateTimeAPI = (val: number | Date | null) => {
    if (!val || !dayjs(val).isValid()) return '-'
    return dayjs(val).format('YYYY-MM-DD HH:mm')
  }

  formatDate = (val: number | Date | null) => {
    if (!val || !dayjs(val).isValid()) return '-'
    return dayjs(val).format('YYYY-MM-DD')
  }

  formatFullDate = (val: number | Date | null) => {
    if (!val || !dayjs(val).isValid()) return '-'
    return dayjs(val).format('D MMMM YYYY')
  }

  formatFullDateTime = (val: Date | number | null, withDay: boolean = false): string => {
    if (!val) return '-'

    const d = dayjs(val).tz()
    const year = locale.value === 'th' ? d.year() + 543 : d.year()
    const datePart = d.format('D MMMM')
    const dayPart = d.format('dddd') // เช่น 'Monday'
    const time = d.format('HH:mm')

    const dateText = withDay
      ? `${t('profile.Day')}${t(`${dayPart.toLowerCase()}`)} ${datePart}`
      : datePart

    return `${dateText} ${year} ${t('dashboard.time')} ${time}`
  }

  formatTime = (val: number | null) => dayjs(val).format('HH:mm:ss')
  formatISO = (val: number | Date | null) => dayjs(val).toISOString()

  getLang = () => locale.value

  updatePagination = (meta: { total?: number; per_page?: number; current_page?: number }) => {
    return {
      totalRecords: meta?.total ?? 0,
      rows: meta?.per_page ?? 10,
      first: ((meta?.current_page ?? 1) - 1) * (meta?.per_page ?? 10),
      page: meta?.current_page ?? 1,
    }
  }

  hasGroupPermission(key?: string, options?: { ignoreCode?: boolean }) {
    const authStore = useAuthStore()
    return authStore ? authStore.hasGroupPermission(key, options) : false
  }

  canAccessMenu = (menu: T.MenuItems) => {
    const authStore = useAuthStore()
    return authStore.canAccessMenu(menu) ?? false
  }
  hasNamePermission = (key: string) => {
    const authStore = useAuthStore()
    return authStore.hasNamePermission(key) ?? false
  }

  getStatusTag(status: string) {
    type Color = 'primary' | 'success' | 'danger' | 'warn' | 'secondary' | 'tertiary'
    const map: Record<string, [Color, string, string]> = {
      pending: ['warn', 'mdi:clock-outline', 'profile.pending'],
      approve: ['success', 'mdi:check-circle', 'financial.approve'],
      ban: ['danger', 'mdi:close-circle', 'report.ban'],
      notapprove: ['danger', 'mdi:close-circle', 'financial.notapprove'],
      success: ['success', 'mdi:check-circle', 'success'],
      fail: ['danger', 'mdi:close-circle', 'fail'],
    }
    const [color, icon, label] = map[status] || ['primary', 'mdi:account', 'report.' + status]
    return { color, icon, label }
  }

  sumField<T>(dataSource: T[] | Ref<T[]>, field: keyof T, padZeros = true): ComputedRef<string> {
    return computed(() => {
      const arr = isRef(dataSource) ? dataSource.value : dataSource
      const total = arr.reduce((sum, item) => {
        const val = item?.[field]
        const num = typeof val === 'string' ? parseFloat(val) : Number(val)
        return sum + (isNaN(num) ? 0 : num)
      }, 0)

      const rounded = Math.round(total * 100) / 100
      const result = String(rounded)

      if (!padZeros) return result

      const [int, frac = '00'] = result.split('.')
      return `${int}.${(frac + '0').slice(0, 2)}`
    })
  }

  isDateDisabled = (
    ts: number,
    type: 'start' | 'end',
    startDate?: number | string | null,
    endDate?: number | string | null,
  ): boolean => {
    return type === 'start' && Number(endDate)
      ? ts > Number(endDate)
      : type === 'end' && Number(startDate)
        ? ts < Number(startDate)
        : false
  }

  useNumberToggle(source: Ref<Record<string, unknown>>, key: string) {
    return computed<boolean>({
      get: () => !!source.value[key],
      set: (val) => (source.value[key] = val ? 1 : 0),
    })
  }

  parsePromotionTargetData = (
    targetArray: { type: string }[] | Record<string, boolean> | null,
    isAll: boolean,
  ) => {
    const allTypes = ['Sport', 'Game', 'Casino', 'Lotto']
    const selected = new Set(
      !targetArray
        ? allTypes
        : Array.isArray(targetArray)
          ? targetArray.map((item) => item.type)
          : Object.keys(targetArray).filter((key) => targetArray[key]),
    )
    const result = Object.fromEntries(allTypes.map((type) => [type, selected.has(type)]))
    if (!isAll) result['Custom'] = true
    return result
  }

  parsePromotionTargetDataCustom = (targetArray: { id: string | number }[] | null | undefined) => {
    if (!Array.isArray(targetArray)) return {}
    return Object.fromEntries(targetArray.filter((i) => i?.id != null).map((i) => [i.id, true]))
  }

  checkShowPhone(phone: string, options: { name?: string; group?: string } = {}): string {
    if (!phone || phone.length < 10) return phone

    const group = options.group ?? ''
    const name = options.name ?? ''

    const hasPermission = this.hasNamePermission(name) && this.hasGroupPermission(group)
    return hasPermission ? phone : this.maskPhone(phone)
  }

  private maskPhone(phone: string): string {
    return `${phone.slice(0, 3)}XXXX${phone.slice(7)}`
  }

  getSubdomain = (): string => {
    const envSubdomain = import.meta.env.VITE_SUB_DOMAIN
    let subdomainFromUrl = ''

    try {
      const match = /:\/\/([^\/]+)/.exec(window.location.href)
      if (match && match[1]) {
        let domain = match[1]
        if (domain.includes('://')) {
          domain = domain.split('://')[1]
        }
        subdomainFromUrl = domain.split('.')[0]
      }
    } catch (e) {
      console.warn('Failed to parse subdomain from URL', e)
    }

    return envSubdomain !== undefined && envSubdomain !== '' ? envSubdomain : subdomainFromUrl
  }
}

export default new helper()
