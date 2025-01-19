// app/ShopList.tsx (Server Component)
import { fetchProduct } from "@/sanity/utils";
import ClientShopList from "../Components/ShopComponents/ClientSideComp/ClientShopList";

export default async function ShopList({ searchParams }: { searchParams: { query?: string; page?: string } }) {
    const productData = await fetchProduct(); // Fetch data on the server

    return <ClientShopList productData={productData} />;
}
