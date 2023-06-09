import * as React from "react"

export const Member = ({ memberName, imageLink, memberPos }) => {
  return (
    <div className="flex">
      <img
        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
        src={imageLink}
        alt=""
      />
      <div className="flex flex-col justify-center text-left">
        <p className="text-medium font-bold">{memberName}</p>
        <p className="text-sm text-gray-800">{memberPos}</p>
      </div>
    </div>
  )
}
