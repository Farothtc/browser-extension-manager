import Image from "next/image";
import { NavProps } from "../types";

export default function Nav({ isDark, handleThemeToggle }: NavProps) {
  return (
    <>
      <div className="navbar shadow-sm rounded-2xl flex justify-between bg-[#1f2535] dark:bg-[#fcfdff]">
        {isDark ? (
          <Image
            src="/images/logo-dark.svg"
            alt="Logo"
            width={200}
            height={100}
          ></Image>
        ) : (
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={200}
            height={100}
          ></Image>
        )}

        <button
          className="btn btn-ghost rounded-xl w-[50px] h-[50px] p-0 bg-[#2f354d] dark:bg-[#eeeeed] hover:border-red-500 dark:hover:border-red-500"
          onClick={handleThemeToggle}
        >
          {isDark ? (
            <Image
              src="/images/icon-moon.svg"
              alt="Moon"
              width={25}
              height={25}
            ></Image>
          ) : (
            <Image
              src="/images/icon-sun.svg"
              alt="Sun"
              width={25}
              height={25}
            ></Image>
          )}
        </button>
      </div>
    </>
  );
}
