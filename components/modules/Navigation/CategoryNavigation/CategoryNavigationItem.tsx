import { PropsWithChildren } from 'react';

// Static Components
import Button from 'components/elements/buttons/Button';
import NavLink from 'components/elements/NavLink';

interface CategoryNavigationItemProps extends PropsWithChildren {
  id: string;
  isActive: boolean;
}

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
