import data from "../../data/footerWithLinks.json";
import Image from "next/image";
import Link from "next/link";

const FooterWithLinks = () => {
  return (
    <footer className="bg-[#001d37]" id="footerSection">
      <div className="mx-auto px-5 md:px-[30px] pt-24 mb-[20px] max-w-[1358px]">
        <div className="flex flex-wrap justify-center gap-[34px] mb-[87px]">
          {data.reviews.map((item) => (
            <div
              key={item.img}
              className="flex items-center justify-between max-w-[245px] w-full h-[92px] p-4 border border-[#6e7c8d] rounded-[7px]"
            >
              <div>
                <p className="text-[24px] font-bold text-[#edfaff] text-center">
                  {item.stats}
                </p>
                <p className="text-[14px] font-normal text-[#edfaff]">
                  review on
                </p>
              </div>
              <Image
                src={item.img}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-[125px]">
          {data.aboutUs.map((item) => (
            <div
              key={item.img}
              className={`flex justify-between items-center max-w-[268px] w-full h-[118px] p-4 rounded-[7px] ${item?.bgColor}`}
            >
              <Image
                src={item.img}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
              <div>
                <p className="text-[27px] font-bold text-white text-right">
                  {item.title}
                </p>
                <p className="text-[19px] font-medium text-white text-right">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between mb-8 gap-4 max-sm:border-t border-[#e9f9ff]">
        <Image
          width={149}
          height={46}
          src="https://assets.vakilsearch.com/live-images/home-page-assets/zolvit_logo_gray.svg"
          className="flex flex-row my-10 md:hidden"
        />
          {data.linksPart.map((item, index) => (
            <div key={index} className="w-[300px]">
              <p className="mb-5 md:mb-10 w-[170px] text-[24px] font-medium text-[#e0f2fe]">
                {item.name}
              </p>
              {item.items.map((link) => (
                <a href={link.href} target="blank">
                  <p
                    className="text-base md:text-xl font-normal text-[#e0f2fe] mb-5"
                    key={link.text}
                  >
                    {link.text}
                  </p>
                </a>
              ))}
            </div>
          ))}
        </div>
        <p className="mb-4 md:mb-8 pb-3 text-[24px] font-medium text-[#e0f2fe] md:border-b border-[#e9f9ff]">
          Tools
        </p>
        <div className="text-base md:text-xl mb-20 grid gap-5 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
          {data.tools.map((link) => (
            <a href={link.href} target="blank">
              <p
                className="w-full font-normal text-[#e0f2fe]"
                key={link.text}
              >
                {link.text}
              </p>
            </a>
          ))}
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between gap-10">
          <div className="flex flex-col gap-[70px]">
            <Image
              width={149}
              height={46}
              src="https://assets.vakilsearch.com/live-images/home-page-assets/zolvit_logo_gray.svg"
              className="hidden md:block"
            />
            <div className="flex flex-row items-end gap-6">
              <a href="https://www.facebook.com/vakilsearch" target="blank">
                <Image
                  width={10}
                  height={20}
                  src="https://assets.vakilsearch.com/live-images/home-page-assets/facebook.svg"
                />
              </a>
              <a
                href="https://www.instagram.com/vakilsearch_legal"
                target="blank"
              >
                <Image
                  width={20}
                  height={20}
                  src="https://assets.vakilsearch.com/live-images/home-page-assets/instagram.svg"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/vakilsearch-com"
                target="blank"
              >
                <Image
                  width={20}
                  height={20}
                  src="https://assets.vakilsearch.com/live-images/home-page-assets/linkedin.svg"
                />
              </a>
              <a href="https://twitter.com/Letsvakilsearch" target="blank">
                <Image
                  width={23}
                  height={18}
                  src="https://assets.vakilsearch.com/live-images/home-page-assets/twitter.svg"
                />
              </a>
              <a
                href="https://www.youtube.com/c/vakilsearchonline"
                target="blank"
              >
                <Image
                  width={24}
                  height={18}
                  src="https://assets.vakilsearch.com/live-images/home-page-assets/youtube.svg"
                />
              </a>
            </div>
          </div>
          <div className="flex md:items-end">
            <ul className="flex flex-col md:flex-row text-[#e0f2ff] text-base lg:gap-[120px] md:gap-10 gap-4 whitespace-nowrap">
              <Link
                href="https://vakilsearch.com/terms-of-service"
                target="blank"
              >
                <li>Terms & Conditions</li>
              </Link>
              <Link
                href="https://vakilsearch.com/privacy-policy"
                target="blank"
              >
                <li>Privacy Policy</li>
              </Link>
              <Link href="https://vakilsearch.com/refund-policy" target="blank">
                <li>Refund Policy</li>
              </Link>
              <Link href="https://vakilsearch.com/contact-us" target="blank">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterWithLinks;
