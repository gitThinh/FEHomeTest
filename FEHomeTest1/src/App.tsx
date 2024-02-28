import ItemMenu from "@/Components/ItemMenu";
import "./App.css";

function App() {
  return (
    <div className="wrapper-containers">
      <header className="w-full min-h-screen">
        <div className="header-logo-nav containers flex justify-between py-6 items-center border-b border-[#CADAD4]">
          <div className="logo-company">
            <svg
              width="66"
              height="57"
              viewBox="0 0 66 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M65.9168 40.6974L63.5994 37.7989C63.5384 37.72 63.5241 37.7092 63.4272 37.5837L62.8712 36.8806L62.3367 36.2169C62.265 36.1272 62.265 36.1272 62.1932 36.0376L60.2776 33.6449C60.1915 33.5373 60.0552 33.487 59.9189 33.5086L59.9261 33.5121C59.9225 33.5121 59.9225 33.5121 59.9189 33.5121C59.2194 32.8485 58.3764 32.5472 57.4043 32.5472H57.2715C57.0168 32.5472 56.7801 32.5723 56.5577 32.6153C56.3389 32.6584 56.1272 32.5113 56.0985 32.2889C55.4779 27.073 55.5138 16.4189 56.2276 12.4192C56.2599 12.2362 56.4178 12.1071 56.6007 12.1071H59.7683C60.1377 12.1071 60.2884 11.6335 59.9907 11.4183L57.6159 8.83909L55.9191 7.1495L55.5712 6.89839C55.3237 6.71903 53.0529 5.16216 49.9141 5.16216C48.4577 5.16216 47.0622 5.49578 45.7457 6.14148C45.5699 6.22758 45.3547 6.17377 45.2507 6.00517L43.4391 3.06363C43.3566 2.92731 43.1952 2.85915 43.0374 2.89144L41.9648 3.11744C41.8177 3.14972 41.6634 3.08874 41.5773 2.96318C41.0608 2.20986 40.0958 1.22337 38.3919 1.22337H38.2197C36.5696 1.22337 35.5938 2.15964 35.0486 2.89144C34.9589 3.01341 34.801 3.06721 34.654 3.02775L33.7069 2.78382C33.5455 2.74078 33.3769 2.81252 33.2908 2.95242L31.3537 6.09843C31.1887 6.36748 30.7869 6.32443 30.6757 6.02669C29.309 2.43586 25.8258 0.00012207 21.8798 0.00012207C19.6844 0.00012207 17.6181 0.739094 15.907 2.14171L12.5745 4.8716C12.3485 5.05813 12.4059 5.41686 12.6821 5.52089L14.7017 6.28497C15.0497 6.4177 15.021 6.91991 14.6587 7.00959L8.11913 8.62027C1.6872 10.1735 -0.737773 16.114 0.191323 21.1792C0.862137 24.8238 3.9364 27.3708 7.67431 27.3708C9.69752 27.3708 11.5414 26.6175 12.9189 25.283C13.0982 25.1108 13.3924 25.1575 13.5072 25.3763C14.8416 27.934 17.0334 31.8513 18.5616 34.904C18.6871 35.1551 18.5042 35.4564 18.2244 35.4564H13.1664C12.9583 35.4564 12.7861 35.625 12.7861 35.8367C12.7861 36.0734 12.5709 36.2564 12.3377 36.2098C11.7996 36.0985 11.24 36.0376 10.6589 36.0376C9.04105 36.0376 3.6566 35.5031 2.09615 41.422L2.02799 41.7018L1.9419 42.0785C1.70873 43.1762 1.57959 44.4389 1.57959 45.8953C1.57959 55.979 6.84925 56.779 8.77918 56.779C9.37108 56.779 9.94862 56.7037 10.5082 56.5674C10.5333 56.5602 10.562 56.5566 10.5907 56.5566H26.8912L26.6185 56.5674H36.4548H38.5676H47.7259H49.9571L54.9972 56.5709V56.5674H62.6416C62.864 56.5674 63.0398 56.3736 63.0183 56.1512L63.0075 47.836L63.0398 46.1751L63.0147 41.648C63.0398 41.4579 63.2012 41.3144 63.3914 41.3144H65.6226C65.9383 41.3144 66.1141 40.9449 65.9168 40.6974Z"
                fill="#3C2415"
              />
              <path
                d="M23.6519 36.364L22.2888 36.7012C17.8227 27.6614 14.0381 20.408 11.5019 15.9024C7.02865 17.0862 8.47789 22.1442 11.588 21.7066C9.52896 25.6956 3.53826 24.8526 2.72754 20.4331C2.03521 16.6629 3.78937 12.3187 8.50659 11.178L16.3017 9.25882C15.6811 11.5295 19.0746 17.5346 22.9022 24.9817C23.4223 10.561 21.3489 5.61418 17.4388 4.13265C21.1086 1.13013 26.7118 2.87353 27.9172 7.46161C29.4561 13.3052 29.3843 21.2151 29.022 29.7994C28.8893 32.9382 26.7011 35.6107 23.6519 36.364Z"
                fill="white"
              />
              <path
                d="M45.5986 17.3694V28.2818C45.5986 33.0672 42.6714 36.0697 38.0475 36.0697C33.4199 36.0697 30.4963 33.0636 30.4963 28.2818V17.3694C30.4963 12.584 33.4235 9.58152 38.0475 9.58152C42.6714 9.58152 45.5986 12.584 45.5986 17.3694ZM38.0439 7.02381C37.0718 8.27217 35.5759 9.00038 33.9939 9.00038H32.5088L34.4853 5.78621C36.9928 6.42833 36.5265 3.85986 37.9327 3.85986H38.1049C39.5398 3.85986 38.7613 6.43192 41.624 5.82567L43.5754 9.00038H42.0903C40.5119 9.00038 39.016 8.27217 38.0439 7.02381ZM36.2646 17.4089V28.2424C36.2646 29.8638 36.8171 30.6135 38.0439 30.6135C39.2707 30.6135 39.8232 29.8638 39.8232 28.2424V17.4089C39.8232 15.7874 39.2707 15.0377 38.0439 15.0377C36.8171 15.0377 36.2646 15.7874 36.2646 17.4089Z"
                fill="white"
              />
              <path
                d="M45.8246 35.5604C47.3672 31.844 47.2093 13.5347 45.8246 9.85779H53.6126C52.0306 13.5347 52.1884 31.844 53.6126 35.5604H45.8246Z"
                fill="white"
              />
              <path
                d="M6.99286 46.7381C6.99286 50.3182 8.13719 51.7029 9.16673 51.7029C10.1783 51.7029 10.7057 50.494 10.3326 49.1559L13.6293 50.2321C13.6938 52.6714 11.6957 54.7377 9.17032 54.7377C4.71137 54.7377 3.81097 50.3218 3.81097 46.7417C3.81097 42.1285 5.30327 38.6776 9.28152 38.6776C14.1817 38.6776 15.5197 44.7401 11.9612 47.3767L8.99454 45.1346C11.1684 45.1346 11.4554 41.7088 9.28152 41.7088C8.1336 41.7088 6.99286 43.0038 6.99286 46.7381Z"
                fill="white"
              />
              <path
                d="M19.5015 54.9171C19.8961 54.3862 19.8244 53.7154 19.7347 52.8831H17.8155C17.7222 53.762 17.6541 54.4543 18.0702 54.9171H13.5144C14.6946 52.3271 16.4272 41.9205 16.0362 39.883H21.5606C21.1229 41.8954 22.9955 52.3235 24.1291 54.9171H19.5015ZM18.8307 45.5149L18.3249 49.9954H19.2935L18.8307 45.5149ZM21.557 39.0758H14.7161C14.3969 39.0758 14.1386 38.8176 14.1386 38.4983H20.9795C21.2987 38.4983 21.557 38.7566 21.557 39.0758Z"
                fill="white"
              />
              <path
                d="M40.6411 43.5599C40.6411 41.8774 40.0456 40.5537 39.0806 39.596C37.9076 38.4265 36.1893 37.8095 34.3275 37.7808C34.3275 37.7808 34.3275 37.7808 34.3239 37.7808C34.2773 37.7772 34.2271 37.7772 34.1804 37.7772C34.0154 37.7772 33.8289 37.7987 33.6639 37.7987C29.3664 38.0463 27.2642 40.36 26.8517 42.7204C26.432 45.1347 29.5063 46.5444 31.1241 44.7042C29.7251 44.7257 29.5601 41.2066 33.7141 40.9232C33.9222 40.9017 34.1087 40.9017 34.2737 40.9017C36.792 40.9017 37.2332 42.2326 37.2332 43.6065C37.2332 44.7508 36.5337 46.3364 35.1598 46.3364C35.088 46.3364 34.9947 46.3149 34.9266 46.3149C34.9481 45.0522 34.9481 43.5599 34.9481 41.8129L32.2326 42.5052C31.6478 42.6523 31.2748 43.2191 31.368 43.8146C31.7913 46.5767 31.5187 53.0553 30.9412 55.0606H39.0699C34.41 53.8875 34.8835 52.9154 34.9051 49.6474C38.9371 49.5541 40.6411 46.7346 40.6411 43.5599Z"
                fill="white"
              />
              <path
                d="M46.6318 55.0606C47.3565 53.5898 47.2166 53.0553 47.2166 48.7614H45.2113C45.2113 52.9836 45.0714 53.5683 45.8175 55.0606H41.2187C42.1298 52.8222 42.0366 41.9744 41.2187 39.8973H45.8139C44.9961 41.5295 45.2077 40.5969 45.2077 45.497H47.213C47.213 40.7152 47.4246 41.5331 46.6282 39.8973H51.2486C50.2908 42.0425 50.2442 52.6572 51.2271 55.0606H46.6318Z"
                fill="white"
              />
              <path
                d="M56.4752 45.87C56.59 45.87 56.7084 45.87 56.8232 45.87C57.8958 45.87 58.5738 45.8449 59.6212 45.4503V49.5326C58.5487 49.1344 57.7559 49.0878 56.4716 49.0878V51.8392C57.1496 51.8392 57.6841 51.8392 58.1038 51.8392C59.5495 51.8392 59.8759 51.7926 60.5755 51.441L60.9485 55.057H52.4575C53.3902 52.7252 53.2969 42.0173 52.4575 39.8937H60.9485L60.5037 43.5096C59.7576 43.1581 59.4311 43.1114 58.2653 43.1114C57.7989 43.1114 57.2393 43.1114 56.4681 43.1114V45.87H56.4752Z"
                fill="white"
              />
              <path
                d="M45.8246 9.00034H53.6126C53.6161 9.00034 49.8352 6.29914 45.8246 9.00034Z"
                fill="white"
              />
              <path
                d="M56.7083 38.1253C55.9621 38.8606 54.8178 39.2911 53.6017 39.2911H52.461L53.9784 37.397C55.9012 37.7773 55.546 36.2599 56.6222 36.2599H56.7549C57.8562 36.2599 57.2571 37.7773 59.4561 37.4186L60.952 39.2911H59.8113C58.5988 39.2911 57.4544 38.8606 56.7083 38.1253Z"
                fill="white"
              />
              <path
                d="M42.9047 37.7414L42.5209 38.0176C41.7353 38.8032 41.0178 39.2839 39.9273 39.3951C38.7543 38.2256 37.7498 37.605 35.8881 37.5763C35.9096 37.5728 35.9239 37.5728 35.9275 37.5728L42.8724 37.6624C42.9119 37.6624 42.9334 37.7127 42.9047 37.7414Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="nav-and-account text-black flex flex-row items-center">
            <nav className="header-nav flex flex-row">
              <a href="" className="active">
                Home
              </a>
              <a href="">Service</a>
              <a href="">Our menu</a>
              <a href="">About us</a>
              <a href="">Contact</a>
            </nav>
            <div className="flex flex-row items-center gap-5">
              <div className="flex flex-row gap-3 cursor-pointer">
                <img
                  src="/src/assets/images/UserIcon.png"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <p>Account</p>
              </div>
              <div className="flex flex-row gap-3 cursor-pointer">
                <img
                  src="/src/assets/images/CartIcon.png"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <p>Cart</p>
              </div>
            </div>
          </div>
        </div>
        <div className="header-contents flex flex-row containers">
          <div className="text-content w-1/2 py-20 pr-6">
            <p className="text-black text-8xl font-semibold">
              ENJOY LIFE SIP BY SIP
            </p>
            <p className="text-[#5F6575] mt-4 text-xl">
              <span className="text-[#AA9585]">Voi Coffee</span> is aimed at
              everyone, especially young, active, busy people. The brand is
              committed to to providing customers with great coffee experiences,
              even when they are in a hurry.
            </p>
            <div className="flex gap-8 py-8 items-center">
              <div>
                <img src="/src/assets/images/mouseIcon.png" alt="" />
              </div>
              <div className=" border-l-2 pl-4">
                <p className="text-black flex items-center gap-2 text-base font-semibold">
                  Trusted Users
                  <span className="w-8 h-[2px] bg-[#AA9585] inline-block"></span>
                </p>
                <div className="ratting flex gap-1">
                  <img src="/src/assets/images/StarFill.png" alt="" />
                  <img src="/src/assets/images/StarFill.png" alt="" />
                  <img src="/src/assets/images/StarFill.png" alt="" />
                  <img src="/src/assets/images/StarFill.png" alt="" />
                  <img src="/src/assets/images/StarFill.png" alt="" />
                </div>
                <p className="text-black text-center">
                  Over <span className="text-[#D1B098] underline">13.5K</span>{" "}
                  happy users all over the world
                  <img
                    src="/src/assets/images/faceHeatIcon.png"
                    alt=""
                    className="inline-block ml-1"
                  />
                </p>
              </div>
            </div>
            <button className="border-radius-btn bg-[#AA9585] text-sm px-8 py-3 shadow-md shadow-[#eee6dd]">
              Order now
            </button>
          </div>
          <div className="slide-content w-1/2 py-8 flex flex-row items-center justify-end">
            <div className="wrapper-arrow bg-[#B3A091]">
              <img src="/src/assets/images/ArrowLeft.png" alt="" />
            </div>
            <div className="slide mx-10 ">
              <div className="rounded-3xl overflow-hidden w-[380px]">
                <img src="/src/assets/images/SlidePic1.png" alt="" />
              </div>
              <div className="slide-dot w-max mx-auto mt-7 flex gap-4">
                <span className="w-4 h-4 rounded-full bg-white inline-block"></span>
                <span className="active w-4 h-4 rounded-full bg-white inline-block"></span>
                <span className="w-4 h-4 rounded-full bg-white inline-block"></span>
                <span className="w-4 h-4 rounded-full bg-white inline-block"></span>
              </div>
            </div>
            <div className="wrapper-arrow bg-black">
              <img src="/src/assets/images/ArrowRight.png" alt="" />
            </div>
          </div>
        </div>
      </header>
      <section className="bg-[#F8FAFC] py-[100px]">
        <div className="containers">
          <div className="header-text flex justify-between mb-[120px] items-center">
            <div className="w-[725px] text-black font-bold">
              <h1 className="text-[56px] mb-4">Specical menu for you</h1>
              <p className="text-lg font-normal text-[#5F6575]">
                Drinking Cofffe Can Do Much More Than Provide An Energy Boost.
                It May Also Reduce The Risk Of Several Health Issues.
              </p>
            </div>
            <div className="groupBtn flex gap-5">
              <div className="wrapper-arrow bg-white">
                <img src="/src/assets/images/ArrowLeft.png" alt="" />
              </div>
              <div className="wrapper-arrow bg-black">
                <img src="/src/assets/images/ArrowRight.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <ItemMenu
              imageItem="/src/assets/images/mugCoffee1.png"
              nameItem=""
              detailItem="100% Natural Arbika or Robusta, 30ml Cup"
              priceItem="50.000 VND"
            />
            <ItemMenu
              imageItem="/src/assets/images/mugCoffee2.png"
              nameItem="Capuchino"
              detailItem="Coffee 50%, Milk 50%, 280ml"
              priceItem="50.000 VND"
            />
            <ItemMenu
              imageItem="/src/assets/images/mugCoffee1.png"
              nameItem="Americano"
              detailItem="100% Natural Arbika or Robusta, 30ml Cup"
              priceItem="50.000 VND"
            />
          </div>
        </div>
      </section>
      <section className="bg-coffee">
        <div className="containers flex h-full items-center">
          <div className="w-[490px] ml-auto mr-0">
            <h1 className="uppercase text-right text-[56px] font-bold">
              more than just a coffee shop
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="containers w-[1170px] pb-[220px] pt-24">
          <div className="text-center w-[645px] mx-auto">
            <h1 className="text-[56px] font-semibold text-black">
              Happy Customer
            </h1>
            <p className="text-[#5F6575] text-lg font-normal mt-4">
              So perhaps peopel who are genetically geared to reach to that
              extra cup of coffee could be boosting their health, as well as
              their productivity.
            </p>
          </div>
          <div className="my-10 flex flex-row justify-between gap-14 relative items-center">
            <div className="min-w-[250px]">
              <div className="picslide">
                <img src="/src/assets/images/Profile.png" alt="" />
              </div>
              <div className="slide-dot w-max mx-auto mt-7 flex gap-4">
                <span className="w-4 h-4 rounded-full bg-[#AA9584] inline-block"></span>
                <span className="active w-4 h-4 rounded-full bg-[#AA9584] inline-block"></span>
                <span className="w-4 h-4 rounded-full bg-[#AA9584] inline-block"></span>
                <span className="w-4 h-4 rounded-full bg-[#AA9584] inline-block"></span>
              </div>
            </div>
            <div className="w-[812px] text-[#071731] ">
              <i className=" text-[30px] font-medium leading-[47px]">
                “Voi Coffee The App clearly displays content as well as easy
                operations to help users have a good experience.”
              </i>
              <div className="mt-20 flex flex-row items-center">
                <div>
                  <h1 className="uppercase text-lg font-semibold">JONH DOE</h1>
                  <p className="text-[#5F6575] text-sm font-normal">
                    Sunior Designer of Lomosity
                  </p>
                </div>
                <div className="ratting flex gap-1 h-max ml-20">
                  <img src="/src/assets/images/StarFill.png" alt="" />
                  <img src="/src/assets/images/StarFill.png" alt="" />
                  <img src="/src/assets/images/StarFill.png" alt="" />
                  <img src="/src/assets/images/StarFill.png" alt="" />
                  <img src="/src/assets/images/StarEmpty.png" alt="" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 flex gap-5">
              <div className="wrapper-arrow bg-white">
                <img src="/src/assets/images/ArrowLeft.png" alt="" />
              </div>
              <div className="wrapper-arrow bg-black">
                <img src="/src/assets/images/ArrowRight.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-black relative">
        <div className="footer1 translate-y-[-50%] absolute left-1/2 translate-x-[-50%]">
          <section className="containers shadow-around border-radius-60 py-14 bg-[#F8FAFC] text-[#071731] flex flex-col items-center">
            <p className="text-5xl font-semibold ">
              Deliciousness to your inbox
            </p>
            <p className="w-[620px] text-center mt-6 text-base font-normal text-[#F6575]">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
            <div className="bg-white p-2 border-radius-24 w-[480px] flex mt-14">
              <input
                type="text"
                placeholder="Your email address..."
                className="flex-1 outline-none pl-4"
              />
              <button className="border-radius-btn text-white w-[160px]">
                Subcribe
              </button>
            </div>
          </section>
        </div>
        <div className="footer2 containers w-[1120px] pt-[220px] pb-20 flex flex-row justify-between border-b border-#444">
          <div className="w-[322px]">
            <svg
              width="62"
              height="53"
              viewBox="0 0 62 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M61.144 37.7508L58.9945 35.0622C58.9379 34.989 58.9246 34.979 58.8348 34.8625L58.319 34.2103L57.8232 33.5947C57.7566 33.5116 57.7566 33.5116 57.6901 33.4284L55.9132 31.2089C55.8333 31.1091 55.7069 31.0625 55.5805 31.0825L55.5871 31.0858C55.5838 31.0858 55.5838 31.0858 55.5805 31.0858C54.9316 30.4702 54.1496 30.1907 53.2479 30.1907H53.1248C52.8885 30.1907 52.6689 30.214 52.4626 30.2539C52.2596 30.2939 52.0633 30.1574 52.0367 29.9511C51.461 25.1129 51.4943 15.2302 52.1565 11.5201C52.1864 11.3504 52.3328 11.2306 52.5025 11.2306H55.4407C55.7834 11.2306 55.9232 10.7913 55.647 10.5917L53.4442 8.19922L51.8703 6.63196L51.5475 6.39904C51.3179 6.23266 49.2116 4.78853 46.3 4.78853C44.9491 4.78853 43.6547 5.09798 42.4335 5.69694C42.2704 5.7768 42.0708 5.72688 41.9743 5.57049L40.2939 2.84193C40.2174 2.71549 40.0676 2.65227 39.9212 2.68221L38.9263 2.89185C38.7899 2.92179 38.6468 2.86523 38.5669 2.74876C38.0878 2.04999 37.1926 1.13492 35.6121 1.13492H35.4524C33.9217 1.13492 33.0166 2.0034 32.5108 2.68221C32.4277 2.79535 32.2812 2.84526 32.1448 2.80866L31.2664 2.58239C31.1166 2.54246 30.9602 2.60901 30.8804 2.73878L29.0835 5.657C28.9305 5.90657 28.5578 5.86664 28.4546 5.59045C27.1868 2.25962 23.9558 0.000244141 20.2956 0.000244141C18.2591 0.000244141 16.3425 0.68571 14.7553 1.98677L11.664 4.519C11.4544 4.69203 11.5076 5.02478 11.7638 5.12128L13.6372 5.83004C13.96 5.95315 13.9334 6.419 13.5973 6.50219L7.53126 7.99624C1.56504 9.43705 -0.684354 14.9474 0.17747 19.6458C0.799714 23.0266 3.65139 25.3891 7.11865 25.3891C8.99536 25.3891 10.7057 24.6903 11.9835 23.4525C12.1498 23.2928 12.4227 23.336 12.5292 23.539C13.767 25.9115 15.8001 29.5452 17.2176 32.3769C17.3341 32.6098 17.1644 32.8893 16.9048 32.8893H12.2131C12.0201 32.8893 11.8603 33.0457 11.8603 33.242C11.8603 33.4616 11.6607 33.6314 11.4444 33.5881C10.9453 33.4849 10.4262 33.4284 9.88713 33.4284C8.38643 33.4284 3.39184 32.9326 1.94438 38.423L1.88115 38.6825L1.80129 39.0319C1.58501 40.0501 1.46522 41.2214 1.46522 42.5724C1.46522 51.926 6.35332 52.668 8.14352 52.668C8.69256 52.668 9.22829 52.5981 9.74738 52.4717C9.77067 52.465 9.79729 52.4617 9.82391 52.4617H24.9441L24.6912 52.4717H33.8152H35.7751H44.2703H46.34L51.0151 52.475V52.4717H58.106C58.3123 52.4717 58.4754 52.292 58.4554 52.0857L58.4454 44.3725L58.4754 42.8319L58.4521 38.6326C58.4754 38.4562 58.6251 38.3231 58.8015 38.3231H60.8712C61.164 38.3231 61.3271 37.9804 61.144 37.7508Z"
                fill="#3C2415"
              />
              <path
                d="M21.9393 33.7309L20.6749 34.0437C16.5321 25.6584 13.0216 18.9302 10.6691 14.7508C6.51968 15.8489 7.86399 20.5407 10.7489 20.1347C8.83895 23.8349 3.28201 23.0529 2.53 18.9534C1.88779 15.4562 3.51494 11.4266 7.89061 10.3685L15.1213 8.58827C14.5456 10.6946 17.6934 16.2648 21.2439 23.1727C21.7264 9.79615 19.8031 5.20752 16.1761 3.83326C19.5801 1.04814 24.7777 2.6653 25.8957 6.92119C27.3232 12.3417 27.2567 19.6788 26.9206 27.6416C26.7975 30.5531 24.7677 33.0321 21.9393 33.7309Z"
                fill="white"
              />
              <path
                d="M42.297 16.112V26.2342C42.297 30.6731 39.5818 33.4582 35.2926 33.4582C31.0001 33.4582 28.2882 30.6698 28.2882 26.2342V16.112C28.2882 11.6731 31.0035 8.88794 35.2926 8.88794C39.5818 8.88794 42.297 11.6731 42.297 16.112ZM35.2893 6.51543C34.3875 7.6734 33 8.34888 31.5325 8.34888H30.1549L31.9884 5.36744C34.3143 5.96306 33.8817 3.58057 35.1861 3.58057H35.3458C36.6769 3.58057 35.9548 5.96639 38.6101 5.40404L40.4203 8.34888H39.0427C37.5786 8.34888 36.191 7.6734 35.2893 6.51543ZM33.6388 16.1486V26.1976C33.6388 27.7017 34.1513 28.3971 35.2893 28.3971C36.4273 28.3971 36.9397 27.7017 36.9397 26.1976V16.1486C36.9397 14.6445 36.4273 13.9491 35.2893 13.9491C34.1513 13.9491 33.6388 14.6445 33.6388 16.1486Z"
                fill="white"
              />
              <path
                d="M42.5066 32.9858C43.9375 29.5385 43.791 12.5549 42.5066 9.14417H49.7306C48.2632 12.5549 48.4096 29.5385 49.7306 32.9858H42.5066Z"
                fill="white"
              />
              <path
                d="M6.48647 43.3545C6.48647 46.6753 7.54795 47.9597 8.50294 47.9597C9.4413 47.9597 9.93044 46.8384 9.58438 45.5972L12.6424 46.5955C12.7023 48.8582 10.8488 50.7748 8.50627 50.7748C4.37018 50.7748 3.53497 46.6787 3.53497 43.3578C3.53497 39.0786 4.91922 35.8776 8.60942 35.8776C13.1548 35.8776 14.396 41.5011 11.0951 43.9468L8.34322 41.8671C10.3597 41.8671 10.6259 38.6893 8.60942 38.6893C7.54462 38.6893 6.48647 39.8905 6.48647 43.3545Z"
                fill="white"
              />
              <path
                d="M18.0894 50.9407C18.4555 50.4482 18.3889 49.826 18.3057 49.054H16.5255C16.439 49.8692 16.3758 50.5114 16.7618 50.9407H12.5358C13.6306 48.5382 15.2378 38.8851 14.8751 36.9951H19.9994C19.5935 38.8618 21.3304 48.5349 22.3819 50.9407H18.0894ZM17.4672 42.2193L16.998 46.3753H17.8964L17.4672 42.2193ZM19.9961 36.2464H13.6505C13.3544 36.2464 13.1148 36.0068 13.1148 35.7107H19.4604C19.7565 35.7107 19.9961 35.9503 19.9961 36.2464Z"
                fill="white"
              />
              <path
                d="M37.6984 40.4062C37.6984 38.8456 37.146 37.6177 36.2509 36.7293C35.1629 35.6445 33.569 35.0722 31.842 35.0456C31.842 35.0456 31.842 35.0456 31.8387 35.0456C31.7954 35.0422 31.7488 35.0422 31.7056 35.0422C31.5525 35.0422 31.3795 35.0622 31.2264 35.0622C27.2401 35.2918 25.2901 37.438 24.9075 39.6275C24.5182 41.867 27.3698 43.1747 28.8705 41.4677C27.5728 41.4876 27.4197 38.2233 31.273 37.9605C31.466 37.9405 31.639 37.9405 31.7921 37.9405C34.128 37.9405 34.5373 39.175 34.5373 40.4494C34.5373 41.5109 33.8884 42.9817 32.614 42.9817C32.5474 42.9817 32.4609 42.9617 32.3977 42.9617C32.4177 41.7904 32.4177 40.4062 32.4177 38.7857L29.8987 39.4279C29.3564 39.5643 29.0103 40.0901 29.0968 40.6424C29.4895 43.2046 29.2366 49.2141 28.7008 51.0742H36.241C31.9185 49.9861 32.3578 49.0843 32.3777 46.053C36.1178 45.9664 37.6984 43.351 37.6984 40.4062Z"
                fill="white"
              />
              <path
                d="M43.2553 51.0739C43.9275 49.7096 43.7977 49.2138 43.7977 45.2308H41.9376C41.9376 49.1473 41.8079 49.6897 42.5 51.0739H38.2341C39.0793 48.9976 38.9928 38.9352 38.2341 37.0085H42.4967C41.738 38.5226 41.9343 37.6574 41.9343 42.2028H43.7944C43.7944 37.7672 43.9907 38.5259 43.252 37.0085H47.5378C46.6494 38.9984 46.6061 48.8445 47.5179 51.0739H43.2553Z"
                fill="white"
              />
              <path
                d="M52.386 42.549C52.4925 42.549 52.6023 42.549 52.7088 42.549C53.7037 42.549 54.3326 42.5257 55.3043 42.1597V45.9464C54.3093 45.577 53.574 45.5338 52.3827 45.5338V48.086C53.0116 48.086 53.5074 48.086 53.8967 48.086C55.2377 48.086 55.5405 48.0427 56.1894 47.7166L56.5354 51.0707H48.6592C49.5244 48.9079 49.4379 38.9753 48.6592 37.0054H56.5354L56.1228 40.3595C55.4307 40.0334 55.1279 39.9901 54.0465 39.9901C53.6139 39.9901 53.0948 39.9901 52.3794 39.9901V42.549H52.386Z"
                fill="white"
              />
              <path
                d="M42.5066 8.34883H49.7306C49.734 8.34883 46.2268 5.84322 42.5066 8.34883Z"
                fill="white"
              />
              <path
                d="M52.6023 35.3649C51.9102 36.0471 50.8487 36.4464 49.7207 36.4464H48.6625L50.07 34.6895C51.8536 35.0422 51.5242 33.6346 52.5224 33.6346H52.6455C53.6671 33.6346 53.1114 35.0422 55.1511 34.7094L56.5387 36.4464H55.4806C54.3559 36.4464 53.2944 36.0471 52.6023 35.3649Z"
                fill="white"
              />
              <path
                d="M39.7982 35.0088L39.4421 35.265C38.7134 35.9938 38.0479 36.4396 37.0363 36.5428C35.9482 35.458 35.0165 34.8824 33.2896 34.8557C33.3095 34.8524 33.3228 34.8524 33.3262 34.8524L39.7682 34.9356C39.8048 34.9356 39.8248 34.9822 39.7982 35.0088Z"
                fill="white"
              />
            </svg>
            <p className="text-[#808E98] mt-4">
              Sit amet nisl purus in mollis nunc sed id semper. In vitae turpis
              massa sed. Sed velit dignissim sodales ut e
            </p>
          </div>
          <div className="flex flex-row gap-32">
            <div>
              <p className="uppercase text-lg font-semibold text-white">
                COMPANY
              </p>
              <div className="footer-options flex flex-col text-[#B3B8BC] gap-7 mt-9">
                <a href="">About Us</a>
                <a href="">Features</a>
                <a href="">Watch Our Video</a>
                <a href="">Contact Us</a>
              </div>
            </div>
            <div>
              <p className="uppercase text-lg font-semibold text-white">
                OUR POLICIES
              </p>
              <div className="footer-options flex flex-col text-[#B3B8BC] gap-7 mt-9">
                <a href="">Privacy Policy</a>
                <a href="">Term of Use</a>
                <a href="">Cookies Policy</a>
                <a href="">GDPR Policy</a>
                <a href="">Refund Policy</a>
              </div>
            </div>
            <div>
              <p className="uppercase text-lg font-semibold text-white">
                Social Media
              </p>
              <div className="footer-options flex flex-col text-[#B3B8BC] gap-7 mt-9">
                <a href="" className="flex flex-row gap-2">
                  <img src="/src/assets/images/fbIcon.png" alt="" /> Facebook
                </a>
                <a href="" className="flex flex-row gap-2">
                  <img src="/src/assets/images/twIcon.png" alt="" /> Twitter
                </a>
                <a href="" className="flex flex-row gap-2">
                  <img src="/src/assets/images/insIcon.png" alt="" /> Instagram
                </a>
                <a href="" className="flex flex-row gap-2">
                  <img src="/src/assets/images/tiktokIcon.png" alt="" /> Tiktok
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="containers py-10">
          <div className="w-max mx-auto text-[#94999C] text-sm font-normal">
            <p>© 2022 VoiCoffee - All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
