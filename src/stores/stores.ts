import { create } from "zustand";

interface ReminderState {
  Reminders: any[];
  theme: string;
  updateReminders: (reminder: string) => void;
}
const useReminderStore = create<ReminderState>()((set) => ({
  Reminders: ["sdasd", "asdasd", "dasd"],
  theme: "light",
  updateReminders: (reminder) =>
    set((state: any) => ({ Reminders: state.Reminders.push(reminder) })),
}));
