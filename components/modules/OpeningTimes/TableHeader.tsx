interface TableHeaderProps {
  day: string;
  lunch: string;
  dinner: string;
}

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
