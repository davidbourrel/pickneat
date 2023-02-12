import { TableHeaderProps } from './types';

const TableHeader = ({ day, lunch, dinner }: TableHeaderProps) => {
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
