import { useEffect, useState } from "react";

export default function App() {

  const flavors = {
    Vanilla: 100,
    Chocolate: 120,
    Strawberry: 150
  };

  const sizes = {
    Small: 1,
    Medium: 1.5,
    Large: 2
  }

  const [selectedFlavour, setSelectedFlavour] = useState("Vanilla");
  const [selectedSize, setSelectedSize] = useState("Small");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedFlavourAmount, setSelectedFlavourAmount] = useState(100);

  const changeFlavour = (e) => {
    setSelectedFlavour(e.target.value);
  };

  const changeSize = (e) => {
    setSelectedSize(e.target.value);
  };

  const changeQuantity = (e) => {
    setSelectedQuantity(e.target.value);
  };

  useEffect(() => {
    setSelectedFlavourAmount(flavors[selectedFlavour] * sizes[selectedSize] * selectedQuantity);
  }, [selectedFlavour, selectedSize, selectedQuantity]
  );

  return (
    <div className="bill-container">

      <div className="bill-header">
        <h1>Ice Cream Price Calculator</h1>
      </div>

      <div className="bill-section">
        <label>Ice Cream Flavour :</label>

        <select onChange={changeFlavour}>
          <option value="Vanilla">Vanilla</option>
          <option value="Chocolate">Chocolate</option>
          <option value="Strawberry">Strawberry</option>
        </select>
      </div>

      <div className="bill-section"> <br />
        <label>Size :</label>

        <select onChange={changeSize}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>

      <div className="bill-section"><br />
        <label>Quantity : </label>

        <input type="number" onChange={changeQuantity} />
      </div>
      <br /><br />
      
      <div className="bill-summary">

        <code>

          <div className="summary-header">
            <h4>========== SUMMARY ==========</h4><br />
          </div>

          <div className="summary-row">
            <p>Flavour : </p>
            <p><span>{selectedFlavour}</span></p>
          </div>

          <div className="summary-row">
            <p>Size : </p>
            <p><span>{selectedSize}</span></p>
          </div>

          <div className="summary-row">
            <p>Quantity : </p>
            <p><span>{selectedQuantity}</span></p>
          </div>

          <div className="summary-row">
            <p>Total Amount :</p>
            <p className="total-amount"> <span>₹{selectedFlavourAmount}/-</span></p>
          </div>
        </code>
      </div>
    </div >
  )
}
