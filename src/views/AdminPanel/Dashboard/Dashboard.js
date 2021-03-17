import React,{useState} from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Admin from "../../../components/Middleware/Admin";
import { signout } from "../../../components/Middleware/auth";
import { Link } from "react-router-dom";
import { DashboardContent } from "../DashboardContent";
import Student from "../DashboardContent/Student";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Dashboard(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
      
          <ListItem button onClick={e=>setfragment("Home")}>
            <ListItemIcon>
              <InboxIcon /> 
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={e=>setfragment("Student")}>
            <ListItemIcon>
              <InboxIcon /> 
            </ListItemIcon>
            <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
              <InboxIcon /> 
            </ListItemIcon>
            <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
              <InboxIcon /> 
            </ListItemIcon>
            <ListItemText primary="Category" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
              <InboxIcon /> 
            </ListItemIcon>
            <ListItemText primary="Gallery" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
              <InboxIcon /> 
            </ListItemIcon>
            <ListItemText primary="Teacher" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
              <InboxIcon /> 
            </ListItemIcon>
            <ListItemText primary="Student" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
              <InboxIcon /> 
            </ListItemIcon>
            <ListItemText primary="Class" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
              <InboxIcon /> 
            </ListItemIcon>
            <ListItemText primary="Result" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
              <InboxIcon /> 
            </ListItemIcon>
            <ListItemText primary="Notice" />
          </ListItem>
      </List>
      <Divider />
 
      <ListItem button>
            <ListItemIcon>
              <InboxIcon /> 
            </ListItemIcon>
            <ListItemText onClick={() => signout(() => history.replace("/admin"))}  primary="LogOut" />
          </ListItem>
      
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const { history } = props;
  const [fragment, setfragment] = useState("Home")
  const LowFragment = () => {
    switch (fragment) {
      case "Home":
        return <DashboardContent />
        case "Student":
          return <Student />
      default:
        break;
    }
  }
  return (
    <Admin>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
              {LowFragment()}
        </main>
      </div>
    </Admin>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
