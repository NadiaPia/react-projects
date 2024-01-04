import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [myRange, setMyRange] = useState(0);
  const [friendRange, setFriendRange] = useState(0);
  let together = (myRange + friendRange) / 2;

  function handleReset() {
    setBill(0);
    setMyRange(0);
    setFriendRange(0);
  }

  return (
    <div className="App">
      <BillAmount bill={bill} setBill={setBill}/>      
      <LikeRange percentage={myRange} setPercentage={setMyRange}>
        How did you like the service?
      </LikeRange>
      <LikeRange percentage={friendRange} setPercentage={setFriendRange}>
        How did your friend like the service?
      </LikeRange>

      {bill > 0 && (
        <>
          <YouPay bill={bill} together={together} />
          <ResetButton handleReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillAmount({ setBill, bill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        placeholder="Bill value..."
        value={bill}
        onChange={(e) => {
          setBill(Number(e.target.value));
        }}
      />
    </div>
  );
}

function LikeRange({ percentage, setPercentage, children }) {
  return (
    <div>
      <span>{children}</span>
      <select
        value={percentage}
        onChange={(e) => {
          setPercentage(Number(e.target.value));
        }}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function YouPay({ bill, together }) {
  return (
    <div style={{ fontWeight: "bold", fontSize: "25px" }}>
      <p>{`You Pay $${bill + together} ($${bill} + $${together} tip)`}</p>
    </div>
  );
}

function ResetButton({ children, handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}

export default App;
