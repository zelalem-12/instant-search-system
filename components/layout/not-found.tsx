import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

export const NotFoundLayout = () => {
  return (
    <>
      <Head>
        <title>Instant Job Search | 404</title>
      </Head>
      <PageNotFoundContaineer>
        <NotFound>
          <div>
            <Header2>Page not Found | 404</Header2>
            <Content>
              The page you are looking for might be removed or is temporarily
              unavailable
            </Content>
            <Link href="/">
              <Button>back to homepage</Button>
            </Link>
          </div>
        </NotFound>
      </PageNotFoundContaineer>
    </>
  );
};

export default NotFoundLayout;

const PageNotFoundContaineer = styled.div`
  width: 75%;
  margin: 0 auto;
`;
const NotFound = styled.main`
  font-family: 'Space Mono';
  min-height: 70vh;
  display: flex;
`;
const Button = styled.button`
  background-color: var(--black);
  color: white;
  padding: 1.5rem 3rem;
  text-transform: uppercase;
`;

const Header2 = styled.h2`
  font-weight: bold;
  font-size: 4rem;
  color: var(--black);
`;
const Content = styled.p`
  font-size: 1.5rem;
`;
