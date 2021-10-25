import Eumoji from './Components/Eumoji';

import curious from './assets/img/not_found.png';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <section className="text-center">
        <h2 className="text-3xl font-medium text-red-500 mb-5">404 - This page doesn't exist...</h2>
        <div className="text-xl text-gray-600">
          <p className="text-sm mb-3">How did you get here?</p>
          <p>
            <Link to="/" className="text-black font-semibold">
              Click here
            </Link>{' '}
            to return to the homepage!
          </p>
        </div>
      </section>
      <Eumoji>
        <img src={curious} alt="I'm curious now..." />
      </Eumoji>
    </>
  );
}
