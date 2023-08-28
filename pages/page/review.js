import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import two from "../../public/assets/images/2.jpg";
import avtar from "../../public/assets/images/avtar.jpg";
import twenty from "../../public/assets/images/20.jpg";
import { Container, Row, Col, Media } from "reactstrap";

const ReviewContent = [
  {
    img: "/assets/images/avtar.jpg",
    name: "Mark Jecno",
    datetime: "12 Jannuary 2022 at 1:30AM",
    review:
      "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
    likes: "14",
    dislikes: "2",
  },
  {
    img: "/assets/images/2.jpg",
    name: "Mark Jecno",
    datetime: "12 Jannuary 2022 at 1:30AM",
    review:
      "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
    likes: "14",
    dislikes: "2",
  },
  {
    img: "/assets/images/20.jpg",
    name: "Mark Jecno",
    datetime: "12 Jannuary 2022 at 1:30AM",
    review:
      "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
    likes: "14",
    dislikes: "2",
  },
  {
    img: "/assets/images/avtar.jpg",
    name: "Mark Jecno",
    datetime: "12 Jannuary 2022 at 1:30AM",
    review:
      "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
    likes: "14",
    dislikes: "2",
  },
  {
    img: "/assets/images/2.jpg",
    name: "Mark Jecno",
    datetime: "12 Jannuary 2022 at 1:30AM",
    review:
      "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
    likes: "14",
    dislikes: "2",
  },
];

const MasterReview = ({ img, name, datetime, review, likes, dislikes }) => {
  return (
    <li>
      <div className="media">
        <Media src={img} alt="Generic placeholder image" />
        <div className="media-body">
          <h6>
            {name} <span>({datetime})</span>
          </h6>
          <p>{review}</p>
          <ul className="comnt-sec">
            <li>
              <a href="#">
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                <span>({likes})</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="unlike">
                  <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                  <span>({dislikes})</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

const Review = () => {
  return (
    <CommonLayout parent="home" title="Refund and Return Policy">
      {/* <section className="section-b-space blog-detail-page review-page">
        <Container>
          <Row>
            <Col sm="12">
              <ul className="comment-section">
                {ReviewContent.map((review, i) => {
                  return (
                    <MasterReview
                      key={i}
                      img={review.img}
                      name={review.name}
                      datetime={review.datetime}
                      review={review.review}
                      likes={review.likes}
                      dislikes={review.dislikes}
                    />
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </section> */}
      <div class="entry-content" style={{ margin: "20px 100px" }}>
        <p></p>

        <p></p>
        <h3>Overview</h3>
        <p></p>

        <p>
          Our refund and returns policy lasts 30 days. If 30 days have passed
          since your purchase, we can’t offer you a full refund or exchange.
        </p>

        <p>
          To be eligible for a return, your item must be unused and in the same
          condition that you received it. It must also be in the original
          packaging.
        </p>

        <p>
          Several types of goods are exempt from being returned. Perishable
          goods such as food, flowers, newspapers or magazines cannot be
          returned. We also do not accept products that are intimate or sanitary
          goods, hazardous materials, or flammable liquids or gases.
        </p>

        <p>Additional non-returnable items:</p>

        <ul>
          <li>Gift cards</li>

          <li>Downloadable software products</li>

          <li>Some health and personal care items</li>
        </ul>

        <p></p>
        <h2>Refunds</h2>
        <p></p>

        <p>
          Once your return is received and inspected, we will send you an email
          to notify you that we have received your returned item. We will also
          notify you of the approval or rejection of your refund.
        </p>

        <p>
          If you are approved, then your refund will be processed, and a credit
          will automatically be applied to your credit card or original method
          of payment, within a certain amount of days.
        </p>

        <p>
          <b>Late or missing refunds</b>
        </p>

        <p>
          If you haven’t received a refund yet, first check your bank account
          again.
        </p>

        <p>
          Then contact your credit card company, it may take some time before
          your refund is officially posted.
        </p>

        <p>
          Next contact your bank. There is often some processing time before a
          refund is posted.
        </p>

        <p>
          If you’ve done all of this and you still have not received your refund
          yet, please contact us at support@shiningvouch.com.
        </p>

        <p>
          <b>Sale items</b>
        </p>

        <p>
          Only regular priced items may be refunded. Sale items cannot be
          refunded.
        </p>

        <p></p>

        <p></p>
        <h2>Gifts</h2>
        <p></p>

        <p>
          If the item was marked as a gift when purchased and shipped directly
          to you, you’ll receive a gift credit for the value of your return.
          Once the returned item is received, a gift certificate will be mailed
          to you.
        </p>

        <p>
          If the item wasn’t marked as a gift when purchased, or the gift giver
          had the order shipped to themselves to give to you later, we will send
          a refund to the gift giver and they will find out about your return.
        </p>

        <p></p>

        <p></p>
        <h2>Need help?</h2>
        <p></p>

        <p>
          Contact us at support@shiningvouch.com for questions related to refunds
          and returns.
        </p>
      </div>
    </CommonLayout>
  );
};

export default Review;
