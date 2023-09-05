import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";
import aboutus from "../../public/assets/images/about/about-us.jpg";
import avtar from "../../public/assets/images/avtar.jpg";
import two from "../../public/assets/images/2.jpg";
import Slider from "react-slick";
import { Slider2, Slider4 } from "../../services/script";
import team1 from "../../public/assets/images/team/1.jpg";
import team2 from "../../public/assets/images/team/2.jpg";
import team3 from "../../public/assets/images/team/3.jpg";
import team4 from "../../public/assets/images/team/4.jpg";
import ServiceLayout from "../../components/common/Service/service1.js";

const TeamData = [
  {
    img: "/assets/images/team/1.jpg",
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
  {
    img: "/assets/images/team/2.jpg",
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
  {
    img: "/assets/images/team/3.jpg",
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
  {
    img: "/assets/images/team/4.jpg",
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
  {
    img: "/assets/images/team/1.jpg",
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
];

const Team = ({ img, name, post }) => {
  return (
    <div>
      <div>
        <Media src={img} className="img-fluid blur-up lazyload bg-img" alt="" />
      </div>
      <h4>{name}</h4>
      <h6>{post}</h6>
    </div>
  );
};

const TeamDetailData = [
  {
    img: "/assets/images/avtar.jpg",
    name: "mark jenco",
    post: "designer",
    about:
      "you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
  },
  {
    img: "/assets/images/2.jpg",
    name: "mark jenco",
    post: "designer",
    about:
      "you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
  },
  {
    img: "/assets/images/avtar.jpg",
    name: "mark jenco",
    post: "designer",
    about:
      "you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
  },
  {
    img: "/assets/images/avtar.jpg",
    name: "mark jenco",
    post: "designer",
    about:
      "you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
  },
  {
    img: "/assets/images/avtar.jpg",
    name: "mark jenco",
    post: "designer",
    about:
      "you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
  },
  {
    img: "/assets/images/avtar.jpg",
    name: "mark jenco",
    post: "designer",
    about:
      "you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
  },
];

const TeamDetail = ({ img, name, post, about }) => {
  return (
    <div>
      <div className="media">
        <div className="text-center">
          <Media src={img} alt="#" />
          <h5>{name}</h5>
          <h6>{post}</h6>
        </div>
        <div className="media-body">
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
};
const AboutUs = () => {
  return (
    // <>
    //   <CommonLayout parent="home" title="About-us">
    //     {/* // <!-- about section start --> */}
    //     <section className="about-page section-b-space">
    //       <Container>
    //         <Row>
    //           <Col lg="12">
    //             <div className="banner-section">
    //               <Media
    //                 src={aboutus.src}
    //                 className="img-fluid blur-up lazyload"
    //                 alt=""
    //               />
    //             </div>
    //           </Col>
    //           <Col sm="12">
    //             <h4>
    //               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    //               accusantium doloremque laudantium
    //             </h4>
    //             <p>
    //               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    //               accusantium doloremque laudantium,
    //             </p>
    //             <p>
    //               On the other hand, we denounce with righteous indignation and
    //               dislike men who are so beguiled and demoralized by the charms
    //               of pleasure of the moment, so blinded by desire, that they
    //               cannot foresee the pain and trouble that are bound to ensue;
    //               and equal blame belongs to those who fail in their duty
    //               through weakness of will, which is the same as saying through
    //               shrinking from toil and pain. These cases are perfectly simple
    //               and easy to distinguish. In a free hour, when our power of
    //               choice is untrammelled and when nothing prevents our being
    //               able to do what we like best, every pleasure is to be welcomed
    //               and every pain avoided. But in certain circumstances and owing
    //               to the claims of duty or the obligations of business it will
    //               frequently occur that pleasures have to be repudiated and
    //               annoyances accepted. The wise man therefore always holds in
    //               these matters to this principle of selection: he rejects
    //               pleasures to secure other greater pleasures, or else he
    //               endures pains to avoid worse pains.
    //             </p>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </section>

    //     <section className="testimonial small-section">
    //       <Container>
    //         <Row>
    //           <Col sm="12">
    //             <Slider
    //               {...Slider2}
    //               className="slide-2 testimonial-slider no-arrow"
    //             >
    //               {TeamDetailData.map((data, i) => {
    //                 return (
    //                   <TeamDetail
    //                     key={i}
    //                     img={data.img}
    //                     name={data.name}
    //                     post={data.post}
    //                     about={data.about}
    //                   />
    //                 );
    //               })}
    //             </Slider>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </section>
    //     <section id="team" className="team section-b-space ratio_asos">
    //       <Container>
    //         <Row>
    //           <Col sm="12">
    //             <h2>Our Team</h2>
    //             <Slider className="team-4" {...Slider4}>
    //               {TeamData.map((data, i) => {
    //                 return (
    //                   <Team
    //                     key={i}
    //                     img={data.img}
    //                     name={data.name}
    //                     post={data.post}
    //                   />
    //                 );
    //               })}
    //             </Slider>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </section>

    //     <div className="section-b-space">
    //       <ServiceLayout
    //         sectionClass={"service border-section small-section"}
    //       />
    //     </div>
    //   </CommonLayout>
    // </>
    <>
      <CommonLayout parent="home" title="Terms and Conditions">
        <div class="entry-content" style={{ margin: "20px 100px" }}>
          <h1 class="wp-block-heading">About us</h1>
          <p style={{lineHeight:2,fontSize:'18px'}}>
            Welcome to Shinning Vouch, your ultimate destination for online
            digital vouchers and a vibrant marketplace connecting buyers and
            sellers! With a passion for convenience and a commitment to
            enhancing your online shopping experience, we have curated a
            platform that brings you the best of both worlds. 
            </p>
            <h3>

            Who We Are
            </h3>
            <p style={{lineHeight:2,fontSize:'18px'}}>At Shinning Vouch, we are more than just a marketplace; we are a
            community of sellers and shoppers brought together by the love for
            great deals and seamless transactions. Our journey began with the
            vision to create a one-stop solution for all your digital voucher
            needs. Whether you're looking to gift someone a memorable experience
            or seeking to treat yourself, our extensive range of digital
            vouchers has got you covered. </p>
            <h3>

            What We Offer
            </h3>
            <p style={{lineHeight:2,fontSize:'18px'}}> Our platform hosts an
            impressive collection of digital vouchers spanning various
            categories. From e-commerce giants to niche service providers, we
            collaborate with reputable sellers to offer you a diverse selection
            of options. Indulge in a gaming and entertainment platforms of
            mostly all brands– all at your fingertips. 
            </p>
            <h3>

            Why Choose Us
            </h3>
            <p style={{lineHeight:2,fontSize:'18px'}}>
            Wide Selection: Our marketplace boasts an extensive array of digital
            vouchers, ensuring there's something for everyone. No matter your
            preferences, you'll find the perfect voucher to suit your needs.
            </p>
            <h3>

            Trust and Reliability
            </h3>
            <p style={{lineHeight:2,fontSize:'18px'}}>
            We partner with trusted brands and sellers to
            ensure that you receive authentic vouchers that can be redeemed
            without any hassle. Your satisfaction and security are our top
            priorities. 
            </p>
            <h3>

            User-Friendly Experience
            </h3>
            <p style={{lineHeight:2,fontSize:'18px'}}>
             Our user-friendly interface is
            designed to make your shopping experience as smooth as possible.
            Easily browse through categories, compare options, and make secure
            payments with just a few clicks. 
            </p>
            <h3>

            Instant Access
            </h3>
            <p style={{lineHeight:2,fontSize:'18px'}}>
            Say goodbye to
            waiting for physical delivery. With digital vouchers, you gain
            instant access to your chosen experience or product, making
            last-minute gifts and spontaneous indulgences a breeze. 
            </p>
            <h3>

            Community
            and Feedback
            </h3>
            <p style={{lineHeight:2,fontSize:'18px'}}>
            Join our growing community of shoppers and sellers.
            Your feedback matters to us, and it helps us improve our offerings
            and services continually. 
            </p>
            <h3>

            How It Works
            </h3>
            <p style={{lineHeight:2,fontSize:'18px'}}>
            Browse: Explore our
            extensive selection of digital vouchers across categories. Choose:
            Select the voucher that aligns with your interests or the perfect
            gift for someone special. 
           Purchase: 
            Complete your purchase securely
            through our reliable payment gateway. Redeem: Receive your digital
            voucher instantly via email and follow the instructions to redeem
            it. Enjoy: Indulge in your chosen experience or shop for your
            favorite products hassle-free. 
            </p>
            <h3>

            Get In Touch
            </h3>
            <p style={{lineHeight:2,fontSize:'18px'}}>
            Have a question,
            suggestion, or need assistance? Our dedicated customer support team
            is here to help. Feel free to reach out via email or phone, and
            we'll be more than happy to assist you.
          </p>
        </div>
      </CommonLayout>
    </>
  );
};

export default AboutUs;
