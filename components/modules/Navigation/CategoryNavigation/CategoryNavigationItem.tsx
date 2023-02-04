import { CategoryNavigationItemProps } from './types';

// Static Components
import Button from 'components/elements/buttons/Button';
import NavLink from 'components/elements/NavLink';

export default function CategoryNavigationItem({
  id,
  isActive,
  children,
}: CategoryNavigationItemProps) {
  return (
    <li>
      <NavLink href={id} isActive={isActive}>
        <Button headless tabIndex={-1}>
          {children}
        </Button>
      </NavLink>
    </li>
  );
}
