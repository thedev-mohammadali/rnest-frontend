import { Home } from "lucide-react";
import Image from "next/image";

type Props = {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

const AuthImage = ({ image, title, description }: Props) => {
  return (
    <section className="relative hidden lg:block">
      <Image
        src={image}
        alt="Beautiful rental home"
        fill
        sizes="(max-width: 1024px) 0vw, 50vw"
        loading="eager"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-10 left-10 text-white">
        <h2 className="text-4xl font-bold">{title}</h2>

        <p className="mt-3 max-w-md text-white/80">{description}</p>

        <div className="mt-4 flex items-center gap-2 text-xl font-bold">
          <Home className="h-6 w-6" />
          RentNest
        </div>
      </div>
    </section>
  );
};

export default AuthImage;
