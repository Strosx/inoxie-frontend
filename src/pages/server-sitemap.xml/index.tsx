// pages/server-sitemap.xml/index.tsx

import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async ctx => {
	return getServerSideSitemap(ctx);
};

// Default export to prevent next.js errors
export default () => {};
