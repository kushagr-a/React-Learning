const Card = (props) => {
    return (
            <div className="child">
                <img src="" alt="" />
                <h2>Study about Properties (Props)</h2>
                <h3>{props.user}, {props.age}</h3>
                <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</p>
            </div>
    )
}

export default Card