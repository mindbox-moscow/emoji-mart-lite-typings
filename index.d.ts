import * as React from 'react';

interface SelectedEmoji {
  id: string;
  name: string;
  colons: string;
  emoticons: string[];
  skin: 1 | 2 | 3 | 4 | 5 | 6;
  native: string;
}

interface PickerProps {
	set: "apple" | "google" | "twitter" | "emojione";
	title?: string;
	color?: string;
	emoji?: string;
	emojiSize?: number;
	onClick: (emoji: SelectedEmoji, event: React.MouseEvent<{}>) => void;
	perLine?: number;
	i18n?: any;
	native?: boolean;
	sheetSize?: 16 | 20 | 32 | 64;
	backgroundImageFn?: (set: string, sheetSize: number) => string;
	emojisToShowFilter?: (unicode: string) => boolean;
	skin?: 1 | 2 | 3 | 4 | 5 | 6;
	style?: React.CSSProperties;
}

export class Picker extends React.Component<PickerProps> { }