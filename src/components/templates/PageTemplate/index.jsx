import { Header } from "../../Header";


export function PageTemplate({children}) {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  );
}
