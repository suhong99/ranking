import {
  ExposedData,
  OrderType,
  SortCriteria,
} from '../../../shared/const/data';

type Param = {
  data: ExposedData[];
  criteria: SortCriteria;
  order: OrderType;
};

export const sortData = ({ data, criteria, order }: Param) => {
  return [...data].sort((a, b) => {
    if (order === 'asc') {
      return a[criteria] - b[criteria];
    } else {
      return b[criteria] - a[criteria];
    }
  });
};
