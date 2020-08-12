import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export const SEO = ({
	description,
	lang,
	meta = [],
	title,
}: {
	description?: string;
	lang?: string;
	meta?: any[];
	title?: string;
}) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						social {
							twitter
						}
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			defer={false}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.social.twitter,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	);
};
