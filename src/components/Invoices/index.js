// import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Invoice from "components/Invoice";

function Invoices() {
  return (
    <>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Pagamentos
        </MDTypography>
        <MDButton variant="outlined" color="info" size="small">
          ver todos
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="Março 2020" id="5 aulas" price="R$180" />
          <Invoice date="Fevereiro, 2021" id="6 aulas" price="R$250" />
          <Invoice date="Abril, 2020" id="8 aulas" price="R$120" />
          <Invoice date="Junho, 2019" id="10 aulas" price="R$180" />
          <Invoice date="Julho, 2019" id="2 aulas" price="R$300" noGutter />
        </MDBox>
      </MDBox>
    </>
  );
}

export default Invoices;
