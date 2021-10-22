import styled from 'styled-components';
import { appear } from '../../GlobalStyles';

import Project from './Project';
import Back from '../Back';

// import Lightbox
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';

// owl images
import owl_thumb from '../../assets/portfolio/owillianlira_wp/thumb.jpg';
import owl_page_1 from '../../assets/portfolio/owillianlira_wp/page_1.jpg';
import owl_mobile_1 from '../../assets/portfolio/owillianlira_wp/mobile_1.jpg';
import owl_page_2 from '../../assets/portfolio/owillianlira_wp/page_2.jpg';
import owl_mobile_2 from '../../assets/portfolio/owillianlira_wp/mobile_2.jpg';
// tecflux images
import tf_thumb from '../../assets/portfolio/tecflux/thumb.jpg';
import tf_page_1 from '../../assets/portfolio/tecflux/page_1.jpg';
import tf_page_2 from '../../assets/portfolio/tecflux/page_2.jpg';

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
      <div className="grid grid-flow-col sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Project
          name="oWillianLira"
          link=""
          description="This is my old website, designed and developed by me. Fully responsive using best practices of CSS and Bootstrap. Made with WordPress."
        >
          <LightGallery speed={500} plugins={[lgZoom]}>
            <a href={owl_page_1}>
              <img src={owl_thumb} alt="" className="mb-5 w-full rounded border border-gray-300" />
            </a>
            <a href={owl_mobile_1} className="hidden">
              <img src={owl_mobile_1} alt="" loading="lazy" />
            </a>
            <a href={owl_page_2} className="hidden">
              <img src={owl_page_2} alt="" loading="lazy" />
            </a>
            <a href={owl_mobile_2} className="hidden">
              <img src={owl_mobile_2} alt="" loading="lazy" />
            </a>
          </LightGallery>
        </Project>
        <Project
          name="Tecflux / Swagelok"
          link="https://tecflux.com.br/"
          description="A huge WP website, using lots of CPT (Custom Post Type), ACF (Custom Fields), WooCommerce and LearnPress."
        >
          <LightGallery speed={500} plugins={[lgZoom]}>
            <a href={tf_page_1}>
              <img src={tf_thumb} alt="" className="mb-5 w-full rounded border border-gray-300" />
            </a>
            <a href={tf_page_2} className="hidden">
              <img src={tf_page_2} alt="" loading="lazy" />
            </a>
          </LightGallery>
        </Project>
      </div>
    </Wrapper>
  );
}
