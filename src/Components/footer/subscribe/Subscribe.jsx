import { useState } from "react";
import { subscribeUser } from "../../../Service/api";

const initialvalue = {
  email: "",
};

function Subscribe() {
  const [email, setEmail] = useState(initialvalue);
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const res = await subscribeUser(email);
    console.log(res);
    setEmail(initialvalue);
    alert(res.data.msg);
  };

  const handleInput = (evt) => {
    setEmail({ ...email, [evt.target.name]: evt.target.value });
  };

  return (
    <div className="subscribe-container">
      <h1>Subscribe</h1>
      <p>Subscribe to our weekly newsletter</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          required
          name="email"
          value={email.email}
          onChange={handleInput}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Subscribe;
