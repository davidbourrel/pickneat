import { ClassNameProps } from '_types/components';

export default function UserIcon({ className = '' }: ClassNameProps) {
  return (
    <svg
      className={className}
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
