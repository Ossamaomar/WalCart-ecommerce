import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./contexts/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import WishList from "./pages/WishList";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Account from "./pages/Account";
import ForgotPassword from "./pages/ForgotPassword";
import OTPPage from "./pages/OTPPage";
import ResetPassword from "./pages/ResetPassword";
import Cart from "./pages/Cart";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import { useDarkModeContext } from "./contexts/DarkModeContext";
import Brands from "./pages/Brands";
import NotFoundPage from "./ui/NotFoundPage";


const queryClient = new QueryClient();

function App() {
  const {isDarkMode} = useDarkModeContext();
  return (
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="category/:categoryID" element={<Category />} />
                <Route path="productDetails/:productID" element={<Product />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="contact" element={<Contact />} />
                <Route path="brands" element={<Brands />} />
                <Route path="forgotPassword" element={<ForgotPassword />} />
                <Route path="verifyCode" element={<OTPPage />} />
                <Route path="resetPassword" element={<ResetPassword />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route
                  path="cart"
                  element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="wishlist"
                  element={
                    <ProtectedRoute>
                      <WishList />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="checkout"
                  element={
                    <ProtectedRoute>
                      <Checkout />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="allorders"
                  element={
                    <ProtectedRoute>
                      <Orders />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="accountSettings"
                  element={
                    <ProtectedRoute>
                      <Account />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: `${isDarkMode ? '#123' : '#fff'}`,
                color: "var(--color-grey-700)",
              },
            }}
          />
        </QueryClientProvider>
      </UserProvider>
  );
}

export default App;
