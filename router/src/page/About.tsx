import { useRouter } from "../hooks/useRouter";

const About = () => {
  const { push } = useRouter();
  return (
    <div>
      <h1>About</h1>
      <button
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          push("/");
        }}
      >
        Go to Main
      </button>
    </div>
  );
};

export default About;
