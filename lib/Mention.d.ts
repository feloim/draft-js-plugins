import { ContentState } from 'draft-js';
import { ComponentType, ReactElement, ReactNode } from 'react';
import { MentionData } from '.';
import { MentionPluginTheme } from './theme';
export interface SubMentionComponentProps {
  mention: MentionData;
  children: ReactNode;
  className: string;
  entityKey: string;
  theme: MentionPluginTheme;
  decoratedText: string;
}
export interface MentionProps {
  children: ReactNode;
  className: string;
  entityKey: string;
  theme?: MentionPluginTheme;
  mentionComponent?: ComponentType<SubMentionComponentProps>;
  decoratedText: string;
  contentState: ContentState;
}
export default function Mention(props: MentionProps): ReactElement;
