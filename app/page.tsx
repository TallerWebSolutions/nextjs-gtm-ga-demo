import Template from "@/components/Template";
import { GAPageView } from "@/lib/gtm";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/basket");
  const data = await response.json();

  return (
    <>
      <GAPageView data={{ sport_name: data.name }} />
      <Template
        title={"Basket"}
        nextPage={{ href: "/futebol", label: "Futebol" }}
      />
    </>
  );
}
