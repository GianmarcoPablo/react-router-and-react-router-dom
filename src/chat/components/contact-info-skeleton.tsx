import { Button } from "@/components/ui/button"

export const ContactInfoSkeleton = () => {
    return (
        <div className="p-4 animate-pulse">
            <div className="flex flex-col items-center pb-6 border-b">
                <div className="h-20 w-20 rounded-full bg-muted mb-3"></div>
                <div className="h-4 w-32 bg-muted rounded mb-2"></div>
                <div className="h-3 w-24 bg-muted rounded mb-2"></div>
                <div className="flex items-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-muted mr-1"></div>
                    <div className="h-3 w-16 bg-muted rounded"></div>
                </div>
            </div>

            <div className="py-4 space-y-4">
                <div>
                    <div className="h-4 w-40 bg-muted rounded mb-3"></div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <div className="h-3 w-16 bg-muted rounded"></div>
                            <div className="h-3 w-24 bg-muted rounded"></div>
                        </div>
                        <div className="flex justify-between text-sm">
                            <div className="h-3 w-16 bg-muted rounded"></div>
                            <div className="h-3 w-24 bg-muted rounded"></div>
                        </div>
                        <div className="flex justify-between text-sm">
                            <div className="h-3 w-24 bg-muted rounded"></div>
                            <div className="h-3 w-20 bg-muted rounded"></div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="h-4 w-40 bg-muted rounded mb-3"></div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <div className="h-3 w-16 bg-muted rounded"></div>
                            <div className="h-3 w-24 bg-muted rounded"></div>
                        </div>
                        <div className="flex justify-between text-sm">
                            <div className="h-3 w-24 bg-muted rounded"></div>
                            <div className="h-3 w-20 bg-muted rounded"></div>
                        </div>
                        <div className="flex justify-between text-sm">
                            <div className="h-3 w-24 bg-muted rounded"></div>
                            <div className="h-3 w-16 bg-muted rounded"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-4 border-t">
                <Button variant="outline" size="sm" className="w-full h-8 bg-muted"></Button>
            </div>
        </div>
    )
}
