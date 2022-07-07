import { Routes, Route } from "react-router-dom"
import Home from "../../pages/Home"
import SignIn from "../../pages/Auth/signIn"
import SignUp from "../../pages/Auth/signUp"

const Main = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
        </Routes>
    )
}

export default Main