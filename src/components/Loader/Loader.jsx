import BeatLoader from 'react-spinners/BeatLoader';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.overlay}>
      <BeatLoader size={15} color={'#3f51b5'} className={s.loader} />
    </div>
  );
}
