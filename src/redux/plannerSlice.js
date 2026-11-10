
import { createSlice } from "@reduxjs/toolkit";
import { rooms, addons, meals } from "../data/products.js";

const initialState = {
  rooms: rooms.map((room) => ({
    ...room,
    quantity: 0,
  })),

  addons: addons.map((addon) => ({
    ...addon,
    quantity: 0,
  })),

  meals: meals.map((meal) => ({
    ...meal,
    selected: false,
  })),

  mealPeople: 0,
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,

  reducers: {
    updateRoomQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const room = state.rooms.find((item) => item.id === id);

      if (room) {
        room.quantity = Math.max(0, room.quantity + quantity);
      }
    },

    updateAddonQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const addon = state.addons.find((item) => item.id === id);

      if (addon) {
        addon.quantity = Math.max(0, addon.quantity + quantity);
      }
    },

    toggleMeal: (state, action) => {
      const meal = state.meals.find(
        (item) => item.id === action.payload
      );

      if (meal) {
        meal.selected = !meal.selected;
      }
    },

    setMealPeople: (state, action) => {
      state.mealPeople = Math.max(
        0,
        Number(action.payload) || 0
      );
    },
  },
});

export const {
  updateRoomQuantity,
  updateAddonQuantity,
  toggleMeal,
  setMealPeople,
} = plannerSlice.actions;

export default plannerSlice.reducer;
