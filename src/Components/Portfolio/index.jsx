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
// hyo images
import hyo_thumb from '../../assets/portfolio/hyolanda/thumb.jpg';
import hyo_page_1 from '../../assets/portfolio/hyolanda/page_1.jpg';
import hyo_mobile_1 from '../../assets/portfolio/hyolanda/mobile_1.jpg';
import hyo_page_2 from '../../assets/portfolio/hyolanda/page_2.jpg';
import hyo_mobile_2 from '../../assets/portfolio/hyolanda/mobile_2.jpg';
// btg images
import btg_thumb from '../../assets/portfolio/btg/thumb.jpg';
import btg_page_1 from '../../assets/portfolio/btg/page_1.jpg';
import btg_page_2 from '../../assets/portfolio/btg/page_2.jpg';
// odonto images
import odonto_thumb from '../../assets/portfolio/odontomiss/thumb.jpg';
import odonto_page_1 from '../../assets/portfolio/odontomiss/page_1.jpg';
import odonto_page_2 from '../../assets/portfolio/odontomiss/page_2.jpg';
// charo images
import charo_thumb from '../../assets/portfolio/charo/thumb.jpg';
import charo_page_1 from '../../assets/portfolio/charo/page_1.jpg';
import charo_mobile_1 from '../../assets/portfolio/charo/mobile_1.jpg';

const Wrapper = styled.div`
  & > h2 {
    padding: 0 15px;
    animation: ${appear} forwards 1s;
  }

  & > .grid {
    padding: 0 15px;
  }
`;

export default function Portfolio() {
  return (
    <Wrapper className="mb-5">
      <Back />
      <h2 className="text-2xl font-medium mb-5">Take a look at some projects I've worked on</h2>
      <div className="grid grid-flow w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Project
          name="oWillianLira"
          link=""
          delay="1"
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
          delay="1.5"
          description="A huge WP website, using lots of CPT (Custom Post Type), ACF (Custom Fields), WooCommerce, LearnPress and Bootstrap."
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
        <Project
          name="Hyolanda's portfolio"
          link="https://hyolanda.vercel.app/"
          delay="2"
          description="That's a Graphic/Motion Designer portfolio, made with ReactJS with Bootstrap, React-Router-Dom and Styled-Components."
        >
          <LightGallery speed={500} plugins={[lgZoom]}>
            <a href={hyo_page_1}>
              <img src={hyo_thumb} alt="" className="mb-5 w-full rounded border border-gray-300" />
            </a>
            <a href={hyo_mobile_1} className="hidden">
              <img src={hyo_mobile_1} alt="" loading="lazy" />
            </a>
            <a href={hyo_page_2} className="hidden">
              <img src={hyo_page_2} alt="" loading="lazy" />
            </a>
            <a href={hyo_mobile_2} className="hidden">
              <img src={hyo_mobile_2} alt="" loading="lazy" />
            </a>
          </LightGallery>
        </Project>
        <Project
          name="BTG+"
          link="https://www.btgmais.com/"
          delay="2.5"
          description="A WordPress website using beautiful Gutenberg Blocks and Bulma (CSS Framework)."
        >
          <LightGallery speed={500} plugins={[lgZoom]}>
            <a href={btg_page_1}>
              <img src={btg_thumb} alt="" className="mb-5 w-full rounded border border-gray-300" />
            </a>
            <a href={btg_page_2} className="hidden">
              <img src={btg_page_2} alt="" loading="lazy" />
            </a>
          </LightGallery>
        </Project>
        <Project
          name="Odontomiss"
          link="https://odontomiss.com.br/"
          delay="3"
          description="A simple WP website, using CPT (Custom Post Type), ACF (Custom Fields), Google Maps and Facebook API."
        >
          <LightGallery speed={500} plugins={[lgZoom]}>
            <a href={odonto_page_1}>
              <img src={odonto_thumb} alt="" className="mb-5 w-full rounded border border-gray-300" />
            </a>
            <a href={odonto_page_2} className="hidden">
              <img src={odonto_page_2} alt="" loading="lazy" />
            </a>
          </LightGallery>
        </Project>
        <Project
          name="Na Mídia"
          link="http://brunacharo.com.br/"
          delay="3.5"
          description="A simple WP single page with full-editing dashboard using ACF (Advanced Custom Fields)."
        >
          <LightGallery speed={500} plugins={[lgZoom]}>
            <a href={charo_page_1}>
              <img src={charo_thumb} alt="" className="mb-5 w-full rounded border border-gray-300" />
            </a>
            <a href={charo_mobile_1} className="hidden">
              <img src={charo_mobile_1} alt="" loading="lazy" />
            </a>
          </LightGallery>
        </Project>
      </div>
    </Wrapper>
  );
}
