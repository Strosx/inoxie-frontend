/**
 * Info about typing keys in next-i18next:
 * https://github.com/i18next/next-i18next/blob/master/UPGRADING.md
 * After migrating to version 13, imports should be updated to reflect above links specs.
 */
import 'react-i18next';
import type home from 'public/locales/en-US/home.json';
import type shared from 'public/locales/en-US/shared.json'

interface I18nNamespaces {
    home: typeof home;
    shared: typeof shared;
}

declare module 'react-i18next' {
	interface CustomTypeOptions {
		defaultNS: 'shared';
		resources: I18nNamespaces;
	}
}
