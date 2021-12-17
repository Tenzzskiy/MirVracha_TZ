
import style from './Person.module.css';

function Person(props) {
  return (
    <>
    <div className={style.container}>
    <div className={style.flex}>


      <div className={style.title}> {props.text}</div>
      <div className={style.img}><img src={props.img} alt="#"/> </div>
    </div>


    </div>

    </>
  );
}

export default Person;
