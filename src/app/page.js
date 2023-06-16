'use client'
import { DataGrid } from '@mui/x-data-grid'
import DetailsModal from '@/components/DetailsModal'
import React, { useState, useEffect } from 'react'
import { redirect } from 'next/navigation'

import { isAuth, isHr } from '@/utils/auth'
import { dataNormalizer } from '@/utils/dataNormalizer'
import Link from 'next/link'

const newResponse = [
  {
    education: {
      university: 'CyberTech University',
      degree: 'Bachelor of Science in Informatics',
      major: 'Informatics',
      specialization: 'Data Science and Artificial Intelligence',
      year: '2017-2021',
    },
    experience: {
      company: 'Robotics Innovators Ltd',
      years: '2022-2023',
      position: 'Frontend Developer',
      responsibilities: [
        'Developed frontend interfaces for robotic systems',
        'Collaborated with engineers to implement user-friendly and intuitive designs',
        'Implemented responsive layouts and optimized UI performance',
        'Conducted rigorous testing and debugging to ensure seamless user experiences',
        'Contributed to the continuous improvement of frontend development practices',
      ],
    },
    personal_data: {
      name: 'Nexus Byteblast',
      position: 'Front-end developer',
      languages: ['German', 'English'],
      github: 'https://github.com/humanoid01',
    },
    skills: [
      'CSS',
      'Next.js',
      'Redux',
      'HTML',
      'GIT',
      'REST API',
      'TypeScript',
      'SCSS',
      'Material UI',
      'Redux Toolkit',
      'OOP',
      'Unit tests',
    ],
    soft_skills: [
      'Impassive',
      'Methodical',
      'Precise',
      'Advanced computational capabilities',
      'Continuous self-enhancement',
      'Collaborative',
      'Detail-oriented',
      'Adaptive',
    ],
  },
  {
    education: {
      university: 'CyberTech University',
      degree: 'Bachelor of Science in Informatics',
      major: 'Informatics',
      specialization: 'Data Science and Artificial Intelligence',
      year: '2017-2021',
    },
    experience: {
      company: 'Robotics Innovators Ltd',
      years: '2022-2023',
      position: 'Frontend Developer',
      responsibilities: [
        'Developed frontend interfaces for robotic systems',
        'Collaborated with engineers to implement user-friendly and intuitive designs',
        'Implemented responsive layouts and optimized UI performance',
        'Conducted rigorous testing and debugging to ensure seamless user experiences',
        'Contributed to the continuous improvement of frontend development practices',
      ],
    },
    personal_data: {
      name: 'Nexus Byteblast',
      position: 'Front-end developer',
      languages: ['Polish', 'English'],
      github: 'https://github.com/humanoid01',
    },
    skills: [
      'JavaScript',
      'CSS',
      'React.js',
      'Redux',
      'HTML',
      'GIT',
      'REST API',
      'TypeScript',
      'SCSS',
      'Material UI',
      'Redux Toolkit',
      'OOP',
      'Unit tests',
    ],
    soft_skills: [
      'Impassive',
      'Methodical',
      'Precise',
      'Advanced computational capabilities',
      'Continuous self-enhancement',
      'Collaborative',
      'Detail-oriented',
      'Adaptive',
    ],
  },
  {
    education: {
      university: 'CyberTech University',
      degree: 'Bachelor of Science in Informatics',
      major: 'Informatics',
      specialization: 'Data Science and Artificial Intelligence',
      year: '2017-2021',
    },
    experience: {
      company: 'Robotics Innovators Ltd',
      years: '2022-2023',
      position: 'Frontend Developer',
      responsibilities: [
        'Developed frontend interfaces for robotic systems',
        'Collaborated with engineers to implement user-friendly and intuitive designs',
        'Implemented responsive layouts and optimized UI performance',
        'Conducted rigorous testing and debugging to ensure seamless user experiences',
        'Contributed to the continuous improvement of frontend development practices',
      ],
    },
    personal_data: {
      name: 'Nexus Byteblast',
      position: 'Front-end developer',
      languages: ['German', 'English'],
      github: 'https://github.com/humanoid01',
    },
    skills: ['HTML', 'GIT', 'REST API', 'TypeScript', 'SCSS'],
    soft_skills: [
      'Impassive',
      'Methodical',
      'Precise',
      'Advanced computational capabilities',
      'Continuous self-enhancement',
      'Collaborative',
      'Detail-oriented',
      'Adaptive',
    ],
  },
]

const CvList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState(null)
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  })

  const columns = [
    { field: 'languages', headerName: 'Languages', width: 150 },
    { field: 'age', headerName: 'Age', width: 40 },
    { field: 'studies', headerName: 'Studies', width: 100 },
    {
      field: 'github',
      headerName: 'Github',
      width: 100,
      renderCell: (cellValue) => (
        <a
          href={cellValue.row.github}
          target="_blank"
          className="text-blue-700"
        >
          git-link
        </a>
      ),
    },
    { field: 'skills', headerName: 'Skills', width: 300 },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
    },
    { field: 'grade', headerName: 'Grade', width: 40 },
    {
      field: 'notes',
      headerName: 'Notes',
      width: 50,
      renderCell: (cellValue) => cellValue?.row?.notes?.length || '-',
    },
  ]

  useEffect(() => {
    if (!isAuth()) {
      return redirect('/login')
    }
  }, [])

  return (
    <section className="flex flex-col  items-center px-[112px]">
      <div className="flex mb-8 mt-8 justify-between w-full">
        <div>
          <h1 className="text-xl">Welcome to Selleo Dashboard</h1>
          <p className="text-sm mt-2">Lorem ipsum dolor sit ament</p>
        </div>
        <div className="flex items-center">
          {isHr() && (
            <Link
              href="/upload"
              className="p-2 rounded-lg bg-blue-600 text-white"
            >
              Upload CV
            </Link>
          )}
        </div>
      </div>
      <div className="w-full">
        <DataGrid
          columns={columns}
          disableRowSelectionOnClick
          loading={false}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 50]}
          paginationModel={paginationModel}
          rows={dataNormalizer(newResponse)}
          onCellDoubleClick={(params) => {
            setModalData(params.row)
            setIsModalOpen(true)
          }}
        />
      </div>
      <DetailsModal
        data={modalData}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </section>
  )
}

export default CvList
