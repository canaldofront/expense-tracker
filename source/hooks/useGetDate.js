const useGetDate = (timestamp) => {
  if (!timestamp) return;
  const formatedDate = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(timestamp.toDate());

  return formatedDate;
};

export default useGetDate;
