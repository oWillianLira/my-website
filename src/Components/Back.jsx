import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { appear } from '../GlobalStyles';

import { BsArrowReturnLeft } from 'react-icons/bs';
import { colors } from '../GlobalStyles';

const Area = styled.div`
  margin: 0 auto 10px;

  &.small {
    width: 320px;
    max-width: 100%;
  }

  a {
    animation: ${appear} forwards 1s;
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

export default function Back({ small }) {
  return (
    <Area className={small ? 'small' : ''}>
      <Link to="/" title="Back">
        <BsArrowReturnLeft />
      </Link>
    </Area>
  );
}
