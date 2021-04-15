const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const data = await client.getEntries({
    content_type: "recipes",
  });
  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await client.getEntries({
    content_type: "recipes",
    "fields.slug": params.slug,
  });

  return {
    props: {
      recipe: data.items[0],
    },
  };
};

export default function RecipeDetails() {
  return <div>Recipe Details</div>;
}
