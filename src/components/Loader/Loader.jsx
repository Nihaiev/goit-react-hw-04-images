import BeatLoader from 'react-spinners/BeatLoader';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.overlay}>
      <BeatLoader size={250} color={'#461646'} className={s.loader} />
    </div>
  );
}
