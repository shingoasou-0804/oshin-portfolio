import React from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

function ProjectCard({ name, githubUrl, image, projectUrl, deployed }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='mb-4 p-4 border boder-grey-200 rounded-lg bg-whitesmoke shadow-md'>
        <img src={image} alt={`${name} Image`} />
        <h3>{name}</h3>
        <div>
          <a href={githubUrl} target='_blank'>
            <AiFillGithub />
          </a>
          {
            deployed ? (
            <a href={projectUrl} target='_blank'>
              <AiFillEye />
            </a>
            ) : null
          }
        </div>
    </motion.div>
  )
}

export default ProjectCard
