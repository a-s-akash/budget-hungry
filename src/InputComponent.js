import React, { useState } from 'react';
import Switch from './Switch';
import Output from './Output';
import submit1 from './assets/break.png'; // Import the image for button 1
import submit2 from './assets/lunch.png'; // Import the image for button 2
import submit3 from './assets/dinner.png'; // Import the image for button 3

// New logic functions
function findCombinations(prices, items, target) {
    let allCombinations = [];
    for (let r = 1; r <= Math.floor(target / Math.min(...prices)); r++) {
        allCombinations.push(...getCombinationsWithRepetition(prices.length, r));
    }

    let validCombinations = [];
    for (let combination of allCombinations) {
        let total_price = combination.reduce((acc, val) => acc + prices[val], 0);
        if (total_price <= target) {
            let itemsInCombination = combination.map(index => items[index]);
            let sortedItems = Array.from(new Set(itemsInCombination)).sort();
            let combinationStr = countItems(sortedItems);
            validCombinations.push(combinationStr);
        }
    }

    return validCombinations;
}

function getCombinationsWithRepetition(n, r) {
    const combinations = [];
    function generateCombinations(currentCombination, start) {
        if (currentCombination.length === r) {
            combinations.push(currentCombination.slice());
            return;
        }
        for (let i = start; i < n; i++) {
            currentCombination.push(i);
            generateCombinations(currentCombination, i); // Use i instead of start
            currentCombination.pop();
        }
    }
    generateCombinations([], 0);
    return combinations;
}

function countItems(combination) {
    const itemCounts = {};
    combination.forEach(item => {
        itemCounts[item] = (itemCounts[item] || 0) + 1;
    });
    return itemCounts;
}

function main(veg, meal, target) {
    let items, prices;

    if (!veg && meal === "breakfast") {
        items = ["Idli", "Dosa", "Upma", "Poha", "Uttapam", "Aloo Paratha", "Chole Bhature", "Vegetable Poha","Methi Thepla", "Vegetable Upma", "Masala Dosa", "Vegetable Sandwich", "Rava Idli", "Medu Vada","Veggie Omelette", "Vegetable Uttapam", "Bread Pakora", "Sabudana Khichdi", "Moong Dal Cheela","Besan Chilla"];
        prices = [10, 30, 25, 25, 35, 40, 50, 30, 25, 30, 35, 40, 25, 20, 45, 40, 30, 35, 25, 30];
    } else if (veg && meal === "breakfast") {
        items = ["Egg Bhurji", "Egg Dosa", "Chicken Stuffed Paratha", "Keema Paratha", "Chicken Sandwich","Egg Sandwich", "Omelette", "Egg Fried Rice","Chicken Idiyappam", "Chicken Poha", "Egg Curry","Chicken Dosa", "Chicken Upma", "Anda Bhurji Pav", "Chicken Omelette", "Egg Biryani","Chicken Tikka Sandwich", "Anda Paratha", "Chicken Stuffed Dosa", "Egg Frankie"];
        prices = [40, 35, 60, 50, 50, 45, 15, 50, 60, 55, 60, 65, 60, 40, 60, 70, 70, 50, 70, 50];
    } else if (!veg && meal === "lunch") {
        items = ["Rajma Chawal", "Chole Chawal", "Dal Tadka", "Paneer Butter Masala", "Aloo Gobi", "Baingan Bharta","Palak Paneer", "Vegetable Biryani", "Mixed Vegetable Curry", "Aloo Jeera", "Malai Kofta", "Paneer Tikka Masala", "Veg Pulao", "Dum Aloo", "Full Meals", "Shahi Paneer", "Veg Fried Rice", "Bhindi Masala", "Methi Matar Malai", "Vegetable Jalfrezi"];
        prices = [60, 55, 50, 70, 60, 55, 65, 70, 60, 45, 70, 75, 60, 55, 95, 75, 65, 55, 65, 60];
    } else if (veg && meal === "lunch") {
        items = ["Chicken Biryani", "Butter Chicken", "Chicken Curry", "Fish Curry", "Mutton Rogan Josh", "Egg Curry", "Chicken Fried Rice", "Tandoori Chicken", "Chicken Tikka Masala", "Fish Fry", "Mutton Biryani", "Prawn Curry", "Full meals", "Chicken Pulao", "Egg Fried Rice", "Fish Biryani", "Mutton Curry", "Chicken Bhuna", "Chicken Do Pyaza", "Fish Fry with Rice"];
        prices = [80, 90, 75, 85, 95, 70, 70, 80, 85, 80, 100, 90, 120, 75, 70, 90, 85, 80, 80, 85];
    } else if (!veg && meal === "dinner") {
        items = ["Khichdi", "Vegetable Curry", "Dal Makhani", "Aloo Methi", "Mix Vegetable Sabzi", "Kadai Paneer","Dum Aloo", "Gobi Manchurian", "Paneer Bhurji", "Veg Noodles", "Aloo Palak", "Bhindi Masala", "Mushroom Masala", "Aloo Matar", "Palak Dal", "Vegetable Fried Rice", "Veg Manchurian", "Dal Fry", "Tawa Paneer", "Kadai Mushroom"];
        prices = [40, 50, 60, 45, 55, 65, 50, 55, 60, 55, 50, 55, 60, 50, 55, 60, 60, 45, 65, 60];
    } else if (veg && meal === "dinner") {
        items = ["Chicken Curry", "Mutton Curry", "Fish Curry", "Egg Curry", "Chicken Tikka Masala", "Tandoori Chicken","Chicken Do Pyaza", "Fish Fry", "Mutton Rogan Josh", "Chicken Biryani", "Egg Fried Rice", "Prawn Curry","Chicken Korma", "Mutton Biryani", "Fish Biryani", "Chicken Bhuna", "Chicken Pulao", "Mutton Kebabs","Chicken Masala", "Fish Fry with Rice"];
        prices = [75, 85, 85, 70, 85, 80, 80, 80, 95, 80, 70, 90, 80, 100, 90, 85, 80, 75, 90, 75];
    }

    let validCombinations = findCombinations(items, prices, target);

    if (validCombinations.length > 0) {
        let combinationText = validCombinations.join('\n');
        return combinationText;
    } else {
        return "No combination found for the target price.";
    }
}

