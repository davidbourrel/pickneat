import { ClassNameProps } from '_types/components';

export default function MoonIcon({ className = '' }: ClassNameProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}
