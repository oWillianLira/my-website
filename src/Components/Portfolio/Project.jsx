import styled from 'styled-components';
import { appear, colors } from '../../GlobalStyles';

import { FaExternalLinkAlt } from 'react-icons/fa';

const Item = styled.figure`
  animation-name: ${appear};
  animation-duration: 1s;
  animation-fill-mode: forwards;

  figcaption {
    & > h3 {
      color: ${colors.btn};
    }
  }
`;

export default function Project({ children, name, link, description }) {
  return (
    <Item className="py-4 px-5 bg-white rounded-lg shadow-md">
      {children}
      <figcaption>
        <h3 className="text-xl font-medium">{name}</h3>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500"
          >
            See online <FaExternalLinkAlt />
          </a>
        ) : (
          <p className="text-sm text-gray-400">Not online 😕</p>
        )}
      </figcaption>
      <blockquote>
        <p className="font-medium text-gray-800 mt-3 text-base">{description}</p>
      </blockquote>
    </Item>
  );
}
