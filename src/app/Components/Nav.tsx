import Image from "next/image";
export default function Nav() {
  const style = {
    backgroundColor: "#1f2535",
  };
  return (
    <>
      <div
        className="navbar shadow-sm rounded-2xl flex justify-between"
        style={style}
      >
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={200}
          height={100}
          className="rounded-3xl text-white"
        ></Image>
        <button
          className="btn btn-ghost rounded-xl w-[50px] h-[50px] p-0"
          style={{ backgroundColor: "#2f354d" }}
        >
          <Image
            src="/images/icon-sun.svg"
            alt="Sun"
            width={25}
            height={25}
          ></Image>
        </button>
      </div>
    </>
  );
}
