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

      <div class="entry-content" style={{margin:'20px 100px'}}>
        <h1 class="wp-block-heading">Terms And Condition</h1>

        <h4 class="wp-block-heading">INTRODUCTION</h4>

        <p>
          ShiningVouch(the “Site”) welcomes you to one of the largest vouchers
          ecommerce portal. These terms and conditions (“Terms and Conditions”)
          are applicable not only to the Site, but all of its subsidiaries,
          divisions, and affiliate operated websites which reference these Terms
          and Conditions.
        </p>

        <p>
          Your access to the Site is subject to your understanding and
          acceptance of following Terms and Conditions. However, you are
          requested to discontinue the use of the Site if you do not accept the
          Terms and Conditions.
        </p>

        <p>
          The Site reserves the right to add, remove, change, or modify any
          clause of the Terms and Conditions anytime without providing any prior
          notice. The changes, modification, removal and addition of any
          information on the Site will be considered effective from the time it
          is posted. Users are advised to regularly check the Terms and
          Conditions of the Site to stay updated. If you continue to use the
          Site even after changes, then it will constitute as your acceptance of
          revised/changed Terms and Conditions.
        </p>

        <h4 class="wp-block-heading">USE OF THE SITE</h4>

        <p>
          By using this Site, you confirm that you are either at-least 18 years
          old or accessing the Site under the supervision of an adult (your
          parent or legal guardian). The Site offers you a non-revocable license
          to use it, subject to your acceptance and understanding of the Terms
          and Conditions for shopping items offered/available on the Site for
          sale. We prohibit you to use this Site for commercial purposes or on
          behalf of any third party, unless express permission is obtained in
          advanced by the Site. Violation of any Terms and Conditions will
          result in immediate revocation of your license provided to you, for
          which no prior notice will be provided.
        </p>

        <p>
          We have provided content on the Site for your information only. The
          representation of the product expressed on this Site are provided by
          vendors, and not by the Site, and visual representation in some cases
          may slightly vary with the actual product visual due to the nature of
          photography of the product. Moreover, expressions and opinions
          available on this site are individual postings and may not necessarily
          reflect the opinion of the Site.
        </p>

        <p>
          There are some services and associated features available on this
          Site, which may require subscription or registration. If you want to
          subscribe or register for those services or associated features, you
          agree to provide correct and latest information about yourself, and
          you are required to notify us in case of any changes in the
          information provided. The users of the Site are required to keep their
          account details including usernames and passwords to themselves, and
          must not share it with anyone else. All the activities from your
          account will be your responsibility. In case of unauthorized access of
          your account, you are obligated to notify us immediately. The Site
          will bear no responsibility and cannot be held liable (directly or
          indirectly) for any losses incurred due to unauthorized activity in
          your account, OR if you failed to comply with the provisions of this
          section.
        </p>

        <p>
          When you register with the Site, you agree to be notified through
          emails for new promotions and offer available on the Site. However, if
          you do not wish to receive emails about new promotions and offer, you
          can easily unsubscribe by clicking on the link to unsubscribe provided
          at the bottom of any such email.
        </p>

        <h4 class="wp-block-heading">USER SUBMISSIONS</h4>

        <p>
          Everything that you provide us or submit on the Site will become our
          exclusive property, including but not limited to reviews, comments,
          suggestions, and questions (collectively called “Submissions”). All
          Submissions are non-returnable, and your claim to them will not be
          entertained. The Site reserves the right to change, edit, delete or
          modify any Submissions, but is not obligated to do so. You are
          obligated to provide us correct name, address, email address and other
          details. Moreover, with your Submission you grant us the right to use
          your name/username that you have provided. You agree that you will
          not, under any circumstances, attempt to mislead us using fake details
          or by pretending to be someone else
        </p>

        <h4 class="wp-block-heading">ORDER ACCEPTANCE AND PRICING</h4>

        <p>
          You should note that in some instances, the Site may not be able to
          process your order for various reasons. Therefore, the Site reserves
          the right to cancel or refuse any order, any time, and for any reason.
          Moreover, your order acceptance is subject to verification of your
          personal and credit card details. At times, before order acceptance,
          you may be asked to provide additional information to verify your
          identity including but not limited to your phone number and address
        </p>

        <p>
          As a measure to prevent credit and debit card fraud, the Site reserves
          the right to verify your personal information that you have provided
          or obtain validation of your payment details before shipping the
          product. The Site may ask you to verify your account through identity
          card, banking details or your place of residence. In case, you failed
          to provide the required verification document/information within two
          (2) days after receiving respective notification, your order will be
          cancelled automatically. The Site can also cancel any order directly
          if we suspect there is a risk of credit or debit card fraud.
        </p>

        <p>
          This Site utilizes all the resources at its disposal to provide
          accurate and authentic information about product prices, however, we
          cannot rule out the possibility of errors in pricing information. In
          case, when a product price is inaccurately displayed on the Site, we
          reserve the right to cancel or refuse the order. However, the Site (at
          its sole discretion) may contact you for further instructions about
          the order if the displayed product price is inaccurate, or we may
          cancel your order and notify you about such cancellation, regardless
          if your order has been confirmed and your credit card has been charged
        </p>

        <h4 class="wp-block-heading">TRADEMARKS AND COPYRIGHTS</h4>

        <p>
          On this Site, all intellectual property (registered or unregistered)
          shall remain our property, which is protected under Pakistan’s
          copyright laws and international conventions. The intellectual
          property of the Site include but without limitations graphics,
          software, source code(s), designs, layouts, logos, videos, photos,
          information content, music, audios, and all software compilations. All
          rights are reserved.
        </p>

        <h4 class="wp-block-heading">LIMITATION OF LIABILITY</h4>

        <p>
          This Site provides you all products, content, information, materials,
          items and other services on “as is” and “as available” basis, unless
          otherwise specified in writing. We do not make any warranty or
          representation, implied or express, about products, content,
          information, materials, items and other services, unless otherwise
          specified in writing. If you continue to use this Site, you expressly
          agree that you are using this Site at your own risk.
        </p>

        <h4 class="wp-block-heading">ELECTRONIC COMMUNICATIONS</h4>

        <p>
          Electronic communications referred to any mode of communication that
          uses electronic means including feature phones, smart phones,
          computers, tablets and any other electronic device. When you send us
          an email, a text, or submit a request form, you are communicating with
          the Site electronically. By communicating with us, you also grant us
          the right to communicate with you electronically. You also give your
          consent that all agreements, notices, disclosures, and other
          communications provided to you by the Site satisfy all legal
          requirements that such communications be in writing
        </p>

        <h4 class="wp-block-heading">APPLICABLE LAW AND JURISDICTION</h4>

        <p>
          The laws of Pakistan shall govern the Terms and Conditions of using
          this Site, and shall be interpreted accordingly. Should you choose to
          continue this Site, you accept the jurisdiction of Pakistan’s court
          and laws while waving any objection on the basis of venue.
        </p>

        <h4 class="wp-block-heading">TERMINATION</h4>

        <p>
          The Site reserves the right to terminate Terms and Conditions
          immediately in addition to any other legal or equitable remedies. The
          Site can also revoke your license as well as the rights granted in
          Terms and Conditions. In either case, you agree to discontinue the use
          of this Site, and acknowledge the rights of the Site to revoke all
          account details (including but not limited to username, password,
          address, and financial details among others) and deny you complete or
          partial access. However, the termination of Terms and Conditions shall
          not affect the respective rights and obligations of the parties i.e.
          payment obligations and others, arising before the date of
          termination. Moreover, you agree that the Site cannot be held liable
          to you or to any other party (person) for revocation of license,
          restricted access, and termination. In case, you disagree with our
          Terms and Conditions, procedures, operation practices, rules and
          regulations, then you should discontinue using this Site immediately.
        </p>

        <p></p>

        <p></p>
      </div>
     </CommonLayout>
    </>
  );
};

export default AboutUs;
