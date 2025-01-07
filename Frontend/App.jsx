import axios from "axios";
import React, { useState } from "react";

function App() {
  // Separate states for each attribute
  const [attribute1, setAttribute1] = useState("");
  const [attribute2, setAttribute2] = useState("");
  const [attribute3, setAttribute3] = useState("");
  const [attribute4, setAttribute4] = useState("");
  const [attribute5, setAttribute5] = useState("");
  const [attribute6, setAttribute6] = useState("");
  const [attribute7, setAttribute7] = useState("");
  const [attribute8, setAttribute8] = useState("");
  const [attribute9, setAttribute9] = useState("");
  const [attribute10, setAttribute10] = useState("");
  const [attribute11, setAttribute11] = useState("");
  const [attribute12, setAttribute12] = useState("");
  const [attribute13, setAttribute13] = useState("");

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    console.log("in")
    e.preventDefault();
    setError(null); // Clear previous errors

    const formData = {
      attribute1,
      attribute2,
      attribute3,
      attribute4,
      attribute5,
      attribute6,
      attribute7,
      attribute8,
      attribute9,
      attribute10,
      attribute11,
      attribute12,
      attribute13,
    };
    console.log(formData)

    try {
      const response = await axios.post("http://127.0.0.1:8000/predict", formData);
      setResult(response.data.prediction);

    } catch (err) {
      setError("An error occurred while making the prediction.");
      console.error(err);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('https://cvrti.utah.edu/wp-content/uploads/2024/03/11-10-23-edited-scaled.jpeg')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
       // width:"100%",
        backgroundRepeat: "no-repeat",
      //  justifyContent: "center",
        alignItems: "center",
        padding:100,
        
    
     //   filter: "blur(5px)", // Blurred background
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background for form
          borderRadius: "15px",
          padding: "60px",
           width: "100%",
       //  maxWidth: "3000px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ color:"#12236d" ,textAlign: "center", marginBottom: "20px" }}>Heart Disease Prediction</h1>
        <form  style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
          <input
            type="number"
            placeholder="Age"
            value={attribute1}
            onChange={(e) => setAttribute1(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="number"
            placeholder="Sex"
            value={attribute2}
            onChange={(e) => setAttribute2(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="number"
            placeholder="cp"
            value={attribute3}
            onChange={(e) => setAttribute3(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="number"
            placeholder="trestbs"
            value={attribute4}
            onChange={(e) => setAttribute4(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="number"
            placeholder="chol"
            value={attribute5}
            onChange={(e) => setAttribute5(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="number"
            placeholder="fbs"
            value={attribute6}
            onChange={(e) => setAttribute6(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="number"
            placeholder="restecg"
            value={attribute7}
            onChange={(e) => setAttribute7(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="number"
            placeholder="thalach"
            value={attribute8}
            onChange={(e) => setAttribute8(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="number"
            placeholder="exang"
            value={attribute9}
            onChange={(e) => setAttribute9(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="number"
            placeholder="oldpeak"
            value={attribute10}
            onChange={(e) => setAttribute10(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="number"
            placeholder="slope"
            value={attribute11}
            onChange={(e) => setAttribute11(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="number"
            placeholder="ca"
            value={attribute12}
            onChange={(e) => setAttribute12(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="number"
            placeholder="thal"
            value={attribute13}
            onChange={(e) => setAttribute13(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </form>
        <button onClick={handleSubmit} type="submit" style={{ marginTop: "20px", width: "100%", padding: "10px", borderRadius: "5px", background: "#4CAF50", color: "#fff", border: "none", fontWeight: "bold" }}>
          Submit
        </button>
        {result && <h3 style={{color:"#12236d", textAlign: "center", marginTop: "20px" }}>Prediction: {result}</h3>}
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      </div>
    </div>
  );
}

export default App;
