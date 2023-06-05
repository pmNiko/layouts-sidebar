import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { FormControlLabel, Grid, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { LayoutContext } from "../../context";
import { StyledFooter } from "./StyledComponents";

export interface FooterProps {
  version: string;
}

const Footer = ({ version }: FooterProps) => {
  const { themeIsDark } = useContext(LayoutContext);

  return (
    <StyledFooter theme={themeIsDark}>
      <Grid container my={3}>
        <Grid
          item
          xs={12}
          textAlign="center"
          fontSize={15}
          color="white"
          mt={3}
        >
          <Typography>Municipalidad de San Martín de los Andes</Typography>
        </Grid>
        <Grid item xs={12} textAlign="center" fontSize={13} color="white">
          General Roca y Juan Manuel de Rosas
        </Grid>
        <Grid item xs={12} textAlign="center" fontSize={13} color="white">
          CP Q8370, Neuquén
        </Grid>
        <Grid item xs={12} textAlign="center" fontSize={13} color="white">
          Tel +54 2972 427315 internos 223 / 224 / 225
        </Grid>
        <Grid item xs={12} textAlign="center" fontSize={13} color="white">
          <FormControlLabel
            control={
              <a
                target="_top"
                rel="noopener noreferrer"
                href="mailto:consultas.rentas@smandes.gob.ar"
              >
                <IconButton
                  sx={{ color: `${themeIsDark ? "#1976d2" : "blue"}` }}
                >
                  <MailOutlineIcon />
                </IconButton>
              </a>
            }
            label={"consultas.rentas@smandes.gob.ar"}
            labelPlacement="end"
            sx={{ color: `${themeIsDark ? "#1976d2" : "blue"}` }}
          />
        </Grid>
        <Grid item xs={12} textAlign="center" fontSize={13} color="white">
          versión {version}
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
