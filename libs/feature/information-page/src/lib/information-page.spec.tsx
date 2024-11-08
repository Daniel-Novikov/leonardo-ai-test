import { render } from '@testing-library/react';

import InformationPage from './information-page';

describe('InformationPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InformationPage />);
    expect(baseElement).toBeTruthy();
  });
});
