'use client'
import { DataGrid } from '@mui/x-data-grid'
import DetailsModal from '@/components/DetailsModal'
import React, { useState, useEffect } from 'react'
import { redirect } from 'next/navigation'

import { isAuth, isHr } from '@/utils/auth'
import Link from 'next/link'

const response = [
  {
    id: 1,
    name: 'Aurora Moonstone',
    english_level: 'C1',
    city: null,
    age: null,
    studies:
      'Enchanted Realm University June 2019 - Present, Poland, Enchanted Meadows High School 2016 - 2019 — 3 years, Poland',
    github: 'https://github.com/TheMultii',
    skills: 'HTML, CSS, JavaScript, Ruby, Python',
    portfolio: null,
    file_path: 'example.pdf',
    grade: 4,
    notes: null,
    created_at: '2023-06-16T09:48:42.575Z',
    updated_at: '2023-06-16T09:48:42.575Z',
  },
  {
    id: 2,
    name: 'Nexus Byteblast',
    english_level: 'C1',
    city: null,
    age: null,
    studies:
      'Bachelor of Science in Informatics | CyberTech University | 2017-2021, High School Diploma | TechGenius Academy | 2013-2017',
    github: 'https://github.com/humanoid01',
    skills:
      'JavaScript, CSS, React.js, Redux, HTML, GIT, REST, API, TypeScript, SCSS, Material UI, Redux, Toolkit OOP, Unit tests',
    portfolio: 'https://portfolio-humanoid01.vercel.app/',
    file_path: 'example2.pdf',
    grade: 7,
    notes: null,
    created_at: '2023-06-16T09:48:42.577Z',
    updated_at: '2023-06-16T09:48:42.577Z',
  },
  {
    id: 3,
    name: 'Yarrrek Bloodfang',
    english_level: 'B2',
    city: 'Bielsko-Biała',
    age: null,
    studies: '2014r. – 2019r. Uniwersytet Jolly Roger',
    github: 'https://github.com/iMdPd',
    skills:
      'HTML, CSS, SASS, Bootstrap, ANTD, JavaScript, Handlebars, React, Redux, Chrome DevTools, GIT, RWD, Jira, Node.js Express',
    portfolio: null,
    file_path: 'example3.pdf',
    grade: 5,
    notes: null,
    created_at: '2023-06-16T09:48:42.579Z',
    updated_at: '2023-06-16T09:48:42.579Z',
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
    { field: 'english_level', headerName: 'Eng lvl', width: 40 },
    { field: 'city', headerName: 'City', width: 150 },
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
    { field: 'skills', headerName: 'Skills', width: 200 },
    {
      field: 'portfolio',
      headerName: 'Portfolio',
      width: 100,
      renderCell: (cellValue) => (
        <a
          className="text-blue-700"
          href={cellValue.row.portfolio}
          target="_blank"
        >
          portfolio-link
        </a>
      ),
    },
    {
      field: 'file_path',
      headerName: 'File',
      width: 100,
      renderCell: (cellValue) => (
        <a
          className="text-blue-700"
          href={cellValue.row.file_path}
          target="_blank"
        >
          CV
        </a>
      ),
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
    <section className="flex flex-col justify-between items-center h-screen">
      <div>
        <h1 className="my-8">{`CV's list`}</h1>
        <div className="flex">
          <DataGrid
            columns={columns}
            disableRowSelectionOnClick
            loading={false}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[10, 20, 50]}
            paginationModel={paginationModel}
            rows={response}
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
      </div>
      <div className="w-full flex justify-end ">
        {isHr() && (
          <Link
            href="/upload"
            className="mb-10 mr-10 p-4 rounded-lg bg-green-500"
          >
            Upload CV
          </Link>
        )}
      </div>
    </section>
  )
}

export default CvList
