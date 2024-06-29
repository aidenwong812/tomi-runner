import Image, { StaticImageData } from "next/image"

type Props = {
  icon: StaticImageData;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: Props) => {
  return (
    <div className="flex flex-col gap-5 rounded-[16px] p-8 pb-16 bg-gradient-to-b from-[#FFFFFF08] to-[#78787808] border border-[#FFFFFF05] hover:border-primary hover:shadow-custom">
      <Image src={icon} alt="icon" className="mb-2.5" />
      <h3 className="text-lg">{title}</h3>
      <p className="text text-secondary-foreground">{description}</p>
    </div>
  )
}

export default Card