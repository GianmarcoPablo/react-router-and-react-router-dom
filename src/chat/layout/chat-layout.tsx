import { Link, Outlet, useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { ContactList } from '../components/contact-list';
import { ContactDetails } from '../components/contact-details';
import { LogOut, X } from 'lucide-react';
import { useQueryClient } from '@tanstack/react-query';

export default function ChatLayout() {

    const queryClient = useQueryClient();
    const navigate = useNavigate()

    const onLogout = () => {
        localStorage.removeItem('token');
        queryClient.invalidateQueries({ queryKey: ['user'] }); 
        navigate('/auth', { replace: true });
    };

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <div className="w-64 border-r bg-muted/10">
                <div className="p-4 border-b">
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary" />
                        <Link to={"/chat"}>
                            <span className="font-semibold">NexTalk</span>
                        </Link>
                    </div>
                </div>
                <ContactList />

                <div className="p-4 border-t">
                    <Button
                        onClick={onLogout}
                        variant="ghost"
                        size="sm"
                        className="w-full cursor-pointer"
                    >
                        <LogOut className="h-4 w-4" />
                        Logout
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex">
                <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <header className="h-14 border-b px-4 flex items-center justify-between">
                        <div></div> {/* Empty div to maintain spacing */}
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                                Save conversation
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </header>
                    <Outlet />
                </div>

                {/* Right Panel - Contact Details */}
                <div className="w-80 border-l">
                    <div className="h-14 border-b px-4 flex items-center">
                        <h2 className="font-medium">Contact details</h2>
                    </div>
                    <ContactDetails />
                </div>
            </div>
        </div>
    );
}