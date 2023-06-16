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

export const isHr = () => {
  if (typeof window !== undefined) {
    const role = localStorage.getItem('role')
    if (role === 'hr') {
      return true
    } else {
      return false
    }
  }
}

export const isReviewer = () => {
  if (typeof window !== undefined) {
    const role = localStorage.getItem('role')
    if (role === 'reviewer') {
      return true
    } else {
      return false
    }
  }
}
