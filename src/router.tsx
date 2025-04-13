import { BrowserRouter, Route, Routes } from "react-router"
import { AuthLayout } from "./auth/layout/auth-layout"
import { Navigate } from "react-router"
import { LoginPage } from "./auth/pages/login-page"
import { RegisterPage } from "./auth/pages/register-page"
import { lazy, Suspense } from "react"
import { sleep } from "./lib/sleep"
import { PrivateRoute } from "./auth/components/private-routes"
import { useQuery } from "@tanstack/react-query"
import { checkAuth } from "./fake/fake-data"

const ChatLayout = lazy(async () => {
    await sleep(5000)
    return import("./chat/layout/chat-layout")
})

const ChatPage = lazy(() => import("./chat/pages/chat-page"))
const NoChatSelectedPage = lazy(() => import('./chat/pages/no-chat-selected-page'));

export const AppRouter = () => {

    const { data: user, isLoading, isError } = useQuery({
        queryKey: ["user"],
        queryFn: () => {
            const token = localStorage.getItem("token")
            if (!token) {
                throw new Error("No token found")
            }

            return checkAuth(token)
        },
        retry: 0
    })

    if (isLoading) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-background">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
        );
    }

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
                        <PrivateRoute isAuthenticated={!!user}>
                            <ChatLayout />
                        </PrivateRoute>
                    </Suspense>
                }>
                    <Route index element={<NoChatSelectedPage />} />

                    <Route path="/chat/:clientId" element={<ChatPage />} />
                </Route>

                <Route path="/" element={<Navigate to={"/auth"} />} />
                <Route path="*" element={<Navigate to={"/auth"} />} />
            </Routes>
        </BrowserRouter>
    )

}