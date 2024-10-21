import foto from "../foto.jpg";

export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
            <h1 className="text-gray-300 font-bold">CV ONLINE</h1>
            <h2 className="text-3x1">Muhammad Satria Nugraha</h2>
            <Profile />
            <p>
            Hallo gezz Saya adalah seorang mahasiswa semester 5 yang berkeinginan menjadi seorang programer dan saya juga ingin masuk surga hobi saya bermain futsal
            </p>
        </div>
    );
}

function Profile() {
    return <img src={foto.src} alt="Muhammad Satria Nugraha Profile" className="fotoku" />;
}