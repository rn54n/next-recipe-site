import Link from "next/link";
import {
  Card,
  CardFeatured,
  CardContent,
  InfoParagraph,
  ContentInfo,
  ContentActions,
} from "./RecipeCardStyles";

const RecipeCard = ({ recipe }) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;

  return (
    <Card>
      <CardFeatured></CardFeatured>
      <CardContent>
        <ContentInfo>
          {title}
          <InfoParagraph>
            Takes approx: {cookingTime} mins to make
          </InfoParagraph>
        </ContentInfo>
        <ContentActions>
          <Link href={`/recipes/${slug}`}>
            <a>Cook this</a>
          </Link>
        </ContentActions>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
