import { BrowserRouter, Route, Routes } from "react-router"
import { AuthLayout } from "./auth/layout/auth-layout"
import { Navigate } from "react-router"
import { LoginPage } from "./auth/pages/login-page"
import { RegisterPage } from "./auth/pages/register-page"
import { lazy, Suspense } from "react"
import { sleep } from "./lib/sleep"

const ChatLayout = lazy(async () => {
    await sleep(5000)
    return import("./chat/layout/chat-layout")
})

const ChatPage = lazy(() => import("./chat/pages/chat-page"))

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthLayout />}>
                    <Route index element={<LoginPage />} />
                    <Route path="/auth/register" element={<RegisterPage />} />
                </Route>

                <Route path="/chat" element={
                    <Suspense fallback={
                        <div className="flex justify-center items-center h-screen">
                            <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                        </div>
                    }>
                        <ChatLayout />
                    </Suspense>
                }>
                    <Route index element={<ChatPage />} />
                </Route>

                <Route path="/" element={<Navigate to={"/auth"} />} />
                <Route path="*" element={<Navigate to={"/auth"} />} />
            </Routes>
        </BrowserRouter>
    )

}