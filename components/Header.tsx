import React from "react"

const Header: React.FC = () => {
  return (
    <header className="px-4 py-6 ">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl pointer-event-none font-bold text-indigo-600">
          EduTube
        </h1>
        <div className="w-10 h-10 rounded-lg bg-indigo-600" />
      </div>

      <div className="bg-slate-100 p-2 rounded-lg my-4 text-sm font-semibold ">
        🚀 get 30% discount by buying right now
      </div>

      <div>
        <h1 className=" text-4xl font-bold leading-normal text-gray-900">
          Welcome To Edutube
        </h1>
        <p className=" text-sm text-slate-600 mt-2 leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          exercitationem rem adipisci dolor quos distinctio repellendus?
          Mollitia fuga omnis eius
        </p>
      </div>

      <button className="my-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg border-none">
        Search Courses
      </button>
    </header>
  )
}

export default Header
