import { ModalIDs_member } from './modal-ids-member'

const all = {
  Alert: 'modal-alert',
  ...ModalIDs_member,
}

const values = Object.values(all)
const hasDuplicate = new Set(values).size !== values.length
if (hasDuplicate) {
  console.warn('Duplicate modal ID detected in ModalIDs')
}

export const ModalIDs = all
export type ModalID = (typeof ModalIDs)[keyof typeof ModalIDs]
