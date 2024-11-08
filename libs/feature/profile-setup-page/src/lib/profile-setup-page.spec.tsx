import { render } from '@testing-library/react';

import ProfileSetupPage from './profile-setup-page';

describe('ProfileSetupPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileSetupPage />);
    expect(baseElement).toBeTruthy();
  });
});
