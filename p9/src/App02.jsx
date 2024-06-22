import { useContext } from "react";
import { ProviderContext } from "./store/Provider";
export default function App() {
  const { state, dispatch } = useContext(ProviderContext);
  console.log(state);
  console.log(dispatch);
  return <div>App</div>;
}
