import { create } from "zustand";

const useStore = create((set) => ({
  Reminders: ["sdasd","asdasd","dasd"],
  updateReminders: () =>
    set((state: any) => ({ Reminders: state.Reminders + 1 })),
}));
