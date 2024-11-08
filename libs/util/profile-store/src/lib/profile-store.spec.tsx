import { render } from '@testing-library/react';

import ProfileStore from './profile-store';

describe('ProfileStore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileStore />);
    expect(baseElement).toBeTruthy();
  });
});
