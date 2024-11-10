import { Provider } from '@leonardo/provider';

import { ProfileGate } from '@leonardo/profile-gate';
import { Header } from '@leonardo/header';

export const metadata = {
  title: 'Rick and Morty',
  description: 'Explore Rick and Morty characters',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <ProfileGate>
            <Header />
            {children}
          </ProfileGate>
        </Provider>
      </body>
    </html>
  );
}
