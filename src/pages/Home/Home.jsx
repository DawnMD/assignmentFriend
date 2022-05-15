import { Form } from '../../components/Form/Form';
import DummyImage from '../../assets/Calander.webp';
import style from './Home.module.css';

export const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.main}>
        <div>
          <img src={DummyImage} alt='Dummy' />
          <section className={style.dummy}>
            <h6 className={style.dummyHead}>Choose a date</h6>
            <p className={style.dummyContent}>
              Lorem ipsum dolor sit amet consectetur, adipisicing Nisi mollitia
              aliquid et, inventore, expedita temporibus
            </p>
          </section>
        </div>
        <Form />
      </div>
    </div>
  );
};
