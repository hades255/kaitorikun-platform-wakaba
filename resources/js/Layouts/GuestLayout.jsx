import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            {
                route().current() == 'register' ?
                    (
                        <div>
                            <div className="header text-center text-xl font-bold">
                                <h1>新規会員登録</h1>
                                <p>（認証メール送信）</p>
                            </div>
                        </div>)
                    : (
                        <div>
                            <div>
                                <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                            </div>
                        </div>
                    )
            }




            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
