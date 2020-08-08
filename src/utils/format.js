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

const convertHoursToMinutes = function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(':');
  return Number((hour * 60) + minutes);
};

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes,
};
