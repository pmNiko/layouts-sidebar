import { useContext } from "react";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { LayoutContext } from "../../context";
import Typography from "../Typography";
import {
  StyledButton,
  StyledCollapsedSidebarFooter,
  StyledSidebarFooter,
} from "./StyledComponents";

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const codeUrl = "https://app.sma.gob.ar/inicio/";

const SidebarFooter: React.FC<SidebarFooterProps> = ({ children, ...rest }) => {
  const { collapsed } = useContext(LayoutContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "20px",
      }}
    >
      {collapsed ? (
        <StyledCollapsedSidebarFooter href={codeUrl} target="_blank">
          <NewspaperIcon height={20} />
        </StyledCollapsedSidebarFooter>
      ) : (
        <StyledSidebarFooter {...rest}>
          <div style={{ marginBottom: "12px" }}>
            <NewspaperIcon height={20} />
          </div>
          <Typography fontWeight={600}>Banner informativo</Typography>
          <Typography
            variant="caption"
            style={{ letterSpacing: 1, opacity: 0.7 }}
          >
            Espacio informativo
          </Typography>
          <br />
          <div style={{ marginTop: "16px" }}>
            <StyledButton href={codeUrl} target="_blank">
              <Typography variant="caption" color="#607489" fontWeight={600}>
                Acceder
              </Typography>
            </StyledButton>
          </div>
        </StyledSidebarFooter>
      )}
    </div>
  );
};

export default SidebarFooter;
