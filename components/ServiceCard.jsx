import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ServiceCard({services}) {
    const {title, desc, image, items} = services
  return (
    <div className='servicecard'>
        <div className="servicecardImage">
            <Image src={image} width={500} height={500}/>
        </div>
        <div className="servicedetails">
            <h1>{title}</h1>
            <p>{desc}</p>
            <ul>
                {
                    items.map((item,i) => <li key={i}>{item}</li>)
                }
            </ul>
        </div>
      
    </div>
  )
}
