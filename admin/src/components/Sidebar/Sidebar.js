import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Payment as PaymentIcon,
  Assessment as AssessmentIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
  SupervisedUserCircle as SupervisedUserCircleIcon,
  Category as CategoryIcon,
  Store as StoreIcon,
  LocalGroceryStore as LocalGroceryStoreIcon,
  MenuBook as MenuBookIcon,
  AccountBalanceWallet as AccountBalanceWalletIcon,
  DeliveryDining as DeliveryDiningIcon,
  LocalShipping as LocalShippingIcon,
  Feedback as FeedbackIcon,
  Cabin as CabinIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  VerifiedUser as VerifiedUserIcon,
  Group as GroupIcon


  
} from "@mui/icons-material";

//import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon  />},
  { id: 10, label: "Users", link: "/app/user", icon: <PersonIcon/>},
  { id: 1, label: "Admins", link: "/app/admins", icon: < VerifiedUserIcon/>  },
  { id: 16, label: "Coordinator", link: "/app/coordinator", icon: <SupervisedUserCircleIcon  />  },
  { id: 7, label: "Delivery Boys", link: "/app/deliveryBoys", icon: <DeliveryDiningIcon />  },
  { id: 15, label: "Customer", link: "/app/customer", icon: <GroupIcon/>  },
  { id: 2, label: "Products", link: "/app/products", icon: <LocalGroceryStoreIcon />  },
  { id: 3, label: "Product Category", link: "/app/products", icon: <CategoryIcon />  },
  { id: 4, label: "Camps", link: "/app/camps", icon: <CabinIcon />  },
  { id: 5, label: "Menu", link: "/app/menu", icon: <MenuBookIcon />  },
  { id: 6, label: "Customer Wallet", link: "/app/wallet", icon: <AccountBalanceWalletIcon /> }, 
  { id: 8, label: "Delivery", link: "/app/delivery", icon: <LocalShippingIcon />  },
  { id: 9, label: "Orders", link: "/app/orders", icon: <AssignmentTurnedInIcon />},
  { id: 11, label: "Store", link: "/app/stores", icon: <StoreIcon />  },
  { id: 12, label: "Recharge Plans", link: "/app/plans", icon: <PaymentIcon /> },
  { id: 13, label: "Report", link: "/app/report", icon: <AssessmentIcon/> },
  { id: 14, label: "Feedback Mangement", link: "/app/admins", icon: <FeedbackIcon /> },
 
  
  
  {/*
    {
    id: 5,
    label: "User",
    link: "/app/user",
    icon: <UIElementsIcon />,
    children: [
      { label: "Icons", link: "/app/ui/icons" },
      { label: "Charts", link: "/app/ui/charts" },
      { label: "Maps", link: "/app/ui/maps" },
    ],
  },
  {
    id: 4,
    label: "UI Elements",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    children: [
      { label: "Icons", link: "/app/ui/icons" },
      { label: "Charts", link: "/app/ui/charts" },
      { label: "Maps", link: "/app/ui/maps" },
    ],
  },
  
  
  
  { id: 5, type: "divider" },
  { id: 6, type: "title", label: "HELP" },
  { id: 7, label: "Library", link: "https://flatlogic.com/templates", icon: <LibraryIcon /> },
  { id: 8, label: "Support", link: "https://flatlogic.com/forum", icon: <SupportIcon /> },
  { id: 9, label: "FAQ", link: "https://flatlogic.com/forum", icon: <FAQIcon /> },
  { id: 10, type: "divider" },
  { id: 11, type: "title", label: "PROJECTS" },
  {
    id: 12,
    label: "My recent",
    link: "",
    icon: <Dot size="small" color="warning" />,
  },
  {
    id: 13,
    label: "Starred",
    link: "",
    icon: <Dot size="small" color="primary" />,
  },
  {
    id: 14,
    label: "Background",
    link: "",
    icon: <Dot size="small" color="secondary" />,
  },*/}
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);