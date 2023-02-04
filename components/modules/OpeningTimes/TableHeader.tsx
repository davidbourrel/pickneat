import { TableHeaderProps } from './types';

export default function TableHeader({ day, lunch, dinner }: TableHeaderProps) {
  return (
    <thead>
      <tr>
        <th>{day}</th>
        <th>{lunch}</th>
        <th>{dinner}</th>
      </tr>
    </thead>
  );
}
