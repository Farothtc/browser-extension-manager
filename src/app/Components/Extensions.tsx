import { Extension } from "../types";
type ExtensionsProps = {
  e: Extension;
};
export default function Extensions({ e }: ExtensionsProps) {
  return (
    <>
      <h1>{e.name}</h1>
    </>
  );
}
