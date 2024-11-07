import { Provider } from '@leonardo/chakra-ui/provider';

import './global.css';

export const metadata = {
  title: 'Welcome to leonardo-test',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
