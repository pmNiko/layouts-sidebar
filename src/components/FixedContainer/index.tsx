import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import {
  StyledBadge,
  StyledBody,
  StyledChildrenContainer,
} from "./StyledComponents";

const FixedContainer = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <StyledBadge>
          <StyledBody>
            <StyledChildrenContainer>{children}</StyledChildrenContainer>
          </StyledBody>
        </StyledBadge>
      </Container>
    </>
  );
};

export default FixedContainer;
