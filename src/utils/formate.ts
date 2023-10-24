import Big from 'big.js';

const formateAddress = (address: string) => {
  if (!address) return '-';

  if (address.indexOf('.near') > -1) return address;

  return address.slice(0, 6) + '...' + address.slice(-4);
};

const formateValue = (value: string | number, precision: number) => {
  if (Big(value).eq(0)) return '0';
  else if (Big(value).lt(Big(10).pow(-precision))) {
    return `< ${Big(10).pow(-precision).toFixed(precision)}`;
  } else {
    return parseFloat(Big(value).toFixed(precision));
  }
};

export { formateAddress, formateValue };
