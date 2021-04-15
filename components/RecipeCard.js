import Link from "next/link";
import {
  Card,
  CardFeatured,
  CardContent,
  InfoParagraph,
  ContentInfo,
  ContentActions,
} from "./RecipeCardStyles";
import Image from "next/image";

const RecipeCard = ({ recipe }) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;

  return (
    <Card>
      <CardFeatured>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </CardFeatured>
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
