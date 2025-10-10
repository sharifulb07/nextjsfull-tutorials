import Image from "next/image";
import { photos, ImageProps } from "../wonders";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const photo = photos.find((p) => p.id === id);

  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <div className="container mx-auto my-10 z-0">
      <div className="mx-auto my-10">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">
            {photo.title}
          </h1>
        </div>
        <Image
          src={photo.src}
          alt={photo.title}
          className="w-full object-cover aspect-square"
          width={1200}
          height={1200}
        />
      </div>
    </div>
  );
}