const InputComponent = () => {
  const [amount, setAmount] = useState('');
  const [isVeg, setIsVeg] = useState(true); // Default value for veg
  const [submitButtonValue, setSubmitButtonValue] = useState(null); // Store which button was clicked
  const [resultText, setResultText] = useState(''); // Text to display result

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleVegChange = () => {
    setIsVeg(!isVeg); // Toggle between veg and non-veg
  };

  const handleSubmit = (buttonNumber) => {
    // Set the submitButtonValue based on the button clicked
    setSubmitButtonValue(buttonNumber);
    let result = main(isVeg, buttonNumber === 1 ? "breakfast" : buttonNumber === 2 ? "lunch" : "dinner", parseInt(amount)); // Call main function with appropriate parameters
    setResultText(result);
  };

  return (
    <div className="homepage d-flex flex-column align-items-center justify-content-center">
      <form style={{ margin: '-10px' }}>
        <div className="form-group" style={{ marginBottom: '50px' }}>
          <input
            type="number"
            className="form-control"
            id="amountInput"
            placeholder="Enter Your amount (Rs.)"
            style={{
              fontWeight: 'bold',
              width: '380px',
              height: '60px',
              fontSize: '30px',
              backgroundColor: '#91C686',
              color: '#022279',
            }}
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
      </form>
      <div className="switch-container">
        <Switch className="left-toggle" onChange={handleVegChange} checked={isVeg} />
      </div>
      <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center' }}>
        <img
          src={submit1}
          alt="Submit Button 1"
          className="button-img"
          style={{ width: '100px', height: '100px', marginRight: '30px', cursor: 'pointer', marginTop: '40px' }}
          onClick={() => handleSubmit(1)}
        />
        <img
          src={submit2}
          alt="Submit Button 2"
          className="button-img"
          style={{ width: '100px', height: '100px', marginRight: '30px', cursor: 'pointer', marginTop: '40px' }}
          onClick={() => handleSubmit(2)}
        />
        <img
          src={submit3}
          alt="Submit Button 3"
          className="button-img"
          style={{ width: '100px', height: '100px', marginRight: '20px', cursor: 'pointer', marginTop: '40px' }}
          onClick={() => handleSubmit(3)}
        />
      </div>
      {/* Render the Output component if a button was clicked */}
      {submitButtonValue !== null && (
        <Output amount={amount} isVeg={!isVeg} submitButtonValue={submitButtonValue} />
      )}
      {/* Display result text */}
      {resultText && (
        <div className="result-text" style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>{resultText}</p>
        </div>
      )}
    </div>
  );
};

export default InputComponent;