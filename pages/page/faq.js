import React, { useState } from "react";
import CommonLayout from "../../components/shop/common-layout";
import {
  Collapse,
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

const faqData = [
  {
    qus: "What are digital vouchers?",
    ans:
      "Digital vouchers, also known as e-vouchers or electronic vouchers, are virtual forms of traditional paper vouchers. They provide you with a convenient and instant way to purchase, gift, or redeem products, services, or experiences from various brands and sellers.",
  },
  {
    qus: "How do I purchase a digital voucher?",
    ans: "Purchasing a digital voucher is simple. Just browse our selection, choose the voucher you want, add it to your cart, and proceed to checkout. Once your payment is processed, you'll receive the digital voucher in your email inbox or account on our platform."},
  {
    qus: "How do I redeem a digital voucher?",
    ans: "Redeeming a digital voucher depends on the type of voucher. In most cases, you'll receive instructions along with the voucher on how to redeem it. This might involve entering a unique code during checkout on the seller's website."
  },
  {
    qus: "Can I send a digital voucher as a gift?",
    ans: "Absolutely! Digital vouchers make fantastic gifts. During the purchase process, you can often choose to send the voucher directly to the recipient's email address. You can also include a personalized message to make it even more special.    "
  },
  {
    qus: "Is there an expiration date for digital vouchers?",
    ans: "Yes, digital vouchers typically have an expiration date. This date is mentioned on the voucher itself or in the terms and conditions. Make sure to check the validity period before purchasing or gifting a voucher."
  },
  {
    qus: "What if the cost of the item/service I want is less than the voucher value?",
    ans: "In most cases, if the item or service you want is priced lower than the value of the voucher, you won't lose the remaining balance. Some sellers might offer a credit to use for future purchases, while others could provide a new voucher with the remaining balance."
  },
  {
    qus: "Can I return or exchange a digital voucher?",
    ans: "Digital vouchers are usually non-refundable and non-transferable. Be sure to read the terms and conditions associated with each voucher before purchasing. If you face any issues with a voucher, you can contact our customer support team for assistance."
  },
  {
    qus: "Are digital vouchers secure?",
    ans: "Yes, digital vouchers are secure. We work with reputable brands and sellers to ensure that the vouchers you purchase are legitimate. However, it's essential to be cautious of phishing scams or unauthorized sellers. Stick to trusted platforms like ours to ensure a safe shopping experience."
  },
  {
    qus: "What happens if I accidentally delete the voucher email?",
    ans: "Don't worry! If you accidentally delete the email containing your digital voucher, you can often request us on support@shinningvouch.com with the order id and confirming some secret answers confirming the authenticity of being an actual buryer,  Your purchased vouchers are usually accessible in your order history and we can sent it via email."
  },
  {
    qus: "Can I use a digital voucher more than once?",
    ans: "This depends on the specific voucher and the terms set by the seller. Some vouchers can be used multiple times until their full value is exhausted, while others might be for a single-use only. Check the terms and conditions provided with the voucher for clarification."
  }
];

const FaqList = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Card>
      <CardHeader id="headingOne">
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            type="button"
            onClick={toggle}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {faq.qus}
          </button>
        </h5>
      </CardHeader>
      <Collapse
        isOpen={isOpen}
        id="collapseOne"
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body">
          <p>{faq.ans}</p>
        </div>
      </Collapse>
    </Card>
  );
};

const FaqPage = () => {
  return (
    <>
      <CommonLayout parent="home" title="faq">
        <section className="faq-section section-b-space">
          <Container>
            <Row>
              <Col sm="12">
                <div
                  className="accordion theme-accordion"
                  id="accordionExample"
                >
                  {faqData.map((faq, i) => (
                    <FaqList faq={faq} key={i} />
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </CommonLayout>
    </>
  );
};

export default FaqPage;
