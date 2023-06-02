import { CardExample } from "./components";
import PublicLayout from "./layout/PublicLayout";

function App() {
  return (
    <PublicLayout version="1.0.0">
      <>
        <CardExample />
        <br />
        <CardExample />
        <br />
        <CardExample />
        <br />
        <CardExample />
        <br />
        {/* <SidebarConfig
              collapsed={collapsed}
              toggleCollapsed={() => setCollapsed(!collapsed)}
              rtl={rtl}
              toggleRtl={handleRTLChange}
              hasImage={hasImage}
              handleImageChange={handleImageChange}
              theme={theme}
              handleThemeChange={handleThemeChange}
            /> */}
        <br />
        <CardExample />
        <br />
        <CardExample />
        <br />
        <CardExample />
        <br />
        <CardExample />
        <br />
      </>
    </PublicLayout>
  );
}

export default App;
