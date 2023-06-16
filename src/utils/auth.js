import { isEmpty } from 'lodash'

export const isAuth = () => {
  if (typeof window !== undefined) {
    const role = localStorage.getItem('role')
    if (!isEmpty(role)) {
      return true
    } else {
      return false
    }
  }
}
