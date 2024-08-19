import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => (
    <section className="banner">
        <Image
            src="/assets/award.webp"
            alt="Clean energy council award"
            width={200} // Adjust based on your image size
            height={200} // Adjust based on your image size
        />
        <Link href="https://www.winaico.com.au/" passHref>
            <Image
                src="/assets/winaico-logo.webp"
                alt="winaico logo"
                width={175} // Adjust based on your image size
                height={92} // Adjust based on your image size
            />
        </Link>
        <Link href="https://www.sma-australia.com.au/" passHref>
            <Image
                src="/assets/SMA-logo.webp"
                alt="SMA logo"
                width={175} // Adjust based on your image size
                height={109} // Adjust based on your image size
            />
        </Link>
        <Link href="https://bydbatterybox.com/" passHref>
            <Image
                src="/assets/BYD-logo.webp"
                alt="BYD logo"
                width={175} // Adjust based on your image size
                height={105} // Adjust based on your image size
            />
        </Link>
        <Image
            id="smaPowerUp"
            src="/assets/SMA-powerup-logo.webp"
            alt="SMA Power Up logo"
            width={200} // Adjust based on your image size
            height={134} // Adjust based on your image size
        />
    </section>
);

export default Banner;
