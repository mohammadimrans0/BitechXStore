import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <TSelected extends unknown>(selector: (state: RootState) => TSelected): TSelected => useSelector(selector);
