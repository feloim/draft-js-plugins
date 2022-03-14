import { ReactElement, ReactNode } from 'react';
import { MentionPluginStore, PopperOptions } from '..';
import { MentionPluginTheme } from '../theme';
export interface PopoverProps {
  store: MentionPluginStore;
  children: ReactNode;
  popperOptions?: PopperOptions;
  theme: MentionPluginTheme;
}
export default function Popover({
  store,
  children,
  theme,
  popperOptions,
}: PopoverProps): ReactElement;
