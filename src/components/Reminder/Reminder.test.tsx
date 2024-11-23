import { render } from "@testing-library/react-native";
import { NewReminder } from "./Reminder";

describe("Reminder",()=>{
    test("Reminder Component renders",()=>{
        const {getByText} =  render(<NewReminder/>)
        getByText("Completed")
    })
})