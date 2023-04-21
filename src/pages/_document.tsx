import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const cache = createCache();
		const originalRenderPage = ctx.renderPage;

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: App => props =>
					(
						<StyleProvider cache={cache}>
							<App {...props} />
						</StyleProvider>
					)
			});

		const initialProps = await Document.getInitialProps(ctx);

		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					<script
						dangerouslySetInnerHTML={{
							__html: `</script>${extractStyle(cache)}<script>`
						}}
					/>
				</>
			)
		};
	}
	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
