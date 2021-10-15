import styled from 'styled-components';

const Layout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
`;

export default function Chat({ children }) {
  return <Layout>{children}</Layout>;
}
