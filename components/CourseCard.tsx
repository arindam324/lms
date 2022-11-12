import React from "react"
import Image from "next/image"

type CourseCardProps = {
  img: string
  title: string
  description: string
  stars: number
}

const CourseCard: React.FC<CourseCardProps> = ({
  img,
  title,
  description,
  stars,
}) => {
  return (
    <article className="p-4">
      <Image
        alt={title}
        src={img}
        className="rounded-lg"
        width={400}
        height={300}
      />
      <h2 className="text-2xl pt-2 font-bold">{title}</h2>
      <p className="text-sm ">{description}</p>
    </article>
  )
}

export default CourseCard
