'use client';
import {BeatLoader} from 'react-spinners';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <BeatLoader color="#65AFFF" size={15} />
    </div>
  );
};
export default Spinner;     