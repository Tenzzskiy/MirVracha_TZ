import item_1 from "./../../assets/items/item_1.png"
import item_2 from "./../../assets/items/item_2.png"
import item_3 from "./../../assets/items/item_3.png"
import item_4 from "./../../assets/items/item_4.svg"
import item_5 from "./../../assets/items/item_5.png"
import item_6 from "./../../assets/items/item_6.png"
import item_7 from "./../../assets/items/item_7.png"
import item_8 from "./../../assets/items/item_8.png"
import center_item from "./../../assets/items/center_item.png"
import style from './Slider.module.css';
import React from "react";
import plus from "./../../assets/plus.svg"

function Slider() {
    const [firstRightDescription] = React.useState("Ограниченная способность\n поднимать руки \n и переносить предметы")
    const [secondRightDescription] = React.useState("Нарушения жевания \n и глотания")
    const [thirdRightDescription] = React.useState("Дыхательная недостаточность/ \n респираторная\n дисфункция")
    const [firstTopDescription] = React.useState("Сколиоз")
    const [firstLeftDescription] = React.useState("Утомляемость")
    const [SecondLeftDescription] = React.useState("Вывих бедра")
    const [thirdLeftDescription] = React.useState("Контрактура суставов")
    const [styleFirstItem,SetStyleFirst] = React.useState(style.slider_text_left)
    const [styleSecondItem,SetStyleSecond] = React.useState(style.slider_text_left)
    const [styleThirdItem,SetStyleThird] = React.useState(style.slider_text_left)
    const [styleFourthItem,SetStyleFourth] = React.useState(style.slider_text_top)
    const [styleFifthItem,SetStyleFifth] = React.useState(style.slider_text_bottom)
    const [styleSixthItem,SetStyleSixth] = React.useState(style.slider_text_right)
    const [styleSeventhItem,SetStyleSeventh] = React.useState(style.slider_text_right)
    const [styleEighthItem,SetStyleEighth] = React.useState(style.slider_text_right)

    const [firstItemCount,setFirstItemCount] = React.useState(1)
    const [SecondItemCount,setSecondItemCount] = React.useState(1)
    const [ThirdItemCount,setThirdItemCount] = React.useState(1)
    const [FourthItemCount,setFourthItemCount] = React.useState(1)
    const [FifthItemCount,setFifthItemCount] = React.useState(1)
    const [SixthItemCount,setSixthItemCount] = React.useState(1)
    const [SeventhItemCount,setSeventhItemCount] = React.useState(1)
    const [EighthItemCount,setEighthItemCount] = React.useState(1)
     const onClickFirst = () =>{

        switch(firstItemCount){
            case 1:
                SetStyleFirst(style.slider_text_left_visible);
                setFirstItemCount(0);
                break;
            case 0:
                SetStyleFirst(style.slider_text_left);
                setFirstItemCount(1);
        }

    }
    const onClickSecond = () =>{

        switch(SecondItemCount){
            case 1:
                SetStyleSecond(style.slider_text_left_visible);
                setSecondItemCount(0);
                break;
            case 0:
                SetStyleSecond(style.slider_text_left);
                setSecondItemCount(1);
        }

    }
    const onClickThird = () =>{

        switch(ThirdItemCount){
            case 1:
                SetStyleThird(style.slider_text_left_visible);
                setThirdItemCount(0);
                break;
            case 0:
                SetStyleThird(style.slider_text_left);
                setThirdItemCount(1);
        }

    }
    const onClickFourth = () =>{

        switch(FourthItemCount){
            case 1:
                SetStyleFourth(style.slider_text_top_visible);
                setFourthItemCount(0);
                break;
            case 0:
                SetStyleFourth(style.slider_text_top);
                setFourthItemCount(1);
        }

    }
    const onClickFifth = () =>{

        switch(FifthItemCount){
            case 1:
                SetStyleFifth(style.slider_text_bottom_visible);
                setFifthItemCount(0);
                break;
            case 0:
                SetStyleFifth(style.slider_text_bottom);
                setFifthItemCount(1);
        }

    }
    const onClickSixth = () =>{

        switch(SixthItemCount){
            case 1:
                SetStyleSixth(style.slider_text_right_visible);
                setSixthItemCount(0);
                break;
            case 0:
                SetStyleSixth(style.slider_text_right);
                setSixthItemCount(1);
        }

    }
    const onClickSeventh = () =>{

        switch(SeventhItemCount){
            case 1:
                SetStyleSeventh(style.slider_text_right_visible);
                setSeventhItemCount(0);
                break;
            case 0:
                SetStyleSeventh(style.slider_text_right);
                setSeventhItemCount(1);
        }

    }
    const onClickEighth = () =>{

        switch(EighthItemCount){
            case 1:
                SetStyleEighth(style.slider_text_right_visible);
                setEighthItemCount(0);
                break;
            case 0:
                SetStyleEighth(style.slider_text_right);
                setEighthItemCount(1);
        }

    }
    return (
        <>
            <div className={style.slider_flex1}>
                <div className={style.slider_item_1} onClick={onClickFirst}>
                    <div className={styleFirstItem}> {firstLeftDescription}</div>
                    <img src={item_1} alt="#" />
                    <div className={style.plus}><img src={plus} alt="#"/></div>

                </div>
                <div className={style.slider_item_2} onClick={onClickSecond}>
                    <div className={styleSecondItem}> {SecondLeftDescription}</div>
                    <img src={item_2} alt="#"/>

                    <div className={style.plus}><img src={plus} alt="#"/></div>


                </div>


                <div className={style.slider_item_3} onClick={onClickThird}>

                    <div className={styleThirdItem}> {thirdLeftDescription}</div>
                    <img src={item_3} alt="#"/>
                    <div className={style.plus}><img src={plus} alt="#"/></div>
                </div>
            </div>
            <div className={style.slider_flex2}>


                <div className={style.slider_item_4} onClick={onClickFourth}>


                    <div className={style.onClick_description_top_bottom}>
                        <div className={styleFourthItem}>{firstTopDescription} </div>
                        <img src={item_4} alt="#"/>
                    </div>

                    <div className={style.plus}><img src={plus} alt="#"/></div>
                </div >


                <div className={style.slider_center_item}><img src={center_item} alt="#"/> <p
                    className={style.center_item_description}>Взрослый</p></div>


                <div className={style.slider_item_5} onClick={onClickFifth}>

                    <div className={style.onClick_description_top_bottom}>

                        <img src={item_5} alt="#"/>

                        <div className={style.plus}><img src={plus} alt="#"/></div>
                        <div className={styleFifthItem}>Неспособность бегать,<br/> изменение походки</div>
                    </div>


                </div>
            </div>
            <div className={style.slider_flex3}>
                <div className={style.slider_item_6} onClick={onClickSixth}>
                    <div className={style.onClick_description}>
                        <img src={item_6} alt="#"/>
                        <div className={styleSixthItem}>{firstRightDescription}
                        </div>
                    </div>
                    <div className={style.plus}><img src={plus} alt="#"/></div>

                </div>
                <div className={style.slider_item_7} onClick={onClickSeventh}>
                    <div className={style.onClick_description}>
                        <img src={item_7} alt="#"/>
                        <div className={styleSeventhItem}>{secondRightDescription}
                        </div>
                    </div>
                    <div className={style.plus}><img src={plus} alt="#"/></div>

                </div>
                <div className={style.slider_item_8} onClick={onClickEighth}>
                    <div className={style.onClick_description}>
                        <img src={item_8} alt="#"/>
                        <div className={styleEighthItem}>{thirdRightDescription}
                        </div>
                    </div>
                    <div className={style.plus}><img src={plus} alt="#"/></div>

                </div>
            </div>
        </>
    );
}

export default Slider;
