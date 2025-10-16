import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const products = [
  {
    id: 1,
    name: "UI Kit Bundle",
    description: "Complete design system with 200+ components",
    price: "$49",
    rating: 4.9,
    image: "product-1",
  },
  {
    id: 2,
    name: "3D Icon Pack",
    description: "500+ premium 3D icons for modern interfaces",
    price: "$29",
    rating: 5.0,
    image: "product-2",
  },
  {
    id: 3,
    name: "Design Templates",
    description: "Landing pages & dashboard templates",
    price: "$79",
    rating: 4.8,
    image: "product-3",
  },
  {
    id: 4,
    name: "Font Collection",
    description: "Curated typography bundle for designers",
    price: "$39",
    rating: 4.7,
    image: "product-4",
  },
];

export const ShopSection = () => {
  return (
    <section id="shop" className="section-padding bg-gradient-to-br from-accent/5 to-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <ShoppingBag className="w-8 h-8 text-accent" />
            <h2 className="text-5xl font-bold gradient-text">Shop</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium design resources and digital products to elevate your creative projects
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card hover:glow-accent transition-smooth group h-full flex flex-col">
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="text-6xl font-bold text-accent/30"
                  >
                    {product.name.charAt(0)}
                  </motion.div>
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-accent transition-smooth">
                    {product.name}
                  </CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-semibold">{product.rating}</span>
                  </div>
                  <p className="text-2xl font-bold text-accent">{product.price}</p>
                </CardContent>

                <CardFooter>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
