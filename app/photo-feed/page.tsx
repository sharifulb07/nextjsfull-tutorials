import Image from "next/image";
import Link from "next/link";
import { photos } from "./wonders";

export default function Photo() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New wonders of the World
      </h1>

      <div className="grid grid-cols-4 gap-8">
        {photos.map(({ id, src, title }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={title}
              src={src}
              width={300}
              height={150}
              className=" w-[200px] h-[150px]"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
