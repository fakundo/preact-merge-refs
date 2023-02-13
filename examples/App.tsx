import { mergeRefs } from "preact-merge-refs";
import { useRef, useState, useEffect } from "preact/hooks";

const refFunc = (node) => {
  console.log("refFunc", node);
};

export default function App() {
  const [visible, setVisible] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();

  useEffect(() => {
    console.log("ref1", ref1.current);
    console.log("ref2", ref2.current);
  }, [visible]);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>toggle</button>
      <hr />
      {visible && (
        <div
          style={{ width: 400, height: 40, background: "red" }}
          ref={mergeRefs([ref1, ref2, refFunc])}
        />
      )}
    </>
  );
}
