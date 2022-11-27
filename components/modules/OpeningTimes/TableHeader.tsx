import { FC } from 'react';

interface TableHeaderProps {
  day: string;
  lunch: string;
  dinner: string;
}

const TableHeader: FC<TableHeaderProps> = ({ day, lunch, dinner }) => {
  return (
    <thead>
      <tr>
        <th>{day}</th>
        <th>{lunch}</th>
        <th>{dinner}</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
