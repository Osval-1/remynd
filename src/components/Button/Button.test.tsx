import { render, fireEvent,screen} from '@testing-library/react-native';
import Button from './Button';


describe("<Button/>",()=>{
    test("Button component renders",()=>{
       const {getByText} = render(<Button/>)
       getByText("Done") 
    })
})