import Head from 'next/head';
import styled from 'styled-components';

export interface LayoutProps {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
}): React.ReactElement => (
  <>
    <Head>
      <title>Instant Job Search | {title}</title>
    </Head>
    <LayoutContainer>
      <main>{children}</main>
    </LayoutContainer>
  </>
);

const LayoutContainer = styled.div`
  width: 75%;
  margin: 0 auto;
`;
