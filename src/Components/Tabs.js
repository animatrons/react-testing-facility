import Tab from './SubComponents/Tab';

const Tabs = (props) => {

    return (
        <div className="nav-tabs" >
            <Tab tabNum="1" Num={props.Number} click={props.clickTab} linkTo="here" text="Today 📆" />
            <Tab tabNum="2" Num={props.Number} click={props.clickTab} linkTo="counting" text="Counting" />
            <Tab tabNum="3" Num={props.Number} click={props.clickTab} linkTo="magicbuttons" text="Magic Buttons" />
            <Tab tabNum="4" Num={props.Number} click={props.clickTab} linkTo="this" text="This?" />

        </div>
    )
}

export default Tabs;