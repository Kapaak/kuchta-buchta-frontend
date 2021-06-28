//libraries
import BlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";
import { client } from "../../sanity";
import { urlFor } from "../../sanity";
//styles
import { TextContent } from "@/styles/GlobalStyles";
//breakpoints
import breakpoints from "@/styles/breakpoints";

const StyledImage = styled.img<any>`
	width: 100%;
	max-height: 66rem;
	object-fit: cover;
	flex: 1;
`;

const StyledHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
	@media ${breakpoints.desktop} {
		flex-direction: row;
	}
`;
const StyledCategories = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	@media ${breakpoints.desktop} {
		flex-direction: column;
	}
`;

const StyledCategory = styled.div`
	background-color: var(--second-col);
	padding: 0.6rem 0.4rem;
	user-select: none;
	border-radius: 0.6rem;
	box-shadow: 0 0px 1px rgba(240, 187, 88, 0.13),
		0 0px 2px rgba(240, 187, 88, 0.13), 0 0px 4px rgba(240, 187, 88, 0.13),
		0 0px 8px rgba(240, 187, 88, 0.13), 0 0px 16px rgba(240, 187, 88, 0.13);

	@media ${breakpoints.desktop} {
		font-size: 1.8rem;
		padding: 1rem 0.8rem;
	}
`;

const StyledText = styled(TextContent)``;

interface Props {
	body: Array<object>;
	title: String;
	image: object;
	categories: Array<object>;
}

const Post = ({ body, title, image, categories }: Props) => {
	return (
		<StyledText>
			<h1>{title}</h1>
			<StyledHeader>
				<StyledImage src={urlFor(image)} alt="recipe-image" />
				<StyledCategories>
					{categories.length
						? categories.map((category: any, index: any) => (
								<StyledCategory key={index}>{category?.title}</StyledCategory>
						  ))
						: null}
				</StyledCategories>
			</StyledHeader>

			<BlockContent
				blocks={body}
				serializers={{
					//@ts-ignore
					list: (props: any) => {
						return <ul>{props.children}</ul>;
					},
				}}
			/>
		</StyledText>
	);
};

export default Post;

export const getServerSideProps = async (pageContext: any) => {
	const pageSlug = pageContext.query.slug;

	if (!pageSlug) return { notFound: true };

	const query = `*[ _type == "post" && slug.current == $pageSlug ][0]{body,title,mainImage,categories[]->{title},author->{_id,name}}`;

	const recipe = await client.fetch(query, { pageSlug });

	if (!recipe) return { props: null, notFound: true };
	else
		return {
			props: {
				body: recipe.body,
				title: recipe.title,
				image: recipe.mainImage,
				categories: recipe.categories,
				author: recipe.author,
			},
		};
};