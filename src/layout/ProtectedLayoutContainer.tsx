import { LayoutProvider } from "../context";
import { LayoutProps } from "../interfaces";
import ProtectedLayout from "./ProtectedLayout";

function ProtectedLayoutContainer({ children, version }: LayoutProps) {
  return (
    <LayoutProvider>
      <ProtectedLayout version={version}>{children}</ProtectedLayout>
    </LayoutProvider>
  );
}

export default ProtectedLayoutContainer;
