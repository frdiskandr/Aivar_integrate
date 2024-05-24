import { useState } from "react";
import { requestTogroq } from "./groq";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

function DelayedApiButton() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");

  const change = e => {
    setUserInput(e.target.value);
  };

  const handleButtonClick = () => {
    setLoading(true);
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await requestTogroq(userInput);
        const groq_ai = await response.json();
        setData(groq_ai);
        setLoading(false);
        console.log(groq_ai);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    // Delay the API call by 2 seconds
    setTimeout(fetchData, 2000);
  };

  return (
    <div className="Ai" style={{ backgroundColor: "black", color: "white" }}>
      <h1>
        Ai<b>Var</b>
      </h1>
      <form>
        <input
          type="text"
          id="userInput"
          value={userInput}
          className="user-input"
          onChange={change}
          placeholder="Ask me anything"
        />
        <button
          type="button"
          onClick={handleButtonClick}
          disabled={loading}
          onDragEnter={handleButtonClick}
          className="submit"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
      <div>
        <SyntaxHighlighter
          language="swift"
          style={darcula}
          wrapLongLines={true}
        >
          {data}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default DelayedApiButton;
