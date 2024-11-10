import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../shared/components/RootLayout';
import { loader } from './loader';
import LeaderBoardPage from '../pages/LeaderBoard';
import ErrorPage from '../pages/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LeaderBoardPage />,
        loader: loader.leaderBoard,
      },
    ],
  },
]);
