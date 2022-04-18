/* eslint-disable */
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import Icon from "@mui/material/Icon";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "./authorsTableData";

function AlunosCadastrar() {
  const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="primary"
                borderRadius="lg"
                coloredShadow="primary"
              >
                <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Aluno
                </MDTypography>
                <MDTypography display="block" variant="button" color="white" my={1}>
                  Cadastre um aluno
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={5}>
                <MDBox component="form" role="form">
                  <Grid container spacing={5} mb={10} md={12}>
                    <Grid item xs={8}>
                      <MDInput type="text" label="Nome Completo" variant="standard" fullWidth />
                    </Grid>
                    <Grid item xs={4}>
                      <MDInput type="text" label="Data de Nascimento" variant="standard" fullWidth />
                    </Grid>
                  </Grid>
                  <Grid container spacing={5} mb={10} md={12}>
                    <Grid item xs={6}>
                      <MDInput type="text" label="Peso" variant="standard" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <MDInput type="text" label="Altura" variant="standard" fullWidth />
                    </Grid>
                  </Grid>
                  <Grid container spacing={5} mb={10} md={12} fullWidth>
                    <Grid item xs={6}>
                      <TextField id="outlined-basic" label="Objetivo" variant="standard" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField id="outlined-basic" label="Principais Queixas" variant="standard" fullWidth />
                    </Grid>
                  </Grid>
                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="primary" size="sm">
                      Criar
                    </MDButton>
                  </MDBox>

                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AlunosCadastrar;
