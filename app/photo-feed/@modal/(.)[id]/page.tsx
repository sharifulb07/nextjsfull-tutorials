// app/@modal/(.)photo/[id]/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { photos } from '@/app/photo-feed/wonders';

export default function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const photo = photos.find((p) => p.id === params.id);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={() => router.back()}
    >
      <div
        className="relative  w-[300px] "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => router.back()}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl"
        >
          ✕ Close
        </button>
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          className="w-[300px] h-[150px]"
        />
        <h2 className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center text-xl">
          {photo.title}
        </h2>
      </div>
    </div>
  );
}