import { useSelector } from "react-redux";

const InsuredPage = () => {
  const state = useSelector((state: any) => state.userInfo);

  return (
    <div>
      <h2>Consiguiendo data con Redux 🐶</h2>
      <p>Estas en una ruta privada 👀</p>
      <span>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </span>
    </div>
  );
};

export default InsuredPage;
