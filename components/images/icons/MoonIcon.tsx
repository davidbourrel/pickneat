import { FC } from 'react';
import { ClassNameComponentProps } from '_types/components';

const MoonIcon: FC<ClassNameComponentProps> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
       <title>Moon icon</title>
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
};

export default MoonIcon;
