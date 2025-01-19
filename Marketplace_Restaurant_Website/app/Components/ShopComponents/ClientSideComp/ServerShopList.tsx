import { fetchProduct } from "@/sanity/utils";
import ClientShopList from "./ClientShopList";

export default async function ServerShopList() {
    const productData = await fetchProduct();

    return <ClientShopList productData={productData} />;
}