import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGhostCMS from '@matthiesenxyz/starlight-ghostcms';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			plugins: [starlightGhostCMS()],
			social: {
				github: 'https://github.com/matthiesenxyz/astro-ghostcms',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
