import React, { useState, useEffect } from "react";
import telegramIcon from "../../assets/images/telegram.png";

const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  // Show "Need help?" button after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContact(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="footer mt-16 px-3 ">
      {/* Footer Contact - Fixed Button */}
      <div
        className={`footer-contact flex items-center gap-2 fixed bottom-4 right-4 sm:bottom-8 sm:right-10 text-blue-400 p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out ${
          showContact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <img
          src={telegramIcon}
          alt="Telegram"
          className="h-4 w-4 sm:h-5 sm:w-5"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/seangkongheng168"
          className="text-blue-400 hover:text-blue-500 font-semibold"
        >
          Need help?
        </a>
      </div>

      {/* Footer Content */}
      <div className="footer-conten">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 py-12 lg:grid-cols-3 border-t border-b border-gray-800 text-white">
          {/* Column 1 - Logo & Description */}
          <div className="footer-column flex flex-col items-start">
            <div className="flex items-center mb-4 gap-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 750 684"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-foreground drop-shadow-lg"
              >
                <path
                  d="M 560.00,402.00 L 478.00,438.00 L 460.00,451.00 L 448.00,468.00 L 445.00,487.00 L 447.00,683.00 L 483.00,654.00 L 489.00,644.00 L 581.00,569.00 L 576.00,543.00 L 579.00,537.00 L 577.00,532.00 L 493.00,589.00 L 489.00,585.00 L 489.00,568.00 L 486.00,564.00 L 499.00,543.00 L 570.00,497.00 L 569.00,486.00 L 564.00,477.00 L 509.00,509.00 L 505.00,507.00 L 492.00,514.00 L 485.00,507.00 L 486.00,489.00 L 498.00,473.00 L 569.00,435.00 Z M 170.00,264.00 L 162.00,287.00 L 163.00,314.00 L 179.00,355.00 L 188.00,370.00 L 208.00,388.00 L 228.00,397.00 L 258.00,402.00 L 291.00,402.00 L 293.00,400.00 L 289.00,391.00 L 277.00,377.00 L 233.00,356.00 L 217.00,343.00 L 207.00,324.00 L 203.00,297.00 Z M 579.00,263.00 L 544.00,299.00 L 542.00,322.00 L 530.00,344.00 L 511.00,358.00 L 478.00,373.00 L 466.00,385.00 L 460.00,400.00 L 462.00,402.00 L 491.00,402.00 L 523.00,396.00 L 548.00,383.00 L 559.00,373.00 L 570.00,357.00 L 586.00,316.00 L 587.00,284.00 Z M 378.00,255.00 Z M 373.00,255.00 Z M 696.00,238.00 L 663.00,270.00 L 678.00,325.00 L 676.00,334.00 L 681.00,357.00 L 664.00,360.00 L 657.00,366.00 L 629.00,377.00 L 614.00,390.00 L 604.00,409.00 L 603.00,466.00 L 609.00,550.00 L 651.00,518.00 L 653.00,486.00 L 658.00,479.00 L 666.00,474.00 L 686.00,469.00 L 707.00,483.00 L 749.00,440.00 Z M 691.00,401.00 L 698.00,412.00 L 695.00,425.00 L 670.00,442.00 L 652.00,448.00 L 646.00,441.00 L 645.00,432.00 L 649.00,410.00 L 667.00,398.00 Z M 50.00,237.00 L 0.00,450.00 L 2.00,458.00 L 213.00,605.00 L 216.00,611.00 L 301.00,671.00 L 305.00,670.00 L 308.00,666.00 L 306.00,630.00 L 294.00,608.00 L 115.00,466.00 L 78.00,428.00 L 77.00,420.00 L 64.00,402.00 L 66.00,397.00 L 71.00,396.00 L 168.00,436.00 L 238.00,473.00 L 286.00,507.00 L 289.00,505.00 L 287.00,487.00 L 280.00,465.00 L 251.00,437.00 L 223.00,422.00 L 167.00,402.00 L 65.00,372.00 L 62.00,367.00 L 84.00,271.00 Z M 39.00,1.00 L 32.00,16.00 L 26.00,52.00 L 28.00,114.00 L 44.00,168.00 L 75.00,217.00 L 117.00,255.00 L 132.00,250.00 L 118.00,238.00 L 96.00,204.00 L 79.00,171.00 L 65.00,132.00 L 59.00,103.00 L 57.00,65.00 L 65.00,47.00 L 74.00,43.00 L 105.00,65.00 L 108.00,72.00 L 263.00,227.00 L 259.00,231.00 L 186.00,232.00 L 184.00,235.00 L 222.00,266.00 L 227.00,265.00 L 277.00,308.00 L 302.00,334.00 L 314.00,354.00 L 326.00,391.00 L 338.00,459.00 L 322.00,568.00 L 381.00,641.00 L 429.00,548.00 L 415.00,477.00 L 414.00,457.00 L 427.00,387.00 L 438.00,355.00 L 447.00,339.00 L 472.00,311.00 L 560.00,235.00 L 568.00,235.00 L 559.00,230.00 L 491.00,232.00 L 487.00,228.00 L 530.00,183.00 L 530.00,178.00 L 627.00,81.00 L 656.00,56.00 L 664.00,55.00 L 684.00,43.00 L 689.00,46.00 L 691.00,53.00 L 691.00,88.00 L 679.00,145.00 L 658.00,193.00 L 622.00,247.00 L 633.00,252.00 L 654.00,236.00 L 677.00,211.00 L 693.00,188.00 L 705.00,164.00 L 717.00,129.00 L 723.00,89.00 L 723.00,53.00 L 712.00,3.00 L 707.00,0.00 L 657.00,25.00 L 652.00,23.00 L 578.00,67.00 L 531.00,104.00 L 470.00,163.00 L 466.00,159.00 L 465.00,147.00 L 458.00,142.00 L 303.00,141.00 L 293.00,142.00 L 285.00,148.00 L 285.00,163.00 L 279.00,167.00 L 219.00,110.00 L 170.00,72.00 L 102.00,30.00 L 53.00,5.00 Z M 431.00,148.00 L 435.00,153.00 L 435.00,165.00 L 426.00,191.00 L 392.00,256.00 L 381.00,255.00 L 386.00,259.00 L 392.00,258.00 L 394.00,262.00 L 386.00,291.00 L 375.00,303.00 L 369.00,298.00 L 359.00,263.00 L 363.00,256.00 L 370.00,255.00 L 360.00,257.00 L 334.00,207.00 L 319.00,171.00 L 318.00,153.00 L 325.00,147.00 L 338.00,145.00 L 419.00,145.00 Z"
                  fill="#FFFFFF"
                  fill-rule="evenodd"
                ></path>
                <path
                  d="M 384.00,257.00 L 386.00,258.00 Z M 321.00,150.00 L 319.00,153.00 L 319.00,167.00 L 324.00,183.00 L 361.00,257.00 L 363.00,254.00 L 392.00,255.00 L 429.00,181.00 L 434.00,165.00 L 433.00,151.00 L 419.00,146.00 L 338.00,146.00 Z"
                  fill="#FBDC01"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <h3 className="text-[hsl(72_100%_50%)] font-bold text-lg sm:text-xl mb-2">
                SuperTradingEA
              </h3>
            </div>
            <p className="text-gray-500   sm:text-base text-sm">
              Professional automation engineered for Gold volatility. Trade
              XAUUSD without choosing a direction.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-column text-gray-200">
            <h3 className=" font-bold mb-4 text-lg sm:text-xl">
              Quick Links
            </h3>
            <ul className="text-gray-500  space-y-2 text-sm sm:text-base">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Dashboard</li>
            </ul>
          </div>

          {/* Column 3 - Community */}
          <div className="footer-column text-gray-200x">
            <h3 className="font-bold mb-4 text-lg sm:text-xl">
              Community
            </h3>
            <ul className="text-gray-500  space-y-2 text-sm sm:text-base">
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.12.099.154.232.17.326.016.094.037.308.02.475z"></path>
                </svg>
                Telegram Community
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <p className="text-center py-6 sm:py-10 text-gray-400 text-sm sm:text-base">
          © 2025 SuperTradingEA. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
