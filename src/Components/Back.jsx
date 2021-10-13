import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BsArrowReturnLeft } from 'react-icons/bs';
import { colors } from '../GlobalStyles';

const Area = styled.div`
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    svg {
      font-size: 1.3rem;
      stroke-width: 1;
      color: ${colors.btn};
    }
  }
`;

export default function Back() {
  return (
    <Area>
      <Link to="/">
        <BsArrowReturnLeft />
      </Link>
    </Area>
  );
}
