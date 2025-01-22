import { fetchProduct } from "@/sanity/utils";
import ClientShopList from "../Components/ShopComponents/ClientSideComp/ClientShopList";
import StateContext from "../context/StateContext";

export default async function ShopList() {
    const productData = await fetchProduct();

    return (
        <StateContext>
            <ClientShopList productData={productData} />
        </StateContext>
    );
}
