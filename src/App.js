import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  const [pincode, setPincode] = useState("");
  useEffect(() => {
    const getData = setTimeout(() => {
      axios
        .get(`https://api.postalpincode.in/pincode/${pincode}`)
        .then((res) => {
          console.log(res.data[0]);
        });
    }, 300);
    return () => clearTimeout(getData);
  }, [pincode]);

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setPincode(e.target.value)}
        name="name"
      />
    </div>
  );
}
