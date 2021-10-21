import styled from 'styled-components';
import { appear, colors } from '../../GlobalStyles';

// import Lightbox
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import images
// const folder = 'owillianlira_wp';
// const thumb = `../../assets/portfolio/${folder}/thumb.jpg`;
import thumb from '../../assets/portfolio/owillianlira_wp/thumb.jpg';
import page_1 from '../../assets/portfolio/owillianlira_wp/page_1.jpg';

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

export default function Project() {
  return (
    <Item className="py-4 px-5 bg-white rounded-lg shadow-md">
      <LightGallery speed={500} plugins={[lgZoom]}>
        <a href={thumb}>
          <img src={thumb} alt="" className="mb-5 rounded border border-gray-300" />
        </a>
        <a href={page_1} className="hidden">
          <img src={page_1} alt="" className="mb-5 rounded border border-gray-300" />
        </a>
      </LightGallery>
      <figcaption>
        <h3 className="text-xl font-medium">My first website</h3>
        <p className="text-sm text-gray-400">Not online anymore 😕</p>
      </figcaption>
      <blockquote>
        <p className="font-medium text-gray-800 mt-3 text-base">
          This is my old website, designed and developed by me. Fully responsive using best practices of CSS and
          Bootstrap. Made with WordPress.
        </p>
      </blockquote>
    </Item>
  );
}
