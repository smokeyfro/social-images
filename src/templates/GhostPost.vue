<template>
	<Layout>
		<article>
			<h1>{{ $page.post.title }}</h1>
			<p>{{ $page.post.description }}</p>
			<div v-html="$page.post.html" />
		</article>
	</Layout>
</template>

<script>
export default {
	metaInfo() {
		return {
			title: this.$page.post.title,
			meta: [
				{
					property: "og:image",
					content: this.$page.post.og_image
				},
				{
					name: "twitter:image:src",
					content: this.$page.post.og_image
				}
			]
		};
	}
};
</script>

<page-query>
query Post ($path: String) {
	post: ghostPost(path: $path) {
		title
		slug
		path
		id
		html
		excerpt
		og_image
		coverImage: feature_image
		date: published_at (format: "D. MMMM YYYY")
	}
}
</page-query>