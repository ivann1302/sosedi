import Image, { type StaticImageData } from "next/image";

type HeroActivityCardProps = {
  action: string;
  image: StaticImageData;
  imageAlt: string;
  position: "top" | "right" | "bottom";
  title: string;
  time: string;
};

export function HeroActivityCard({
  action,
  image,
  imageAlt,
  position,
  title,
  time,
}: HeroActivityCardProps) {
  return (
    <div className={`hero-card hero-card--${position}`}>
      <span className="hero-card__image-wrap">
        <Image
          src={image}
          alt={imageAlt}
          sizes="42px"
          className="hero-card__image"
        />
      </span>
      <span>
        <strong>{title}</strong>
        {action}
        <small>{time}</small>
      </span>
    </div>
  );
}
