import React from 'react'

function ProjectCards({src,link,title,para}) {
  return (
    <a href={link}>
          <img className="hover" src={src} alt={`${title} Logo`} />
          <h3>{title}</h3>
          <p>{para}</p>
    </a>
  )
}

export default ProjectCards
