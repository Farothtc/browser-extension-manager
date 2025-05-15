import Image from "next/image";
import { Extension } from "../types";
type ExtensionsProps = {
  e: Extension;
  onToggle: () => void;
  handleRemove: () => void;
};
export default function Extensions({
  e,
  onToggle,
  handleRemove,
}: ExtensionsProps) {
  return (
    <>
      <div className="grid col-span-1 row-span-1 bg-[#1f2535] border border-gray-500 rounded-3xl dark:bg-[#fcfdff] dark:border-0 dark:shadow-sm">
        <div className="grid grid-cols-1 grid-rows-1">
          <div className="grid col-span-1 row-span-1">
            <div className="card card-md">
              <div className="card-body">
                <div className="flex flex-row gap-3">
                  <Image
                    src={e.logo}
                    alt={e.name}
                    width={60}
                    height={60}
                    className="pb-8"
                  ></Image>
                  <div className="flex flex-col">
                    <h2 className="card-title font-bold text-xl dark:text-black">
                      {e.name}
                    </h2>
                    <p className="text-lg font-medium text-gray-500">
                      {e.description}
                    </p>
                  </div>
                </div>
                <div className="justify-between card-actions items-center pt-10">
                  <button
                    className="btn active:bg-red-500 active:text-black active:border-black bg-[#1f2535] text-white border-gray-500 rounded-3xl dark:bg-[#feffff] dark:text-black dark:hover:border-red-500"
                    onClick={handleRemove}
                  >
                    Remove
                  </button>
                  <input
                    type="checkbox"
                    checked={e.isActive}
                    onChange={onToggle}
                    className="toggle text-white border-gray-500 checked:border-red-900 checked:bg-red-600 checked:text-white dark:bg-[#c6c6c8] dark:hover:border-red-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
