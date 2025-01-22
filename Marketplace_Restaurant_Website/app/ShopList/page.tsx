import { fetchProduct } from "@/sanity/utils";
import ClientShopList from "../Components/ShopComponents/ClientSideComp/ClientShopList";
import { Suspense } from "react";

export default async function ShopList() {
    const productData = await fetchProduct();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ClientShopList productData={productData} />
        </Suspense>
    );
}
