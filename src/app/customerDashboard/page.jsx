import Navbar from "@/component/Navbar/Navbar";
import React from "react";
import customerAthor from "../../../public/cusomer-author.png";
import toyicon from "../../../public/order-table-icon.png";
import Link from "next/link";
import Footer from "@/component/Footer/Footer";

const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='Customer-dashboard-full-div'>
        <div className='container'>
          <div className='pb-5'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                <div className='individiual-info-card-div'>
                  <div className='individiual-Personalinfo-tags'>
                    <span className='individiual-Personalinfo'>
                      Personal Information
                    </span>
                    <div className='edit-info-text'>
                      <Link href='/'>Edit</Link>
                    </div>
                    <button className='seller-btn'>Become a Seller</button>
                  </div>
                  <div>
                    <div className='custodash-card-img-div'>
                      <div>
                        <img src={customerAthor.src} alt='' />
                      </div>
                      <div className='custodash-card-img-text-div'>
                        <h6 className='tags-def'>Ratul Ahmed</h6>
                        <span className='custodash-card-text'>
                          <span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='20'
                              height='20'
                              viewBox='0 0 24 24'
                              fill='none'>
                              <path
                                d='M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM5 6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7L12 11.88L4 7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V9.28L11.48 13.85C11.632 13.9378 11.8045 13.984 11.98 13.984C12.1555 13.984 12.328 13.9378 12.48 13.85L20 9.28V17Z'
                                fill='#6D6D6D'
                              />
                            </svg>
                          </span>
                          rahmed357@gmail.com
                        </span>
                        <span className='custodash-card-text'>
                          <span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='20'
                              height='20'
                              viewBox='0 0 24 24'
                              fill='none'>
                              <path
                                d='M19.4406 13C19.2206 13 18.9906 12.93 18.7706 12.88C18.3251 12.7818 17.8873 12.6515 17.4606 12.49C16.9967 12.3212 16.4867 12.33 16.0289 12.5146C15.5711 12.6992 15.1977 13.0466 14.9806 13.49L14.7606 13.94C13.7866 13.3982 12.8916 12.7252 12.1006 11.94C11.3154 11.149 10.6424 10.254 10.1006 9.27999L10.5206 8.99999C10.964 8.78291 11.3114 8.40952 11.496 7.95168C11.6806 7.49384 11.6894 6.9839 11.5206 6.51999C11.3618 6.09241 11.2315 5.65479 11.1306 5.20999C11.0806 4.98999 11.0406 4.75999 11.0106 4.52999C10.8892 3.82561 10.5202 3.18773 9.97021 2.73123C9.42021 2.27473 8.72529 2.0296 8.01059 2.03999H5.01059C4.57962 2.03594 4.15284 2.1248 3.7593 2.30052C3.36576 2.47624 3.0147 2.73469 2.73002 3.05827C2.44534 3.38186 2.23372 3.76298 2.10958 4.1757C1.98543 4.58842 1.95167 5.02305 2.01059 5.44999C2.54333 9.63937 4.45662 13.5319 7.44824 16.5126C10.4399 19.4934 14.3393 21.3925 18.5306 21.91H18.9106C19.648 21.9111 20.36 21.6405 20.9106 21.15C21.227 20.867 21.4797 20.5202 21.6521 20.1323C21.8244 19.7444 21.9126 19.3244 21.9106 18.9V15.9C21.8983 15.2054 21.6454 14.5365 21.1949 14.0077C20.7445 13.4788 20.1244 13.1226 19.4406 13ZM19.9406 19C19.9404 19.142 19.91 19.2823 19.8514 19.4116C19.7927 19.5409 19.7073 19.6563 19.6006 19.75C19.4889 19.8465 19.3582 19.9185 19.217 19.9616C19.0758 20.0046 18.9271 20.0177 18.7806 20C15.0355 19.5198 11.5568 17.8065 8.89331 15.1303C6.22978 12.4541 4.533 8.96733 4.07059 5.21999C4.05467 5.07351 4.06862 4.92532 4.11159 4.78438C4.15456 4.64344 4.22566 4.51268 4.32059 4.39999C4.4143 4.29332 4.52965 4.20783 4.65897 4.14921C4.78829 4.09058 4.9286 4.06017 5.07059 4.05999H8.07059C8.30314 4.05482 8.53021 4.13087 8.71273 4.27506C8.89525 4.41925 9.0218 4.62256 9.07059 4.84999C9.11059 5.12332 9.16059 5.39332 9.22059 5.65999C9.33611 6.18713 9.48985 6.70517 9.68059 7.20999L8.28059 7.85999C8.16089 7.91491 8.05321 7.99294 7.96375 8.08959C7.87428 8.18623 7.80479 8.2996 7.75926 8.42318C7.71373 8.54677 7.69306 8.67812 7.69844 8.80971C7.70381 8.9413 7.73513 9.07054 7.79059 9.18999C9.22979 12.2727 11.7078 14.7508 14.7906 16.19C15.0341 16.29 15.3071 16.29 15.5506 16.19C15.6753 16.1454 15.7899 16.0764 15.8878 15.9872C15.9856 15.8979 16.0648 15.7901 16.1206 15.67L16.7406 14.27C17.2576 14.4549 17.7852 14.6085 18.3206 14.73C18.5873 14.79 18.8573 14.84 19.1306 14.88C19.358 14.9288 19.5613 15.0553 19.7055 15.2378C19.8497 15.4204 19.9258 15.6474 19.9206 15.88L19.9406 19Z'
                                fill='#6D6D6D'
                              />
                            </svg>
                          </span>
                          +880 1314 0000
                        </span>
                      </div>
                    </div>
                    <div className='custodash-card-order'>
                      <Link className='cust-card-link' href='/'>
                        Order Returns
                      </Link>
                      <Link className='cust-card-link' href='/'>
                        Cancelations
                      </Link>
                      <Link className='cust-card-link' href='/'>
                        My Reviews
                      </Link>
                      <Link href='/'>My Cart</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                <div className='individiualsec-info-card-div'>
                  <div className='individiual-Personalinfo-tags '>
                    <span className='defaut-tags'>Default Address</span>
                    <div className='edit-info-text'>
                      <Link href='/'>Edit</Link>
                    </div>
                  </div>

                  <div className='tags-div'>
                    <h6 className='tags-def'>Ratul Ahmed</h6>
                    <p className='texts-sec-card'>Bheramara Bazar</p>
                    <p className='texts-sec-card'>
                      Khulna, Kushita, Bangladesh
                    </p>
                    <p className='texts-sec-card'>(+880) 171 2033 000</p>
                  </div>
                  {/* <div className='custodash-card-order'>
                      <Link href='/'>Order Returns</Link>
                      <Link href='/'>Cancelations</Link>
                      <Link href='/'>My Reviews</Link>
                      <Link href='/'>My Cart</Link>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='table-head-tags-div'>
            <span className='ur-order-tags'>Your Order</span>

            <button className='track-btn'>Track Your Order </button>
          </div>

          <div>
            <table className='table table-borderless table-sm '>
              <thead className='thead-tabl-customer-dash'>
                <tr>
                  <th scope='col'>Order ID</th>
                  <th scope='col'>Customer</th>
                  <th scope='col'>Order</th>
                  <th scope='col'>Delivery Date</th>
                  <th scope='col'>Payments Status</th>
                  <th scope='col'>Total</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  {/* <th scope='row'>AKN12508</th> */}

                  <td>AKN12508</td>
                  <td>IU Bhuiyan</td>
                  <td className='d-flex gap-3'>
                    <span>
                      <img className='toy-img' src={toyicon.src} alt='' />
                    </span>
                    Nike Aiforce Shoes
                  </td>
                  <td>09.07.2022</td>
                  <td>Paid</td>
                  <td>230</td>
                </tr>
                <tr>
                  {/* <th scope='row'>AKN12508</th> */}

                  <td>AKN12508</td>
                  <td>IU Bhuiyan</td>
                  <td className='d-flex gap-3'>
                    <span>
                      <img className='toy-img' src={toyicon.src} alt='' />
                    </span>
                    Nike Aiforce Shoes
                  </td>
                  <td>09.07.2022</td>
                  <td>Paid</td>
                  <td>230</td>
                </tr>
                <tr>
                  {/* <th scope='row'>AKN12508</th> */}

                  <td>AKN12508</td>
                  <td>IU Bhuiyan</td>
                  <td className='d-flex gap-3'>
                    <span>
                      <img className='toy-img' src={toyicon.src} alt='' />
                    </span>
                    Nike Aiforce Shoes
                  </td>
                  <td>09.07.2022</td>
                  <td>Paid</td>
                  <td>230</td>
                </tr>
                <tr>
                  {/* <th scope='row'>AKN12508</th> */}

                  <td>AKN12508</td>
                  <td>IU Bhuiyan</td>
                  <td className='d-flex gap-3'>
                    <span>
                      <img className='toy-img' src={toyicon.src} alt='' />
                    </span>
                    Nike Aiforce Shoes
                  </td>
                  <td>09.07.2022</td>
                  <td>Paid</td>
                  <td>230</td>
                </tr>
                {/* <tr>
                  <th scope='row'>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td colspan='2'>Larry the Bird</td>
                  <td>@twitter</td>
                </tr> */}
              </tbody>
            </table>
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
