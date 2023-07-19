import moment from 'moment';

export const formatDate = (value) => {
  if (!value) return '-';
  return moment(value).utc().format('DD/MM/YYYY hh:mm a');
};
