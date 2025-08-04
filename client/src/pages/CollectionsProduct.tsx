import ProductCard from "../components/ProductCard";
import { fetchProducts, fetchCollections } from "../store/fetch";
import { useEffect, useState } from "react";
import type { ProductInterface, CollectionInterface } from "../store/types";
import { useParams } from "react-router-dom";

const AllProduct = () => {
  const { slug } = useParams<{ slug: string }>();
  const { id } = useParams<{ id: string }>();
  const [collection, setCollection] = useState<CollectionInterface | null>(
    null
  );
  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    const getCollections = async () => {
      const data = await fetchCollections();
      if (data) {
        const collectionData = data.find((item) => item._id === id);
        if (collectionData) {
          setCollection(collectionData);
        }
      }
    };

    const getCollectionsProducts = async () => {
      const data = await fetchProducts();
      if (data) {
        // Filter products that belong to this collection
        const collectionsProducts = data.filter((item) => item.slug === slug);
        setProducts(collectionsProducts); // ✅ array of ProductInterface
      }
    };

    getCollections();
    getCollectionsProducts();
  }, [id, slug]);

  return (
    <section className="px-4 py-10 mx-auto max-w-7xl md:px-12">
      {/* Title and Subtitle */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">🛍 {collection?.name}</h1>
        <p className="mt-2 text-sm text-gray-600 md:text-base">
          Explore our complete range of premium products
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.slice(14, 30).map((product) => (
          <ProductCard
            key={product._id}
            _id={product._id}
            slug={product.slug}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </section>
  );
};

export default AllProduct;
