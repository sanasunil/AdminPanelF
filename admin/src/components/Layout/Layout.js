import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
import {Box, IconButton, Link} from '@material-ui/core'
import Icon from '@mdi/react'

//icons
import {
  mdiFacebook as FacebookIcon,
  mdiTwitter as TwitterIcon,
  mdiGithub as GithubIcon,
} from '@mdi/js'

// styles
import useStyles from "./styles";

// context
import { useLayoutState } from "../../context/LayoutContext";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";

import Notifications from "../../pages/notifications";


import Admin from "../../pages/User/Admin";
import Report from "../../pages/Report/Report";
import Plans from "../../pages/RechargePlans/Plans";
import AddUser from "../../pages/User/AddUser";
import EditUser from "../../pages/User/EditUser";
import User from "../../pages/User/User";
import Coordinator from "../../pages/User/Coordinator";
import Customer from "../../pages/User/Customer";
import DeliveryBoys from "../../pages/User/DeliveryBoys";
import Product from "../../pages/Product/Product";
import Camps from "../../pages/Camps/camps";
import Menu from "../../pages/Menu/menu";
import wallet from "../../pages/wallet/wallet";
import Delivery from "../../pages/delivery/delivery";
import order from "../../pages/orders/order";
import store from "../../pages/store/store";





function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          
          <Header history={props.history} />
          <Sidebar/>
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
          <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/admins" component={Admin} />
              <Route path="/app/coordinator" component={Coordinator} />
              <Route path="/app/customer" component={Customer} />
              <Route path="/app/deliveryBoys" component={DeliveryBoys} />

              <Route exact path="/app/User" component={User}/>
              <Route path="/app/user/addUser" component={AddUser}/>
              <Route path="/app/user/editUser/:id" component={EditUser}/>

              <Route path="/app/products" component={Product} />
              <Route path="/app/camps" component={Camps} />
              <Route path="/app/menu" component={Menu} />
              <Route path="/app/products" component={Product} />
              <Route path="/app/customerWallet" component={wallet} />
              <Route path="/app/delivery" component={Delivery} />
              <Route path="/app/orders" component={order} />
              <Route path="/app/stores" component={store} />
              



              <Route path="/app/plans" component={Plans} />
              <Route path="/app/report" component={Report} />
              
              
             
              
          {/* <Route exact path="/app/ui" render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} />
          */}

            </Switch>
            <Box
              mt={5}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent="space-between"
            >
              <div>
                <Link
                  color={'primary'}
                  href={'https://www.techzera.in/'}
                  target={'_blank'}
                  className={classes.link}
                >
                  Abc
                </Link>
                <Link
                  color={'primary'}
                  href={'https://www.techzera.in/about-us'}
                  target={'_blank'}
                  className={classes.link}
                >
                  About Us
                </Link>
                <Link
                  color={'primary'}
                  href={'https://www.techzera.in/blog'}
                  target={'_blank'}
                  className={classes.link}
                >
                  Blog
                </Link>
              </div>
              <div>
                <Link
                  href={'https://www.facebook.com/abc'}
                  target={'_blank'}
                >
                  <IconButton aria-label="facebook">
                    <Icon
                      path={FacebookIcon}
                      size={1}
                      color="#6E6E6E99"
                    />
                  </IconButton>
                </Link>
                <Link
                  href={'https://twitter.com/abc'}
                  target={'_blank'}
                >
                  <IconButton aria-label="twitter">
                    <Icon
                      path={TwitterIcon}
                      size={1}
                      color="#6E6E6E99"
                    />
                  </IconButton>
                </Link>
                <Link
                  href={'https://github.com/abc'}
                  target={'_blank'}
                >
                  <IconButton
                    aria-label="github"
                    style={{marginRight: -12}}
                  >
                    <Icon
                      path={GithubIcon}
                      size={1}
                      color="#6E6E6E99"
                    />
                  </IconButton>
                </Link>
              </div>
            </Box>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
