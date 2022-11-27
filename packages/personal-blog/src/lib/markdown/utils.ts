import type { Content, PhrasingContent, BlockContent } from 'mdast';

export function isPhrase(content: Content): content is PhrasingContent {
	switch (content.type) {
		case 'html':
		case 'link':
		case 'linkReference':
		case 'text':
		case 'emphasis':
		case 'strong':
		case 'delete':
		case 'inlineCode':
		case 'break':
		case 'image':
		case 'imageReference':
		case 'footnote':
		case 'footnoteReference':
			return true;

		default:
			return false;
	}
}

export function isBlock(content: Content): content is BlockContent {
	switch (content.type) {
		case 'paragraph':
		case 'heading':
		case 'thematicBreak':
		case 'blockquote':
		case 'list':
		case 'table':
		case 'html':
		case 'code':
			return true;
		default:
			return false;
	}
}
