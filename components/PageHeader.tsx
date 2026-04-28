import Image from 'next/image';

interface PageHeaderProps {
  imageSrc: string;
  imageAlt?: string;
}

export default function PageHeader({ imageSrc, imageAlt = 'Page header' }: PageHeaderProps) {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg mb-8">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover w-full h-full"
        priority
      />
    </div>
  );
}
