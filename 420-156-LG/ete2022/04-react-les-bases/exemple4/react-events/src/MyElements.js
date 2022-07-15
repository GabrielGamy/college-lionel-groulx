import './MyElements.css';

const MyDiv = () => {
    return (
        <div className="my-elm my-div"
            onMouseOver={(e)=>{console.log('mouse is over', e)}} >
                Open DevTools and move your mouse cursor over here
        </div>
    )
}

const MyButton = () => {
    return (
        <button className="my-elm my-btn"
            onClick={(e)=>{console.log('button is clicked', e)}} >
                My Custom button
        </button>
    )
}

const MyInput = () => {
    return (
        <input className="my-elm my-input"
            placeholder="My Custom input ..."
            onChange={(value) => console.log('changed', value.target.value)}/>
    )
}

export { MyDiv, MyButton, MyInput };