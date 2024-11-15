import { useCallback, useEffect, useRef, useState } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (characterAllowed) str += "~!@#$%^&*()_-<>?{}[]";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 
      my-8 bg-gray-800 text-orange-500"
      >
        <h1 className="text-white text-3xl text-center my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          ></input>
          <button
            onClick={copyPasswordToClipboard}
            className=" outline-none bg-blue-700 text-white px-3 py-0.5
          shrink-0 active:bg-blue-900 hover:bg-blue-800 transition-colors"
          >
            Copy
          </button>
        </div>
        <div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                min={6}
                max={30}
                className="cursor-pointer"
                type="range"
                onChange={(e) => setLength(e.target.value)}
              />
              <label className="">Length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numberInput">Numbers</label>

              <input
                type="checkbox"
                defaultChecked={characterAllowed}
                id="characterAllowed"
                onChange={() => setCharacterAllowed((prev) => !prev)}
              />
              <label htmlFor="characterAllowed">Character</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
