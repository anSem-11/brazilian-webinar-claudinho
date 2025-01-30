import './brazilian-webinar-claudinho-register-button.scss';

import { UiButton } from '@react-ui/button/ui-button.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

const bem = buildBem('brazilian-webinar-claudinho-register-button');


type BrazilianWebinarClaudinhoRegisterButtonProps = {
  children: React.ReactNode;
  handleClick?: () => void;

};

export default function BrazilianWebinarClaudinhoRegisterButton(
  {
    handleClick,
    children,
  }: BrazilianWebinarClaudinhoRegisterButtonProps,
): JSX.Element {
  return (
    <UiButton
      wide
      className={bem('wrapper')}
      handleClick={handleClick}
      size="l"
    >
      {children}
    </UiButton>
  );
}
