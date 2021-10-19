import styled from 'styled-components';
import { appear, colors } from '../../GlobalStyles';
import Back from '../Back';

// import owl from '../../assets/portfolio/owillianlira_wp/home.jpeg';

const Wrapper = styled.div`
  & > h2 {
    padding: 0 10px;
    animation: ${appear} forwards 1s;
  }

  figure {
    animation-name: ${appear};
    animation-duration: 1s;
    animation-fill-mode: forwards;

    figcaption {
      h3 {
        color: ${colors.btn};
      }
    }
  }
`;

export default function Portfolio() {
  return (
    <Wrapper>
      <Back />
      <h2 className="text-2xl font-medium mb-5">Take a look at some projects I've worked on</h2>
      <div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-6">
        <figure className="py-4 px-5 bg-white rounded-lg shadow-md">
          <figcaption>
            <h3 className="text-xl font-medium">My first website</h3>
            <p className="text-sm text-gray-400">Not online anymore 😕</p>
          </figcaption>
          <blockquote>
            <p className="font-medium text-gray-800 mt-3 text-base">
              This is my old website, designed and developed by me. Fully responsive using best practices of CSS and
              Bootstrap.
            </p>
          </blockquote>
        </figure>
      </div>
    </Wrapper>
  );
}
