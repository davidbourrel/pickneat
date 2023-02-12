import { ClassNameProps } from '_types/components';

const ItineraryIcon = ({ className = '' }: ClassNameProps) => {
  return (
    <svg className={className} viewBox="0 0 14 14">
      <g
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g transform="translate(-685.000000, -6131.000000)">
          <g transform="translate(-240.000000, 5981.000000)">
            <g transform="translate(926.000000, 151.000000)">
              <polygon points="5.73913043 12 5.73913043 6.26086957 0 6.26086957 12 0"></polygon>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
export default ItineraryIcon;
