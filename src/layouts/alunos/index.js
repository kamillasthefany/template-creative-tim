import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "../alunosCadastrar/authorsTableData";

function Alunos() {
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
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                coloredShadow="primary"
              >
                <MDTypography variant="h6" color="white">
                  Alunos
                </MDTypography>
                <MDButton variant="outlined" color="light" size="small">
                  <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                  &nbsp;
                  <MDTypography
                    component={Link}
                    to="/cadastro"
                    variant="button"
                    color="light"
                    fontWeight="medium"
                  >
                    Adicionar
                  </MDTypography>
                </MDButton>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Alunos;
