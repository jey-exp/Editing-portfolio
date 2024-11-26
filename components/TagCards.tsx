import React from 'react'
import { Mynerve } from 'next/font/google' ;

const mynerve = Mynerve({subsets:['latin'], weight:['400']});

interface TagCardProps {
    name:string
}

const TagCards : React.FC<TagCardProps> = ({name}) => {
  return (
    <div className={`w-auto h-10 bg-custom-card-bg px-7 py-2  ${mynerve.className} text-m curveEdges`}>
      {name}
    </div>
  )
}

export default TagCards
