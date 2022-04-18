// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
// import Tables from "layouts/tables";
import Alunos from "layouts/alunos";
import AlunosCadastrar from "layouts/alunosCadastrar";
import Perfil from "layouts/perfil";
// import Billing from "layouts/billing";
// import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import SignUp from "layouts/authentication/sign-up";
import Login from "layouts/authentication/login";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
    visible: true,
  },
  {
    type: "collapse",
    name: "Alunos",
    key: "alunos",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/alunos",
    component: <Alunos />,
    visible: true,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
    visible: true,
  },
  {
    type: "collapse",
    name: "Perfil",
    key: "perfil",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/perfil",
    component: <Perfil />,
    visible: true,
  },
  {
    type: "collapse",
    name: "Login",
    key: "login",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/login",
    component: <Login />,
    visible: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
    visible: true,
  },
  {
    type: "collapse",
    icon: "",
    name: "",
    key: "cadastro de Aluno",
    route: "/cadastro",
    component: <AlunosCadastrar />,
    visible: false,
  },
];

export default routes;
