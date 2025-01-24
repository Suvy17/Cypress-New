import { registerPage } from "../pages/registerPage"
const registerObj = new registerPage();
import registerData from "../fixtures/registerData"

describe ('Test Automation',()=>{
    

    it('Register Flow',()=>{
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.phoneNo)
        registerObj.enterPassword(registerData.password)
        registerObj.selectRadioBtn()
        registerObj.selectCheckbox()
        registerObj.clickBtn()






    })

})