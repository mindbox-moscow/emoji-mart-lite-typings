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
	// apple
	title?: string;
	color?: string;
	// #ae65c5	The top bar anchors select and hover color
	emoji?: string;
	// department_store	The emoji shown when no emojis are hovered
	emojiSize?: number;
	// 24	The emoji width and height
	onClick: (emoji: SelectedEmoji, event: React.MouseEvent<{}>) => void;
	// Params: (emoji, event) => {}
	perLine?: number;
	// 9	Number of emojis per line. While there’s no minimum or maximum, this will affect the picker’s width. This will set Frequently Used length as well (perLine * 4)
	i18n?: any;
	// {…}	An object containing localized strings
	native?: boolean;
	// false	Renders the native unicode emoji
	sheetSize?: 16 | 20 | 32 | 64;
	// 64	The emoji sheet size: 
	backgroundImageFn?: (set: string, sheetSize: number) => string;
	// `https://unpkg.com/emoji-datasource@2.4.4/sheet_${set}_${sheetSize}.png`)	A Fn that returns that image sheet to use for emojis.
	// Useful for avoiding a request if you have the sheet locally.
	emojisToShowFilter?: (unicode: string) => boolean;
	//)	A Fn to choose whether an emoji should be displayed or not based on its unicode
	skin?: 1 | 2 | 3 | 4 | 5 | 6;
	// 1	Default skin color: 1, 2, 3, 4, 5, 6
	style?: React.CSSProperties;
	// Inline styles applied to the root element. Useful for positioning
}

export class Picker extends React.Component<PickerProps> { }