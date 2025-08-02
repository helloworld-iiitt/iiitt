"use client";

import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";

import {
  AccountBalance as AccountBalanceIcon,
  Call as CallIcon,
  Code as CodeIcon,
  EventNote as EventNoteIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  HomeRounded as HomeRoundedIcon,
  LocalLibrary as LocalLibraryIcon,
  LibraryBooks as LibraryBooksIcon,
  Menu as MenuIcon,
  NoteAdd as NoteAddIcon,
  Notifications as NotificationsIcon,
  People as PeopleIcon,
  Person as PersonIcon,
  School as SchoolIcon,
  Twitter as TwitterIcon,
  Work as WorkIcon,
  WorkspacePremium as WorkspacePremiumIcon
} from "@mui/icons-material";

import { styled } from "@mui/material/styles";
import Image from "next/image";
import nextConfig from "../../../next.config";
import { NavItem, SubMenuItem } from "@/types/nav.types";
import "./Navbar.css";

const iconMap: { [key: string]: React.ComponentType } = {
  account_balance: AccountBalanceIcon,
  academics: LocalLibraryIcon,
  people: PeopleIcon,
  note_add: NoteAddIcon,
  notification_important: NotificationsIcon,
  person: PersonIcon,
  school: SchoolIcon,
  call: CallIcon,
  workspace_premium: WorkspacePremiumIcon,
  work: WorkIcon,
  code: CodeIcon,
  library: LibraryBooksIcon,
};

const StyledHomeIcon = styled(HomeRoundedIcon)({
  color: "white",
  paddingLeft: "10px",
});

const StyledButton = styled(Button)({
  color: "white",
});

const Navbar = () => {
  const pathname = usePathname();
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;
    fetch("/json/navigation/navbar_data.json")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setNavItems(data.data);
      })
      .catch((error) => console.error("Error loading navbar items:", error));
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {/* Mobile Menu */}
      <div className="mobile-menu">
        <IconButton onClick={() => setDrawerOpen(true)}>
          <MenuIcon sx={{ color: "white", fontSize: 28 }} />
        </IconButton>
        <Link href="/#announcements_marquee">
          <IconButton>
            <NotificationsIcon sx={{ color: "white", fontSize: 28 }} />
          </IconButton>
        </Link>
        <Link href="/#news_event_notice">
          <IconButton>
            <EventNoteIcon sx={{ color: "white", fontSize: 28 }} />
          </IconButton>
        </Link>
        <Link href="/#twitter_timeline">
          <IconButton>
            <TwitterIcon sx={{ color: "white", fontSize: 28 }} />
          </IconButton>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu navbar">
        {pathname !== "/" ? (
          <Link href="/" id="home_button">
            <StyledHomeIcon sx={{ fontSize: 36 }} />
          </Link>
        ) : (
          <Box sx={{ width: 36, pl: "10px" }} />
        )}
        {navItems.map((menuItem, index) => (
          <DropdownMenu key={index} menu={menuItem} />
        ))}
      </div>

      {/* Sidebar Drawer for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          <Link href="/" onClick={() => setDrawerOpen(false)}>
            <ListItem>
              <ListItemIcon>
                <Image
                  src={`${nextConfig.env?.IMAGE}/iiitt-logo.png`}
                  alt="IIITT Logo"
                  width={40}
                  height={80}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h6" sx={{ color: "Black" }}>IIITT</Typography>
              </ListItemText>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          {navItems.map((menuItem, index) => (
            <MobileMenuItem key={index} item={menuItem} onClose={() => setDrawerOpen(false)} />
          ))}
        </List>
      </Drawer>
    </>
  );
};

const DropdownMenu: React.FC<{ menu: NavItem }> = ({ menu }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      {menu.submenu ? (
        <>
          <StyledButton onClick={handleOpen}>{menu.text}</StyledButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            {menu.submenu.map((item, index) => (
              <NestedDropdown key={index} menuItem={item} onClose={handleClose} />
            ))}
          </Menu>
        </>
      ) : (
        <Link href={menu.link || "#"} passHref legacyBehavior>
          <StyledButton>{menu.text}</StyledButton>
        </Link>
      )}
    </>
  );
};

const NestedDropdown: React.FC<{ menuItem: SubMenuItem; onClose: () => void }> = ({
  menuItem,
  onClose,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const hasSubmenu = !!menuItem.submenu?.length;

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (hasSubmenu) setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    if (hasSubmenu) setAnchorEl(null);
  };

  const menuItemNode = (
    <MenuItem
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={!hasSubmenu ? onClose : undefined}
      disableRipple
      sx={{ justifyContent: "space-between" }}
    >
      <ListItemText>{menuItem.text}</ListItemText>
      {hasSubmenu && <ExpandMoreIcon fontSize="small" />}
    </MenuItem>
  );

  return (
    <>
      {!hasSubmenu ? (
        <Link href={menuItem.link || "#"} style={{ textDecoration: "none", color: "inherit" }}>
          {menuItemNode}
        </Link>
      ) : (
        menuItemNode
      )}
      {hasSubmenu && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={onClose}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          {menuItem.submenu?.map((subItem, index) => (
            <NestedDropdown key={index} menuItem={subItem} onClose={onClose} />
          ))}
        </Menu>
      )}
    </>
  );
};

const MobileMenuItem = ({
  item,
  depth = 0,
  onClose,
}: {
  item: NavItem | SubMenuItem;
  depth?: number;
  onClose: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubmenu = !!item.submenu?.length;
  const IconComponent = item.icon ? iconMap[item.icon] : null;

  return (
    <>
      {!hasSubmenu ? (
        <Link href={item.link || "#"}>
          <ListItem onClick={onClose} sx={{ pl: depth * 2 }}>
            {IconComponent && (
              <ListItemIcon>
                <IconComponent />
              </ListItemIcon>
            )}
            <ListItemText primary={item.text} />
          </ListItem>
        </Link>
      ) : (
        <ListItem onClick={() => setIsExpanded(!isExpanded)} sx={{ pl: depth * 2 }}>
          {IconComponent && (
            <ListItemIcon>
              <IconComponent />
            </ListItemIcon>
          )}
          <ListItemText primary={item.text} />
          {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
      )}
      {hasSubmenu &&
        isExpanded &&
        item.submenu?.map((subItem, index) => (
          <MobileMenuItem key={index} item={subItem} depth={depth + 1} onClose={onClose} />
        ))}
    </>
  );
};

export default Navbar;
