import { createContext, useState } from "react";
import Theme from "./component/theme/Theme";
export const AppContext = createContext();

export default function App() {
  const [message, setMsg] = useState("Hello ae f8");

  return (
    <AppContext.Provider value={{ message, setMsg }}>
      <Theme />
    </AppContext.Provider>
  );
}

/*
Truyền dữ liệu qua các compo
- Cách 1: dùng props
- cách 2: dùng object context: dùng hàm React.createContext để tạo
  + provider: gửi dữ liệu tới các component
  + consumer: lấy dữ liệu từ component
    _ xác định được context cần lấy dữ liệu
    _ gọi component consumer để lấy dữ liệu hoặc thông qua hook useContext()
*/
