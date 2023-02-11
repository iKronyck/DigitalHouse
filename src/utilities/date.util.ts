const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export const getCurrentMonth = () => MONTHS[new Date().getMonth()];

export const formatDate = (date: string) => {
  if (date && !isNaN(new Date(date).getTime())) {
    const newDate = new Date(date);
    return `${newDate.getDay()} de ${MONTHS[
      newDate.getMonth()
    ].toLocaleLowerCase()}, ${newDate.getFullYear()}`;
  }
  return '';
};
