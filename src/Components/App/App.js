import React from "react";
import './App.css';
import Person from "../Header/Person/Person";
import mother from "../../assets/mother.png"
import child from "./../../assets/child.png"
import Description from "../Header/Description/Description";
import Slider from "../Slider/Slider";


function App() {
    const [title] = React.useState("А вдруг СМА?")
    const [Subtitle] = React.useState("Выберите, кто Ваш пациент:")
    const [motherText] = React.useState("Взрослый")
    const [ChildText] = React.useState("Ребенок")
    const [Description1Text] = React.useState
    ("Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте. ")
    const [Description2Text] = React.useState
    ("По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки. ")
    const [Description3Text] = React.useState
    ("По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания. ")
    const [Description4Text] = React.useState
    ("Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми\n" +
        "движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с\n" +
        "осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность\n" +
        "в отношении наличия СМА.\n")
    const [Description5Text] = React.useState
    ("Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение\n" +
        "терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются\n" +
        "дегенерации при прогрессировании заболевания")
    const [slider_title_text] = React.useState
    ("Сообщает ли один из ваших пациентов о следующих симптомах?")
    const [slider_title_description] = React.useState
    ("(нажмите на любую иконку и узнайте больше)")


    return (
        <div className="Container">
            <div className="title_container">
                <div className="title">
                    {title}
                    <div className="subtitle">
                        {Subtitle}
                    </div>
                </div>
            </div>

            <div className="persons_container">
                <div className="persons_flex">
                    <Person text={motherText} img={mother}/>
                    <Person text={ChildText} img={child}/>
                </div>
            </div>
            <div className="slider_title_adaptive">
            <div className="description_container">
                <div className="description_flex1">
                    <Description text={Description1Text}/>
                    <Description text={Description2Text}/>
                    <Description text={Description3Text}/>
                </div>
                <div className="description_flex2">
                    <Description text={Description4Text}/>
                    <Description text={Description5Text}/>
                </div>


            </div>
                <div className="slider_title">
                    <div className="slider_title_text">
                        {slider_title_text}
                    </div>
                    <div className="slider_title_description">
                        {slider_title_description}
                    </div>
                </div>
            </div>



            <div className="slider_container">

            <Slider />

            </div>
        </div>
    );
}

export default App;
