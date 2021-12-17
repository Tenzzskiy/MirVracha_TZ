
import style from './Description.module.css';

function Description(props) {
  return (
    <>
  <div className={style.container}>
   <div className={style.text}> {props.text}</div>
  </div>

    </>
  );
}

export default Description;
