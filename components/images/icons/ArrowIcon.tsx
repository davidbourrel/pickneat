import { FC } from 'react';
import { ClassNameComponentProps } from '_types/components';

const ArrowIcon: FC<ClassNameComponentProps> = ({ className = '' }) => {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <title>Arrow icon</title>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="15" y1="16" x2="19" y2="12" />
      <line x1="15" y1="8" x2="19" y2="12" />
    </svg>
  );
};

export default ArrowIcon;
