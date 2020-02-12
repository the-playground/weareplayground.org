import { ResponsiveImage, SharpImage } from './image';
import { PageMeta } from './seo';

export interface Performance {
	datetime: Date;
	preview: boolean;
	price: number;
	pwyw: boolean;
	status: 'active' | 'inactive';
	talkback: boolean;
}

export interface Show {
	title: string;
	author: string;
	hero_image: ResponsiveImage;
	hero_imageSharp: SharpImage;
	short_description: string;
	long_description: string;
	tagline: string;
	hashtag: string;
	effects_advisory: string;
	content_advisory: string;
	intermissions: number;
	runtime_hours: number;
	runtime_minutes: number;
	author_link: {
		url: string
	};
	script_link: {
		url: string;
	};
	performances: Performance[] | undefined;
	artists: [] | undefined;
	location: [] | undefined;
	sponsors: [] | undefined;
	body: PageMeta;
}

export interface ShowCard {
	_meta: {
		uid: string;
	};
	title: string;
	author: string;
	catalog_image: ResponsiveImage;
	catalog_imageSharp: SharpImage;
	performances: {
		datetime: Date;
	}

}
