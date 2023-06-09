import Head from '@/components/Head';
import TitleBlock from '@/components/TitleBlock';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import img1 from 'public/images/home/Event_Planning.jpg';
import Review from '@/components/Review';
import { REVIEW } from '@/utils/constants';

const FullWidthBtn = styled.div`
  width: 100%;
  border: 0;
  border-radius: 0;
  border-top: 1px solid var(--grey);
  border-bottom: 1px solid var(--grey);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
  margin: 80px 0;
  a {
    max-width: 410px;
    width: 100%;
  }
`;
const H2 = styled.h2`
  margin: 0 0 20px;
`;
const ServicesBlock = styled.section`
  padding-bottom: 30px;
  p {
    padding-bottom: 80px;
    max-width: 960px;
    width: 100%;
  }
`;
const ServicesContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 50px;
`;

const Card = styled.article`
  width: 100%;
  margin: auto 0;
  position: relative;
  > div,
  a {
    top: -50%;
    transform: translate(0, -50%);
    margin: 0 auto;
    width: 100%;
    max-width: 197px;
    cursor: pointer;
    :hover {
      scale: 1.1;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;
const AboutCard = styled(Card)`
  > div,
  a {
    max-width: 280px;
  }
`;
const AboutBlock = styled.section`
  display: flex;
  width: 100%;
  margin: 130px auto 80px;
  position: relative;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Forum';
    font-style: normal;
    font-weight: 400;
    font-size: 128px;
    line-height: 100%;
    color: var(--white);
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const AboutTextContainer = styled.section`
  background: var(--white-dark);
  padding-top: 80px;
  padding-bottom: 80px;
  > div {
    display: flex;
    justify-content: space-between;
    > article {
      flex: 0 0 50%;
      &:last-of-type {
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }
    }
    p {
      max-width: 456px;
      :not(:last-of-type) {
        padding-bottom: 30px;
      }
    }
  }
  img {
    width: 100%;
    max-width: 364px;
    height: auto;
  }
`;
const AboutCards = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 40px;
`;

const Methods = styled.section`
  display: flex;
  flex-direction: column;
  > article {
    padding: 30px 0;
    :nth-of-type(odd) {
      background-color: var(--white-dark);
      padding: 30px 0;
    }
  }
  h3 {
    display: flex;
  }
`;
const Dot = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  > span {
    content: '';
    width: 3px;
    height: 3px;
    background-color: var(--blue);
  }
`;

const CaseBlock = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 120px;
  padding-bottom: 30px;
  > div {
    display: flex;
    flex-direction: column;
    max-width: 490px;
    img {
      width: 100%;

      height: auto;
    }
    p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      text-transform: capitalize;
      text-align: center;
    }
  }
`;
const ReviewsBlock = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
`;

const GoogleLink = styled('div')`
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: var(--blue);
  text-align: center;
  a {
    color: var(--blue);
  }
`;

export default function Home() {
  return (
    <>
      <Head />
      {/* <Maintenance/>  */}
      <TitleBlock
        h1='EVENT PLANNING AND PRODUCTION COMPANY'
        img1='/images/main_picture.jpg'
        // img2='/images/newlyweds.webp'
        alt='newlyweds'
        text1='Welcome to Nexa Events, the leading event planning and production company located in Beverly Hills, CA. We specialize in creating extraordinary experiences that leave a lasting impression. With a meticulous attention to detail and a passion for innovation, our dedicated team brings together creativity, technology, and personalized service to make your vision a reality.'
        text2='Experience the Nexa Difference and let us elevate your events to new heights, creating magical and unforgettable moments that will be cherished for a lifetime!'
      />

      <FullWidthBtn>
        <Link href='/contact-us' className='primary-btn dark'>
          Book a free consultation
        </Link>
      </FullWidthBtn>

      <ServicesBlock className='page-width narrow'>
        <H2>
          {' '}
          Unleash Your Imagination: Discover Nexa Events Planning and Production
          Services
        </H2>
        <p>
          At Nexa Events, we offer a comprehensive range of event planning and
          production services to ensure that every aspect of your event is
          carefully planned and executed. Our team of experienced event planners
          and producers will work closely with you to bring your vision to life,
          handling every detail from conceptualization to execution. From
          elegant florals and custom invitations to event rentals and strategic
          marketing, we leave no detail unattended. Trust Nexa Events to curate
          an unforgettable experience, so you can enjoy a seamless and
          extraordinary event
        </p>
        <ServicesContainer>
          <Card>
            <Image src={img1} width={302} height={434} alt='Event_Planning' />
            <div>
              {' '}
              <div className='secondary-btn light'>Planning</div>
            </div>
          </Card>
          <Card>
            <Image
              src='/images/home/Event_Design.jpg'
              width={302}
              height={434}
              alt='Event_Design'
            />
            <div>
              <div className='secondary-btn light'>Design</div>
            </div>
          </Card>
          <Card>
            <Image
              src='/images/home/Floral_by_Nexa.jpg'
              width={302}
              height={434}
              alt='Floral_by_Nexa'
            />
            <div>
              <div className='secondary-btn light'>Florals</div>
            </div>
          </Card>
          <Card>
            <Image
              src='/images/home/Invitations_by_Nexa.jpg'
              width={302}
              height={434}
              alt='Invitations_by_Nexa'
            />
            <div>
              <div className='secondary-btn light'>Invitations</div>
            </div>
          </Card>
          <Card>
            <Image
              src='/images/home/Rentals_by_Nexa.jpg'
              width={302}
              height={434}
              alt='Rentals_by_Nexa'
            />
            <div>
              <div className='secondary-btn light'>Rentals</div>
            </div>
          </Card>
          <Card>
            <Image
              src='/images/home/Event_Marketing.jpg'
              width={302}
              height={434}
              alt='Event_Marketing'
            />
            <div>
              <div className='secondary-btn light'>Marketing</div>
            </div>
          </Card>
        </ServicesContainer>
      </ServicesBlock>
      <AboutBlock className='page-width'>
        <span>ABOUT US</span>
        <Image
          src='/images/home/about.jpg'
          width={1170}
          height={300}
          alt='About block'
        />
      </AboutBlock>
      <AboutTextContainer>
        <div className='page-width narrow'>
          <article>
            {' '}
            <H2>About Nexa Events</H2>
            <p>
              What sets Nexa Events apart from other event planning companies in
              Los Angeles is its unwavering commitment to innovation,
              technology, and personalized service. With 15+ years of
              experience, a deep understanding of the industry and a passion for
              creating unforgettable moments, we strive to transform ordinary
              events into something truly extraordinary. Whether you're
              envisioning a dream wedding, a milestone celebration, a
              high-profile PR event, a meaningful non-profit event, or a
              successful corporate party, our team is dedicated to turning your
              vision into a reality.
            </p>
            <p>
              Are you ready to turn your event vision into a remarkable reality?
              Take the first step by booking a free consultation with our team
              of experienced event planners today. We are dedicated to guiding
              you through the entire planning process, from understanding your
              specific preferences, goals, and budget to delivering personalized
              recommendations that perfectly align with your needs. With our
              unwavering expertise and passion for creating exceptional events,
              we guarantee that your occasion will be truly remarkable. Schedule
              your free consultation now and let Nexa Events transform your
              event dreams into an awe-inspiring experience.
            </p>
          </article>
          <article>
            <Image
              src='/images/home/about_2.jpg'
              alt='holiday'
              width='364'
              height='573'
            />
          </article>
        </div>
      </AboutTextContainer>
      <FullWidthBtn>
        <Link href='/contact-us' className='primary-btn dark'>
          Book a free consultation
        </Link>
      </FullWidthBtn>
      <AboutCards className='page-width narrow'>
        <AboutCard>
          <Image
            src='/images/home/about_weddings.jpg'
            alt='holiday'
            width='456'
            height='300'
          />
          <div>
            <div className='secondary-btn light'>Weddings</div>
          </div>
        </AboutCard>
        <AboutCard>
          <Image
            src='/images/home/about_private_events.jpg'
            alt='holiday'
            width='456'
            height='300'
          />
          <div>
            <div className='secondary-btn light'>Private Events</div>
          </div>
        </AboutCard>
        <AboutCard>
          <Image
            src='/images/home/about_non_profit.jpg'
            alt='holiday'
            width='456'
            height='300'
          />
          <div>
            <div className='secondary-btn light'>Non profit Events</div>
          </div>
        </AboutCard>
        <AboutCard>
          <Image
            src='/images/home/about_pr_events.jpg'
            alt='holiday'
            width='456'
            height='300'
          />
          <div>
            <div className='secondary-btn light'>PR events</div>
          </div>
        </AboutCard>
        <AboutCard>
          <Image
            src='/images/home/about_corporate_events.jpg'
            alt='holiday'
            width='456'
            height='300'
          />
          <div>
            <div className='secondary-btn light'>Corporate Events</div>
          </div>
        </AboutCard>
        <AboutCard>
          <Image
            src='/images/home/about_networking.jpg'
            alt='holiday'
            width='456'
            height='300'
          />
          <div>
            <div className='secondary-btn light'>Conferences/Networking</div>
          </div>
        </AboutCard>
      </AboutCards>
      <Methods>
        <article>
          <div className='page-width narrow'>
            <h3>
              <Dot>
                <span />
              </Dot>
              Nexa Approach
            </h3>
            <p>
            At Nexa Events, our approach to event planning and production is guided by our unwavering commitment to innovation, creativity, and personalized service. We believe that every event should be a unique reflection of our clients' vision, and we go above and beyond to bring that vision to life. We start with a deep understanding of our clients' needs, preferences, and goals. We take the time to listen and collaborate closely with you, ensuring that we capture your vision and translate it into an extraordinary event experience. When you choose Nexa Events, you can expect a partnership built on trust, creativity, and a shared commitment to excellence.
            </p>
          </div>
        </article>
        <article>
          <div className='page-width narrow'>
            <h3>
              <Dot>
                <span />
              </Dot>
              Nexa Technology
            </h3>
            <p>
            Nexa Events leverages its proprietary software to bring a new level of efficiency and customization to event planning and production, ensuring that every detail is carefully managed and every moment is unforgettable. Our advanced software tools empower our team to streamline the planning process, allowing for seamless collaboration, precise organization, and real-time updates. With features such as customizable event timelines, guest management tools, event mapping and comprehensive reporting, our proprietary software enhances our ability to create personalized and flawless events. By leveraging the power of technology, we maximize efficiency, optimize resources, and deliver exceptional experiences that exceed our clients' expectations.
            </p>
          </div>
        </article>
        <article>
          <div className='page-width narrow'>
            <h3>
              <Dot>
                <span />
              </Dot>
              Nexa Showcases
            </h3>
            <p>
            Nexa Events showcases a diverse portfolio of extraordinary events that exemplify our commitment to creativity, innovation, and flawless execution. Each event in our portfolio is carefully curated and showcases our meticulous attention to detail, unique design concepts, and seamless coordination. Through stunning visuals and captivating narratives, we invite you to explore our showcase and witness the transformative power of our events. From elegant and sophisticated affairs to bold and vibrant celebrations, Nexa Events consistently delivers unforgettable experiences that leave a lasting impression.
            </p>
          </div>
        </article>
      </Methods>
      <CaseBlock className='page-width narrow'>
        <div>
          <Image
            src='/images/home/showcase_wedding.jpg'
            alt='showcase_wedding'
            width='479'
            height='337'
          />

          <h4>Wedding at Bel Air Bay Club</h4>
        </div>
        <div>
          <Image
            src='/images/home/showcase_corporate.jpg'
            alt='showcase_corporate'
            width='479'
            height='337'
          />

          <h4>Country Style Corporate Party</h4>
        </div>
      </CaseBlock>
      <FullWidthBtn>
        <Link href='/contact-us' className='primary-btn light'>
          view showcases
        </Link>
      </FullWidthBtn>
      <ReviewsBlock className='page-width narrow'>
        <H2>Nexa Events Reviews</H2>
        <Review reviews={REVIEW} />
        <GoogleLink>
          <span>Review form </span>
          <a
            href='https://goo.gl/maps/t2joTCJmVmZngWZC9'
            target='_blank'
            rel='noreferrer'
          >
            Google.com
          </a>
        </GoogleLink>
      </ReviewsBlock>
    </>
  );
}
