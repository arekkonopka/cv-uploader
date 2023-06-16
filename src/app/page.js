"use client";
import { DataGrid } from "@mui/x-data-grid";
import DetailsModal from "@/components/DetailsModal";
import React, { useState } from "react";

//DUMY-DATA
const rows = [
  {
    id: 1,
    english_level: "B2",
    city: "Bielsko",
    age: 22,
    studies: "AGH",
    github: "https://www.meczyki.pl/",
    skills: "Ruby, JavaScript, React",
    portfolio: "https://www.meczyki.pl/",
    file_path:
      "https://docs.google.com/document/d/129HgQg1VkBIx8UeUv3JydGXlMKNqbUNOo1QmjOeUUgw/edit",
    grade: 10,
  },
  {
    id: 2,
    english_level: "C1",
    city: "warszawa",
    age: 42,
    studies: "Uniwerstyet Jagielonski",
    github: "https://www.meczyki.pl/",
    skills: "Ruby, JavaScript, React, PHP",
    portfolio: "https://www.meczyki.pl/",
    file_path:
      "https://docs.google.com/document/d/129HgQg1VkBIx8UeUv3JydGXlMKNqbUNOo1QmjOeUUgw/edit",
    grade: 8,
  },
  {
    id: 3,
    english_level: "C1",
    city: "warszawa",
    age: 42,
    studies: "Uniwerstyet Jagielonski",
    github: "https://www.meczyki.pl/",
    skills: "Ruby, JavaScript, React, PHP",
    portfolio: "https://www.meczyki.pl/",
    file_path:
      "https://docs.google.com/document/d/129HgQg1VkBIx8UeUv3JydGXlMKNqbUNOo1QmjOeUUgw/edit",
    grade: 8,
  },
  {
    id: 4,
    english_level: "C1",
    city: "warszawa",
    age: 42,
    studies: "Uniwerstyet Jagielonski",
    github: "https://www.meczyki.pl/",
    skills: "Ruby, JavaScript, React, PHP",
    portfolio: "https://www.meczyki.pl/",
    file_path:
      "https://docs.google.com/document/d/129HgQg1VkBIx8UeUv3JydGXlMKNqbUNOo1QmjOeUUgw/edit",
    grade: 8,
  },
];

const CvList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const columns = [
    { field: "english_level", headerName: "Eng lvl", width: 40 },
    { field: "city", headerName: "City", width: 100 },
    { field: "age", headerName: "Age", width: 40 },
    { field: "studies", headerName: "Studies", width: 150 },
    {
      field: "github",
      headerName: "Github",
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
    { field: "skills", headerName: "Skills", width: 200 },
    {
      field: "portfolio",
      headerName: "Portfolio",
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
      field: "file_path",
      headerName: "File",
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
    { field: "grade", headerName: "Grade", width: 40 },
  ];

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="my-8">{`CV's list`}</h1>
      <div className="flex">
        <DataGrid
          columns={columns}
          disableRowSelectionOnClick
          loading={false}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 50]}
          paginationModel={paginationModel}
          rows={rows}
          onCellDoubleClick={(params) => {
            setModalData(params.row);
            setIsModalOpen(true);
          }}
        />
      </div>
      <DetailsModal
        data={modalData}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </section>
  );
};

export default CvList;
