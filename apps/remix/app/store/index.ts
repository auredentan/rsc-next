import { SessionUser } from '@/types/session';

import { atom, createStore } from 'jotai';

export const globalStore = createStore()

export const sessionUserAtom = atom<SessionUser | undefined>(undefined)
