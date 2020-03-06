<template>
	<Layout>
		<article v-for="edge in $page.posts.edges" :key="edge.node.id">
        <h2 v-if="edge.node.title">
          {{ edge.node.title }}
        </h2>
        <p><g-link :to="`${edge.node.path}`">Continue reading</g-link></p>
    </article>
	</Layout>
</template>

<page-query>
	query Tutorials {
		posts: allGhostPost {
			totalCount
			pageInfo {
				totalPages
				currentPage
			}
			edges {
				node {
					id
					title
					path
					 feature_image
          og_image
				}
			}
		}
	}
</page-query>