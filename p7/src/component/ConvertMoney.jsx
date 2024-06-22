import VndToUsd from "./VndToUsd";
import UsdToVnd from "./UsdToVnd";
import { useState } from "react";

export default function ConvertMoney() {
  const [vnd, setVnd] = useState(0);
  const [usd, setUsd] = useState(0);
  const handleChangeVnd = (e) => {
    const vnd = e.target.value;
    const usd = vnd / 25000;
    setUsd(usd);
    setVnd(vnd);
  };

  const handleChangeUsd = (e) => {
    const usd = e.target.value;
    const vnd = usd * 25000;
    setVnd(vnd);
    setUsd(usd);
  };
  return (
    <>
      <VndToUsd onChange={handleChangeVnd} vnd={vnd} />
      <UsdToVnd onChange={handleChangeUsd} usd={usd} />
    </>
  );
}
