const weekdays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

const subjects = [
  'Artes',
  'Biologia',
  'Ciências',
  'Educação física',
  'Física',
  'Geografia',
  'História',
  'Matemática',
  'Português',
  'Química',
];

const getSubject = function getSubjectById(subjectIdNumber) {
  const indexInArray = Number(subjectIdNumber) - 1;
  return subjects[indexInArray];
};

module.exports = {
  subjects,
  weekdays,
  getSubject,
};
