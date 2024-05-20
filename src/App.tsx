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
  @media screen and (min-width: 960px) {
    align-items: center;
    background: #fafafa;
    display: flex;
    height: 100%;
    overflow-y: scroll;
    padding: 4rem 0;
    position: relative;
    z-index: -3;
  }
`;

export default App;
