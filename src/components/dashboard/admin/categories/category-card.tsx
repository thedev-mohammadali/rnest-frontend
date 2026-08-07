import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import CategoryActions from "./category-actions";

type Props = {
  category: {
    id: string;
    name: string;
    description: string;
    createdAt: string;
  };
};

const CategoryCard = ({ category }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{category.name}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-muted-foreground">{category.description}</p>

        <p className="text-muted-foreground text-sm">
          Created {category.createdAt}
        </p>
      </CardContent>

      <CardFooter>
        <CategoryActions />
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
