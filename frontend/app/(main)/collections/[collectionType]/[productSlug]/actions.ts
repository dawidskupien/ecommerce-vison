// "use server";


// export async function addToCart(formData: FormData, userId?: string) {
//   const productData = {
//     id: `${formData.get("id")}${formData.get("variantId")}`,
//     title: formData.get("title") as string,
//     price: {
//       value: parseFloat(formData.get("price") as string),
//       currency: formData.get("currency") as string,
//     },
//     image: {
//       url: formData.get("imageUrl") as string,
//       alt: formData.get("imageAlt") as string,
//     },
//     quantity: parseInt(formData.get("quantity") as string, 10),
//     variant: {
//       color: formData.get("color") as string,
//       material: formData.get("material") as string,
//     },
//   };

//   if (userId) {
//     try {
//       console.log("Add to cart in the database", productData);
//     } catch (error) {
//       throw new Error("Failed to add to cart in the database");
//     }
//   } else {
//     console.log("Add to local cart for guest", productData);

//   }
// }
