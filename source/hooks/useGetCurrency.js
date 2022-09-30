const useGetCurrency = (amount) => {
  const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);

  return currency;
};

export default useGetCurrency;
