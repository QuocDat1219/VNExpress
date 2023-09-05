import { SidebarContext } from "../context/SidebarContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

//internal import
import Layout from "../layout/Layout";
// import Banner from "@component/banner/Banner";
// import CardTwo from "@component/cta-card/CardTwo";
// import OfferCard from "@component/offer/OfferCard";
// import StickyCart from "@component/cart/StickyCart";
// import ProductServices from "@services/ProductServices";
// import ProductCard from "@component/product/ProductCard";
// import MainCarousel from "@component/carousel/MainCarousel";
// import FeatureCategory from "@component/category/FeatureCategory";
import Loading from "../component/preloader/Loading";
// import AttributeServices from "@services/AttributeServices";
// import BrandCard from "@component/brand/BrandCard";
// import FeatureCard from "@component/feature-card/FeatureCard";
import useAsync from "../hooks/useAsync";
import SettingServices from "../services/SettingServices";

const Home = ({ popularProducts, discountProducts, attributes }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { data: customPage } = useAsync(SettingServices.getCustomPage);

  const { isLoading, setIsLoading } = useContext(SidebarContext);

  useEffect(() => {
    if (router.asPath === "/") {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [router]);

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Layout title="Trang chủ" description="Đây là trang chủ">
          <div className="min-h-screen">
            <div className="bg-white">ok</div>
          </div>
        </Layout>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { cookies } = context.req;
  const { query, _id } = context.query;

  // const products = await ProductServices.getShowingProducts();
  // const [data, attributes] = await Promise.all([
  //   ProductServices.getShowingStoreProducts({
  //     category: _id ? _id : "",
  //     title: query ? query : "",
  //   }),

  //   AttributeServices.getShowingAttributes(),
  // ]);

  // const popularProducts = data?.products.filter((p) => p.prices.discount < 1);

  // const discountProducts = products.filter((p) => p.prices.discount >= 1);

  return {
    props: {
      // popularProducts: popularProducts.slice(0, 50),
      // discountProducts: discountProducts,
      cookies: cookies,
      // attributes,
    },
  };
};

export default Home;
