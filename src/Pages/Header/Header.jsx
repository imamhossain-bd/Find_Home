

const Header = () => {
    return (
        <div>
            <div className="carousel h-[530px] w-full ">
                <div id="item1" className="carousel-item w-full relative">
                    <div className="absolute ml-60 mt-48 space-y-3">
                        <p className="text-white text-xl font-normal">4 Beds -2 Baths - 1200 Sq Ft</p>
                        <h2 className="text-4xl text-white font-medium">Amazing apartment for family</h2>
                        <p className="text-lg font-normal text-white">Sprawling country estate with acres of <br /> land and picturesque views.</p>
                        <p className="text-xl font-medium text-white">$2,000,000</p>
                    </div>
                    <img src="https://i.ibb.co/n0CY0h8/inner-living-room-3.jpg" className="w-full rounded-xl" />
                </div>
                <div id="item2" className="carousel-item w-full relative">
                    <div className="absolute ml-60 mt-48 space-y-3">
                        <p className="text-white text-xl font-normal">5 Beds -3 Baths - 1200 Sq Ft</p>
                        <h2 className="text-4xl text-white font-medium">Modern apartment</h2>
                        <p className="text-lg font-normal text-white">Sprawling country estate with acres of <br /> land and picturesque views.</p>
                        <p className="text-xl font-medium text-white">$2,000,000</p>
                    </div>
                    <img src="https://i.ibb.co/ggPDPDs/inner-living-room-2.jpg" className="w-full rounded-xl" />
                </div>
                <div id="item3" className="carousel-item w-full relative">
                    <div className="absolute ml-60 mt-48 space-y-3">
                        <p className="text-white text-xl font-normal">2 Beds -2 Baths - 1200 Sq Ft</p>
                        <h2 className="text-4xl text-white font-medium">Relaxing apartment bay view</h2>
                        <p className="text-lg font-normal text-white">Sprawling country estate with acres of <br /> land and picturesque views.</p>
                        <p className="text-xl font-medium text-white">$2,000,000</p>
                    </div>
                    <img src="https://i.ibb.co/8N2SV4F/inner-pool-1.jpg" className="w-full rounded-xl" />
                </div>
                <div id="item4" className="carousel-item w-full relative ">
                    <div className="absolute ml-60 mt-48 space-y-3">
                        <p className="text-white text-xl font-normal">3 Beds -2 Baths - 1200 Sq Ft</p>
                        <h2 className="text-4xl text-white font-medium">Penthouse apartment</h2>
                        <p className="text-lg font-normal text-white">Sprawling country estate with acres of <br /> land and picturesque views.</p>
                        <p className="text-xl font-medium text-white">$2,000,000</p>
                    </div>
                    <img src="https://i.ibb.co/L6nQGmL/d-1.jpg" className="w-full rounded-xl" />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Header;