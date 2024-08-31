import { userService } from "@/services/UserService";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";
import { PiSignOutBold } from "react-icons/pi";

interface NavBarProps {
  logo: StaticImageData;
  profilePicture: StaticImageData;
  setActiveTab: (type: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({
  logo,
  profilePicture,
  setActiveTab,
}) => {
  const router = useRouter();

  const handleUserSignOut = () => {
    userService.singOutUser();
    router.push("/");
    toast.success("You have successfully logged out");
  };
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-gray-800 border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <a
              className="flex ms-2 md:me-24  cursor-pointer"
              onClick={() => setActiveTab("my-tasks")}
            >
              <Image
                src={logo}
                width={24}
                height={24}
                className="me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                E-Todo
              </span>
            </a>
          </div>
          <div className="flex items-center me-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600"
              >
                <Image
                  src={profilePicture}
                  width={35}
                  height={35}
                  className="rounded-full"
                  alt="FlowBite Logo"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow mt-2"
              >
                <li>
                  <a>
                    <CgProfile className="text-xl" />
                    My Profile
                  </a>
                </li>
                <li onClick={handleUserSignOut}>
                  <a>
                    <PiSignOutBold className="text-xl" />
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
            {/* <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600"
            >
              <Image
                src={profilePicture}
                width={35}
                height={35}
                className="rounded-full"
                alt="FlowBite Logo"
              />
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
