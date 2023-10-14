import { TypedUseSelectorHook, useDispatch as appDispatch, useSelector as appSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';
export const useDispatch = () => appDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = appSelector;