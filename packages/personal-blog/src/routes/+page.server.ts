import { marked } from 'marked';
import type { Renderer } from 'marked';
import fs from 'fs';
import { json } from '@sveltejs/kit';

export const prerender = true;

// type Node = Heading | Blockquote | Break | Code | InlineCode;

// interface Heading {
// 	type: 'heading';
// 	text: string;
// 	level: 1 | 2 | 3 | 4 | 5 | 6;
// }

// interface Blockquote {
// 	type: 'blockquote';
// 	text: string;
// }

// interface Break {
// 	type: 'break';
// }

// interface Code {
// 	type: 'code';
// 	language?: string;
// 	text: string;
// }

// interface InlineCode {
// 	type: 'inlineCode';
// 	text: string;
// }

// const renderer: Renderer<Node> = {
//   heading(text, level) {
//     return {
//       type: 'heading',
//       level,
//       text
//     };
//   },

//   blockquote(quote) {
//     return {
//       type: 'blockquote',
//       text: quote
//     };
//   },

//   br() {
//     return {
//       type: 'break'
//     };
//   },

//   checkbox(checked) {
//     throw new Error("Unsupported 'checkbox' element");
//   },

//   code(code, language) {
//     return {
//       text: code,
//       type: 'code',
//       language
//     };
//   },

//   codespan(code) {
//     return {
//       text: code,
//       type: 'inlineCode'
//     };
//   },

//   del(text) {
//     throw new Error("Unsupported 'del' element");
//   },
//   html: function (this: marked.RendererThis | marked.Renderer<never>, html: string): string | Node {
//     throw new Error('Function not implemented.');
//   },
//   hr: function (this: marked.RendererThis | marked.Renderer<never>): string | Node {
//     throw new Error('Function not implemented.');
//   },
//   list: function (this: marked.RendererThis | marked.Renderer<never>, body: string, ordered: boolean, start: number): string | Node {
//     throw new Error('Function not implemented.');
//   },
//   listitem: function (this: marked.RendererThis | marked.Renderer<never>, text: string, task: boolean, checked: boolean): string | Node {
//     throw new Error('Function not implemented.');
//   },
//   paragraph: function (this: marked.RendererThis | marked.Renderer<never>, text: string): string | Node {
//     throw new Error('Function not implemented.');
//   },
//   table: function (this: marked.RendererThis | marked.Renderer<never>, header: string, body: string): string | Node {
//     throw new Error('Function not implemented.');
//   },
//   tablerow: function (this: marked.RendererThis | marked.Renderer<never>, content: string): string | Node {
//     throw new Error('Function not implemented.');
//   },
//   tablecell: function (this: marked.RendererThis | marked.Renderer<never>, content: string, flags: { header: boolean; align: 'center' | 'left' | 'right' | null; }): string | Node {
//     throw new Error('Function not implemented.');
//   },
//   strong: function (this: marked.RendererThis | marked.Renderer<never>, text: string): string | Node {
//     throw new Error('Function not implemented.');
//   },
//   em: function (this: marked.RendererThis | marked.Renderer<never>, text: string): string | Node {
//     throw new Error('Function not implemented.');
//   },
//   link: function (this: marked.RendererThis | marked.Renderer<never>, href: string | null, title: string | null, text: string): string | Node {
//     throw new Error('Function not implemented.');
//   },
//   image: function (this: marked.RendererThis | marked.Renderer<never>, href: string | null, title: string | null, text: string): string | Node {
//     throw new Error('Function not implemented.');
//   },
//   text: function (this: marked.RendererThis | marked.Renderer<never>, text: string): string | Node {
//     throw new Error('Function not implemented.');
//   }
// };

export function load() {
	const source = fs.readFileSync(
		`/Users/antoine/Personal Website/personal-blog/packages/personal-blog/src/routes/test.md`,
		{ encoding: 'utf-8' }
	);

	const tokens = marked.lexer(source);
	fs.writeFileSync(
		'/Users/antoine/Personal Website/personal-blog/packages/personal-blog/src/routes/tokens.json',
		JSON.stringify(tokens, null, 2)
	);

	return {
		content: tokens
	};
}
//https://github.com/aws-samples/aws-stf-core-scorpio/raw/main/docs/images/scorpio_arch.png
