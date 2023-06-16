export const dataNormalizer = (dataRaw) =>
  dataRaw.map((data) => ({
    id: Math.random(),
    languages: data?.personal_data.languages?.join(", ") || "-",
    age: data?.personal_data?.age || "-",
    studies: data?.education?.university || "-",
    github: data?.personal_data?.github || "-",
    skills: data?.skills?.join(", ") || "-",
    status: data?.status || "-",
    grade: 7,
    notes: null,
  }));
