//libraries
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: any = {
	projectId: process.env.PROJECT_ID,
	dataset: "production",
	apiVersion: "2021-06-14",
	useCdn: true,
};

export const client = sanityClient(config);

export const urlFor = (source: object) => imageUrlBuilder(config).image(source);

// const query = encodeURIComponent(
// 	`*[ _type == "post" && slug.current == $pageSlug ]{body,title,mainImage,categories,ingrediences[]->{nazev},author->{_id,name}}`
// );
// const url = `https://${process.env.PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;

// const result = await fetch(url).then(res => res.json());
// const post = result.result[0];
