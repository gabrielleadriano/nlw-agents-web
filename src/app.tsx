import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/roomx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function App() {
  return(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
      <Route element={<CreateRoom/>} index />
      <Route path="/room/:roomId" element={<Room/>} />
    </Routes>
    </BrowserRouter>
  </QueryClientProvider>
  )
}
