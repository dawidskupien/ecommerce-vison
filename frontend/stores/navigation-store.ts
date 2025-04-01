import { createStore } from 'zustand/vanilla'

export type NavigationState = {
  isOpen: boolean
}

export type NavigationActions = {
    toggleNav: () => void
}

export type NavigationStore = NavigationState & NavigationActions

export const defaultInitState: NavigationState = {
  isOpen: false,
}

export const createNavigationStore = (
  initState: NavigationState = defaultInitState,
) => {
  return createStore<NavigationStore>()((set) => ({
    ...initState,
    toggleNav: () => set((state) => ({ isOpen: !state.isOpen })),
  }))
}