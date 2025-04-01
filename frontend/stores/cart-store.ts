import { IProduct } from '@/types/Product';
import { createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';

export type CartState = {
  isOpen: boolean;
  total: number;
  quantity: number; 
  items: IProduct[];
};

export type CartActions = {
  toggleCart: () => void;
  addToCart: (item: IProduct) => void;
  removeFromCart: (item: IProduct) => void;
  changeQuantity: (item: IProduct, quantity: number) => void;
};

export type CartStore = CartState & CartActions;

export const defaultInitState: CartState = {
  isOpen: false,
  total: 0,
  quantity: 0,
  items: [],
};

export const createCartStore = (
  initState: CartState = defaultInitState
) => {
  return createStore<CartStore>()(
    persist(
      (set, get) => ({
        ...initState,

        toggleCart: () =>
          set((state) => ({ isOpen: !state.isOpen })),

        addToCart: (item) => {
          const { items } = get();

          if (item?.quantity <=0) return; // Ignore invalid items

          const itemIndex = items.findIndex(
            (existingItem) => existingItem.id === item.id
          );

          let updatedItems;
          if (itemIndex >= 0) {
            // Update quantity for existing item
            updatedItems = items.map((existingItem, index) =>
              index === itemIndex
                ? {
                    ...existingItem,
                    quantity: existingItem.quantity + item.quantity,
                  }
                : existingItem
            );
          } else {
            // Add new item to the cart
            updatedItems = [...items, item];
          }

          set({
            items: updatedItems,
            quantity: updatedItems.reduce(
              (total, item) => total + item.quantity,
              0
            ),
            total: updatedItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            ),
          });
        },

        removeFromCart: (item) => {
          const { items } = get();

          const updatedItems = items.filter(
            (existingItem) => existingItem.id !== item.id
          );

          set({
            items: updatedItems,
            quantity: updatedItems.reduce(
              (total, item) => total + item.quantity,
              0
            ),
            total: updatedItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            ),
          });
        },

        changeQuantity: (item, quantity) => {
          const { items } = get();

          if (quantity <= 0) {
            // Remove item if quantity is 0 or less
            set((state) => ({
              items: state.items.filter(
                (existingItem) => existingItem.id !== item.id
              ),
              quantity: state.items
                .filter((existingItem) => existingItem.id !== item.id)
                .reduce((total, item) => total + item.quantity, 0),
            }));
            return;
          }

          const itemIndex = items.findIndex(
            (existingItem) => existingItem.id === item.id
          );

          if (itemIndex >= 0) {
            // Update quantity
            const updatedItems = items.map((existingItem, index) =>
              index === itemIndex
                ? { ...existingItem, quantity }
                : existingItem
            );

            set({
              items: updatedItems,
              quantity: updatedItems.reduce(
                (total, item) => total + item.quantity,
                0
              ),
              total: updatedItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              ),
            });
          }
          console.log("cipa")
        },
      }),
      { name: 'cart-store' }
    )
  );
};
