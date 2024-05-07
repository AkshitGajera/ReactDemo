function Heading() {
    let Heading1 = "Vishv";
    let date = (new Date().toLocaleDateString());
    let time = (new Date().toLocaleTimeString());
    return (
        <div>
            <h1 style={{ color: "cadetblue" }}>This is {Heading1}'s Website</h1>
        <h2>{date}</h2>
        <h2>{time}</h2>
        </div>
    );
}
export default Heading;
