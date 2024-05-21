import { useState, useEffect } from "react";

const BMI = () => {
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [msg, setMsg] = useState("");

    const reload = () => {
        window.location.reload();
    };

    const handleCalculations = (e) => {
        e.preventDefault();

        if (!weight || !height) {
            alert("Please enter valid numbers for height and weight.");
            return;
        }

        // const heightInInches = parseFloat(height);
        // const weightInPounds = parseFloat(weight);

        // if (isNaN(heightInInches) || isNaN(weightInPounds)) {
        //     alert("Please enter valid numbers.");
        //     return;
        // }

        const bmiFormula = (weight / (height / 100 )**2);
        setBmi(bmiFormula.toFixed(2));
    };

    useEffect(() => {
        if (bmi) {
            if (bmi < 18.5) {
                setMsg("You are underweight!");
            } else if (bmi >= 18.5 && bmi < 24.9) {
                setMsg("You are fit!");
            } else {
                setMsg("You are not healthy. Please go for medication!");
            }
        }
    }, [bmi]);

    return (
        <div className="app">
            <div className="container">
                <h1 className="title">BMI Calculator App!</h1>

                <form onSubmit={handleCalculations}>
                    <label className="labels">Age:</label>
                    <input className="bmi-input" type="number" placeholder="Age..." value={age} onChange={(e) => setAge(e.target.value)} />

                    <label className="labels">Weight:</label>
                    <input className="bmi-input" type="number" placeholder="Weight..." value={weight} onChange={(e) => setWeight(e.target.value)} />

                    <label className="labels">Height (Inches):</label>
                    <input className="bmi-input" type="number" placeholder="Height..." value={height} onChange={(e) => setHeight(e.target.value)} />

                    <button className="btn" type="submit">Calculate</button>
                    <button className="btn btn-reload" type="button" onClick={reload}>Reload</button>
                </form>

                <div className="result">
                    {age && <h3 className="age">Age: {age}</h3>}
                    {bmi && <h3 className="bmi1">Your BMI Is: {bmi}</h3>}
                    {msg && <p className="p-msg">{msg}</p>}
                </div>
            </div>
        </div>
    );
};

export default BMI;
