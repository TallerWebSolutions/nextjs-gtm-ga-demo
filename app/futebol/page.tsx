import Template from "@/components/Template";
import { GAPageView } from "@/lib/gtm";

export default async function BasketPage() {
  const response = await fetch("http://localhost:3000/api/futebol");
  const data = await response.json();
  return (
    <>
      <GAPageView data={{ sport_name: data.name }} />
      <Template title={"Futebol"} nextPage={{ href: "/", label: "Basket" }} />
    </>
  );
}
