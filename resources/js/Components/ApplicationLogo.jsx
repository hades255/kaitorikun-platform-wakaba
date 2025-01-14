import { usePage } from "@inertiajs/react";
export default function ApplicationLogo() {
    const { props } = usePage();
    const { assetUrl, appUrl } = props;
    return (
        <div className="font-bold text-3xl">
            <img src={assetUrl + 'assets/logo.png'} alt="logo" className="w-72"/>
        </div>
    );
}
