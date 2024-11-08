import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <>
      <main className="main_content">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
