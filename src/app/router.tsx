import { createBrowserRouter } from 'react-router-dom';
import LeaderBoardPage from '../pages/LeaderBoard';
import RootLayout from '../shared/components/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LeaderBoardPage />,
      },
    ],
  },
]);
