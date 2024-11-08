import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='order-Tracking-full-div'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-lx-6'>
              <div>
                <h1 className='order-tracking-tags'>
                  Order Tracking -{" "}
                  <span className='order-code-num'>AKN12508</span>
                </h1>

                <div className='shipped-via-div'>
                  <div>
                    <p className='ss-text-ord'>Shipped VIA</p>
                    <span className='ss-texts'>UPS</span>
                  </div>
                  <div>
                    <p className='ss-text-ord'>Status</p>
                    <span className='ss-texts'>In Transite</span>
                  </div>
                  <div>
                    <p className='ss-text-ord'>Expected</p>
                    <span className='ss-texts'>Friday, September 09</span>
                  </div>
                </div>
                <div className='order-placement-div'>
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='72'
                      height='72'
                      viewBox='0 0 72 72'
                      fill='none'>
                      <circle cx='36' cy='36' r='32' fill='#0078EA' />
                      <circle cx='36' cy='36' r='35.5' stroke='#0078EA' />
                      <path
                        d='M26.9164 33.1029C26.962 32.5301 27.2196 31.9956 27.6379 31.6059C28.0563 31.2162 28.6047 30.9999 29.174 31H42.826C43.3953 30.9999 43.9437 31.2162 44.3621 31.6059C44.7804 31.9956 45.038 32.5301 45.0836 33.1029L45.9927 44.5314C46.0177 44.8459 45.978 45.1623 45.8759 45.4605C45.7739 45.7587 45.6118 46.0324 45.3998 46.2643C45.1879 46.4962 44.9306 46.6813 44.6443 46.8079C44.358 46.9345 44.0489 46.9999 43.7363 47H28.2637C27.9511 46.9999 27.642 46.9345 27.3557 46.8079C27.0694 46.6813 26.8121 46.4962 26.6002 46.2643C26.3882 46.0324 26.2261 45.7587 26.1241 45.4605C26.022 45.1623 25.9823 44.8459 26.0073 44.5314L26.9164 33.1029Z'
                        fill='white'
                      />
                      <path
                        d='M40 34V29C40 27.9391 39.5786 26.9217 38.8284 26.1716C38.0783 25.4214 37.0609 25 36 25C34.9391 25 33.9217 25.4214 33.1716 26.1716C32.4214 26.9217 32 27.9391 32 29V34'
                        stroke='white'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>

                    <p>Order Placed</p>
                  </div>
                  <div className='middle-border' />
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='72'
                      height='72'
                      viewBox='0 0 72 72'
                      fill='none'>
                      <circle cx='36' cy='36' r='32' fill='#FFC20F' />
                      <circle cx='36' cy='36' r='35.5' stroke='#FFC20F' />
                      <path
                        d='M21 25V26.1694H30.3552V27.3388H23.3388V28.5082H21V29.6776H29.1858V30.847H23.3388V32.0164H21V33.1858H28.0164V34.3552H23.3388V35.5246H21V36.694H26.847V37.8634H23.3388V42.5411C23.3388 43.2427 23.8066 43.7105 24.5082 43.7105H25.6776C25.9115 41.7225 27.6656 40.0923 29.7705 40.0923C31.8755 40.0923 33.6296 41.6055 33.8634 43.7105H37.3717C38.0733 43.7105 38.5411 43.2427 38.5411 42.5411V26.1694C38.5411 25.4678 38.0733 25 37.3717 25H21ZM40.8799 29.6776C40.1782 29.6776 39.7105 30.1454 39.7105 30.847V42.5411C39.7105 43.1258 40.1782 43.7105 40.8799 43.7105C41.1138 41.7225 42.8679 40.0923 44.9728 40.0923C47.0777 40.0923 48.8318 41.6055 49.0657 43.7105H50.2351C50.9367 43.7105 51.4045 43.2427 51.4045 42.5411V36.694C51.4045 35.6416 50.4538 34.3552 50.4538 34.3552L47.8963 30.847C47.3116 30.1454 46.9608 29.6776 46.1422 29.6776H40.8799ZM43.2187 32.0164H46.0323C46.2661 32.0164 46.5082 32.2363 46.5082 32.2363L48.9558 35.6346C49.1897 35.9854 49.4317 36.3502 49.4317 36.5841H43.2187V32.0164ZM29.7705 41.5915C29.0541 41.594 28.3677 41.8796 27.8611 42.386C27.3544 42.8925 27.0685 43.5788 27.0657 44.2952C27.0682 45.0118 27.3539 45.6983 27.8607 46.205C28.3674 46.7118 29.0539 46.9975 29.7705 47C30.4871 46.9975 31.1737 46.7118 31.6804 46.205C32.1871 45.6983 32.4729 45.0118 32.4754 44.2952C32.4729 43.5786 32.1871 42.892 31.6804 42.3853C31.1737 41.8786 30.4871 41.5928 29.7705 41.5903V41.5915ZM44.9728 41.5915C44.2564 41.594 43.57 41.8796 43.0633 42.386C42.5566 42.8925 42.2707 43.5788 42.268 44.2952C42.2704 45.0118 42.5562 45.6983 43.0629 46.205C43.5696 46.7118 44.2562 46.9975 44.9728 47C45.6894 46.9975 46.3759 46.7118 46.8827 46.205C47.3894 45.6983 47.6751 45.0118 47.6776 44.2952C47.6751 43.5786 47.3894 42.892 46.8827 42.3853C46.3759 41.8786 45.6894 41.5928 44.9728 41.5903V41.5915Z'
                        fill='white'
                      />
                    </svg>
                    <p>In Transit</p>
                  </div>
                  <div className='middle-border' />
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='72'
                      height='72'
                      viewBox='0 0 72 72'
                      fill='none'>
                      <circle cx='36' cy='36' r='32' fill='#E2E8EB' />
                      <circle cx='36' cy='36' r='35.5' stroke='#E2E8EB' />
                      <path
                        d='M25 36L33.25 44L47 28'
                        stroke='#59636A'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                    <p>Completed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-lx-6'>
              <div>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29211.183844417897!2d90.35808927315048!3d23.76883835732697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1705652180682!5m2!1sen!2sbd'
                  width='600'
                  height='450'
                  allowfullscreen=''
                  loading='lazy'
                  referrerpolicy='no-referrer-when-downgrade'></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
