import "./App.css";
import { useRouter } from "./hooks/useRouter";

function App() {
  const { push } = useRouter();

  return (
    <>
      <div>
        <h1>Root</h1>
        <button
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            push("/about");
          }}
        >
          about
        </button>
      </div>
    </>
  );
}

export default App;
