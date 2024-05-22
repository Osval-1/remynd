import { create } from "zustand";

interface ReminderState {
  Reminders: any[];
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  updateReminders: (reminder: string) => void;
}
const useReminderStore = create<ReminderState>()((set) => ({
  Reminders: ["sdasd", "asdasd", "dasd"],
  theme: "dark",
  setTheme: (newTheme) => set((state: any) => ({ theme: newTheme })),
  updateReminders: (reminder) =>
    set((state: any) => ({ Reminders: state.Reminders.push(reminder) })),
}));
