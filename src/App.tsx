import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styled from "styled-components";

import Generic from "Resumes/Generic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Generic />,
  },
]);

function App() {
  return (
    <Background>
      <RouterProvider router={router} />
    </Background>
  );
}

const Background = styled.div`
  background: #ddd;
  height: 100%;
  overflow-y: scroll;

  @media (min-width: 960px) {
    padding: 4rem 0;
  }
`;

export default App;
