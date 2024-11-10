import { render } from '@testing-library/react';

import ProfileEditDialog from './profile-edit-dialog';

describe('ProfileEditDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileEditDialog />);
    expect(baseElement).toBeTruthy();
  });
});
