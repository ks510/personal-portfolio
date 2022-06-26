import { FC, ReactElement } from 'react';
import Footer from '@components/Footer';


interface Props {
  children: ReactElement;
}

const Layout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="text-grey-900 dark:text-grey-50">
      <main className="min-h-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
