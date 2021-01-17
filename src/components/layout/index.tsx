import Header from "./header";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="container">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
