import React from "react"
import CourseCard from "./CourseCard"

const DATA = [
  {
    id: 0,
    title: "how to hack the whole world",
    img: "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
    description:
      "here im gonna tell you how to hack the whole world from your fucking bedroom. do mr.robot level hacking and make millions daily",
    stars: 4,
  },
]

const Main: React.FC = () => {
  return (
    <div>
      <h1 className="text-center text-xl font-semibold">Popular Courses</h1>

      <div>
        {DATA.map((item) => (
          <CourseCard
            key={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            stars={item.stars}
          />
        ))}
      </div>
    </div>
  )
}

export default Main
