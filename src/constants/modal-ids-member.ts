export const ModalIDs_member = {
  CREATE_MEMBER: 'modal-create-member',
} as const

export type ModalID_Member = (typeof ModalIDs_member)[keyof typeof ModalIDs_member]
