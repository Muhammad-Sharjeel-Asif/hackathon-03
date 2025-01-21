import { fetchProduct } from "@/sanity/utils";
import ClientShopList from "../Components/ShopComponents/ClientSideComp/ClientShopList";

export default async function ShopList() {
    const productData = await fetchProduct();

    return <ClientShopList productData={productData} />;
}
