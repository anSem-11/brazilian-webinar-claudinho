import './brazilian-webinar-claudinho.scss';

import { PromoMain } from '@react-root/features/promo-main/promo-main.component';
import FooterLanding from '@react-root/ui/footer-promo/footer-landing/footer-landing.component';
import HeaderLanding from '@react-root/ui/header-landing/header-landing.component';

import { useRef } from 'react';

import BrazilianWebinarClaudinhoAbout from './components/brazilian-webinar-claudinho-about/brazilian-webinar-claudinho-about.component';
import BrazilianWebinarClaudinhoBenefits from './components/brazilian-webinar-claudinho-benefits/brazilian-webinar-claudinho-benefits.component';
import BrazilianWebinarClaudinhoFaq from './components/brazilian-webinar-claudinho-faq/brazilian-webinar-claudinho-faq.component';
import BrazilianWebinarClaudinhoForm from './components/brazilian-webinar-claudinho-form/brazilian-webinar-claudinho-form.component';
import BrazilianWebinarClaudinhoHero from './components/brazilian-webinar-claudinho-hero/brazilian-webinar-claudinho-hero.component';
import BrazilianWebinarClaudinhoVideo from './components/brazilian-webinar-claudinho-video/brazilian-webinar-claudinho-video.component';


export default function BrazilianWebinarClaudinhoShared(): JSX.Element {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PromoMain>
      <HeaderLanding isLoginFirst />
      <BrazilianWebinarClaudinhoHero onRegisterClick={scrollToForm} />
      <BrazilianWebinarClaudinhoVideo />
      <BrazilianWebinarClaudinhoAbout onRegisterClick={scrollToForm} />
      <BrazilianWebinarClaudinhoBenefits />
      <BrazilianWebinarClaudinhoFaq />
      <div ref={formRef}>
        <BrazilianWebinarClaudinhoForm />
      </div>
      <FooterLanding
        estYearIcon="f"
        styleFooterClass="footer-landing__brazilian-webinar-claudinho"
      />
    </PromoMain>
  );
}
