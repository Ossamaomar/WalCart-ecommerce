import {
  Navbar,
  NavbarBrand,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Badge,
} from "@heroui/react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { BiUser } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import useCategories from "../features/categories/useCategories";
import useCart from "../features/cart/useCart";
import useLogout from "../features/authentication/useLogout";
import useWishlist from "../features/wishlist/useWishlist";
import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import DarkModeBtn from "./DarkModeBtn";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="#7E22CE"
        fillRule="evenodd"
      />
    </svg>
  );
};

function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { categories, isLoading } = useCategories();
  const { userToken, userData } = useUserContext();
  const { cart, isLoading: isLoadingCart } = useCart(userToken);
  const { wishlist, isLoading: isLoadingWishlist } = useWishlist(userToken);
  const navigate = useNavigate();
  const { logout } = useLogout();

  function handleLogout() {
    logout();
  }

  if (isLoading || isLoadingCart || isLoadingWishlist) return;

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand className="cursor-pointer" onClick={() => navigate("/")}>
          <AcmeLogo />
          <p className="text-xl font-bold text-inherit">WalCart</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `relative text-md  px-2 py-1  transition duration-300
                 ${
                   isActive
                     ? "after:scale-x-100 text-purple-700 font-medium"
                     : "after:scale-x-0"
                 } 
                 after:absolute after:left-0 after:bottom-0 after:h-0.5 
                 after:w-full after:bg-purple-700 after:origin-left after:transition-transform after:duration-300`
            }
          >
            Home
          </NavLink>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 text-md bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                Categories <FaChevronDown />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[200px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {categories.map((category) => (
              <DropdownItem
                key={category._id}
                onPress={() => navigate(`/category/${category._id}`)}
              >
                {category.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `relative text-md  px-2 py-1  transition duration-300
                 ${
                   isActive
                     ? "after:scale-x-100 text-purple-700 font-medium"
                     : "after:scale-x-0"
                 } 
                 after:absolute after:left-0 after:bottom-0 after:h-0.5 
                 after:w-full after:bg-purple-700 after:origin-left after:transition-transform after:duration-300`
            }
          >
            Contact
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={"/brands"}
            className={({ isActive }) =>
              `relative text-md  px-2 py-1  transition duration-300
                 ${
                   isActive
                     ? "after:scale-x-100 text-purple-700 font-medium"
                     : "after:scale-x-0"
                 } 
                 after:absolute after:left-0 after:bottom-0 after:h-0.5 
                 after:w-full after:bg-purple-700 after:origin-left after:transition-transform after:duration-300`
            }
          >
            Brands
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="flex grow-0 gap-2" justify="end">
        <NavbarItem>
          <DarkModeBtn />
        </NavbarItem>
        {!userToken && (
          <>
            <NavbarItem className="lg:flex">
              <Button
                as={Link}
                to={"/login"}
                variant="flat"
                className="bg-transparent border border-black text-lg transition hover:duration-400 hover:bg-black hover:text-white "
              >
                Login
              </Button>
            </NavbarItem>
          </>
        )}

        {userToken && (
          <>
            <div className="md:flex items-center gap-2 hidden">
              <Badge
                className={`${!wishlist?.length ? "hidden" : ""}`}
                color="danger"
                content={wishlist?.length}
              >
                <button
                  onClick={() => navigate("/wishlist")}
                  className="bg-transparent"
                >
                  <IoIosHeartEmpty
                    className="cursor-pointer "
                    size={28}
                    color="#7E22CE"
                  />
                </button>
              </Badge>

              <Badge
                className={`${!cart?.products?.length ? "hidden" : ""}`}
                color="danger"
                content={cart?.products?.length}
              >
                <button
                  onClick={() => navigate("/cart")}
                  className="bg-transparent"
                >
                  <IoCartOutline
                    className="cursor-pointer"
                    size={28}
                    color="#7E22CE"
                  />
                </button>
              </Badge>
            </div>
            <Dropdown  placement="bottom-end" >
              <DropdownTrigger>
                <Button className="hidden sm:flex items-center gap-2 cursor-pointer bg-transparent">
                  <BiUser color="#7E22CE" size={30} /> {userData?.name}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{userData?.email}</p>
                </DropdownItem>
                <DropdownItem key="orders">
                  <Link to={"/allorders"}>Orders</Link>
                </DropdownItem>
                <DropdownItem
                  onPress={() => navigate("/accountSettings")}
                  key="settings"
                >
                  Settings
                </DropdownItem>
                <DropdownItem
                  onPress={handleLogout}
                  key="logout"
                  color="danger"
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
        )}

        <NavbarItem className="md:hidden">
          {/* <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          /> */}
          <button
            onClick={() => setIsMenuOpen((menu) => !menu)}
            className="flex justify-center items-center"
          >
            {isMenuOpen ? <IoClose size={30} /> : <HiBars3 size={30} />}
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link onClick={() => setIsMenuOpen(false)} to={"/"}>
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <button className="p-0 focus:outline-none focus:ring-0 text-lg bg-transparent data-[hover=true]:bg-transparent flex items-center gap-2">
                  Categories <FaChevronDown />
                </button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[200px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              {categories.map((category) => (
                <DropdownItem
                  key={category._id}
                  onPress={() => {
                    navigate(`/category/${category._id}`);
                    setIsMenuOpen(false);
                  }}
                >
                  {category.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>

        {userToken && (
          <NavbarMenuItem>
            <Link onClick={() => setIsMenuOpen(false)} to={"/cart"}>
              Cart
            </Link>
          </NavbarMenuItem>
        )}

        {userToken && (
          <NavbarMenuItem>
            <Link onClick={() => setIsMenuOpen(false)} to={"/wishlist"}>
              Wishlist
            </Link>
          </NavbarMenuItem>
        )}

        {userToken && (
          <NavbarMenuItem>
            <Link onClick={() => setIsMenuOpen(false)} to={"/allorders"}>
              Orders
            </Link>
          </NavbarMenuItem>
        )}

        {userToken && (
          <NavbarMenuItem>
            <Link onClick={() => setIsMenuOpen(false)} to={"/accountSettings"}>
              Account Settings
            </Link>
          </NavbarMenuItem>
        )}

        <NavbarMenuItem>
          <Link onClick={() => setIsMenuOpen(false)} to={"/contact"}>
            Contact
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link onClick={() => setIsMenuOpen(false)} to={"/brands"}>
            Brands
          </Link>
        </NavbarMenuItem>

        {userToken && (
          <NavbarMenuItem>
            <Link onClick={() => handleLogout()}>
              Logout
            </Link>
          </NavbarMenuItem>
        )}
      </NavbarMenu>
    </Navbar>
  );
}

export default AppNavbar;
