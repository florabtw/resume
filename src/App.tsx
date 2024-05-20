import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styled from "styled-components";

import DataEngineer from "Resumes/DataEngineer";
import FrontendEngineer from "Resumes/FrontendEngineer";
import SoftwareEngineer from "Resumes/SoftwareEngineer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SoftwareEngineer />,
  },
  {
    path: "/swe",
    element: <SoftwareEngineer />,
  },
  {
    path: "/data",
    element: <DataEngineer />,
  },
  {
    path: "/frontend",
    element: <FrontendEngineer />,
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
    background: #fafafa;
    display: flex;
    height: 100vh;
    overflow-y: scroll;
    padding: 4rem 0;
    position: relative;
    z-index: 0;
  }
`;

export default App;
