import styled from 'styled-components';
import { appear } from '../../GlobalStyles';

import Project from './Project';
import Back from '../Back';

const Wrapper = styled.div`
  & > h2 {
    padding: 0 10px;
    animation: ${appear} forwards 1s;
  }

  & > .grid {
    padding: 0 10px;
  }
`;

export default function Portfolio() {
  return (
    <Wrapper>
      <Back />
      <h2 className="text-2xl font-medium mb-5">Take a look at some projects I've worked on</h2>
      <div class="grid grid-flow-col sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Project name="owillianlira_wp"></Project>
      </div>
    </Wrapper>
  );
}
